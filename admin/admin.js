const config = window.VOUCHER_CONFIG;
const stateKey = `redeem-to-receive:${config.recipientName}:${config.issueDate}`;

const passcode = document.querySelector("#passcode");
const unlock = document.querySelector("#unlock");
const tools = document.querySelector("#tools");
const adminRedeemed = document.querySelector("#adminRedeemed");
const adminRemaining = document.querySelector("#adminRemaining");
const undo = document.querySelector("#undo");
const reset = document.querySelector("#reset");

function loadState() {
  try {
    return { redeemed: [], opened: false, ...JSON.parse(localStorage.getItem(stateKey)) };
  } catch {
    return { redeemed: [], opened: false };
  }
}

function saveState(state) {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function render() {
  const state = loadState();
  adminRedeemed.textContent = state.redeemed.length;
  adminRemaining.textContent = Math.max(config.vouchers.length - state.redeemed.length, 0);
}

unlock.addEventListener("click", () => {
  if (passcode.value !== config.adminPasscode) {
    passcode.setCustomValidity("Incorrect passcode");
    passcode.reportValidity();
    return;
  }
  passcode.setCustomValidity("");
  tools.hidden = false;
  render();
});

undo.addEventListener("click", () => {
  const state = loadState();
  state.redeemed.pop();
  saveState(state);
  render();
});

reset.addEventListener("click", () => {
  const confirmed = window.confirm("Reset all redeemed vouchers on this device?");
  if (!confirmed) return;
  saveState({ redeemed: [], opened: false });
  render();
});
