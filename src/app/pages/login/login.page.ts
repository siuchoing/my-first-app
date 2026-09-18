import {
  Component,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
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
import { mail, eye, eyeOff, lockClosed, logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ mail, eye, eyeOff, lockClosed, logoGoogle, logoFacebook, logoApple });
  }

  ngOnInit() {
  }

  // 點擊眼睛時觸發的方法：直接對 signal 數值取反向（true 變 false，false 變 true）
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }

  // 使用 Signal 管理密碼顯示狀態
  showPassword = signal<boolean>(false);

  // 3. 定義你的表單大腦：設定 email 為必填且必須符合 email 格式
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('表單資料：', this.loginForm.value);
      // 輸出的資料格式會是： { email: 'user@example.com' }
    }
  }

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
