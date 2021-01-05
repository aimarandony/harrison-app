import React from "react";

/* Router */
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useHistory } from "react-router-dom";

/* Pages */
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeTab from "../pages/HomeTab";

import {
  home,
  location,
  person,
  search,
  reader,
  arrowBack,
  notifications,
  logOut,
} from "ionicons/icons";

const AppRouter: React.FC = () => {
  return (
    <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={notifications} />
            </IonButton>
            <IonButton>
              <IonIcon icon={logOut} />
            </IonButton>
          </IonButtons>
          <IonTitle>Hotel Harrison</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/welcome" component={Welcome} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/home" component={HomeTab} exact />
            <Route path="/" render={() => <Redirect to="/welcome" />} exact />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>
            <IonTabButton tab="book" href="/book">
              <IonIcon icon={reader} />
              <IonLabel>Reservas</IonLabel>
            </IonTabButton>
            <IonTabButton tab="location" href="/location">
              <IonIcon icon={location} />
              <IonLabel>Ubicación</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Buscar</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonReactRouter>
  );
};

export default AppRouter;
