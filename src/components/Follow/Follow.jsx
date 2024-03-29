import { useState } from "react";
import "./Follow.css";

// eslint-disable-next-line react/prop-types
export const Follow = ({ avatar, name, account, isFollowing }) => {
  const [follow, setFollow] = useState(isFollowing);
  const handleClick = () => {
    setFollow(!follow);
  };

  return (
    <article>
      <header>
        <img src={avatar} alt={`imagen de ${name}`}></img>
        <div id="nameAccount">
          <strong>{name}</strong>
          <span>{account}</span>
        </div>
      </header>
      <aside>
        <button
          className={!follow ? "buttonFollow" : "buttonFollowing"}
          onClick={() => handleClick()}
        >
          {follow ? "Following" : "Follow"}
        </button>
      </aside>
    </article>
  );
};
