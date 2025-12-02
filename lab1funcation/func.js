// Function that creates a login tracker using closures
function createLoginTracker(userInfo) {
  let attempts = 0;
  const maxAttempts = 3;

  // Inner arrow function
  return (passwordAttempt) => {
    if (attempts >= maxAttempts) {
      return "Account locked";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      attempts++;
      if (attempts >= maxAttempts) {
        return "Account locked";
      }
      return "Login failed";
    }
  };
}

// Example usage:
const user = { username: "john", password: "1234" };
const login = createLoginTracker(user);

console.log(login("1111")); // Login failed
console.log(login("2222")); // Login failed
console.log(login("3333")); // Account locked
console.log(login("1234")); // Account locked (still locked)
