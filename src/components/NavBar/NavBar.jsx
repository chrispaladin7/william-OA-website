import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }


  return (
    <nav class="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#"> */}
        <Link class="navbar-brand" to="/">HOME</Link>
        <img src="https://i.imgur.com/2GylfmX.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
        {/* </a> */}
        {user ?
          <>
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link className="navbar" to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link className="navbar" to="" onClick={handleLogOut}>LOG OUT</Link>
            &nbsp; | &nbsp;
          </>
          :
          <>
            <Link className="navbar" to="/login">LOGIN</Link>
          </>
        }
      </div>
    </nav>
  );
}