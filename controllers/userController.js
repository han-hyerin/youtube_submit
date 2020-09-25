import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};

export const login = (req, res) =>
  res.render("Log In", { pageTitle: "Log In" });
export const logout = (req, res) =>
  res.render("Log Out", { pageTitle: "Log Out" });
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("User Detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("Change Password", { pageTitle: "Change Password" });
