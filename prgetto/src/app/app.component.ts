import { Component, OnInit } from '@angular/core';
import { PhpMyAdminService } from './connect.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  autovettura: any[] | undefined;
  Id: number | undefined;
  targa: string | undefined;
  marca: string | undefined;
  modello: string | undefined;
  costo: number | undefined;
  info: string | undefined;
  img: string | undefined;

  constructor(private phpMyAdminService: PhpMyAdminService) { }

  ngOnInit() {
    this.Id=-1;
    this.targa='';
    this.marca='';
    this.modello='';
    this.costo=-1;
    this.info='';
    this.img='';
  }

  getCars() {
    this.phpMyAdminService.getTableData('db_ang', 'autovettura').subscribe(data => {
      this.autovettura = data;
    });
  }

  addCar() {
    const newcar = {Id: this.Id, targa: this.targa, marca: this.marca, modello: this.modello, costo: this.costo, info: this.info, img: this.img};
    this.phpMyAdminService.insertData('db_ang', 'autovettura', newcar).subscribe(response => {
      console.log('User added successfully.');
      this.getCars();
    });
  }

  deleteCar(Id: number) {
    this.phpMyAdminService.deleteData('db_ang', 'autovettura', Id).subscribe(response => {
      console.log('User deleted successfully.');
      this.getCars();
    });
  }
}
