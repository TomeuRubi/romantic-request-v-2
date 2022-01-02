import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public translate: TranslateService,
    //private localizationService: LocalizationService,
    private menu: MenuController) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  isAuthenticated(): boolean {
    return true
    //return this.authService.isLogged();
  }
}
