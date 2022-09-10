import React, { createContext, useCallback, useContext, useState } from "react";

type NewAgedProps = {
  name?: string;
  birthdate?: string;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  contacts?: {
    type: number;
    description: string;
    name: string;
  }[];
};

interface NewAgedContextData {
  newAged: NewAgedProps | null;
  setNewAged: (newAged: NewAgedProps | null) => void;
  setProps: (newAged: NewAgedProps) => void;
}

type Props = {
  children: React.ReactNode;
};

const NewAgedContext = createContext<NewAgedContextData>(
  {} as NewAgedContextData
);

export const NewAgedProvider = ({ children }: Props) => {
  const [newAged, setNewAged] = useState<NewAgedProps | null>(null);

  const setProps = useCallback((props: NewAgedProps) => {
    setNewAged((currentState) => {
      return { ...currentState, ...props };
    });
  }, []);

  return (
    <NewAgedContext.Provider value={{ newAged, setNewAged, setProps }}>
      {children}
    </NewAgedContext.Provider>
  );
};

export function useNewAged() {
  const context = useContext(NewAgedContext);
  return context;
}
