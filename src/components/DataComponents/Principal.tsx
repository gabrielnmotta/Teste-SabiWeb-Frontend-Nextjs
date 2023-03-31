import { FileArrowDown } from "phosphor-react";
import { ToastContainer } from "react-toastify";
import Button from "../FormsComponents/Button";
import * as XLSX from "xlsx";
import { useState } from "react";
import Table from "../Lib/Table";
import { cpfMask, phoneMask } from "../../utils/masks";
import { CustomersTypeI } from "../../context/Data/types";
import SearchAndAddInput from "../Lib/SearchAndAddInput";
import { useCustomers } from "../../context/Data";
import useGlobalContext from "../../context/GlobalContext";

const Principal = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const { setModalOpen, setModalContent } = useGlobalContext();
  const { customers } = useCustomers();

  const filteredList =
    search.length > 0
      ? customers.filter((item) =>
          item["TECL_NOME"].toLowerCase().includes(search.toLowerCase())
        )
      : customers;

  const downloadExcel = (data: CustomersTypeI[]) => {
    const list: any = [];
    data.map((i) => {
      list.push({
        Nome: i.TECL_NOME,
        Endereço: i.TECL_ENDERECO,
        Cidade: i.TECL_CIDADE,
        UF: i.TECL_UF,
        Telefone: i.TECL_TELEFONE,
      });
    });
    var Heading = [["Nome", "Endereço", "Cidade", "UF", "Telefone"]];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.sheet_add_aoa(workbook, Heading);
    const worksheet = XLSX.utils.sheet_add_json(workbook, list, {
      origin: "A2",
      skipHeader: true,
    });
    XLSX.utils.book_append_sheet(workbook, worksheet, "Lista de Clientes");
    XLSX.writeFile(workbook, "Lista de Clientes.xlsx");
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <SearchAndAddInput
          setSearch={(e) => {
            setSearch(e);
          }}
          inputPlaceholder="Filtrar Nome"
          flsValue={customers.length}
          buttonTitle="Novo Cliente"
          buttonFunction={() => {
            setModalOpen(true);
            setModalContent(<></>);
          }}
        />
        <Button onClick={() => downloadExcel(customers)}>
          <FileArrowDown weight="fill" />
        </Button>
      </div>
      <div>
        <Table
          data={filteredList}
          listInfos={[
            {
              subtitle: "Nome",
              dataKey: "TECL_NOME",
            },
            {
              subtitle: "Endereço",
              dataKey: "TECL_ENDERECO",
            },
            {
              subtitle: "Endereço",
              dataKey: "TECL_CIDADE",
            },
            {
              subtitle: "Endereço",
              dataKey: "TECL_UF",
            },
            {
              subtitle: "Telefone",
              dataKey: "TECL_TELEFONE",
              mask: (e: string) => phoneMask(e),
            },
          ]}
        />
      </div>

      <ToastContainer />
    </>
  );
};

export default Principal;
