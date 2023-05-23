export interface ISignIn {
  email: string
  password: string
}

export interface IChangePassword {
  email: string
  password: string
  newPassword: string
}

export interface ISignUp {
  fullName: string
  email: string
}

export interface IUser {
  id?: number
  fullName: string
  email: string
  password: string
  token: string
}
