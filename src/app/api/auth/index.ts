import axios from "axios";

type registerData = {
  signature: string;
  pubkey: string;
  username: string;
};

export const verifyWallet = (signature: string, pubkey: string) => {
  return axios.get(`/verify`, {
    params: {
      signature,
      pubkey,
    },
  });
};

export const registerUser = (data: registerData) => {
  return axios.post(`/signup`, data);
};
