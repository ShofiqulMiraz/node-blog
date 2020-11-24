export const getUsers = (req, res) => {
  const user = {
    username: "shofiqul",
  };
  res.status(200).json({
    status: "success",
    user,
  });
};
