export const initialStore = () => {
  return {
    message: null,
    user: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "set_user":
      return {
        ...store,
        user: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
