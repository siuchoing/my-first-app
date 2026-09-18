import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonIcon,
  IonInputPasswordToggle,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoGoogle, logoApple, logoFacebook } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonIcon,
    IonInputPasswordToggle,
  ],
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ logoGoogle, logoApple, logoFacebook });
  }

  ngOnInit() {}
    /**
   * 💡 新增這個自訂函數來接收點擊事件並印出 log
   * @param platform 傳入點擊的平台名稱 (例如 'Google', 'Apple')
   */
  socialLogin(platform: string) {
    console.log(`[Login] 用戶點擊了 ${platform} 登入按鈕`);
    
    // 這裡以後可以寫你的第三方登入邏輯，例如：
    if (platform === 'Google') {
      // 執行 Google 登入...
    }
  }
}
