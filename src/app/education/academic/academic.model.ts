export interface IAcademic {
  id?: string;
  educationalInstitution?: string;
  formation?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  grade?: string;
  activities?: string;
  description?: string;
}

export class Academic implements IAcademic {
  constructor(
    public id?: string,
    public educationalInstitution?: string,
    public formation?: string,
    public fieldOfStudy?: string,
    public startDate?: string,
    public endDate?: string,
    public grade?: string,
    public activities?: string,
    public description?: string
  ) {}
}
