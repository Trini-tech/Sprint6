import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { Service } from "../types/types";

// Define el tipo para el contexto
interface configContextType {
  services: Service[];
  idiomValue: number;
  pagValue: number;
  name: string;
  phoneNumber: string;
  email: string;
  total: number;
  arrayinputs: { name: string; phoneNumber: string; email: string; total: number; checkedState: boolean[]; idiomValue: number; pagValue: number }[];
  checkedState: boolean[];
  setIdiomValue: Dispatch<SetStateAction<number>>;
  setPagValue: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setArrayInputs: Dispatch<
    SetStateAction<
      {
        name: string;
        phoneNumber: string;
        email: string;
        total: number;
        checkedState: boolean[];
        idiomValue: number;
        pagValue: number;
      }[]
    >
  >;
  setTotal: Dispatch<SetStateAction<number>>;
  setCheckedState: Dispatch<SetStateAction<boolean[]>>;
}

// Crea el contexto
const MyContext = createContext<configContextType>({
  services: [],
  idiomValue: 0,
  pagValue: 0,
  name: "",
  phoneNumber: "",
  email: "",
  total: 0,
  arrayinputs: [],
  checkedState: [],
  setIdiomValue: () => {},
  setPagValue: () => {},
  setName: () => {},
  setPhoneNumber: () => {},
  setEmail: () => {},
  setArrayInputs: () => {},
  setTotal: () => {},
  setCheckedState: () => {},
});

// Proveedor del contexto
export function MyContextProvider({ children, services }: { children: ReactNode; services: Service[] }) {
  const [idiomValue, setIdiomValue] = useState<number>(0);
  const [pagValue, setPagValue] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [arrayinputs, setArrayInputs] = useState<{ name: string; phoneNumber: string; email: string; total: number; checkedState: boolean[]; idiomValue: number; pagValue: number }[]>([]);

  const newarray = new Array(services.length).fill(false);
  const [checkedState, setCheckedState] = useState(newarray);

  return <MyContext.Provider value={{ services, idiomValue, setIdiomValue, pagValue, setPagValue, name, setName, phoneNumber, setPhoneNumber, email, setEmail, total, setTotal, arrayinputs, setArrayInputs, checkedState, setCheckedState }}>{children}</MyContext.Provider>;
}

// Función personalizada para acceder al contexto
export function useMyContext() {
  const context = useContext(MyContext);
  return context;
}
