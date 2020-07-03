import {ITeacher} from '../teacher/teacher.model';
import {ISubject} from '../subject/subject.model';

export interface ICourse {
  id?: string;
  courseName?: string;
  type?: string;
  durationYear?: number;
  courseTeachers?: ITeacher[];
  courseSubjects?: ISubject[];
}

export class Course implements ICourse {
  constructor(
    public id?: string,
    public courseName?: string,
    public type?: string,
    public durationYear?: number,
    public courseTeachers?: ITeacher[],
    public courseSubjects?: ISubject[]
  ) {}
}
