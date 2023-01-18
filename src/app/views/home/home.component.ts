import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { RepositoriesService } from '../../repositories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  faChevronRight = faChevronRight
  repositoryList: any[] = []
  userNameSearch = ''

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    this.getRepositories()
  }

  getRepositories(){
    this.repositoriesService.getRepositoriesAPI().subscribe((res)=>{
      console.log(res)
    this.repositoryList = res
    })
  }

  searchUserRepositories(){
    console.log("Fui clicado")
  }
}
