import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student';

@Injectable({ providedIn: 'root' })
export class StudentsResolver implements Resolve<any[]> {

  constructor(private studentService: StudentService) {}

  resolve(): Observable<any[]> {
    return this.studentService.getStudents();
  }
}
