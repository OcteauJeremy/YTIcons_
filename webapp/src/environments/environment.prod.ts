
const protocol: string = "http://";

export const environment = {
  production: true,
  apiUrl: protocol + 'yticons.co:6969',
  secureSocket: protocol == "https://",
  tokenAddress: '0x0551ddc4460e09cc30bec37ef73a8b9739dc179a',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm',
  recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
};
