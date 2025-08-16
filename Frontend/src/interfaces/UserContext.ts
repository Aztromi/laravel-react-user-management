import type { User } from "./User";

export interface UserFormContextType {
  value: {
    full_name: string;
    email: string;
    roles: string[];
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      full_name: string;
      email: string;
      roles: string[];
    }>
  >;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  tableData: User[];
  selectedRole: string;
  setSelectedRole: React.Dispatch<React.SetStateAction<any>>;
}
