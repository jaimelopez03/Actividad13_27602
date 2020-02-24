import { Component, OnInit } from '@angular/core';
import { textareaAutoResize } from 'materialize-css';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  notes = [];
  constructor() {
  }

  ngOnInit() {
    $('.collapsible').collapsible();
  }

  createnotes(titleInput: HTMLInputElement, textInput: HTMLInputElement) {
    const titulo = titleInput.value;
    const texto = textInput.value;
    if (titulo === '') {
      alert('No puede haber campos vacios');
    } else if (texto === '') {
      alert('No puede haber campos vacios');
    } else {
      const newnotes = {
        title: titulo,
        text: texto
      };
      this.notes.unshift(newnotes);
      $('#title').val('');
      $('#textarea').val('');
      textareaAutoResize($('#textarea'));
    }
  }
}
