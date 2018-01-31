export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((total, e) => total + e, 0);
};