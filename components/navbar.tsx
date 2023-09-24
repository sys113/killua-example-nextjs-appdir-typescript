'use client';

import { Button } from '@nextui-org/button';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NavbarNextUI,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import ModalYourCart from './modalYourCart';
import { useKillua } from 'killua';
import { thunderCart } from '@/thunders/cart';

export default function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    thunder: thunderCartState,
    isReadyInSsr: thunderCartIsReadyInSsr,
  } = useKillua(thunderCart);

  return (
    <>
      <ModalYourCart
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
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
            <div className="relative">
              {thunderCartIsReadyInSsr && (
                <p className="text-white absolute z-20 -right-2.5 -top-2.5 border border-black text-sm font-semibold bg-success w-[28px] h-[28px] flex justify-center items-center rounded-full">
                  {thunderCartState.length}
                </p>
              )}
            </div>
            <Button
              onPress={() => setIsOpenModal(true)}
              size="lg"
              color="success"
              radius="sm"
              className="font-semibold"
            >
              Your cart
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarNextUI>
    </>
  );
}
