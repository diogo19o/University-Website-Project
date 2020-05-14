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
    public personnelProject?: boolean
  ) {}
}
