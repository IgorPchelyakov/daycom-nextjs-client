export type Author = {
    id: string;
    login: string;
    email: string;
    role: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    nickName: string;
    job: string;
    city: string;
    tel: string;
    telegramLink?: string;
    facebookLink?: string;
    instagramLink?: string;
    twitterLink?: string;
    descUser: string;
    avatarUrl: string;
    accessRights: boolean;
    file?: File | null;
  };
  