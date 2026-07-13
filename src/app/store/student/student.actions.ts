import { createAction, props } from '@ngrx/store';
import { Student } from './student.model';

export const loadStudents = createAction(
  '[Student] Load Students'
);

export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: Student }>()
);

export const updateStudent = createAction(
  '[Student] Update Student',
  props<{ student: Student }>()
);

export const deleteStudent = createAction(
  '[Student] Delete Student',
  props<{ id: number }>()
);