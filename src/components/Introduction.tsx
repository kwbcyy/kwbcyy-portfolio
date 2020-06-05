import React, { Component } from 'react'
// import './Introduction.css';
import { IonAvatar, IonChip, } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


export default class Introduction extends Component {
  render() {
    return (

      <div>
        <a href="home#Introduction"></a>
        <h2 id="introduction">Introduction</h2>
        <IonCard>
          <IonCardHeader>
            <a href="home#test">test</a>
            <IonCardSubtitle>自己紹介</IonCardSubtitle>
            <IonCardTitle>WHO AM I ?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            名前：Yuya　資格：TOIEC820点　趣味：筋トレ<br></br>
            言語／FW：JavaScript、React
      </IonCardContent>
        </IonCard>
        <div id="test">test</div>
        {/* <section>
          <div className="self_into">
            <div>
              <h1>名前 <br />Yuya</h1>
              <p><a >#</a></p>
            </div>
          </div>
          < div className="into_photo">
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />>
        </IonAvatar>
            </div >
        </section> */}
      </div>
    )
  }
}