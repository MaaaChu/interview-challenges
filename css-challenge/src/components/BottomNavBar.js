import React from 'react';
import Grid from '../icons/grid';
import Home from '../icons/home';
import Message from '../icons/message';
import User from '../icons/user';

const BottomNavBar = () => {
  return (
    <section className="bottomNavBar">
      <button className="btn">
        <Home classNames="icon iconActive" />
      </button>
      <button className="btn">
        <Grid classNames="icon iconPrimaryAccent" />
      </button>
      <button className="btn">
        <Message classNames="icon iconPrimaryAccent" />
      </button>
      <button className="btn">
        <User classNames="icon iconPrimaryAccent" />
      </button>
    </section>
  );
};

export default BottomNavBar;
