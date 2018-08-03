const filtersReducerDefaultState = {
  text: "",
  sortBy: "amount", // amount or intRate
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      // The spread operator allows for the update of the argument being targeted. It updates just that item and not the whole object
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_INT_RATE":
      return {
        ...state,
        sortBy: "intRate"
      };
    default:
      return state;
  }
};
