const token = localStorage.getItem("token");

const authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default authorization;