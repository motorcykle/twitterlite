import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TweetForm from '../components/TweetForm';
import TweetDeck from '../components/TweetDeck';
import { useDispatch } from 'react-redux';

const Homepage = () => {
  const [homeTweets, setHomeTweets] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className="flex-fill py-4">
      <Container className="d-flex flex-column">
      <TweetForm />
      <TweetDeck />
      </Container>
      
    </div>
  );
}

export default Homepage;
