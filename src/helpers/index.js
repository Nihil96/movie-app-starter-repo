export const formatRating = (rating) => {
  if (typeof rating !== "number" || isNaN(rating)) {
    return "Not a number"
  }

  // Round to one decimal place if there are decimals
  return rating % 1 === 0 ? rating.toString() : rating.toFixed(1)
}
