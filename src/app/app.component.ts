import { Component } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders }  from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'velehaiku';

  constructor(private httpClient: HttpClient) {

  }

  echoTest() {
    console.log(1);
    const url = 'https://velehaiku-server.herokuapp.com/echo?test=passed';
    const options = {
      withCredentials: true,
    };
    this.httpClient.get(url, options)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
