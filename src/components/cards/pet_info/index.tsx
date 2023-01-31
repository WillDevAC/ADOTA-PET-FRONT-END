import { useNavigate } from "react-router-dom";
import { TUser } from "../../../@types/user.type";
import { Button } from "../../../theme/ui/buttons";

import {
  Card,
  CardImage,
  CardDetails,
  Ong,
  NamePet,
  Location,
  CardAction,
  PetSex,
} from "./styles";

interface IPetCard {
  id: number | string;
  src?: string;
  ong: TUser[];
  pet: string;
  location?: string;
}

export const PetInfoCard = ({ src, ong, pet, location, id }: IPetCard) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardImage>
        <img
          src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
          alt="Animal para adoção"
        />
      </CardImage>
      <CardDetails>
        {/* @ts-ignore */}
        <Ong>{ong.name} </Ong>
        <NamePet>{pet}</NamePet>
        <Location>
          {location}
          <PetSex>M</PetSex>
        </Location>
      </CardDetails>
      <CardAction>
        <Button size="full" onClick={() => navigate(`/pet/details/${id}`)}>
          Adotar
        </Button>
      </CardAction>
    </Card>
  );
};
