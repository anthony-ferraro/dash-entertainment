import React from 'react';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

const ConditionalFooter = ({ userData }) => {
  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];

  if (currentPath === "404" || (currentPath === "favorites" && !userData)) {
    return null;
  }

  return <Footer router={router} />;
};

export default ConditionalFooter;
