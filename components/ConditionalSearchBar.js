import React from 'react';
import SearchBar from '../components/SearchBar';
import { placeholders } from '../utilities';
import { useRouter } from 'next/router';

const ConditionalSearchBar = ({ searchQuery, setSearchQuery }) => {
  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];
  const localSearchPath = `${currentPath === "" || currentPath === "search" ? "" : "/"}${currentPath === "search" || currentPath === "trending" ? "" : currentPath}/search/`;
  const searchPlaceholder = placeholders[currentPath];

  if (currentPath === "404" || currentPath === "details" || currentPath === "favorites") {
    return null;
  }

  return (
    <SearchBar
      placeholder={searchPlaceholder}
      searchPath={localSearchPath}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      router={router}
    />
  );
};

export default ConditionalSearchBar;
