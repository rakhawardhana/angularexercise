import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../core/location.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

// BEFORE
export class ListComponent implements OnInit {
  name = 'rakha'
  // constructor() { }

  me = this.locationService.dimana();
  me2 = this.locationService.octocatGithub();
  kerja = this.locationService.pekerjaan()

  
  constructor(public locationService: LocationService) {}


  ngOnInit() {
    // console.log(this.me2);
  }

}

// AFTER
// export class ListComponent implements OnInit {
//   name = 'rakha';
//   me = this.locationService.whereami();
//   me2 = this.locationService.octocatGithub();

//   constructor(public locationService: LocationService) {}

//   ngOnInit() {}
// }