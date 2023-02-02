import {
  Card,
  Header,
  Body,
  PetName,
  PetOng,
  PetMoreDetails,
  Address,
  Sex,
  PetAdoption,
  AddFavorite,
} from "./styles";

import { useState } from "react";
import { Button } from "../../../theme/ui/buttons";
import { AiOutlineStar } from "react-icons/ai";
import { TUser } from "../../../@types/user.type";
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { ColorRing } from "react-loader-spinner";

interface IPetCard {
  id: string | number;
  profilePicture: string;
  ong: TUser;
  pet: string;
  sex: string;
}

export const PetCard = ({ id, profilePicture, ong, pet, sex }: IPetCard) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card>
      <Header>
        {!isImageLoaded && <ColorRing width="20" />}
        <img
          src={`https://adota-pet-production.up.railway.app/pet/image/${profilePicture}`}
          alt={pet}
          onLoad={() => setIsImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
      </Header>
      <Body>
        <PetOng>{ong.name}</PetOng>
        <PetName>{pet}</PetName>
        <PetMoreDetails>
          <Address>RIO BRANCO, ACRE</Address>
          <Sex>
            {sex === 'Macho' ? (
              <BsGenderMale size={20} color="#17479E" title={sex} />
            ) : (
              <BsGenderFemale size={20} color="#F6A5AB" title={sex} />
            )}
          </Sex>
        </PetMoreDetails>
        <PetAdoption>
          <Button size="card">Adotar</Button>
          <AddFavorite title="Adicionar aos favoritos">
            <AiOutlineStar size={20} />
          </AddFavorite>
        </PetAdoption>
      </Body>
    </Card>
  );
};
