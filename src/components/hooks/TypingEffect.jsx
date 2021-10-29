import React, { useState, useEffect, useRef, Fragment } from 'react';

const TypingEffect = ({ text }) => {
  const index = useRef(0);

  // creating new state
  const [liveText, setLiveText] = useState('');

  // to start the typing effect
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLiveText((value) => value + text.charAt(index.current));

      // update the index so that it can print all the text
      // passed inside the text prop
      index.current += 1;
    }, 69);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [liveText, text]);

  return (
    <Fragment>
      <p>{liveText}</p>
    </Fragment>
  );
};

export default TypingEffect;
