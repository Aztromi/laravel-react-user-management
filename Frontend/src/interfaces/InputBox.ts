export interface FormValue {
  full_name: string;
  email: string;
  roles: string[];
}

export interface InputBoxProps {
  placeholder: string;
  type: "text" | "email" | "role";
  value: FormValue;
  setValue: React.Dispatch<React.SetStateAction<FormValue>>;
}
