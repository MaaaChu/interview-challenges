import React from 'react';
import Icon from './Icon';
import Text from './Text';

import BellIcon from '../icons/bell';

const Header = () => {
  return (
    <section className="header">
      <div>
        <Text type="heading">Hi, Jared!</Text>
        <Text type="subheading" colour="primaryAccent">
          23 Jan, 2021
        </Text>
      </div>
      <div>
        <button className="btn">
          <Icon>
            <BellIcon classnames="icon iconPrimary" />
          </Icon>
        </button>
      </div>
    </section>
  );
};

export default Header;
