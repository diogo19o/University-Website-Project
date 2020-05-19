export interface ICertification {
  id?: string;
  certName?: string;
  issuingOrg?: string;
  expires?: boolean;
  issuingDate?: string;
  expireDate?: string;
  certCode?: string;
  certUrl?: string
}

export class Certification implements ICertification {
  constructor(
    public id?: string,
    public certName?: string,
    public issuingOrg?: string,
    public expires?: boolean,
    public issuingDate?: string,
    public expireDate?: string,
    public certCode?: string,
    public certUrl?: string
  ) {}
}
