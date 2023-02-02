import { TUser } from "./user.type"

export interface IPet {
    id: number
    name: string
    tag: string
    description: string
    age: any
    hasOwner: boolean
    lost: boolean
    active: boolean
    profilePicture: string
    createdAt: any
    updatedAt: any
    deletedAt: any
    user: TUser
    color: Color
    size: Size
    race: Race
    specie: Specie
    sex: string
}

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

export interface Color {
    id: number
    colorName: string
    colorHexadecimal: string
}

export interface Size {
    id: number
    sizeName: string
}

export interface Race {
    id: number
    raceName: string
    specie: Specie
}

export interface Specie {
    id: number
    specieName: string
}
