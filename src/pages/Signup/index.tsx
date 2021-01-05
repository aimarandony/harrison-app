import React from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonThumbnail,
} from "@ionic/react";

import LogoMin from "./../../img/logo.min.svg";
import { useHistory } from "react-router";

const Signup: React.FC = () => {
  const history = useHistory();

  const handleRegister = () => {
      
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <div className="content-welcome">
          <IonThumbnail style={{ marginLeft: "auto", marginRight: "auto" }}>
            <img src={LogoMin} alt="Logo" style={{ borderRadius: "10px" }} />
          </IonThumbnail>
          <div>
            <h1>Formulario de Registro</h1>
            <IonGrid>
            <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput
                      type="email"
                      placeholder="Ingrese su nombre"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Apellido</IonLabel>
                    <IonInput
                      type="email"
                      placeholder="Ingrese su apellido"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Correo</IonLabel>
                    <IonInput
                      type="email"
                      placeholder="Ingrese su correo"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput
                      type="password"
                      placeholder="Ingrese su contraseña"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div>
            <IonButton expand="block" onClick={handleRegister}>Registrarse</IonButton>
            <IonButton
              expand="block"
              color="light"
              onClick={() => history.goBack()}
            >
              Regresar
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
