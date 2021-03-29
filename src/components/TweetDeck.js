import React from 'react';
import Tweet from './Tweet';

const TweetDeck = ({ list }) => {
  return (
    <div className="my-4">
      {/* {list && list.map(tweet => (<Tweet key={tweet._id} data={tweet} />))} */}
    </div>
  );
}

export default TweetDeck;
