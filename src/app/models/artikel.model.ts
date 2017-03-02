/**
 * Created by dch61 on 11.02.2017.
 */
export class Artikel{
  public artikel:string;
  public wert:number;
  public anzahl:number;
  public sponsor:string;//Sponsoren werden von der Datenbank geladen

  constructor(artikel:string,wert:number,anzahl:number,sponsor:string){
    this.artikel = artikel;
    this.wert = wert;
    this.anzahl = anzahl;
    this.sponsor = sponsor;
  }
}
