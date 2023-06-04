import { Component, OnInit } from '@angular/core';
import { connect } from './connect.service';
import { FormsModule } from '@angular/forms'; 

//ricorda il file proxy e questa roba
/*
{
    "/echo": {
    "target": "http://localhost:3306",
    "secure": true,
    "changeOrigin": true,
    "logLevel": "debug"
    }
}

da qua l'angular json
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "nome_applicazione:build",
            "proxyConfig": "src/proxy.conf.json"
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, FormsModule {
  autovettura: any[] | undefined;
  id: number | undefined;
  targa: string | undefined;
  marca: string | undefined;
  modello: string | undefined;
  costo: number | undefined;
  info: string | undefined;
  img: string | undefined;
  title = 'provetta';

  constructor(private connect: connect) { }

  ngOnInit() {
    this.id=-1;
    this.targa='';
    this.marca='';
    this.modello='';
    this.costo=-1;
    this.info='';
    this.img='';
  }

  getCars() {
    this.connect.getTableData().subscribe(data => {
      this.autovettura = data;
    });
  }

  addCar() {
    const newcar = {d: this.id, targa: this.targa, marca: this.marca, modello: this.modello, costo: this.costo, info: this.info, img: this.img};
    this.connect.insertData(newcar).subscribe(response => {
      console.log('User added successfully.');
      this.getCars();
    });
  }

  deleteCar(Id: number) {
    this.connect.deleteData(Id).subscribe(response => {
      console.log('User deleted successfully.');
      this.getCars();
    });
  }
}
