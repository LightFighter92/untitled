/**
 * Created by dch61 on 10.02.2017.
 */
export class BudgetItem{
  public zweck:string;
  public betrag:number;
  public ausgabe:string;//Gülitige Werte :Ausgabe,Einnahme

  constructor(zweck:string,betrag:number,ausgabe:string){
    this.betrag = betrag;
    this.zweck = zweck;
    this.ausgabe=ausgabe;
  }

}
