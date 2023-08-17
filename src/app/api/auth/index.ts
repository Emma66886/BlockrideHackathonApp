import request from "../request";

export const verifyWallet = (signature: string, pubkey: string) => {
  return request.get(`/verify`, {
    params: {
      signature,
      pubkey,
    },
  });
};
