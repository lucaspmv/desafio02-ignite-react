import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { SelectedGenreIdProvider } from './contexts/SelectedGenreIdContext';

import './styles/global.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SelectedGenreIdProvider>
        <SideBar />
        <Content />
      </SelectedGenreIdProvider>
    </div>
  )
}