import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class StudentsComponent {

  students: any[] = [];

  newStudent = {
    name: '',
    class: '',
    section: ''
  };

  editStudentId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    // ✅ DATA COMES BEFORE PAGE LOAD
    this.students = this.route.snapshot.data['students'];
  }

  addStudent() {
    if (!this.newStudent.name || !this.newStudent.class || !this.newStudent.section) return;

    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.resetForm();
      this.reload();
    });
  }

  editStudent(student: any) {
    this.editStudentId = student.id;
    this.newStudent = {
      name: student.name,
      class: student.class,
      section: student.section
    };
  }

  updateStudent() {
    if (this.editStudentId === null) return;

    this.studentService
      .updateStudent(this.editStudentId, this.newStudent)
      .subscribe(() => {
        this.resetForm();
        this.reload();
      });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.reload();
    });
  }

  reload() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  resetForm() {
    this.newStudent = { name: '', class: '', section: '' };
    this.editStudentId = null;
  }
}
