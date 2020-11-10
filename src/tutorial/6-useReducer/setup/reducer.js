export const reducer = (state, action) => {
  // reducer function always returns state, where (state) is prev State and (action) is the object from dispatch
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: "item added",
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
        isModalOpen: true,
        modalContent: "item deleted",
      };

    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter value",
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      throw new Error("no matching action type");
  }
};
