import Nav from '../lib/nav';
import primaryNav from '../../primary-nav';

const Header = () => {
  return (
    <header className="sh">
      <Nav pages={primaryNav.pages} />
    </header>
  );
};

export default Header;
