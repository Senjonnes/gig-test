export class IUserState {
  loading!: boolean;
  type!: string;
  users!: IUser[];
}

export class IUser {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  address!: IUserAddress;
  phone!: string;
  website!: string;
  company!: IUserCompany;
}

export class IUserAddress {
  street!: string;
  suite!: string;
  city!: string;
  zipcode!: string;
  geo!: IUserGeo;
}

export class IUserCompany {
  name!: string;
  catchPhrase!: string;
  bs!: string;
}

export class IUserGeo {
  lat!: string;
  lng!: string;
}
