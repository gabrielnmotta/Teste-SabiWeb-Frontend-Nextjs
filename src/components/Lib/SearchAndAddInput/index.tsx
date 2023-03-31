import { MagnifyingGlass, Plus } from "phosphor-react";
import Button from "../../FormsComponents/Button";
import FalseInput from "../../FormsComponents/FalseInput";
import Input from "../../FormsComponents/Input";

interface SearchAndAddInputI {
  setSearch: (v: string) => void;
  buttonFunction?: () => void;
  inputPlaceholder: string;
  buttonTitle?: string;
  flsValue?: number;
}

const SearchAndAddInput = ({
  setSearch,
  buttonFunction,
  inputPlaceholder,
  buttonTitle,
  flsValue,
}: SearchAndAddInputI) => {
  return (
    <div className="flex items-center justify-between my-4 flex-1">
      <Input
        containerStyle="min-w-[30rem]"
        placeholder={inputPlaceholder}
        onChange={(e) => setSearch(e.target.value)}
      >
        <MagnifyingGlass />
      </Input>

      {buttonTitle && (
        <div className="flex gap-2">
          <FalseInput
            value={flsValue == undefined ? "Qtd: 0" : "Qtd: " + flsValue}
            containerStyle="w-[6.5rem]"
          />
          <Button
            title={buttonTitle}
            containerStyle="px-4"
            onClick={buttonFunction}
          >
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchAndAddInput;
