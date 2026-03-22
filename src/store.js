export const initialStore = () => {
  return {
    message: null,
    todos: [],
    people: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "add_task": {
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    case "set_people": {
      const { people } = action.payload;

      return {
        ...store,
        people: [
          ...store.people,  
          ...people         
        ]
      };
    }

    default:
      throw Error("Unknown action.");
  }
}