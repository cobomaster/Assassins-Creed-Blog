import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/Altair', label: 'Altair' },
    { to: '/Arno', label: 'Arno' },
    { to: '/Aveline', label: 'Aveline' },
    { to: '/Basim', label: 'Basim' },
    { to: '/Bayek', label: 'Bayek' },
    { to: '/Connor', label: 'Connor' },
    { to: '/Edward', label: 'Edward' },
    { to: '/Eivor', label: 'Eivor' },
    { to: '/Ezio', label: 'Ezio' },
    { to: '/Frye', label: 'Frye' },
    { to: '/Odyssey', label: 'Odyssey' },
    { to: '/Shay', label: 'Shay' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
