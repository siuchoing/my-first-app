import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonButton,
  IonInput,
  IonIcon,
  IonInputPasswordToggle,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  person,
  mail,
  lockClosed,
  shieldCheckmark,
  logoGoogle,
  logoApple,
  logoFacebook,
  callOutline,
  homeOutline,
  accessibilityOutline,
} from 'ionicons/icons';

// 自訂驗證器：檢查 password 與 confirmPassword 是否一致
export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // 如果欄位還沒準備好，先不處理
  if (!password || !confirmPassword) {
    return null;
  }

  // 1. 如果密碼相同
  if (password.value === confirmPassword.value) {
    // 檢查 confirmPassword 目前的錯誤物件
    const currentErrors = confirmPassword.errors;
    if (currentErrors) {
      // 移除我們自訂的 passwordMismatch 錯誤
      delete currentErrors['passwordMismatch'];
      // 如果移除後沒有其他錯誤（例如 required），就給 null，否則保留其他錯誤
      confirmPassword.setErrors(
        Object.keys(currentErrors).length === 0 ? null : currentErrors,
      );
    }
    return null; // FormGroup 層級驗證通過
  }

  // 2. 如果密碼不相同
  else {
    // 將錯誤直接設定到 confirmPassword 欄位上，同時保留原本可能存在的錯誤（如 required）
    confirmPassword.setErrors({
      ...confirmPassword.errors,
      passwordMismatch: true,
    });
    return { passwordMismatch: true }; // FormGroup 層級驗證失敗
  }
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonButton,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    IonSelect,
    IonSelectOption,
  ],
})
export class RegisterPage implements OnInit {
  private fb = inject(FormBuilder);

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[56789][0-9]{7}$/)],
      ],
      address: ['', [Validators.minLength(5)]], // optional
      gender: ['', [Validators.required]], // if optional, then gender: ['']
    },
    { validators: passwordMatchValidator },
  );

  constructor() {
    // 註冊需要的 icon
    addIcons({
      person,
      mail,
      lockClosed,
      shieldCheckmark,
      logoGoogle,
      logoApple,
      logoFacebook,
      callOutline,
      homeOutline,
      accessibilityOutline,
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);
      // TODO: 接通你的 AuthService 進行註冊邏輯
    }
  }

  socialRegister(provider: string) {
    console.log(`Social Register with ${provider}`);
  }

  get nameError(): string {
    const control = this.registerForm.get('name');
    return control?.touched && control?.hasError('required')
      ? 'Please enter your name'
      : '';
  }

  get emailError(): string {
    const control = this.registerForm.get('email');
    if (control?.touched && control?.errors) {
      if (control.hasError('required')) return 'Please enter email.';
      if (control.hasError('email')) return 'Please enter valid email';
    }
    return '';
  }

  get phoneError(): string {
    const control = this.registerForm.get('phone');
    if (control?.touched && control?.errors) {
      if (control.hasError('required')) return 'Please enter phone number.';
      if (control.hasError('pattern')) return 'Please enter phone number with 8 digits';
    }
    return '';
  }

  get addressError(): string {
    const control = this.registerForm.get('address');
    if (control?.touched && control?.errors) {
      if (control.hasError('minlength')) return 'Address length must more than 6 charactors';
    }
    return ''; // 當欄位留白（無錯誤）或通過驗證時，回傳空字串，Ionic 就會保持正常外觀
  }

  get passwordError(): string {
    const control = this.registerForm.get('password');
    if (control?.touched && control?.errors) {
      if (control.hasError('required')) return 'Please enter email.';
      if (control.hasError('minlength')) return 'Password length must more than 6 charactors';
    }
    return '';
  }

  get confirmPasswordError(): string {
    const control = this.registerForm.get('confirmPassword');
    if (control?.touched && control?.errors) {
      if (control.hasError('required')) return 'Please enter password again';
      if (control.hasError('passwordMismatch')) return 'Password inputs are not the same, please enter again.';
    }
    return '';
  }

  get genderError(): string {
    const control = this.registerForm.get('gender');
    if (control?.touched && control?.errors) {
      if (control.hasError('required')) {
        return 'Please select your gender.'; // 👈 當未選擇時顯示的錯誤字串
      }
    }
    return ''; // if optional, then keep this line only. 
  }
}
