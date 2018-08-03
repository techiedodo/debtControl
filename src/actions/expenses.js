import uuid from "uuid";

// Create (Action Generator)
export const createExpense = ({
  debt = "",
  desc = "",
  amount = 0,
  payment = 0,
  minPay = 0,
  addPay = 0,
  intRate = 0,
  createdAt = 0
} = {}) => ({
  type: "CREATE_EXPENSE",
  expense: {
    id: uuid(),
    debt,
    desc,
    amount,
    payment,
    minPay,
    addPay,
    intRate,
    createdAt
  }
});
// Update
export const updateExpense = (id, updates) => ({
  type: "UPDATE_EXPENSE",
  id,
  updates
});
// Delete (Action Generator)
export const deleteExpense = ({ id } = {}) => ({
  type: "DELETE_EXPENSE",
  id
});
