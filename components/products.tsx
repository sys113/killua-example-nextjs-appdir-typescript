'use client';

import productsData from '@/resources/productsData';
import { thunderCart } from '@/thunders/cart';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useKillua } from 'killua';
import dynamic from 'next/dynamic';
const DynamicButton = dynamic(
  () => import('@nextui-org/button').then((module) => module.Button),
  { ssr: false },
);

export default function Products() {
  const {
    reducers: thunderCartReducers,
    selectors: thunderCartSelectors,
    isReadyInSsr: thunderCartIsReadyInSsr,
  } = useKillua(thunderCart);

  return (
    <section>
      <div className="container pb-5 gap-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productsData.map((item, index) => (
          <Card
            shadow="md"
            key={index}
            isPressable
            className="border border-[#444]"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="w-full gap-3 flex flex-col items-end">
              <div className="text-large mt-1 flex justify-between w-full">
                <b>{item.title}</b>
                <p className="text-default-600">${item.price}</p>
              </div>
              {thunderCartIsReadyInSsr &&
                (thunderCartSelectors.isInCart(item.id) ? (
                  <DynamicButton
                    size="md"
                    color="danger"
                    radius="sm"
                    className="font-medium w-full h-12"
                    onPress={() => thunderCartReducers.removeFromCart(item.id)}
                  >
                    Remove from cart
                  </DynamicButton>
                ) : (
                  <DynamicButton
                    size="md"
                    color="success"
                    radius="sm"
                    className="font-medium w-full h-12"
                    onPress={() => thunderCartReducers.addToCart(item)}
                  >
                    Add to cart
                  </DynamicButton>
                ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
