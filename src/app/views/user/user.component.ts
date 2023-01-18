import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  faChevronRight = faChevronRight
  faChevronLeft = faChevronLeft

  constructor() { }

  ngOnInit(): void {
  }

}
