import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  public formControlPlayer1: FormGroup;
  public formControlPlayer2: FormGroup;
  public formControlOptions: FormGroup;

  constructor(
    public fb: FormBuilder,
    private loadingController: LoadingController,
    //private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formControlPlayer1 = this.fb.group({
      "username": new FormControl('', Validators.required),
      "gendre": new FormControl('', Validators.required)
    });
    this.formControlPlayer2 = this.fb.group({
      "username": new FormControl('', Validators.required),
      "gendre": new FormControl('', Validators.required)
    });
    this.formControlOptions = this.fb.group({
      "maze": new FormControl('', Validators.required),
      "time": new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

}
