import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formControlLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    private loadingController: LoadingController,
    //private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router
    ) { 
      this.formControlLogin = this.fb.group({
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
      //const res = await this.authService.login(this.formControlLogin.value);
      await loading.dismiss();        
      this.router.navigateByUrl('/main', { replaceUrl: true });
    } catch(err) {
      await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: err,
          buttons: ['OK'],
        });
 
        await alert.present();
    }
    

    /*this.authService.login(this.formControlLogin.value).subscribe(
      async (res) => {
        await loading.dismiss();        
        this.router.navigateByUrl('/main', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );*/
  }
 
  // Easy access for form fields
  get email() {
    return this.formControlLogin.get('email');
  }
  
  get password() {
    return this.formControlLogin.get('password');
  }

}
