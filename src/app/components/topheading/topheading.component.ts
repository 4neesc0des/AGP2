import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from 'src/app/services/newapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _services: NewapiserviceService) { }

  topHeading: any = [];

  // images


  ngOnInit(): void {
    this._services.getHeading().subscribe((result: any) => {
      console.log(result.articles[8]);
      this.topHeading = result.articles
    })
  }



}
