import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/loot_specs" activeClassName="active">LootSpecs</Link>
      {" | "}
      <Link to="/loots" activeClassName="active">Loot</Link>
      {" | "}
      <Link to="/loot_combinations" activeClassName="active">Loot Combinations</Link>
      {" | "}
      <Link to="/games" activeClassName="active">Games</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
