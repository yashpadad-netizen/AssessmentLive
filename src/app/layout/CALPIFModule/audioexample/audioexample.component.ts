import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audioexample',
  templateUrl: './audioexample.component.html',
  styleUrls: ['./audioexample.component.scss']
})
export class AudioexampleComponent implements OnInit {
  audios = [
    {src:'https://www.computerhope.com/jargon/m/example.mp3', type: 'audio/mpeg'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
