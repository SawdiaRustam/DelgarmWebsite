import Link from "next/link";
import React from "react";
import {HEADER} from '../../components/constants/HeaderMenu'

const MobileNav = () => {
  return (
    <div
      className={` w-full flex flex-col justify-start items-start p-4   rounded-md `}
    >
      {HEADER.map((menu) => {
        return (
          <Link href={menu.url} key={menu.url}>
            <a className="text-lg  text-blue-800 hover:text-black transition-all">
              {menu.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
