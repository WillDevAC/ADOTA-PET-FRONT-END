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
