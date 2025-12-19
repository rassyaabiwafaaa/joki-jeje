// NavbarMenu.tsx
import Link from "next/link";

const menus = [
  { label: "Beranda", href: "/" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "Paket Joki", href: "#paket" },
  { label: "Kalkulator Rank", href: "#kalkulator" },
];

// Tambahkan ini agar error "Cannot find name 'Props'" hilang
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
          <Link href={menu.href}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
}