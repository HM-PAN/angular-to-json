import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = {
    firstname :"",
    lastname:""
  }

  saveToFile = () => {
    var fakeLink  = document.createElement('a')
    var file = new Blob([JSON.stringify(this.data, null , 2)], {type: 'application/json'})
    fakeLink.href = URL.createObjectURL(file)
    fakeLink.download = 'json_file.json'
    fakeLink.click()
  }
}
