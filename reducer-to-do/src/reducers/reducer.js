import React from "react";

export const initialState = {
  dataSet: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        dataSet: [
          ...state.dataSet,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    default:
      return state;
  }
};
