export const initialStore = () => {
  return {
    peoples: [],
    vehicles: [],
    planets: [],
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

    case "set_vehicles": {
      return {
        ...store,
        vehicles: action.payload.vehicles
      };
    }

    case "set_planets": {
      return {
        ...store,
        planets: action.payload.planets
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
          item => !(item.uid === action.payload.uid && item.tipo === action.payload.tipo)
        )
      };
    }

    default:
      throw Error("Unknown action.");
  }
}