export const initialStore = () => {
  return {
    peoples: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "set_peoples": {
      const { peoples} = action.payload;

      return{
        ...store,
        peoples: [
          ...store.peoples,
          ...peoples
        ]
      }
      
    }

    default:
      throw Error("Unknown action.");
  }
}