import { TUser } from "./user.type";

export interface TSpecies {
  id: number;
  specieName: string;
}

export interface TSizes {
  id: number;
  sizeName: string;
}

export interface IColors {
  id: number;
  colorName: string;
  colorHexadecimal: string;
}

export interface IRace {
  id: number;
  raceName: string;
  specie: TSpecies[];
}

export interface TSexs {
  id: number;
  name: string;
}

export interface IPetCategories {
  color: IColors[];
  specie: TSpecies[];
  size: TSizes[];
  sex: string[];
  race: IRace[];
}

export interface PET {
  active: boolean;
  color: IColors[];
  createdAt: string | null;
  deletedAt: string | null;
  description: string;
  id: string;
  lost: boolean;
  name: string;
  profilePicture: string;
  race: IRace[];
  size: TSizes[];
  specie: TSpecies[];
  tag: string;
  updatedAt: string | null;
  user: TUser[];
};
