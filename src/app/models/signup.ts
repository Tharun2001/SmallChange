export class SignUp {
  constructor(
  public email: string = '',
  public password: string = '',
  public cpassword: string = '',
  public firstName: string = '',
  public lastName: string = '',
  public dob: Date,
  public phone: number,
  public risk: number,
  )
  { }
}
