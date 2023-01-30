export type TUser = {
    active: boolean;
    cpf: string;
    createdAt: Date;
    deletedAt: string | null;
    email: string;
    id: number;
    name: string;
    phone: string;
    profilePicture: string | null;
    role: string;
    updatedAt: string;
    verified: boolean;
  };