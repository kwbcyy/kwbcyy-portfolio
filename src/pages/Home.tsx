import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import Introduction from '../components/Introduction';
import About from '../components/about';
import Timeline from '../components/Timeline';
import { Sidebar } from '../components/Sidebar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Sidebar></Sidebar>
        <Introduction></Introduction>
        <About></About>
        <Timeline></Timeline>
      </IonContent>
    </IonPage>
  );
};

export default Home;
