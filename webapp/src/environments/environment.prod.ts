
const protocol: string = "https://";

export const environment = {
  production: true,
  apiUrl: protocol + 'yticons.co:8443',
  secureSocket: protocol == "https://",
  tokenAddress: '0xa71d4d37e8a945494453fb6e37aba58c482d28d3',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm',
  recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
};
