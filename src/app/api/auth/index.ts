import axios from "axios";
import request from "../request";

type registerData = {
  signature: string;
  pubkey: string;
  username: string;
};

export const verifyWallet = (signature: string, pubkey: string) => {
  return request.get(`/verify`, {
    params: {
      signature,
      pubkey,
    },
  });
};

export const confirmUser = (pubkey: string) => {
  return request.post(`/confirmuser`, {
    pubkey,
  });
};

export const registerUser = (data: registerData) => {
  return request.post(`/signup`, data);
};
