import { NavLink } from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">TV Shows</NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;