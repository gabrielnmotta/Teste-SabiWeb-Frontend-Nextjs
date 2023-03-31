import { getAuth, signOut } from "firebase/auth";
import { Icon } from "iconsax-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const SideBar = () => {
  const [menu, setMenu] = useState<string[]>([]);
  useEffect(() => {
    getMenuOnLocalStorage();
  }, []);
  const router = useRouter();
  const getMenuOnLocalStorage = () => {
    const menu = localStorage.getItem("menu");
    if (menu) {
      setMenu(JSON.parse(menu));
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    router.push("/");
  };

  return (
    <nav className="flex flex-col w-40 max-w-[10rem] h-full border-r-[1px] border-neutral-200 pt-8 ">
      <p className="text-body ml-4 mb-3">Menu</p>
      <div className="flex gap-6 flex-col w-full ml-2">
        {menu.map((item, index) => (
          <MenuItem route={item} label={arrMenu[item]} key={index} />
        ))}
        <div
          className={
            "flex w-full cursor-pointer transition-all items-center justify-start text-neutral-600 hover:text-primary-900"
          }
          onClick={handleLogout}
        >
          <span
            className={
              "mr-2 h-full rounded-full w-1 transition-all delay-200 bg-primary-1100 opacity-100"
            }
          />
          <p className="text-base ml-2 flex-1">Sair</p>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;

const arrMenu = {};
