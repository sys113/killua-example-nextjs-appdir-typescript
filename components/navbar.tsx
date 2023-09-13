import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NavbarNextUI,
} from '@nextui-org/react';
import Link from 'next/link';
import ModalYourCart from './modalYourCart';

export default function Navbar() {
  return (
    <NavbarNextUI
      shouldHideOnScroll
      maxWidth="full"
      className="container px-0 [&>header]:my-2 py-2 [&>header]:px-4 [&>header]:m-0"
    >
      <NavbarBrand className="text-white">
        <Link
          href={'https://github.com/sys113/killua'}
          className="font-bold text-2xl"
        >
          KILLUA
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModalYourCart />
        </NavbarItem>
      </NavbarContent>
    </NavbarNextUI>
  );
}