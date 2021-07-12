import { useState, createContext, ReactNode } from "react"

type SelectedGenreId = number;

type SelectedGenreIdContextType = {
  selectedGenreId: SelectedGenreId,
  toggleId: (id: number) => void,
}

type SelectedGenreIdContextProviderProps = {
  children: ReactNode
}

export const SelectedGenreIdContext = createContext({} as SelectedGenreIdContextType);

export function SelectedGenreIdProvider(props: SelectedGenreIdContextProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<SelectedGenreId>(1);

  function toggleId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <SelectedGenreIdContext.Provider value={{ selectedGenreId, toggleId }}>
      {props.children}
    </SelectedGenreIdContext.Provider>
  )
}