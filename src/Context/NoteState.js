import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState({
    title: "Dr. Ramanand Dadhich",
    subtitle: "MBBS, MS, MCH",
  });

  const update = () => {
    setState({
      title: "Updated Doctor",
      subtitle: "Updated Degree",
    });
  };

  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
