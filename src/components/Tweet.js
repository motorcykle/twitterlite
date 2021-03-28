import { Favorite, Repeat } from '@material-ui/icons';
import { Image, Button } from 'react-bootstrap';
import React from 'react';


const Tweet = () => {
  return (
    <div className="border border-color-light rounded shadow p-3 text-light my-2 w-75 mx-auto">
      <div className="tweet__header d-flex align-items-center">
        <Image height="40px" roundedCircle width="auto" src="https://www.qvphysiotherapy.com/wp-content/uploads/2018/12/profile-placeholder.png" alt="" />
        <div className="tweet__userInfo ml-2">
          <p className="p-0 m-0">Mohamed Yousef</p>
          <h5 className="font-bold p-0 m-0">@moktz</h5>
        </div>
      </div>
      <div className="tweet__body my-3">
        <h3 className="">
          This is my tweet here broski.
        </h3>
      </div>
      <div className="tweet__footer d-flex align-items-center">
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">20 </span>
          <Button variant="transparent" onClick={() => console.log("like or unlike")}><Favorite className="text-secondary" /></Button>
        </div>
        <div className="tweet__likeSec mr-5 d-flex align-items-center">
          <span className="tweet__likesNum">3 </span>
          <Button variant="transparent" onClick={() => console.log("retweet")}><Repeat className="text-secondary" /></Button>
        </div>
        <p className="p-0 m-0">{Date.now()}</p>
      </div>
    </div>
  );
}

export default Tweet;
