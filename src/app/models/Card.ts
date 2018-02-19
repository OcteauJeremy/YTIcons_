

import { Type } from './Type';

export class Card {
  public  id: number;
  public  name: string;
  public  image: string;
  public  nationality: string;
  public  nbSubscribers: number;
  public  url: string;
  public  description: string;
  public  citation: string;
  // public  promo: Promo;
  public  type: Type;
  public  price: number;

  constructor(pId: number) {
    this.id = pId;


    // Request smartContract
    this.price = 0.001; // 1$
    this.name = 'Prime';
    this.image = 'assets/images/images/example_card_gold.png';
    this.nationality = 'FR';
    this.nbSubscribers = 200;
    this.url = 'https://www.youtube.com/user/PrimeTimeFUT';
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id venenatis mi. Vestibulum suscipit arcu vel odio venenatis volutpat. Etiam laoreet purus eget eros dictum, ut mollis ante auctor. Curabitur et libero mattis, sodales risus nec, lacinia sem. Etiam ac tortor ligula. Maecenas et nibh ullamcorper, interdum nunc a, consectetur turpis. Quisque quis tempor ligula.';
    this.citation = "Si je la respecte, j'enleve mes chaussette.";
    this.type = new Type(0);
  }


}
