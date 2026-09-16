import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSpinner } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  imports: [IonContent,  CommonModule, FormsModule, IonSpinner]
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("loader initialize when onload status")
  }

}
