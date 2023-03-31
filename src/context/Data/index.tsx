import { createContext, useContext, useEffect, useState } from "react";
import api from "../../api/api";
import { customersContextI, CustomersTypeI } from "./types";
import { DefaultContextProps } from "./types";
export const CustomersContext = createContext<customersContextI>(
  {} as customersContextI
);

export const CustomersProvider = ({ children }: DefaultContextProps) => {
  const [customers, setCustomers] = useState<CustomersTypeI[]>([]);

  const fetchCustomers = async () => {
    try {
      const res = await api.get("/v1/teste/clientes");
      setCustomers(res.data.data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  };

  const addCustomer = async (customer) => {
    try {
      const res = await api.post("/v1/teste/cliente", customer);
      if (res.data.sucess) {
        setCustomers([...customers, res.data.data]);
        alert("Cliente registrado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  };

  const EditCustomer = async (customer) => {
    try {
      const res = await api.put("/v1/teste/cliente", customer);
      if (res.data.sucess) {
        setCustomers([...customers, res.data.data]);
        alert("Cliente editado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  };

  const DeleteCustomer = async (id) => {
    try {
      const res = await api.delete(`/v1/teste/cliente/${id}`);
      if (res.data.sucess) {
        alert("Cliente deleteado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  console.log(customers);

  return (
    <CustomersContext.Provider
      value={{
        customers,
        addCustomer,
        EditCustomer,
        DeleteCustomer,
        fetchCustomers,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export function useCustomers() {
  const context = useContext(CustomersContext);
  if (!context) throw new Error("error");
  return context;
}
