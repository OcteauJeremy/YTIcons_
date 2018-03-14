
const protocol: string = "https://";

export const environment = {
  production: true,
  apiUrl: protocol + 'yticons.co:8443',
  secureSocket: protocol == "https://",
  tokenAddress: '0x1F090C3E1CF41B83855870abA44dcbb323436aBF',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm',
  recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
};
