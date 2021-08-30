import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from 'src/app/services/newapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service: NewapiserviceService) { }

  techHeading: any = [];

  ngOnInit(): void {
    this._service.getTech().subscribe((result: any) => {
      console.log(result);
      this.techHeading = result.articles
    })
  }

}
