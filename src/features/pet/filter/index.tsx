import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/api";

import {
  CardFilter,
  CardFilterBody,
  CardFilterHeader,
  Container,
  GroupInput,
} from "./styles";

import { TSizes, TSpecies } from "../../../@types/pet.type";
import { Input } from "../../../theme/ui/inputs";
import { FilterContext } from "../../../context/filter.context";

export const FilterPetsFeature = () => {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState<TSpecies[]>([]);
  const [sizes, setSizes] = useState<TSizes[]>([]);
  const [sexs, setSexs] = useState([
    {
      id: 1,
      name: "Macho",
    },
    {
      id: 2,
      name: "Fêmea",
    },
  ]);
  
  const { setFilter } = useContext(FilterContext);

  const [selectedValues, setSelectedValues] = useState({
    race: [],
    size: [],
    sex: "",
  });

  const getCategories = async () => {
    setLoading(true);
    const response = await api.get("/pet/options");
    setSpecies(response.data.specie);
    setSizes(response.data.size);
    setLoading(false);
  };

  const handleCheckboxChange = (name: string, value: number | string) => {
    if (name === "sex") {
      if (selectedValues[name]) {
        setSelectedValues({ ...selectedValues, [name]: "" });
      } else {
        setSelectedValues({ ...selectedValues, [name]: value });
      }
    } else {
      const selectedArray = selectedValues[name] as any[];
      
      const valueExists = selectedArray.find((obj) => obj.id === value);

      if (valueExists) {
        setSelectedValues({
          ...selectedValues,
          [name]: selectedArray.filter((obj) => obj.id !== value),
        });
      } else {
        setSelectedValues({
          ...selectedValues,
          [name]: [...selectedArray, { id: value }],
        });
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setFilter(selectedValues);
  }, [selectedValues]);

  return (
    <Container>
      <CardFilter>
        <CardFilterHeader>Espécie</CardFilterHeader>
        <CardFilterBody>
          {species.map((specie, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={specie.id}
                //@ts-ignore
                onChange={(e) => handleCheckboxChange("race", e.target.value)}
              />
              {specie.specieName}
            </GroupInput>
          ))}
        </CardFilterBody>
      </CardFilter>

      <CardFilter>
        <CardFilterHeader>Sexo</CardFilterHeader>
        <CardFilterBody>
          {sexs.map((sex, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={sex.name}
                onChange={(e) => handleCheckboxChange("sex", e.target.value)}
              />
              {sex.name}
            </GroupInput>
          ))}
        </CardFilterBody>
      </CardFilter>

      <CardFilter>
        <CardFilterHeader>Porte</CardFilterHeader>
        <CardFilterBody>
          {sizes.map((size, key) => (
            <GroupInput key={key}>
              <Input
                type="checkbox"
                size="checkbox"
                value={size.id}
                onChange={(e) => handleCheckboxChange("size", e.target.value)}
              />
              {size.sizeName}
            </GroupInput>
          ))}
        </CardFilterBody>
      </CardFilter>
      <div
        style={{ display: loading ? "flex" : "none" }}
        className={"loader"}
      />
    </Container>
  );
};
