
const protocol: string = "https://";

export const environment = {
  production: true,
  apiUrl: protocol + 'yticons.co:8443',
  secureSocket: protocol == "https://",
  tokenAddress: '0xCe14a14E8D72cD44a53e7496307D5c687b9067f0',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm',
  recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
};
