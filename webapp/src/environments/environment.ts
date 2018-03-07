// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const protocol: string = "http://";

export const environment = {
  production: false,
  apiUrl: protocol + 'localhost:3000',
  secureSocket: protocol == "https://",
  tokenAddress: '0x10207693450fa18527f73d71d52f6c016d8353fa',
  recaptchaPublic: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  recaptchaPrivate: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
};
