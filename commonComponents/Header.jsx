import React from 'react'

const Profile = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
      <div className="px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-bold">Logo</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li className="text-white">1</li>
            <li className="text-white">2</li>
            <li className="text-white">3</li>
            <li className="text-white">4</li>
          </ul> 
        </nav>
      </div>
    </header>
  );
};

export default Header;



