import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter a City"
        ref={ref}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </>
  );
});

export default Input;
