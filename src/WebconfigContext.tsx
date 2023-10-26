import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

// Define el tipo para el contexto de Webconfig
interface WebconfigContextType {
  idiomValue: number;
  pagValue: number;
  setIdiomValue: Dispatch<SetStateAction<number>>;
  setPagValue: Dispatch<SetStateAction<number>>;
}

// Crea el contexto de Webconfig
const WebconfigContext = createContext<WebconfigContextType>({
  idiomValue: 0,
  pagValue: 0,
  setIdiomValue: () => {},
  setPagValue: () => {},
});

// Proveedor de Webconfig
export function WebconfigProvider({ children }: { children: ReactNode }) {
  const [idiomValue, setIdiomValue] = useState<number>(0);
  const [pagValue, setPagValue] = useState<number>(0);

  return <WebconfigContext.Provider value={{ idiomValue, pagValue, setIdiomValue, setPagValue }}>{children}</WebconfigContext.Provider>;
}

// Función personalizada para acceder al contexto
export function useWebconfig() {
  const context = useContext(WebconfigContext);
  return context;
}
