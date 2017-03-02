import {Sponsor} from "../models/sponsor.model";
import {Http} from "@angular/http";
import {Injectable, Input} from "@angular/core";
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
  private sponsorFilter:string;

  constructor(private _http:Http,private af:AngularFire){
    this.sponsoren$ = af.database.list('/Sponsoren',{query:{
      orderByChild:'name'
    }});

    this.abholen$ = af.database.list('/Abholen',{query:{
      orderByChild:'name'
    }});

    this.sponsoren$.subscribe(item => console.log(item));
    this.abholen$.subscribe(item => console.log(item));

    }

  // Sortiert die Sponsorliste nach einem gewählten Attributt

  sortSponsorListe(sortItem:string){
    this.sponsoren$ = this.af.database.list('/Sponsoren',{query:{
      orderByChild:sortItem
    }});

    return this.sponsoren$;
  }

  filterSponsorListe(filter:string){
      this.sponsoren$ = this.af.database.list('/Sponsoren',{query:{
        orderByChild:'name',
        equalTo:filter
      }})

    console.log(filter);
  }

  //Ruft die Sponsorliste aus der Datenbank ab
  getSponsorListe(){
    return this.sponsoren$;
  }

  sortAbholListe(sortItem:string){
    this.abholen$ = this.af.database.list('/Abholen',{query:{
      orderByChild:sortItem
    }});

    return this.abholen$;
  }

  getAbholliste(){
    return this.abholen$;
  }

  //Fügt einen Sponsor der Abholliste hinzu. Ein Sponsor kann nicht mehrfach der Abholliste beigefügt werden
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

  //Nimmt ein Sponsorobjekt als Parameter und fügt es der Firebase-Datenbank hinzu
  addToSponsorListe(item:Sponsor){
    this.sponsoren$.push({name:item.name,strasse:item.adresse,plz:item.plz,ort:item.ort,regio:item.regional,status:item.status,verantwortlich:item.verantwortlich,bemerkung:item.bemerkung});
  }


  //Synchronisiert ein bestehendes Objekt mit der Sponsorendatenbank
  updateSponsorListe(item){
    this.itemToUpdate = this.af.database.object("/Sponsoren/" + item.$key);
    this.itemToUpdate.update({bemerkung:item.bemerkung,name:item.name,ort:item.ort,plz:item.plz,regio:item.regio,status:item.status,strasse:item.strasse,verantwortlich:item.verantwortlich});
  }

  //Synchronisiert ein bestehendes Objekt mit der Abholliste der Datenbank
  updateAbholliste(item){
    this.itemToUpdate = this.af.database.object("Abholen/"+item.$key);
      this.itemToUpdate.update({bemerkung:item.bemerkung,name:item.name,ort:item.ort,plz:item.plz,regio:item.regio,status:item.status,strasse:item.strasse,verantwortlich:item.verantwortlich});
    }

  //Entfernt ein Objekt aus der Sponsorenliste
  removeFromSponsorListe(key:string){
    this.sponsoren$.remove(key)
  }

  //Entfernt ein Objekt aus der Abholliste
  removeFromAbholliste(key:string){
    this.abholen$.remove(key);
  }

  //Gibt die Anzahl der Sponsoren in der Liste zurück
  getAnzahlSponsoren(){
    this.sponsoren$.map(list=>list.length).subscribe(length=>{console.log(length);this.anzahlSponsoren = length;});

    return this.anzahlSponsoren;
  }
}
