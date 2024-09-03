const setToken = (token) => {
  localStorage.setItem("token,token");
};

const getToken = () => {
  const token = localStorage.getItem("token");
};

const deleteToken = () => {
  localStorage.removeItem("token");
};

const checkToken = () => {
  if (getToken) {
    return true;
  } else {
    return false;
  }
};

export { setToken, getToken, deleteToken, checkToken };
