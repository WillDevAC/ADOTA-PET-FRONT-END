export type TUser = {
  id: number
  email: string
  name: string
  cpf: string
  phone: string
  birthDate: any
  job: any
  address: Address
  income: any
  typeResidence: any
  freeTime: any
  childAtHome: any
  petAtHome: any
  age: any
  sex: string
  verified: boolean
  active: boolean
  profilePicture: any
  createdAt: string
  updatedAt: string
  deletedAt: any
  role: string
  enabled: boolean
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  username: string
  authorities: Authority[]
};

export interface Address {
  id: number
  title: any
  fullAddress: string
  description: any
  cep: string
  latitude: number
  longitude: number
}

export interface Authority {
  authority: string
}