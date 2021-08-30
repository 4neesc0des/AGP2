import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from 'src/app/services/newapiservice.service';

@Component({
  selector: 'app-biznews',
  templateUrl: './biznews.component.html',
  styleUrls: ['./biznews.component.css']
})
export class BiznewsComponent implements OnInit {

  constructor(private _service: NewapiserviceService) { }

  topBuz: any = [];

  ngOnInit(): void {
    this._service.getBuz().subscribe((result: any) => {
      this.topBuz = result.articles
    })
  }

}
