import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-section-students',
  templateUrl: './section-students.component.html',
  styleUrls: ['./section-students.component.css']
})
export class SectionStudentsComponent implements OnInit {

  constructor(private _studentDataService: StudentDataService) { }

  public students: Student[] = [];

  ngOnInit(): void {

    this._studentDataService.getAllStudents()
    .subscribe(response => 
      {
        this.students = this.listAllStudents(response);
      });
  }

  listAllStudents(response: any)
  {
    const STUDENTS: Student[] = [];

    for(let i = 0; i< response.length; i++)
    {
        const STUDENT: Student = {
          id: response[i].id,
          initials: response[i].initials,
          age: response[i].age,
          studyStart: response[i].studyStart,
          country: response[i].country
        };

        STUDENTS.push(STUDENT);
    }
    return STUDENTS;
  }
}


/*{id: 1, initials: "KO", age: 21, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 2, initials: "JS", age: 25, studyStart: new Date(2019,9,1), country: "Italy"},
    {id: 3, initials: "ER", age: 23, studyStart: new Date(2019,9,1), country: "Denmark"},
    {id: 4, initials: "SJ", age: 22, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 5, initials: "GS", age: 21, studyStart: new Date(2019,9,1), country: "Denmark"},
    {id: 6, initials: "AK", age: 24, studyStart: new Date(2019,9,1), country: "Estonia"},
    {id: 7, initials: "JB", age: 25, studyStart: new Date(2019,9,1), country: "Spain"},
    {id: 8, initials: "TO", age: 23, studyStart: new Date(2019,9,1), country: "Italy"},*/