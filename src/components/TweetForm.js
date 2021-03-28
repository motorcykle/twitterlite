import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const TweetForm = () => {
  const dispatch = useDispatch();
  const [tweetData, setTweetData] = useState('');

  return (
    <div className="w-75 p-3 rounded border bg-secondary border-color-light shadow mx-auto">
      <Form inline className="p-0" onSubmit={(e) => {
        e.preventDefault();
        if (!tweetData) return;
        // dispatch(createTweet({ text: tweetData }))
        setTweetData('');
      }}>
      <textarea className="m-0 flex-fill bg-transparent text-light border rounded p-2 mr-3" value={tweetData} onChange={({target}) => setTweetData(target.value)} type="text" required autoComplete="off" placeholder="Smile more, I've had a nice day, I hope you have one too!"/>
      <Button>
        Tweet
      </Button>
      </Form>
    </div>
  );
}

export default TweetForm;
