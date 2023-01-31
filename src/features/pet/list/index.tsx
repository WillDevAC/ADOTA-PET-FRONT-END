import React, { useContext, useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Grid } from "./styles";

import { PET } from "../../../@types/pet.type";
import { PetInfoCard } from "../../../components/cards/pet_info";
import { FilterContext } from "../../../context/filter.context";

export const ListPetsFeature: React.FC = () => {
  const [pets, setPets] = useState([] as PET[]);

  const { filter } = useContext(FilterContext);

  const getPets = async () => {
    const response = await api.get("/pet/");
    return response;
  };

  const getFilter = async () => {
    const filteredObject = Object.entries(filter).reduce(
      (acc, [key, value]) => {
        if (
          (Array.isArray(value) && value.length > 0) ||
          (typeof value === "string" && value)
        ) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    Object.keys(filteredObject).length > 0 ? filteredObject : {};

    console.log(filteredObject)
  };

  useEffect(() => {
    getPets().then((response) => setPets(response.data));
  }, []);

  useEffect(() => {
    getFilter();
  }, [filter]);

  return (
    <Grid>
      {pets.map((pet, key) => (
        <PetInfoCard
          id={pet.id}
          key={key}
          ong={pet.user}
          pet={pet.name}
          location="RIO BRANCO, AC"
        />
      ))}
    </Grid>
  );
};
