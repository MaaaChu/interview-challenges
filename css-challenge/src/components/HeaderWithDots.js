import React from 'react';
import Text from './Text';
import Dots from '../icons/dots';

const HeaderWithDots = ({ title, fontSize, colour }) => {
  const dotsStyle = colour === 'secondary' ? 'iconSecondary' : 'iconPrimary';

  return (
    <div className="headerWithDots">
      <div>
        <Text type={fontSize} colour={colour}>
          {title}
        </Text>
      </div>

      <div>
        <button className="btn">
          <Dots classNames={`icon ${dotsStyle}`} />
        </button>
      </div>
    </div>
  );
};

export default HeaderWithDots;
