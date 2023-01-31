import { useEffect, useState } from "react";
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
import { Button } from "../../../theme/ui/buttons";

export const FilterPetsFeature = () => {
  const [ loading, setLoading ] = useState(false);
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

  const getCategories = async () => {
    setLoading(true);
    const response = await api.get("/pet/options");
    setSpecies(response.data.specie);
    setSizes(response.data.size);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <CardFilter>
        <CardFilterHeader>Espécie</CardFilterHeader>
        <CardFilterBody>
          {species.map((specie, key) => (
            <GroupInput key={key}>
              <Input type="checkbox" size="checkbox" />
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
              <Input type="checkbox" size="checkbox" />
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
              <Input type="checkbox" size="checkbox" />
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
