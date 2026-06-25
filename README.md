# Blowjob Vouchers

A private digital voucher book for Adrian with five redeemable vouchers, a polished cover animation, local redemption tracking, installable PWA support, and a QR-code-ready setup.

## Edit the voucher book

Open `config.js` and update:

- `recipientName`
- `issuerName`
- `issueDate`
- `deployUrl`
- `adminPasscode`
- the `vouchers` list

Redemptions are stored in the browser on the device that opens the app. Use the admin page to reset the vouchers while testing.

## Preview

Open `index.html` directly for a quick local preview, or serve the `RedeemToReceive` folder with any static web server.

## QR codes

The app includes a starter QR file at `assets/images/qr-local.svg`. For real phone use, publish the folder somewhere public, set `deployUrl` in `config.js`, then regenerate the final QR as `assets/images/qr-live.svg`.

## Admin

Open `/admin/` and enter the passcode from `config.js`. In this first version the admin page can undo the last redemption or reset all vouchers on the current device.
