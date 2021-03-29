import { Favorite, Repeat } from '@material-ui/icons';
import { Image, Button } from 'react-bootstrap';
import React from 'react';

import './Tweet.css';

const Tweet = ({ data }) => {
  return (
    <div className="border border-color-light rounded shadow p-3 text-light my-2 w-75 mx-auto tweet__card">
      {data.tweetType === 'retweet' && "Retweeted:" }
      <div className="tweet__header d-flex align-items-center">
        <Image height="40px" roundedCircle width="auto" src={data.user.profileImage} alt="" />
        <div className="tweet__userInfo ml-2">
          <p className="p-0 m-0">{data.user.name}</p>
          <h5 className="font-bold p-0 m-0">@{data.user.username}</h5>
        </div>
      </div>
      <div className="tweet__body my-3">
        <h3 className="">
          {data.text}
        </h3>
      </div>
      <div className="tweet__footer d-flex align-items-center">
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">{data.likers.length} </span>
          <Button variant="transparent" onClick={() => console.log("like or unlike")}><Favorite className="text-secondary" /></Button>
        </div>
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">{data.retweeters.length} </span>
          <Button variant="transparent" onClick={() => console.log("retweet")}><Repeat className="text-secondary" /></Button>
        </div>
        <p className="p-0 m-0">{new Date(data.createdAt).toDateString()}</p>
      </div>
    </div>
  );
}

export default Tweet;
