import React, { useEffect } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import TweetDeck from '../components/TweetDeck';
import EditIcon from '@material-ui/icons/Edit';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/appSlice';
import { fetchTweets, selectTweets } from '../features/tweetSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const params = useParams();
  const tweets = useSelector(selectTweets);

  const username = params.username || user.username;

  useEffect(() => {
    dispatch(fetchTweets(username))
  }, [username]);

  return (
    <div className="flex-fill py-3">
      <Container>
        <div className="profile__container border border-color-light rounded shadow p-4 text-center">
          <Image height="150px" width="auto" src="https://www.qvphysiotherapy.com/wp-content/uploads/2018/12/profile-placeholder.png" roundedCircle />
          <div className="profile__meta mt-3 text-light">
            <h4 className="m-0 p-0">Mohamed Yousef</h4>
            <h3 className="m-0 p-0 text-primary">@{username}</h3>
            <div className="follow__info d-flex align-items-center justify-content-center my-3">
              <div className="following__cont mr-2">
                <span className="font-weight-bold">13</span> Following
              </div>
              <div className="followers__cont">
                <span className="font-weight-bold">100k</span> Followers
              </div>
            </div>
            <div className="profile__btns">
              <Button variant="primary mr-2">Follow</Button>
              <Button variant="secondary"> <EditIcon fontSize="small" /> Edit</Button>
            </div>
          </div>
        </div>
        <TweetDeck list={tweets} />
      </Container>
    </div>
  );
}

export default Profile;
