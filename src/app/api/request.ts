import Axios from "axios";

export default Axios.create({
  baseURL: "https://blockride-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
