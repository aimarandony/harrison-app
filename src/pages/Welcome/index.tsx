import { IonButton, IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

import "./Welcome.css";

const Welcome = () => {

    const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div className="content-welcome">
          <div>
            <h1>Bienvenido !!</h1>
            <p>
              Encuentra las mejores habitaciones al mejor precio en nuestro
              Hotel Harrison, disfrute de la experiencia.
            </p>
          </div>
          <div>
            <IonButton expand="block" onClick={() => history.push('/home')}>
              Ver Habitaciones
            </IonButton>
            <IonButton expand="block" color="light" onClick={() => history.push('/login')}>
              Iniciar Sesión
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
