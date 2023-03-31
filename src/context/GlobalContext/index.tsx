import React, { createContext, useState } from "react";
import { DefaultContextProps } from "../types";
import { GlobalContextI, HeaderI } from "./type";

//Context para definir conteúdo do modal, se está aberto ou fechado
//Definir o header da página

const GlobalContext = createContext<GlobalContextI>({
  modalContent: null,
  setModalContent: () => null,
  modalOpen: false,
  setModalOpen: () => null,
  header: {
    headerType: "main",
  },
  setHeader: () => {},
  setRequests: () => null,
  requests: undefined,
  edit: false,
  setEdit: () => null,
});

export const GlobalProvider = ({ children }: DefaultContextProps) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [header, setHeader] = useState<HeaderI>({ headerType: "main" });
  const [requests, setRequests] =
    useState<GlobalContextI["requests"]>(undefined);

  return (
    <GlobalContext.Provider
      value={{
        modalContent,
        setModalContent,
        modalOpen,
        setModalOpen,
        header,
        setHeader,
        requests,
        setRequests,
        edit,
        setEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobalContext(): GlobalContextI {
  const context = React.useContext(GlobalContext);
  if (!context) {
    new Error("useAccess must be used within a AccessProvider");
  }
  return context;
}
