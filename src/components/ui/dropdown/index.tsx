import React from "react";

import { useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface IProfileProps {
  children: React.ReactNode;
}

import {
  DropdownMenuContent,
  DropdownMenuArrow,
  DropdownMenuItem,
} from "./styles";

import { UserLogoutModal } from "../modals/userLogout";

export const Dropdown = ({ children }: IProfileProps) => {
  
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem onClick={() => navigate('/my-account/')}>Minha conta</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/my-favorites/')}>Favoritos</DropdownMenuItem>
          <UserLogoutModal>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </UserLogoutModal>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
