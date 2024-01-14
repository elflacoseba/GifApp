import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})

export class GifsCardComponent implements OnInit {

  constructor(
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required.');
  }

  @Input()
  public gif!: Gif;


  copyClipboard( url: string ): void {
    this.clipboardApi.copyFromContent(url);
  }
}
