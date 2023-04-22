export interface ISignUpFormData {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  repeatEmail: string;
  dateOfBirth: Date;
  image?: string;
}
export interface ISignUpRequestData {
  username: string;
  password: string;
  email: string;
  dateOfBirth: Date;
  timeStamp: object;
}
