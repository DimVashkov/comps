import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 34, job: 'Engineer' },
    { name: 'John', age: 26, job: 'Doctor' },
    { name: 'Bob', age:30, job: 'Computer'}
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
