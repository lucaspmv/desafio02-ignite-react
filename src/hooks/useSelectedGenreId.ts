import { useContext } from "react";

import { SelectedGenreIdContext } from "../contexts/SelectedGenreIdContext";

export function useSelectedGenreId() {
  const value = useContext(SelectedGenreIdContext);

  return value;
}