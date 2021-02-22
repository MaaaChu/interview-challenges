import React from 'react';
import * as classNames from 'classnames';

const Icon = ({ children, bgColour }) => {
  const iconBgColour = [
    bgColour === 'orange' && 'iconOrange',
    bgColour === 'blue' && 'iconBlue',
    bgColour === 'rose' && 'iconRose',
  ];

  return (
    <div className={classNames('iconContainer', iconBgColour)}>{children}</div>
  );
};

export default Icon;
