import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.scss']
})
export class CountriesComponentComponent implements OnInit {
  public header = "Countries options"
  public countries = ["Ukraine", "Belarus", "Poland", "Macedonia"];
  constructor() { }

  ngOnInit(): void {
  }

}
