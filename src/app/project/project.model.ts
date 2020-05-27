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
  projectTeamMembers?: IProjectTeamMember[];
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
    public projectTeamMembers?: IProjectTeamMember[]
  ) {}
}

export interface IProjectTeamMember {
  id?: string;
  memberSpecialization?: string;
  memberName?: string;
  startDate?: string;
  endDate?: string;
}

export class ProjectTeam implements IProjectTeamMember {
  constructor(
    public id?: string,
    public memberSpecialization?: string,
    public memberName?: string,
    public startDate?: string,
    public endDate?: string
  ) {}
}
