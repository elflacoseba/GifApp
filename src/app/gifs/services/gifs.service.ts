import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private _tagHistory: string[] = [];
  private _apiKey: string = 'kDrAORkTJOrTtI7z9SWpeZJ4xFBRQN3M';
  private _serviceURL: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) { }

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

   searchTag( tag: string ):void {

    if ( tag.length === 0 ) return;

    this.organizeHistory( tag) ;

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get(`${ this._serviceURL }/search`, { params : params } )
      .subscribe( resp => {
        console.log(resp);
      } )
  }

}
