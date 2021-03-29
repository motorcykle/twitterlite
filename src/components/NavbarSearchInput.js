import React, { useState } from 'react';
import Axios from '../Axios';
import { Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavbarSearchInput = () => {
  const history = useHistory();
  const [searchMode, setSearchMode] = useState(false);
  const [inside, setInside] = useState(false);
  const [usersFound, setUsersFound] = useState([]);

  // fetch and set usrs found
  const fetchUsers = async (query) => {
    try {
      console.log(query)
      if (query.length >= 3) {
        const searchRes = await Axios.get(`/users/search/users/${query}`);
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
              history.push(`/profile/${user.username}`)
              setSearchMode(false)
            }} className="userFound mt-2 p-1 rounded bg-gray-400">
              <p>@{user.username}</p>
            </div>
          ))}
        </div>}
    </div>
  );
}

export default NavbarSearchInput;
