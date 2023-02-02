import {
  Container,
  Details,
  Photo,
  Action,
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "./styles";

import { IoIosArrowDown } from "react-icons/io";

import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { Dropdown } from "../../ui/dropdown";

export const UserLogged = () => {
  const { user } = useContext(AuthContext);

  return (
    <Dropdown>
      <Container>
        <Photo>
          <AvatarRoot>
            <AvatarImage
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt={user?.name}
            />
            <AvatarFallback delayMs={600}>
              {user?.name.split(" ")[0][0]}
              {user?.name.split(" ")[0][1]}
            </AvatarFallback>
          </AvatarRoot>
        </Photo>
        <Details>
          <span>Bem vindo,</span>
          <h3>
            {user?.name.split(" ")[0]} {user?.name.split(" ")[1][0]}.
          </h3>
        </Details>
        <Action>
          <IoIosArrowDown size={11} />
        </Action>
      </Container>
    </Dropdown>
  );
};
