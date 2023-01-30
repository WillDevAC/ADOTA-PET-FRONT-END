import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import { Container, Hamburguer, Links, Options, Notifications } from "./styles";

import { Button } from "../../../theme/ui/buttons";

import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { UserLogged } from "../../cards/userLogged";

import Logo from '../../../assets/logo.svg';

interface IHeader {
  path?: string;
}

export const Header = ({ path }: IHeader) => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Hamburguer>
        <AiOutlineMenu size={20} color="#fe2c55" />
      </Hamburguer>
      <Links>
        <img src={Logo} alt="Logo do site" />
      </Links>
      <Options>
        {path === "/auth/" && !authenticated && (
          <Button onClick={() => navigate(-1)} size="medium" type="outline">
            Voltar para home
          </Button>
        )}

        {path !== "/auth/" && !authenticated && (
          <>
            <Button
              onClick={() => navigate("/auth/register")}
              size="small"
              type="outline"
            >
              Cadastro
            </Button>
            <Button
              onClick={() => navigate("/auth/login")}
              size="small"
              type="default"
            >
              Entrar
            </Button>
          </>
        )}

        {authenticated && <UserLogged />}
      </Options>
      <Notifications>
        <IoMdNotificationsOutline size={24} color="#fe2c55" />
      </Notifications>
    </Container>
  );
};
