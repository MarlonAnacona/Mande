import Axios from "axios";
import endpoints from "./index";

const getAllClients = async () => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      //Authorization: Cookie.get("token"),
    },
  };

  const response = await Axios.get(endpoints.clients.getAll, config);
  return response.data;
};

export { getAllClients };
