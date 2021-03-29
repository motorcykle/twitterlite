import { Favorite, Repeat } from '@material-ui/icons';
import { Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { likeOrRetweet, unlikeOrUnRetweet } from '../features/tweetSlice';
import { selectUser } from '../features/appSlice';
import React, { useEffect } from 'react';

import './Tweet.css';

const Tweet = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const liked = data?.likers.find(username => username === user.username);
  const retweeted = data?.retweeters.find(username => username === user.username);

  const tweetsARetweet = data?.tweetType.type === 'retweet';

  return (
    <div className="border border-color-light rounded shadow p-3 text-light my-2 w-75 mx-auto tweet__card">
      {tweetsARetweet && <p className="mb-1 font-weight-bold text-light">Retweeted by @{data.user.username}</p> }
      <div className="tweet__header d-flex align-items-center">
        <Image height="40px" roundedCircle width="auto" src={tweetsARetweet ? data?.tweetType.data.originalTweet.user.profileImage : data.user.profileImage} alt="" />
        <div className="tweet__userInfo ml-2">
          <p className="p-0 m-0">{tweetsARetweet ? data?.tweetType.data.originalTweet.user.name : data.user.name}</p>
          <h5 className="font-bold p-0 m-0">@{tweetsARetweet ? data?.tweetType.data.originalTweet.user.username : data.user.username}</h5>
        </div>
      </div>
      <div className="tweet__body my-3">
        <h3 className="">
          {data.text}
        </h3>
      </div>
      <div className="tweet__footer d-flex align-items-center">
        {tweetsARetweet || (
        <>
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">{data.likers.length} </span>
          <Button variant="transparent" onClick={() => {
            if (liked) {
              dispatch(unlikeOrUnRetweet({ type: 'likers', tweet: data }))
            } else {
              dispatch(likeOrRetweet({ type: 'likers', tweet: data }))
            }
          }}><Favorite className={liked ? "text-danger" : "text-secondary"} /></Button>
        </div>
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">{data.retweeters.length} </span>
          <Button variant="transparent" onClick={() => {
            if (retweeted) {
              dispatch(unlikeOrUnRetweet({ type: 'retweeters', tweet: data }))
            } else {
              dispatch(likeOrRetweet({ type: 'retweeters', tweet: data }))
            }
          }}><Repeat className={retweeted ? "text-success" : "text-secondary"} /></Button>
        </div>
        </>
        )}
        <p className="p-0 m-0">{new Date(data.createdAt).toDateString()}</p>
      </div>
    </div>
  );
}

export default Tweet;
