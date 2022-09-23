import { ClientIdentification } from "./client-identification";

export class User {
  public token: number = NaN;
  constructor(public clientId: number, public email: string, public fName: string, public lName: string, public username: string, public password: string, public dateOfBirth: Date, public phone: string, public risk:number) { }

  setToken(t: number) {
    this.token = t
  }


  getToken(): number {
    return this.token
  }
}

