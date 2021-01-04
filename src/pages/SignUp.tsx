import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { personCircle } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleRegister = () => {
    if (!nombre) {
      setMessage("Ingrese un nombre.");
      setIserror(true);
      return;
    }
    if (!apellido) {
      setMessage("Ingrese un apellido.");
      setIserror(true);
      return;
    }
    if (!correo) {
      setMessage("Ingrese un correo.");
      setIserror(true);
      return;
    }
    if (!password) {
      setMessage("Ingrese una contraseña.");
      setIserror(true);
      return;
    }

    const loginData = {
      nombre,
      apellido,
      correo,
      password,
    };

    const api = axios.create({
      baseURL: `https://hotel-harrison-backend.herokuapp.com/`,
    });
    api
      .post("/huespedes", loginData)
      .then((res) => {
        console.log(res);
        history.push("/dashboard");
        setNombre("");
        setApellido("");
        setCorreo("");
        setPassword("");
      })
      .catch((error) => {
        setMessage("Ocurrió un error, inténtelo de nuevo.");
        setIserror(true);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: "70px", color: "#1368fb" }}
                icon={personCircle}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Nombre</IonLabel>
                <IonInput
                  type="text"
                  value={nombre}
                  onIonChange={(e) => setNombre(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Apellido</IonLabel>
                <IonInput
                  type="text"
                  value={apellido}
                  onIonChange={(e) => setApellido(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Correo</IonLabel>
                <IonInput
                  type="email"
                  value={correo}
                  onIonChange={(e) => setCorreo(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleRegister}>
                Registrar
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                fill="outline"
                expand="block"
                onClick={() => history.push("/login")}
              >
                Regresar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
