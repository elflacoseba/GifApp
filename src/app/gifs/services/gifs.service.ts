import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _tagHistory: string[] = [];

  constructor() { }


  get tagsHistory() {

    //Retorno una copia del arreglo para no pasarlo por referencia.
    return [...this._tagHistory];
  }

  private organizeHistory( tag: string):void {
    tag= tag.toLocaleLowerCase();

    if ( this.tagsHistory.includes(tag) ) {

      //Retorno todos los tags que son distintos al tag enviado.
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag  )

    }

    this._tagHistory.unshift( tag );

    this._tagHistory = this.tagsHistory.splice(0,10);

  }

  public searchTag( tag: string ):void {

    if ( tag.length === 0 ) return;

    this.organizeHistory( tag) ;
  }



}
