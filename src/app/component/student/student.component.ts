import { Component, OnInit } from '@angular/core';
import { selectStudents } from '../../store/student/student.selectors';
import { Store } from '@ngrx/store';
import * as StudentActions from '../../store/student/student.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  students$ = this.store.select(selectStudents);

  studentForm: FormGroup;

  // 1978 -22 1988

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {

    this.studentForm = this.fb.group({
      id: [''],
      fullName: [''],
      email: [''],
      contact: [''],
      branch: [''],
      std: ['']
    });

  }

  ngOnInit(): void {
    this.store.dispatch(
      StudentActions.loadStudents()
    )
  }

  addStudent() {
    this.store.dispatch(
      StudentActions.addStudent({
        student: this.studentForm.value
      })
    );

    this.studentForm.reset();
  }

  updateStudent() {
    this.store.dispatch(
      StudentActions.updateStudent({
        student: this.studentForm.value
      })
    );

    this.studentForm.reset();
  }

  editStudent(student: any) {
    this.studentForm.patchValue(student);
  }

  remove(id: number) {
    this.store.dispatch(
      StudentActions.deleteStudent({ id })
    );
  }

}