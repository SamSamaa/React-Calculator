import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

import './NameInput.css';

const NameInput = () => {
  const { userName, setUserName } = useContext(GlobalContext);

  return (
    <div className="nameInput">
      <div>
        Hello
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Prénom"
        />
      </div>
      <Link to={userName ? "/calculator" : "/"} className="nextLink">Next</Link>
    </div>
  )
}

export default NameInput;
