import React from 'react';
import * as classnames from 'classnames';

const Text = ({ children, type, colour }) => {
  const textStyle = [
    'text',
    'textPrimary',
    colour === 'secondary' && 'textSecondary',
    colour === 'primaryAccent' && 'textPrimaryAccent',
    colour === 'secondaryAccent' && 'textSecondaryAccent',
    type === 'heading' && 'heading',
    type === 'subheading' && 'subheading',
    type === 'body' && 'textBody',
    type === 'sm' && 'textSm',
    type === 'xs' && 'textXs',
  ];

  return <h1 className={classnames(textStyle)}>{children}</h1>;
};

export default Text;
