import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';

@Component({
  selector: 'app-section-students',
  templateUrl: './section-students.component.html',
  styleUrls: ['./section-students.component.css']
})
export class SectionStudentsComponent implements OnInit {

  constructor() { }

  students: Student[] = [
    {id: 1, initials: "KO", age: 21, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 2, initials: "JS", age: 25, studyStart: new Date(2019,9,1), country: "Italy"},
    {id: 3, initials: "ER", age: 23, studyStart: new Date(2019,9,1), country: "Denmark"},
    {id: 4, initials: "SJ", age: 22, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 5, initials: "GS", age: 21, studyStart: new Date(2019,9,1), country: "Denmark"},
    {id: 6, initials: "AK", age: 24, studyStart: new Date(2019,9,1), country: "Estonia"},
    {id: 7, initials: "JB", age: 25, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 8, initials: "TO", age: 23, studyStart: new Date(2019,9,1), country: "Italy"},
  ];

  ngOnInit(): void {
  }

}
