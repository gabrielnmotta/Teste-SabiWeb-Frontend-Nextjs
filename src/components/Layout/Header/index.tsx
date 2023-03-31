import { ArrowLeft, Calendar } from "iconsax-react";
import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full min-h-[5rem] h-20 overflow-hidden flex border-b-[1px] border-neutral-200">
      <div className="h-full w-40 ">
        <img src="/Layout/saib.svg" alt="saibweb" className=" " />
      </div>
      <div className="flex-1 flex items-center justify-between px-8">
        <div className="flex items-center gap-2 text-title4">
          <>
            <Calendar />
            <h1 className="font-medium">{moment().format("LL")}</h1>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
