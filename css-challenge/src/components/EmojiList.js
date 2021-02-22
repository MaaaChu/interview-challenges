import React from 'react';
import Emoji from '../icons/Emoji';
import Text from './Text';

const EmojiList = ({ emojis }) => {
  return (
    <div className="feelingsEmojiList">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: '0.25rem',
          }}
        >
          <button className="iconContainer">
            <Emoji label={emoji.label} symbol={emoji.symbol} />
          </button>
          <Text type="xs">{emoji.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
