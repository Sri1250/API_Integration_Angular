import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import{ApiService} from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnChanges{
  title = 'component-overview';
  public users:any;
  constructor(private apiService:ApiService){}
 ngOnInit(){
this.apiService.getdetails().subscribe((res:any)=>{
  this.users=res.users;
  console.log(this.users)
})
console.log("Oninit");
  }
  ngOnChanges(): void {
    console.log("Onchanges");
  }
}
