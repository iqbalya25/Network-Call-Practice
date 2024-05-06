import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Array of navbar items
  const navItems = [
    { id: 1, title: 'Users', url: '/' },
    { id: 2, title: 'Register', url: '/Register' }
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <ul className="flex">
         
          {navItems.map(item => (
            
            <li key={item.id}>
              <Link to={item.url} className="text-white hover:text-gray-300 px-3 py-2">
                {item.title}
              </Link>
            </li>

          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
