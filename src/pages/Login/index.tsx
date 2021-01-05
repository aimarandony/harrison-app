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
import React from "react";
import { useHistory } from "react-router";

import LogoMin from "./../../img/logo.min.svg";

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
      
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <div className="content-welcome">
          <IonThumbnail style={{ marginLeft: "auto", marginRight: "auto" }}>
            <img src={LogoMin} alt="Logo" style={{ borderRadius: "10px" }} />
          </IonThumbnail>
          <div>
            <h1>Iniciar Sesión</h1>
            <IonGrid>
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
              <IonRow>
                <IonCol>
                  <p style={{ fontSize: "15px" }}>
                    ¿No tienes una cuenta?{" "}
                    <span
                      onClick={() => history.push(`/signup`)}
                      style={{                          
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#1368fb",
                      }}
                    >
                      Registrate Aquí!
                    </span>
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div>
            <IonButton expand="block" onClick={handleLogin}>Ingresar</IonButton>
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

export default Login;
