import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];
  private _apiKey: string = 'kDrAORkTJOrTtI7z9SWpeZJ4xFBRQN3M';
  private _serviceURL: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory() {

    //Retorno una copia del arreglo para no pasarlo por referencia.
    return [...this._tagHistory];
  }

  private loadLocalStorage():void {
    if ( !localStorage.getItem('History') ) return;

    this._tagHistory = JSON.parse( localStorage.getItem('History')! ) ;

    if (this._tagHistory.length > 0)
    {
      this.searchTag(this.tagsHistory[0]);
    }

  }

  private organizeHistory( tag: string):void {
    tag= tag.toLocaleLowerCase();

    if ( this.tagsHistory.includes(tag) ) {

      //Retorno todos los tags que son distintos al tag enviado.
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag  )

    }

    this._tagHistory.unshift( tag );

    this._tagHistory = this.tagsHistory.splice(0,10);

    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('History', JSON.stringify( this._tagHistory ) );
  }

   searchTag( tag: string ):void {

    if ( tag.length === 0 ) return;

    this.organizeHistory( tag) ;

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${ this._serviceURL }/search`, { params : params } )
      .subscribe( resp => {
        this.gifsList = resp.data;
      } )
  }

}
