import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class PhpMyAdminService {
  private baseUrl = 'http://localhost:8001'; // Aggiorna con l'URL di PhpMyAdmin
  database = 'db_ang';
  tableName = 'autovettura'

  constructor(private http: HttpClient) { }

  getTableData(database: string, tableName: string): Observable<any[]> {
    const url = `${this.baseUrl}/${database}/${tableName}`;
    return this.http.get<any[]>(url);
  }

  insertData(database: string, tableName: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${database}/${tableName}`;
    return this.http.post<any>(url, data);
  }

  deleteData(database: string, tableName: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${database}/${tableName}/${id}`;
    return this.http.delete<any>(url);
  }
}
