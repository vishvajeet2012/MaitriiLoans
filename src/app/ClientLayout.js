'use client';

import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '@/common/fotter/footer';
import FloatingContact from '@/components/FloatingContact';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRequest = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRequest && <Header />}
      {children}
      {!isAdminRequest && <FloatingContact />}
      {!isAdminRequest && <Footer />}
    </>
  );
}
