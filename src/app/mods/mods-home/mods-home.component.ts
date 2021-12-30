import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {title: 'Cats', content: 'Lucas, Sebae and Freya'},
    {title: 'Dogs', content: 'Caro'},
    {title: 'Other stuff', content: 'Kokoshkite na baba mi'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
