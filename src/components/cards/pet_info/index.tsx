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
} from "./styles";

interface IPetCard {
  src?: string;
  ong: TUser;
  pet: string;
  location?: string;
}

export const PetInfoCard = ({ src, ong, pet, location }: IPetCard) => {
  return (
    <Card>
      <CardImage>
        <img
          src="https://lottserves.org/wp-content/uploads/2017/10/500x500.png"
          alt="Animal para adoção"
        />
      </CardImage>
      <CardDetails>
        <Ong>{ong.name}</Ong>
        <NamePet>{pet}</NamePet>
        <Location>{location}</Location>
      </CardDetails>
      <CardAction>
        <Button size="full">Adotar</Button>
      </CardAction>
    </Card>
  );
};
