import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://localhost:7193/api/Students';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getStudents() {
  return this.http.get<any[]>(this.apiUrl);
}

addStudent(student: any) {
  return this.http.post(this.apiUrl, student);
}

deleteStudent(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

updateStudent(id: number, student: any) {
  return this.http.put(`${this.apiUrl}/${id}`, student);
}
}