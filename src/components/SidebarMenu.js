import React, { useState } from 'react';
import './SidebarMenu.css';

function SidebarMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ Menú
      </button>
      <ul>
        <li><button>New Version</button></li>
        <li><button>View/Send</button></li>
        <li><button>Publish</button></li>
        <li><button>Setting</button></li>
        <li><button>Save</button></li>
        <li><button>Search</button></li>
        <li><button>Print</button></li>
        <li><button>File upload</button></li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
