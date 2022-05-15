import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { Category } from 'src/app/models/category';
import { CardService } from '../../services/card.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.page.html',
  styleUrls: ['./card-form.page.scss'],
})
export class CardFormPage implements OnInit {

  private cardId: string;
  private card$: Observable<Card>;
  private categories$: Observable<Array<Category>>;
  private card: Card;
  private ready: boolean;
  private categoryList: Category[] = [];

  //public formControlCard: FormGroup;


  constructor(
    private activatedroute: ActivatedRoute,
    private cardService: CardService,
    private categoryService: CategoryService,
    private loadingController: LoadingController,
    private alert: AlertController) { }

  async ngOnInit() {
    this.ready = false;
    this.card = new Card({
      id: null,
      name: "",
      description: ""
    });
    let loadingC = await this.loadingController.create();
    loadingC.present();

    this.categories$ = this.categoryService.getAllCategories();
    this.categories$.subscribe(
      (categories) => {
        this.categoryList = categories;
        this.card.category = this.categoryList[0];
      },
      async (error) => {
        loadingC.dismiss();
        const alert = await this.alert.create({
          header: 'Cargando Categorias locales',
          message: error.message,
          buttons: ['OK'],
        });
        this.categoryService.getTestCategories().subscribe(
          (categories) => {
            this.categoryList = categories;
            this.card.category = this.categoryList[0];
          }
        );
        alert.present();
      }
    );

    this.cardId = this.activatedroute.snapshot.paramMap.get("id");
    if (this.cardId) {
      this.card$ = this.cardService.getCard(this.cardId);
      this.card$.subscribe(
        (card) => {
          this.card = card;
          loadingC.dismiss();
          this.ready = true;
        },
        async (error) => {
          loadingC.dismiss();
          const alert = await this.alert.create({
            header: 'Error',
            message: error.message,
            buttons: ['OK'],
          });
          alert.present();
        }
      );
    } else {
      loadingC.dismiss()
      this.ready = true;
    }
  }

  compareWith(o1: Category, o2: Category | Category[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: Category) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }

  save() {
//    card.category = new Category();
//    card.category.id = this.formControlCard.category;
    this.cardService.saveCard(this.card).subscribe(
      (success) => {
        this.ready = true;
      },
      async (error) => {
        const alert = await this.alert.create({
          header: 'Error',
          message: error.message,
          buttons: ['OK'],
        });
        alert.present();
      });
  }

}
