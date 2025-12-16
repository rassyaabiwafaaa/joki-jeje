import Link from "next/link";

const menus = [
  { label: "Beranda", href: "/" },
  { label: "Paket Joki", href: "#paket" },
  { label: "Kalkulator Rank", href: "#kalkulator" },
];

type Props = {
  isMobile?: boolean;
};

export default function NavbarMenu({ isMobile = false }: Props) {
  return (
    <ul
      className={
        isMobile
          ? "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          : "menu menu-horizontal px-1"
      }
    >
      {menus.map((menu) => (
        <li key={menu.label}>
          <Link href={`#${menu.label}`} >{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
}
