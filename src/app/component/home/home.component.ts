import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Student {
  id: number;
  fullName: string;
  email: string;
  contact: string;
  branch: string;
  std: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  studentsData: Student[] = [
    {
      id: 1,
      fullName: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      contact: '9876543210',
      branch: 'Computer',
      std: 5
    },
    {
      id: 2,
      fullName: 'Priya Patel',
      email: 'priya@gmail.com',
      contact: '9876543211',
      branch: 'IT',
      std: 5
    },
    {
      id: 3,
      fullName: 'Amit Kumar',
      email: 'amit@gmail.com',
      contact: '9876543212',
      branch: 'Mechanical',
      std: 5
    }
  ];
}
