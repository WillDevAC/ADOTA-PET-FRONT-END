import { Container, Details, Photo, Action } from "./styles";

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
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Profile photo"
          />
        </Photo>
        <Details>
          <span>Bem vindo,</span>
          <h3>
            {user?.name.split(" ")[0]} {user?.name.split(" ")[1][1]}.
          </h3>
        </Details>
        <Action>
          <IoIosArrowDown size={11} />
        </Action>
      </Container>
    </Dropdown>
    
  ); 
};
