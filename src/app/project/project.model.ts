export interface IProject {
  id?: string;
  projectName?: string;
  projectAlias?: string;
  companyName?: string;
  companyAddress?: string;
  state?: string;
  city?: string;
  zip?: string;
  personnelProject?: boolean;
  projectTeam?: IProjectTeam[];
}

export class Project implements IProject {
  constructor(
    public id?: string,
    public projectName?: string,
    public projectAlias?: string,
    public companyName?: string,
    public companyAddress?: string,
    public city?: string,
    public state?: string,
    public zip?: string,
    public personnelProject?: boolean,
    public projectTeam?: IProjectTeam[]
  ) {}
}

export interface IProjectTeam {
  id?: string;
  specialization?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
}

export class ProjectTeam implements IProjectTeam {
  constructor(
    public id?: string,
    public specialization?: string,
    public name?: string,
    public startDate?: string,
    public endDate?: string
  ) {}
}
