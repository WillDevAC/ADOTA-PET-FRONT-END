import React, { useEffect, useState } from "react";
import { IPet } from "../../../@types/pet.type";
import { PetCard } from "../../../components/cards/pet";
import { api } from "../../../services/api";

import { Grid } from "./styles";

export const ListPetsFeature: React.FC = () => {
  const [pets, setPets] = useState<IPet[]>([]);

  const getPets = () => {
    const response = api.get("/pet/");
    return response;
  };

  useEffect(() => {
    getPets().then((pets) => {
      setPets(pets.data);
    });
  }, []);

  return (
    <Grid>
      {pets.map((pet, key) => (
        <PetCard
          key={key}
          id={pet.id}
          profilePicture={pet.profilePicture}
          ong={pet.user}
          pet={pet.name}
          sex={pet.sex}
        />
      ))}
    </Grid>
  );
};
