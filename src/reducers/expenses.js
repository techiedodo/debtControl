const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "CREATE_EXPENSE":
      return [...state, action.expense];
    case "UPDATE_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case "DELETE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
