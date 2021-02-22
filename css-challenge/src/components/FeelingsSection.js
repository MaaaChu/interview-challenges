import React from 'react';
import EmojiList from './EmojiList';
import HeaderWithDots from './HeaderWithDots';

const emojis = [
  {
    id: 1,
    symbol: '😞',
    label: 'Badly',
  },
  {
    id: 2,
    symbol: '😊',
    label: 'Fine',
  },
  {
    id: 3,
    symbol: '😁',
    label: 'Well',
  },
  {
    id: 4,
    symbol: '😃',
    label: 'Excellent',
  },
];

const FeelingsSection = () => {
  return (
    <div className="feelingsSection">
      <HeaderWithDots title="How do you feel?" colour="primary" />
      <div>
        <EmojiList emojis={emojis} />
      </div>
    </div>
  );
};

export default FeelingsSection;
