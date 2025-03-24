export const registerUser = (username, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.username === username)) {
      return { success: false, message: "User already exists" };
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };
  
  export const loginUser = (username, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
  };
  