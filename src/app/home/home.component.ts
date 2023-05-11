import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  data1:any[]=[];

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    this.llenarData()
    this.llenarData1()
  }

  llenarData(){
    this.apiService.getData().subscribe(response=>{
      if(Array.isArray(response)){
        this.data=response;
      }
      else{
        this.data=[response];
      }
      
      console.log(this.data);
    })

  }

  llenarData1(){
    this.apiService.getData1().subscribe(response=>{
      if(Array.isArray(response)){
        this.data1=response;
      }
      else{
        this.data1=[response];
      }
      
      console.log(this.data1);
    })

  }

}
