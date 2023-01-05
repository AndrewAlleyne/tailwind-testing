import React, { useState } from "react";

export const Fetch = (props) => {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    let button = e.target;
    console.log("cliiced");
    if (!clicked) {
      setClicked(true);
      button.disabled = true;
      props.isFetching(true);
      setTimeout(() => {
        button.disabled = false;
        button.className = "m-1 p-1 border-1 rounded bg-emerald-900 text-white";
      }, 2000);
    } else {
      setClicked(false);
      props.isFetching(false);
      setTimeout(() => {
        button.disabled = true;
        button.className = "m-1 p-1 border-1 rounded bg-red-500 text-white";
      }, 2000);
    }

    clearTimeout();
  }

  console.log(clicked);
  return (
    <div>
      {clicked ? (
        <button
          onClick={handleClick}
          className='m-1 p-1 border-1 rounded bg-red-500 text-white '
        >
          Refresh
        </button>
      ) : (
        <button
          onClick={handleClick}
          className='m-1 p-1 border-1 rounded bg-emerald-900 text-white'
        >
          Refresh
        </button>
      )}
    </div>
  );
};
