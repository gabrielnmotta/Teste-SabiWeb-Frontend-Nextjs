export interface CustomersTypeI {
  TECL_ID: number;
  TECL_NOME: string;
  TECL_ENDERECO: string;
  TECL_CIDADE: string;
  TECL_UF: string;
  TECL_TELEFONE: string;
}

export interface customersContextI {
  customers: CustomersTypeI[];
  setCustomers: (value: CustomersTypeI[]) => void;
  addCustomer: (value: CustomersTypeI) => void;
  EditCustomer: (value: CustomersTypeI) => void;
  DeleteCustomer: (value: CustomersTypeI) => void;
  fetchCustomers: () => void;
}

export interface DefaultContextProps {
  children: React.ReactNode;
}
