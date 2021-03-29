import React, { useState } from 'react';
import Axios from '../Axios';
import { Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../features/appSlice';
import { useSelector } from 'react-redux';

const NavbarSearchInput = () => {
  const history = useHistory();
  const currUser = useSelector(selectUser);
  const [searchMode, setSearchMode] = useState(false);
  const [inside, setInside] = useState(false);
  const [usersFound, setUsersFound] = useState([]);

  // fetch and set usrs found
  const fetchUsers = async (query) => {
    try {
      if (query.length >= 3) {
        const searchRes = await Axios.get(`/api/users/search/users/${query}`);
        setUsersFound(searchRes.data);
      } else {
        setUsersFound([]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div  className="position-relative mr-2">
      <Form onSubmit={(e) => e.preventDefault()} inline>
        <FormControl 
        onChange={({target}) => {
          setSearchMode(true);
          fetchUsers(target.value);
        }}
        onFocus={() => {
          setSearchMode(true);
        }}
        onBlur={() => {if (!inside) setSearchMode(false)}}
        type="text" 
        name="usersearch" 
        id="usersearch" 
        placeholder="Search for user..." className="mr-sm-2 bg-dark shadow"
        />
      </Form>
      {(searchMode) && <div
        onMouseOver={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
        className="users__found position-absolute w-100 p-2 mt-2 rounded bg-secondary">
          {usersFound && usersFound?.map(user => (
            <div key={user._id} onClick={() => {
              if (currUser.username === user.username) {
                history.push(`/profile`)
              } else {
                history.push(`/profile/${user.username}`)
              }
              setSearchMode(false)
            }} className="userFound mt-2 rounded bg-light" role="button">
              <p className="m-1">@{user.username}</p>
            </div>
          ))}
        </div>}
    </div>
  );
}

export default NavbarSearchInput;
