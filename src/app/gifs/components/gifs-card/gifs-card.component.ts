import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { HttpClient } from '@angular/common/http';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})

export class GifsCardComponent implements OnInit {

  constructor(
    private clipboardApi: ClipboardService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required.');
  }

  @Input()
  public gif!: Gif;


  copyClipboard( url: string ): void {
    this.clipboardApi.copyFromContent(url);
  }

  downloadFile(url: string, filename: string):void {
    this.http.get(url, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename + '.gif';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
