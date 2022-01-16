import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: IUser;
  
  public formControlLogin: FormGroup;

  constructor(
    private store: Store<any>,
    public fb: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
    ) { 
      this.formControlLogin = new FormGroup({
        "username": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required)
      });
    }

  ngOnInit() {
  }


  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      this.authService.login(this.formControlLogin.value).subscribe(async (data) => {
        loading.dismiss(); 
        if(data) {
          this.router.navigateByUrl('/selection', { replaceUrl: true });
        } else {
          const alert = await this.alertController.create({
            header: 'Login failed',
            message: 'Login failed',
            buttons: ['OK'],
          });
   
          alert.present();
        }
      }
        
      ); 
      
    } catch(err) {
      await loading.dismiss();
    }
  }
 
  // Easy access for form fields
  get email() {
    return this.formControlLogin.get('email');
  }
  
  get password() {
    return this.formControlLogin.get('password');
  }

}
