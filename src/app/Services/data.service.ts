import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient){} 

  GetStudentData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/cc56c8d9-5e22-11ea-a136-fddee057fc68');
  }

  GetWeatherData():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=218294420ef9a07211f68fe11b90281b');
  }
  
}
