// Get visible expenses
export default (expense, { text, sortBy }) => {
  return expense
    .filter(expense => {
      const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === "intRate") {
        return a.intRate < b.intRate ? 1 : -1;
      }
    });
};
