/**
 * Created by dch61 on 02.02.2017.
 */
export class Sponsor{
  public name:string;
  public adresse:string;
  public plz:number;
  public ort:string;//ToDo:automatisches lesen des Ortes aus der PLZ
  public regional:string;//Gültige Werte:Ja,Nein
  public status:string;//Gültige Werte:Erfasst,Angefragt,Zugesagt, Abgesagt, Abgeholt
  public verantwortlich:string;//Wenn der Wert Brief ist, wird der Sponsor schriftlich angeschrieben
  public bemerkung:string;//Kann auch leer sein

  constructor(name:string,adresse:string,plz:number,ort:string,regional:string,status:string,verantwortlich:string,bemerkung:string) {
    this.name = name;
    this.adresse = adresse;
    this.plz =plz;
    this.ort = ort;
    this.regional = regional;
    this.status = status;
    this.verantwortlich = verantwortlich;
    this.bemerkung = bemerkung;
  }
}
