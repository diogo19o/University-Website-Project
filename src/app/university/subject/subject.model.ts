import {ICourse} from '../course/course.model';

export interface ISubject {
  id?: string;
  subjectName?: string;
  type?: string;
  subjectCourses?: ICourse[];
  modifiedDate?: number;
}

export class Subject implements ISubject {
  constructor(
    public id?: string,
    public subjectName?: string,
    public type?: string,
    public subjectCourses?: ICourse[],
    public modifiedDate?: number
) {}
}
