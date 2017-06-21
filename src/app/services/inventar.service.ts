import {Artikel} from "../models/artikel.model";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Injectable} from "@angular/core";


/**
 * Created by dch61 on 11.02.2017.
 */
@Injectable()
export class InventarService{
  public inventar:FirebaseListObservable<any>;
  private artikelToUpdate;
  private gesamtwert;


  constructor(private af:AngularFire){
    this.inventar = af.database.list('/Inventar');

    this.gesamtwert = 500;

  }
  //gibt die Objekte zurück, welche in der Inventardatenbank gespeichert werden
  getInventar(){
    return this.inventar;
  }

  /*
   Fügt ein Objekt als neuen Datensatz der Inventardatenbank hinzu
   @item: Artikel, welcher der Datenbank hinzugefügt werden soll
   */
  addToInventar(item:Artikel){
    this.inventar.push({artikel:item.artikel,anzahl:item.anzahl,wert:item.wert,sponsor:item.sponsor});
  }

  /*
   Sychronisiert ein bestehendes Objekt mit der Datenbank
   @item: Datensatz, welcher aktualisiert werden soll
   */
  updateArtikel(item){
    this.artikelToUpdate = this.af.database.object("Inventar/" + item.$key);

    this.artikelToUpdate.update({anzahl:item.anzahl,artikel:item.artikel,sponsor:item.sponsor,wert:item.wert});
  }

  /*
   Entfernt ein Objekt von der Inventardatenbank
   @key: ID des zu löschenden Datensatzes
   */
  removeFromInventar(key: string) {
   this.inventar.remove(key);
  }

  /*
   Sortiert das Inventar nach einem bestimmten Attributt
   @sortBy: Attributt nach dem sortiert werde soll
   */
  sortInventar(sortBy:string){
    this.inventar = this.af.database.list("/Inventar",{
      query:{
        orderByChild:sortBy
      }
    });

    return this.inventar;
  }

  //Berechnet den Gesamtwert aller Artikel

  calcGesamtwertArtikel(){

    /*let total: number = 0;

     for (let item of this.inventar.toArray){
     total = total + item.
     }*/


    return this.gesamtwert;
  }
}
