
const protocol: string = "https://";

export const environment = {
  production: true,
  apiUrl: protocol + 'yticons.co:8443',
  secureSocket: protocol == "https://",
  tokenAddress: '0x9f88d1e0910426be3522bb9ef5ed65e5947a0ed3',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm',
  recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
};
