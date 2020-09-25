import Header from './header';
import Footer from './footer';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
