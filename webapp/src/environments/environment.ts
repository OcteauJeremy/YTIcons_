// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const protocol: string = "http://";

export const environment = {
  production: false,
  apiUrl: protocol + 'localhost:6969',
  secureSocket: protocol == "https://",
  tokenAddress: '0x9f2e202b5688f0d7b15344ec3b1815c74c53ce15',
  recaptchaPublic: '6Ld_fkoUAAAAAMD2oHdp6l6Sl3lICiigExvs5KDm'
};
