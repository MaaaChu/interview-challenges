import React from 'react';
import Heart from '../icons/heart';
import HeaderWithDots from './HeaderWithDots';
import Icon from './Icon';
import Text from './Text';

const ExerciseCard = ({ iconBgColour, title, text }) => {
  return (
    <div className="exerciseCard">
      <Icon bgColour={iconBgColour}>
        <Heart classNames="icon iconPrimary" />
      </Icon>
      <div className="exerciseCardText">
        <HeaderWithDots title={title} fontSize="sm" colour="secondary" />
        <Text type="xs" colour="secondaryAccent">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default ExerciseCard;
