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

    // ================= PEOPLE =================
    case "set_peoples": {
      return {
        ...store,
        peoples: action.payload.peoples
      };
    }

    // ================= VEHICLES =================
    case "set_vehicles": {
      return {
        ...store,
        vehicles: action.payload.vehicles
      };
    }

    // ================= PLANETS =================
    case "set_planets": {
      return {
        ...store,
        planets: action.payload.planets
      };
    }

    // ================= FAVORITES =================
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
          item =>
            !(item.uid === action.payload.uid && item.tipo === action.payload.tipo)
        )
      };
    }

    default:
      return store;
  }
}
