import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.state';

export const selectStudentState =
  createFeatureSelector<StudentState>('studentState');

export const selectStudents = createSelector(
  selectStudentState,
  state => state.students
);