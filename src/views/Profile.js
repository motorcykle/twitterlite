import React, { useEffect, useState } from 'react';
import Axios from '../Axios';
import { Container, Image, Button } from 'react-bootstrap';
import TweetDeck from '../components/TweetDeck';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, selectUser } from '../features/appSlice';
import { fetchTweets, removeTweets, selectTweets } from '../features/tweetSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [foundUser, setFoundUser] = useState(null);
  const params = useParams();
  const tweets = useSelector(selectTweets);

  const username = params.username || user.username;

  // if not this user change fetch info
  useEffect(() => {
    if (username !== user.username) {
      (async () => {
        const usernameRes = await Axios.get(`/api/users/search/${username.toLowerCase()}`);
        if (usernameRes.data) {
          setFoundUser(usernameRes.data);
        } else {
          history.replace('/')
        }
      })()
    }
  }, [])

  useEffect(() => {
    dispatch(fetchTweets(username))
    return () => dispatch(removeTweets())
  }, [username]);


  return (
    <div className="flex-fill py-3">
      <Container>
        <div className="profile__container border border-color-light rounded shadow p-4 text-center">
          <Image height="150px" width="auto" src={(username !== user.username) ? foundUser?.profileImage : user.profileImage } roundedCircle />
          <div className="profile__meta mt-3 text-light">
            <h4 className="m-0 p-0">{(username !== user.username) ? foundUser?.name : user.name}</h4>
            <h3 className="m-0 p-0 text-primary">@{username}</h3>
            <div className="follow__info d-flex align-items-center justify-content-center my-3">
              <div className="following__cont mr-3">
                <span className="font-weight-bold">{(username !== user.username) ? foundUser?.following.length : user.following.length}</span> Following
              </div>
              <div className="followers__cont">
                <span className="font-weight-bold">{(username !== user.username) ? foundUser?.followers.length : user.followers.length}</span> Followers
              </div>
            </div>
            <div className="profile__btns">
              {username === user.username || <Button 
              variant="primary mr-2"
              onClick={() => dispatch(followUser(username))}
              > 
              
                {foundUser?.followers.find(username => username === user.username) ? 'Unfollow' : 'Follow'}

              </Button>}
              {username === user.username && <Button variant="secondary"> <EditIcon fontSize="small" /> Edit</Button>}
            </div>
          </div>
        </div>
        <TweetDeck list={tweets} />
      </Container>
    </div>
  );
}

export default Profile;
