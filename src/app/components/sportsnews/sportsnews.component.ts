import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from 'src/app/services/newapiservice.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _service: NewapiserviceService) { }
  sportHeading: any = [];
  ngOnInit(): void {
    this._service.getSport().subscribe((result: any) => {
      this.sportHeading = result.articles
    })
  }

}
