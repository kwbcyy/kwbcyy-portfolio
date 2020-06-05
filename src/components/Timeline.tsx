import React, { Component } from 'react'
// import './Timeline.css';
import { IonAvatar, IonChip, } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <h2 id="timeline">Timeline</h2>
        {/* カード１ */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>社会人</IonCardSubtitle>
            <IonCardTitle>2018-現在
               </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            新卒で都市銀行へ入社。半年間の支店研修を経て、法人営業部へ配属。先輩行員の稟議サポート、事務サポート、に加え、自身の担当先へも営業。
      </IonCardContent>
        </IonCard>

        {/* カード２ */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>大学時代</IonCardSubtitle>
            <IonCardTitle>2014-2018</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            英語、経済、経営と幅広く学ぶため甲南大学マネジメント創造学部へ進学。１年生の時、特待生制度があることを知り、成績優秀者を目指す。成績優秀者へ支給されたお金でセブ島へ２週間の短期留学。首席で卒業（偏差値38からの逆転劇&親孝行）。
      </IonCardContent>
        </IonCard>

        {/* カード３ */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>高校時代</IonCardSubtitle>
            <IonCardTitle>2011-2014</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            サッカー部に所属。偏差値は38、部活中心の生活。1年生の時、1万人の中から兵庫県代表として国民体育大会に出場するも、2回戦敗退。「勉強よりも何よりもサッカーを優先しなさい」と言う指導者の考えに違和感を感じ、大学では勉強すべくサッカー推薦を辞退し、一般入試での進学を目指す。
      </IonCardContent>
        </IonCard>

        {/* カード４ */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>中学生時代
            </IonCardSubtitle>
            <IonCardTitle>2007-2010</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            部活動には所属せず、サッカーチームに所属。平日2日のチーム練習日以外は自主練。長友選手に感化され、走り込みと体幹トレーニングに取り組む。
            学校では成績は上位10％と割と良かった。「やりたいこと＝サッカーをするうには、やるべきことは確りとやりなさい」と言う教育方針の元、勉強は最低限やっていた。
            初めてできた彼女からの「私のこと好き？」と言う質問に対し、「サッカーと同じくらい好き」と回答。口論に進展。

      </IonCardContent>
        </IonCard>

      </div>
    )
  }
}
