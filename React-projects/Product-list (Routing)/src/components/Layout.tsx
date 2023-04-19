import MainNavigation from './MainNavigation';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}
