import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  router: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  city: string = 'aranmula';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService,private a:Router){}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city='';
  }

  search(){
    this.getWeatherData(this.city);
    this.city='';
  }

  private getWeatherData(city: string){
    this.weatherService.getWeatherData(city).subscribe({
      next: (data) =>{
        this.weatherData = data;
      }
    })
  }
  submitt()
  {
    this.a.navigate(['/detailis']);
  }

  // myData=MyData
  // gotoHere(id: any){
  //   localStorage.setItem('id',id);
  //   this.a.navigate(['/recipe']);
  

  formatTimestamp(timestamp: number, timezone: number): string {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleString();
  }}
