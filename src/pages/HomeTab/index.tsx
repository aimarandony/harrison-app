import React, { useEffect, useState } from "react";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
} from "@ionic/react";

import { bed } from "ionicons/icons";
import { getRooms } from "../../services/HabitacionService";

const HomeTab: React.FC = () => {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    getRooms().then(setRooms);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        {rooms.map((data) => (
          <IonCard key={data.id}>
            <IonImg src={data.imagen}></IonImg>
            <IonCardHeader>
              <IonCardSubtitle>S/ {data.tipoHabitacion.precio}.00</IonCardSubtitle>
              <IonCardTitle>{data.nombre} - {data.descripcion}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{padding: '0 0 10px 0'}}>
              <IonItem>
                <IonIcon icon={bed} slot="start" style={{marginRight: '6px'}}/>{data.tipoHabitacion.nroCamas}
                <IonButton slot="end">
                  Reservar
                </IonButton>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
