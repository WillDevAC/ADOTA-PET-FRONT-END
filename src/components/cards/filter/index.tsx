import { useEffect, useState } from "react";
import { Size } from "../../../@types/filter.type";
import { Specie } from "../../../@types/pet.type";
import { Input } from "../../../theme/ui/inputs";

import {
  CardFilter,
  CardFilterHeader,
  CardFilterBody,
  GroupInput,
} from "./styles";

interface IFilterCard {
  title: string;
  options: string[] | Size[] | Specie[];
}

export const FilterCard = ({ title, options }: IFilterCard) => {
  const [filterObject, setFilterObject] = useState({
    size: [],
    sex: [],
    specie: [],
  });

  const handleFilterChange = (name: string, value: string | number | object) => {
    const updatedFilterObject = { ...filterObject };
    if (!updatedFilterObject[name].includes(value)) {
      updatedFilterObject[name].push(value);
    } else {
      updatedFilterObject[name] = updatedFilterObject[name].filter(
        item => JSON.stringify(item) !== JSON.stringify(value)
      );
    }
    setFilterObject(updatedFilterObject);
  };

  useEffect(() => {
    console.log(filterObject);
  }, [filterObject])

  return (
    <CardFilter>
      <CardFilterHeader>{title}</CardFilterHeader>
      <CardFilterBody>
        {title == "Sexo" &&
          Array.from(options as string[]).map((res, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={res}
                onChange={(e) => handleFilterChange("sex", res)}
              />{" "}
              {res}
            </GroupInput>
          ))}
        {title == "Porte" &&
          Array.from(options as Size[]).map((res, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={res.sizeName}
                onChange={(e) => handleFilterChange("size", {id: res.id})}
              />{" "}
              {res.sizeName}
            </GroupInput>
          ))}
        {title == "Espécie" &&
          Array.from(options as Specie[]).map((res, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={res.specieName}
                onChange={(e) => handleFilterChange("specie", {id: res.id})}
              />
              {res.specieName}
            </GroupInput>
          ))}
      </CardFilterBody>
    </CardFilter>
  );
};
