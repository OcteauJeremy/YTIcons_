

import { Type } from './Type';

export class Card {
  public  _id: string;
  public  id: number;
  public  name: string;
  public  image: string;
  public  nationality: any;
  public  nbSubscribers: number;
  public  url: string;
  public  description: string;
  public  citation: string;
  // public  promo: Promo;
  public  type: Type;
  public  price: number;
  public  owner;
  public  nbTransactions: any;
  public  nbVideos: any;
  public  nbViews: any;
  public  transactions: any;

  constructor() {
  }


}
