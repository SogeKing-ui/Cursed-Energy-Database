import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

function Sidebar() {
  const location = useLocation();

  const scrollToTable = () => {
    document.querySelector('.table-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo"><Icon name="bolt" size={18} /> CED</div>
      <nav className="sidebar-nav">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
          <Icon name="home" size={18} /> Dashboard
        </Link>
        <button onClick={scrollToTable} className="sidebar-link sidebar-btn">
          <Icon name="chart" size={18} /> Characters
        </button>
      </nav>
      <div className="sidebar-footer">
        <p>呪術廻戦</p>
        <p>Jehu Emilcar</p>
      </div>
    </aside>
  );
}

export default Sidebar;
