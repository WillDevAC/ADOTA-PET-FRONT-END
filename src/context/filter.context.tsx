import { createContext, useState } from "react";

type IFilter = {
  race: [];
  size: [];
  sex: string;
}

type FilterContextType = {
  setFilter: Function;
  filter: IFilter;
};

type FilterProviderProps = {
  children?: React.ReactNode;
};



export const FilterContext = createContext({} as FilterContextType);

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<IFilter>({
    race: [],
    size: [],
    sex: "",
  });

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}
