import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
// import { data } from "../../../data";

const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: new Date().getTime().toString(), name },
      });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}

      <form onSubmit={submitHandler} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
