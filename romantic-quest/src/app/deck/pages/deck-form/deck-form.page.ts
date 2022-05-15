import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { DeckService } from 'src/app/deck/services/deck.service';
import { Deck } from 'src/app/models/deck';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/card/services/category.service';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.page.html',
  styleUrls: ['./deck-form.page.scss'],
})
export class DeckFormPage implements OnInit {

  private deckId: string;
  private deck$: Observable<Deck>;
  private categories$: Observable<Array<Category>>;
  private deck: Deck;
  private ready: boolean;
  private categoryList: Category[] = [];


  constructor(
    private activatedroute: ActivatedRoute,
    private deckService: DeckService,
    private categoryService: CategoryService,
    private loadingController: LoadingController,
    private alert: AlertController) { }

  async ngOnInit() {
    this.ready = false;
    this.deck = {
      id: null,
      name: "",
      description: "",
      category: null,
      cards: []
    };
    let loadingC = await this.loadingController.create();
    loadingC.present();

    this.categories$ = this.categoryService.getAllCategories();
    this.categories$.subscribe(
      (categories) => {
        this.categoryList = categories;
        this.deck.category = this.categoryList[0];
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
            this.deck.category = this.categoryList[0];
          }
        );
        alert.present();
      }
    );

    this.deckId = this.activatedroute.snapshot.paramMap.get("id");
    if (this.deckId) {
      this.deck$ = this.deckService.getDeck(this.deckId);
      this.deck$.subscribe(
        (deck) => {
          this.deck = deck;
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
//    deck.category = new Category();
//    deck.category.id = this.formControlDeck.category;
    this.deckService.saveDeck(this.deck).subscribe(
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
