export interface HeaderI {
  headerType: "main" | "variant";
  title?: string;
}

interface RequestsI {
  total: number;
  suggestions: number;
  conflicts: number;
  cancel: number;
  displacement: number;
  other: number;
}

export interface GlobalContextI {
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  header: HeaderI;
  setHeader: (header: HeaderI) => void;
  requests: RequestsI | undefined;
  setRequests: React.Dispatch<React.SetStateAction<RequestsI | undefined>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
