export interface ISubject {
  id?: string;
  subjectName?: string;
  type?: string;
}

export class Subject implements ISubject {
  constructor(
    public id?: string,
    public subjectName?: string,
    public type?: string
  ) {}
}
