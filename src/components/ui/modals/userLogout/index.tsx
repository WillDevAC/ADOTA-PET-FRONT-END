import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useContext } from "react";
import { AuthContext } from "../../../../context/auth.context";

import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Button,
  Flex,
} from "./styles";

interface IUserLogoutModal {
  children?: React.ReactNode;
}

export const UserLogoutModal = ({ children }: IUserLogoutModal) => {
  const { Logout } = useContext(AuthContext);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>Desconectar do adotapet?</AlertDialogTitle>
          <br />
          <AlertDialogDescription>
            Você poderá entrar novamente a qualquer momento. Se quiser trocar de
            conta, faça isso adicionando uma conta existente.
          </AlertDialogDescription>
          <Flex css={{ justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <Button variant="mauve" css={{ marginRight: 25 }}>
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="red" onClick={() => Logout()}>
                Sim, desconectar
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
