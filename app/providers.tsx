'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SSRKilluaProvider } from 'killua';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SSRKilluaProvider>{children}</SSRKilluaProvider>
    </NextUIProvider>
  );
}
