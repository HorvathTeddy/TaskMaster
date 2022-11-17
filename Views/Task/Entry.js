import React from "react";
import StdInputs from "../../components/Standards/StdInputs";

const Entry = ({ title, props }) => {
  return (
    <StdInputs
      title={title}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
    ></StdInputs>
  );
};

export default Entry;
