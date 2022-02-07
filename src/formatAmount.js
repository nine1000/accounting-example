const formatAmount = (amount) => `${amount > 0 ? "+" : "-"}$${Math.abs(amount)}`

export default formatAmount
