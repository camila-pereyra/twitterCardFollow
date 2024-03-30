import { useState } from "react";
import "./Follow.css";

// eslint-disable-next-line react/prop-types
export const Follow = ({ avatar, name, account }) => {
  const [follow, setFollow] = useState(false);
  const text = !follow ? "Follow" : "Following";
  const classNameButton = !follow ? "buttonFollow" : "buttonFollowing";

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
        <button className={classNameButton} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
};
