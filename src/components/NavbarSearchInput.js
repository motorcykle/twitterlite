import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const NavbarSearchInput = () => {
  const [searchMode, setSearchMode] = useState(false);
  const [inside, setInside] = useState(false);
  const [usersFound, setUsersFound] = useState(null);

  // fetch and set usrs found

  return (
    <div  className="position-relative mr-2">
      <Form onSubmit={(e) => e.preventDefault()} inline>
        <FormControl 
        onChange={({target}) => {
          setSearchMode(true);
          console.log("fetch users")
        }}
        onFocus={() => {
          setSearchMode(true);
        }}
        onBlur={() => {if (!inside) setSearchMode(false)}}
        type="text" 
        name="usersearch" 
        id="usersearch" 
        placeholder="Search for user..." className="mr-sm-2 bg-dark"
        />
      </Form>
      {(searchMode) && <div
        onMouseOver={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
        className="users__found position-absolute w-100 p-2 mt-2 rounded bg-secondary">
          {usersFound && usersFound?.map(user => (
            <div key={user._id} onClick={(e) => {
              
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
