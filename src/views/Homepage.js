import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TweetForm from '../components/TweetForm';
import TweetDeck from '../components/TweetDeck';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHometweets, selectHomeTweets } from '../features/tweetSlice';

const Homepage = () => {
  const hometweets = useSelector(selectHomeTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHometweets())
  }, []);

  return (
    <div className="flex-fill py-4">
      <Container className="d-flex flex-column">
      <TweetForm />
      <TweetDeck list={hometweets} />
      </Container>
    </div>
  );
}

export default Homepage;
