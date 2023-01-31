import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Grid } from "./styles";

import { PET } from "../../../@types/pet.type";
import { PetInfoCard } from "../../../components/cards/pet_info";

export const ListPetsFeature: React.FC = () => {
  const [pets, setPets] = useState([] as PET[]);

  const getPets = async () => {
    const response = await api.get("/pet/");
    return response;
  };

  useEffect(() => {
    getPets().then((response) => setPets(response.data));
  }, []);

  return (
    <Grid>
        { pets.map((pet) => <PetInfoCard ong={pet.user} pet={pet.name} location="RIO BRANCO, AC"/>) }
      
    </Grid>
  );
};
