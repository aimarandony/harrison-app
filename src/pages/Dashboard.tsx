import {
  IonAlert,
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import axios from "axios";
import { logOut, logOutOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Dashboard: React.FC = () => {
    const history = useHistory();
  const [habitaciones, setHabitaciones] = useState<any[]>([]);
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const api = axios.create({
    baseURL: `https://hotel-harrison-backend.herokuapp.com/`,
  });

  const listHabitaciones = () => {
    api
      .get("/habitaciones")
      .then((res) => {
        console.log(res);
        setHabitaciones(res.data);
      })
      .catch((error) => {
        setMessage("Ocurrió un error, inténtelo de nuevo.");
        setIserror(true);
      });
  };

  useEffect(() => {
    listHabitaciones(); // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Habitaciones</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/login')}>
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonAlert
          isOpen={iserror}
          onDidDismiss={() => setIserror(false)}
          cssClass="my-custom-class"
          header={"Error!"}
          message={message}
          buttons={["Dismiss"]}
        />
        <IonList>
          {habitaciones.map((data) => (
            <IonCard key={data.id}>
              <IonCardHeader>
                <img src={data.imagen} alt="Habitación" />
                <IonCardSubtitle>
                  {data.nivel.nombre} - N° Camas: {data.tipoHabitacion.nroCamas}
                </IonCardSubtitle>
                <IonCardTitle>
                  {data.descripcion} - {data.nombre}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
