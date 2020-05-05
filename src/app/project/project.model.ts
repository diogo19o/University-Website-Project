export interface IProject {
  id?: number;
  projectName?: string;
  projectAlias?: string;
  companyName?: string;
  companyAddress?: string;
  state?: string;
  city?: string;
  zip?: string;
}

export class Project implements IProject {
  constructor(
    public id?: number,
    public projectName?: string,
    public projectAlias?: string,
    public companyName?: string,
    public companyAddress?: string,
    public city?: string,
    public state?: string,
    public zip?: string
  ) {}
}
