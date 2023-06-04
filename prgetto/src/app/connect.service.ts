import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class connect {
  private baseUrl = 'http://localhost:3306'; 
  database = 'db_ang';
  tableName = 'autovettura';

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any[]> {
    const url = `${this.baseUrl}/${this.database}/${this.tableName}`;
    return this.http.get<any[]>(url);
  }

  insertData(data: any): Observable<any> {
    const url = `${this.baseUrl}/${this.database}/${this.tableName}`;
    return this.http.post<any>(url, data);
  }

  deleteData(id: number): Observable<any> {
    const url = `${this.baseUrl}/${this.database}/${this.tableName}/${id}`;
    return this.http.delete<any>(url);
  }
}
