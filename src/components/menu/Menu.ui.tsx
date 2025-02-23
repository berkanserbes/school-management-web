import { menuItems } from "@/utils/constants/menu-item";
import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const MenuUI = () => {
  return (
    <div className="mt-4 text-sm fixed">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="flex flex-col gap-2">
          <span className="hidden lg:block my-4 font-light text-gray-400">
            {menuItem.title}
          </span>
          {menuItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex flex-row justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-200"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default MenuUI;
