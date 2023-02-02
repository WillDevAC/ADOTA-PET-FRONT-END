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

import { Button } from "../../../theme/ui/buttons";
import { AiOutlineStar } from "react-icons/ai";
import { TUser } from "../../../@types/user.type";

interface IPetCard {
  id: string | number;
  profilePicture: string;
  ong: TUser;
  pet: string;
  sex: string;
}

export const PetCard = ({ id, profilePicture, ong, pet, sex }: IPetCard) => {
  return (
    <Card>
      <Header>
        <img src={profilePicture} alt={pet} />
      </Header>
      <Body>
        <PetOng>{ong.name}</PetOng>
        <PetName>{pet}</PetName>
        <PetMoreDetails>
          <Address>RIO BRANCO, ACRE</Address>
          <Sex>{sex}</Sex>
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
