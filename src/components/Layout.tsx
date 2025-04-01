import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}
