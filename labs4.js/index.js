// index.js

// Function to combine multiple arrays of usernames
function combineUsers(...arrays) {
  // Merge all arrays into one using spread operator
  const mergedUsers = [].concat(...arrays);

  // Get today's date as a string
  const mergeDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  // Return as an object
  return {
    users: mergedUsers,
    merge_date: mergeDate,
  };
}

// Export the function as a module
module.exports = combineUsers;
