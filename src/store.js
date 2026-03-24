export const initialStore = () => {
  return {
    peoples: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "set_peoples": {
      const { peoples } = action.payload;

      return {
        ...store,
        peoples: peoples
      };
    }

    case "ADD_FAVORITE": {
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    }

    case "REMOVE_FAVORITE": {
      return {
        ...store,
        favorites: store.favorites.filter(
          item => item.uid !== action.payload.uid
        )
      };
    }

    default:
      throw Error("Unknown action.");
  }
}