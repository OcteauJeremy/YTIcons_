// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const protocol: string = "http://";

export const environment = {
  production: false,
  apiUrl: protocol + 'localhost:6969',
  secureSocket: protocol == "https://",
  tokenAddress: '0x2974B9380D4BC5d01bA5E7c9F4789126b2B5F92f',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm'
};
