
import { Component } from '@angular/core';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonRouterOutlet],
})
export class AppComponent {
  constructor() {

  }
}
