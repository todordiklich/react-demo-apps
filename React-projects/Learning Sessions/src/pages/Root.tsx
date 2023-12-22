import { Outlet } from 'react-router-dom';

import MainHeader from '../components/Navigation/Mainheader';
import SessionsContextProvider from '../store/sessions-store';

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
