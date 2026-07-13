import { createReducer, on } from '@ngrx/store';
import { StudentState, initialState } from './student.state';
import * as StudentActions from './student.actions';
import { studentsData } from './student.data';

export const studentReducer = createReducer(

  initialState,

  on(StudentActions.loadStudents, state => ({
    ...state,
    students: studentsData
  })),

  on(StudentActions.addStudent, (state, { student }) => ({
    ...state,
    students: [...state.students, student]
  })),

  on(StudentActions.updateStudent, (state, { student }) => ({
    ...state,
    students: state.students.map(item =>
      item.id === student.id ? student : item
    )
  })),

  on(StudentActions.deleteStudent, (state, { id }) => ({
    ...state,
    students: state.students.filter(x => x.id !== id)
  }))
);