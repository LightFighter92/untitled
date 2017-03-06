import {Sponsor} from "../models/sponsor.model";
import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";

/**
 * Created by dch61 on 02.02.2017.
 */
@Injectable()
export class SponsorService{
  private sponsoren$: FirebaseListObservable<any>;
  private abholen$: FirebaseListObservable<any>;

  private anzahlSponsoren:number;
  private itemToUpdate;

  constructor(private af: AngularFire) {
    this.sponsoren$ = af.database.list('/Sponsoren',{query:{
      orderByChild:'name'
    }});

    this.abholen$ = af.database.list('/Abholen',{query:{
      orderByChild:'name'
    }});

    }

  /*
   Sortiert die Sponsorliste nach einem gewählten Attributt
   @sortBy: Attributt nach dem die Sponsorliste sortiert werden soll
   */
  sortSponsorListe(sortBy: string) {
    this.sponsoren$ = this.af.database.list('/Sponsoren',{query:{
      orderByChild: sortBy
    }});

    return this.sponsoren$;
  }


  //Ruft die Sponsorliste aus der Datenbank ab
  getSponsorListe(){
    return this.sponsoren$;
  }

  /*
   Sortiert die Abholliste nach einem bestimmten Attributt
   @sortBy: Attributt, nach dem die Abholliste sortiert werden soll
   */
  sortAbholListe(sortBy: string) {
    this.abholen$ = this.af.database.list('/Abholen',{query:{
      orderByChild: sortBy
    }});

    return this.abholen$;
  }

  //Gibt alle Sponsoren zurück, welche sich in der Abholiste befinden
  getAbholliste(){
    return this.abholen$;
  }

  /*
   Fügt einen Sponsor der Abholliste hinzu. Ein Sponsor kann nicht mehrfach der Abholliste beigefügt werden
   @item: Sponsor, welcher der Abholliste hinzugefügt werden soll
   */
  addToAbholListe(item){

    console.log(item.strasse);

    this.af.database.list('/Abholen',{
      query:{
        orderByChild:'name',
        equalTo:item.name
      }
    }).subscribe(response=>{
      if(response.length === 0){
        this.abholen$.push({name:item.name,strasse:item.strasse,plz:item.plz,ort:item.ort,regio:item.regio,status:item.status,verantwortlich:item.verantwortlich,bemerkung:item.bemerkung});
        console.log('Der Abholliste hinzugefügt');
      }
      else {
        console.log('Sponsor wurde bereits der Abliste hinzugefügt');
      }
    })


  }

  /*
   Nimmt ein Sponsorobjekt als Parameter und fügt es der Firebase-Datenbank hinzu
   @item: Sponsor, welcher der Sponsorliste hinzugefügt werden soll
   */
  addToSponsorListe(item:Sponsor){
    this.sponsoren$.push({name:item.name,strasse:item.adresse,plz:item.plz,ort:item.ort,regio:item.regional,status:item.status,verantwortlich:item.verantwortlich,bemerkung:item.bemerkung});
  }


  /*
   Synchronisiert ein bestehendes Objekt mit der Sponsorendatenbank
   @item: Datensatz, welcher mit der Sponsorenliste aktualisiert werden soll
   */
  updateSponsorListe(item){
    this.itemToUpdate = this.af.database.object("/Sponsoren/" + item.$key);
    this.itemToUpdate.update({bemerkung:item.bemerkung,name:item.name,ort:item.ort,plz:item.plz,regio:item.regio,status:item.status,strasse:item.strasse,verantwortlich:item.verantwortlich});
  }

  //Synchronisiert ein bestehendes Objekt mit der Abholliste der Datenbank
  updateAbholliste(item){
    this.itemToUpdate = this.af.database.object("Abholen/"+item.$key);
      this.itemToUpdate.update({bemerkung:item.bemerkung,name:item.name,ort:item.ort,plz:item.plz,regio:item.regio,status:item.status,strasse:item.strasse,verantwortlich:item.verantwortlich});
    }

  /*
   Entfernt ein Objekt aus der Sponsorenliste
   @key: ID des Sponsors, welcher aus der Sponsorenliste gelöscht werden soll
   */
  removeFromSponsorListe(key:string){
    this.sponsoren$.remove(key)
  }

  /*
   Entfernt ein Objekt aus der Abholliste
   @key: ID des Sponsors, welcher aus der Abholliste entfernt werden soll
   */
  removeFromAbholliste(key:string){
    this.abholen$.remove(key);
  }

  //Gibt die Anzahl der Sponsoren in der Liste zurück
  getAnzahlSponsoren(){
    this.sponsoren$.map(list=>list.length).subscribe(length=>{console.log(length);this.anzahlSponsoren = length;});

    return this.anzahlSponsoren;
  }
}
