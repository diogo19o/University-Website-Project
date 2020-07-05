export interface ITeacher {
  id?: string;
  teacherName?: string;
  teacherSpecialization?: string;
  startDate?: string;
  endDate?: string;
  modifiedDate?: number;
}

export class Teacher implements ITeacher {
  constructor(
    public id?: string,
    public teacherName?: string,
    public teacherSpecialization?: string,
    public startDate?: string,
    public endDate?: string,
    public modifiedDate?: number
  ) {}
}
