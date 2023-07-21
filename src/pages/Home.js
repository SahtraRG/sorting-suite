import { NavLink } from "react-router-dom";
import { Button, TextField } from "@mui/material";

function Home() {
  return (
    <div className="App">
      <div>
        <h1>Sorting Suite</h1>
        <h2>A User Research Card Sorting Tool</h2>
      </div>
      <div className="join-existing">
        <TextField placeholder="Enter Session ID Here" id="enter-session" />
        <NavLink to="/session/">
          <Button variant="contained">Join Session</Button>
        </NavLink>
      </div>
      <div className="start-session">
        <NavLink to="/setup/">
          <Button className="home-buttons" variant="contained">
            Start Moderated Session
          </Button>
        </NavLink>
        <NavLink to="/setup/">
          <Button className="home-buttons" variant="contained">
            Start Unmoderated Session
          </Button>
        </NavLink>
      </div>
      <NavLink to="results">
        <Button className="home-buttons" variant="contained">
          View Session Results
        </Button>
      </NavLink>
    </div>
  );
}
export default Home;
