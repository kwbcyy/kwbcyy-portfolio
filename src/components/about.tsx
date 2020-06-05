import React, { Component } from 'react'
// import './about.css';
import { IonAvatar, IonChip, } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 id="about">About</h2>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>モットー</IonCardSubtitle>
            <IonCardTitle>『常に考え常に努力常に感謝』</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            これは、私が中学生の時に思いついた言葉です。当時、サッカー選手になることを夢見て日々練習に取り組む中で、自分を鼓舞する言葉として思いつきました。
            自分の目標（サッカー選手になる）のためには今の自分に何が必要か？常に考える。そして、必要なことをひたすらやっていく。努力する。目標達成にはその繰り返しが重要だと、中学生ながらに悟った記憶があります。そして、日々そういった努力ができることは当たり前ではなく、周囲への感謝を忘れてはいけないと言うのが、常に感謝です。
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>大切な経験①</IonCardSubtitle>
            <IonCardTitle>国体出場〜努力によって自分を高める楽しさを知る〜</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            高校生の時、1万人の中から選考を勝ち抜き、兵庫県を代表して国体へ出場。中学時代には、選抜に入った経験はなかったが、継続してきた体幹トレーニングと走り込みによりフィジカルが強化された。そのフィジカルが評価され、県を代表する選手になることができた。
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>経験②</IonCardSubtitle>
            <IonCardTitle>特待生を目指し勉強。首席で卒業。</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            大学入学早々、特待生制度の存在を知る。数十万円の奨学金が貰えるとのことから、特待生を目指し勉強を始める。テスト前には誰よりも先に勉強をはじめ、自分が先生役として講義をすることで自分の理解を深めた。結果的に、特待生に選出され、また首席で卒業することができた。
      </IonCardContent>
        </IonCard>
      </div>
    )
  }
}
