import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Layout(props) {
  console.log(props);
  return (
    <div id="wrapper">
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
