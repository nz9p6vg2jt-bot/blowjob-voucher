const config = window.VOUCHER_CONFIG;
const stateKey = `redeem-to-receive:${config.recipientName}:${config.issueDate}`;

const icons = {
  coffee:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h10v5a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V8Z"/><path d="M16 9h1a3 3 0 0 1 0 6h-1"/><path d="M4 20h15"/><path d="M8 4v1"/><path d="M12 4v1"/><path d="M16 4v1"/></svg>',
  sparkles:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z"/><path d="m5 15 .6 1.6L7 17l-1.4.4L5 19l-.6-1.6L3 17l1.4-.4L5 15Z"/></svg>',
  film:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14"/><path d="M16 5v14"/><path d="M4 9h4"/><path d="M4 15h4"/><path d="M16 9h4"/><path d="M16 15h4"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4V2"/><path d="M12 22v-2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 6.3 1.4-1.4"/><circle cx="12" cy="12" r="4"/></svg>',
  gift:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v8H4v-8"/><path d="M2 8h20v4H2z"/><path d="M12 8v12"/><path d="M12 8H7.5a2.5 2.5 0 1 1 2.1-3.8C10.5 5.5 12 8 12 8Z"/><path d="M12 8h4.5a2.5 2.5 0 1 0-2.1-3.8C13.5 5.5 12 8 12 8Z"/></svg>',
  "water-drops":
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3S4 8 4 11a4 4 0 0 0 8 0c0-3-4-8-4-8Z"/><path d="M17 6s-3 4-3 6.2a3 3 0 0 0 6 0C20 10 17 6 17 6Z"/><path d="M14 18.5a2.5 2.5 0 0 0 5 0c0-1.8-2.5-4.8-2.5-4.8S14 16.7 14 18.5Z"/></svg>',
  lips:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c2.6-3 4.6-4.4 7-2.2 1.1 1 2.9 1 4 0 2.4-2.2 4.4-.8 7 2.2-2.6 3.2-5.5 5-9 5s-6.4-1.8-9-5Z"/><path d="M3 12h18"/><path d="M8.5 13.5c2.2.8 4.8.8 7 0"/></svg>',
  eggplant:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17c-2.8-2.8-2.8-7.2 0-10s7.2-2.8 10 0 2.8 7.2 0 10-7.2 2.8-10 0Z"/><path d="M16.5 7.5 21 3"/><path d="M18.5 4.5c.2 1.7-.6 3.1-2 4"/><path d="M19.5 2.5c-1.7-.2-3.1.6-4 2"/></svg>',
  stars:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z"/><path d="m5 15 .6 1.6L7 17l-1.4.4L5 19l-.6-1.6L3 17l1.4-.4L5 15Z"/></svg>',
  tongue:
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c2.4-2.2 4.4-2.7 6.4-1.1 1 .8 2.2.8 3.2 0C15.6 7.3 17.6 7.8 20 10c-2.2 2.6-5 4-8 4s-5.8-1.4-8-4Z"/><path d="M10 13.5v2.7a2 2 0 0 0 4 0v-2.7"/><path d="M4 10h16"/></svg>',
};

const els = {
  book: document.querySelector("#book"),
  openBook: document.querySelector("#openBook"),
  coverRecipient: document.querySelector("#coverRecipient"),
  coverTitle: document.querySelector("#cover-title"),
  coverSubtitle: document.querySelector("#coverSubtitle"),
  coverDate: document.querySelector("#coverDate"),
  coverEdition: document.querySelector("#coverEdition"),
  issuerLine: document.querySelector("#issuerLine"),
  insideTitle: document.querySelector("#insideTitle"),
  introText: document.querySelector("#introText"),
  redeemedCount: document.querySelector("#redeemedCount"),
  remainingCount: document.querySelector("#remainingCount"),
  totalCount: document.querySelector("#totalCount"),
  ticket: document.querySelector("#ticket"),
  ticketLabel: document.querySelector("#ticketLabel"),
  voucherIcon: document.querySelector("#voucherIcon"),
  voucherTitle: document.querySelector("#voucherTitle"),
  voucherDescription: document.querySelector("#voucherDescription"),
  voucherSerial: document.querySelector("#voucherSerial"),
  stamp: document.querySelector("#stamp"),
  redeemButton: document.querySelector("#redeemButton"),
  historyButton: document.querySelector("#historyButton"),
  historyPanel: document.querySelector("#historyPanel"),
  historyList: document.querySelector("#historyList"),
  installApp: document.querySelector("#installApp"),
  qrCopy: document.querySelector("#qrCopy"),
  qrLink: document.querySelector("#qrLink"),
  confetti: document.querySelector("#confettiCanvas"),
};

let deferredInstallPrompt;

function loadState() {
  const fallback = { redeemed: [], opened: false };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(stateKey)) };
  } catch {
    return fallback;
  }
}

function saveState(state) {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

let state = loadState();

function voucherForEntry(entry, index) {
  return config.vouchers[entry.voucherIndex ?? index] || entry.voucher || config.vouchers[index];
}

function hydrateStaticText() {
  document.title = config.appName;
  els.coverRecipient.textContent = config.recipientName;
  els.coverTitle.textContent = config.appName;
  els.coverSubtitle.textContent = config.subtitle;
  els.coverDate.textContent = config.issueDate;
  els.coverEdition.textContent = config.edition;
  els.issuerLine.textContent = `From ${config.issuerName}`;
  els.insideTitle.textContent = config.introTitle;
  els.introText.textContent = config.introText;
  els.totalCount.textContent = config.vouchers.length;

  const target = config.deployUrl || window.location.href;
  els.qrCopy.textContent = config.deployUrl
    ? "Download the QR code for the live voucher link."
    : "This starter QR points to the local preview. Add your live link in config.js before printing.";
  els.qrLink.href = `./assets/images/${config.deployUrl ? "qr-live.svg" : "qr-local.svg"}`;
  els.qrLink.setAttribute("aria-label", `Download QR code for ${target}`);
}

function currentVoucher() {
  return config.vouchers[state.redeemed.length];
}

function render() {
  const redeemedTotal = state.redeemed.length;
  const remaining = Math.max(config.vouchers.length - redeemedTotal, 0);
  const next = currentVoucher();
  const last = state.redeemed.at(-1);

  els.book.classList.toggle("is-open", state.opened);
  els.redeemedCount.textContent = redeemedTotal;
  els.remainingCount.textContent = remaining;
  els.stamp.classList.toggle("is-visible", Boolean(last));

  if (next) {
    els.ticketLabel.textContent = redeemedTotal ? "Last redeemed" : "Next voucher";
    const visibleVoucher = last ? voucherForEntry(last, redeemedTotal - 1) : next;
    els.voucherIcon.innerHTML = icons[visibleVoucher.icon] || icons.gift;
    els.voucherTitle.textContent = visibleVoucher.title;
    els.voucherDescription.textContent = visibleVoucher.description || "Tap redeem to reveal this voucher and mark it as used.";
    els.voucherDescription.hidden = false;
    els.voucherSerial.textContent = last ? visibleVoucher.serial : `Voucher ${redeemedTotal + 1} of ${config.vouchers.length}`;
    els.redeemButton.textContent = `Redeem Voucher ${redeemedTotal + 1}`;
    els.redeemButton.disabled = false;
  } else {
    els.ticketLabel.textContent = "Complete";
    els.voucherIcon.innerHTML = icons.sparkles;
    els.voucherTitle.textContent = config.completeTitle;
    els.voucherDescription.textContent = config.completeText;
    els.voucherDescription.hidden = false;
    els.voucherSerial.textContent = `${config.vouchers.length} of ${config.vouchers.length} redeemed`;
    els.redeemButton.textContent = "All Vouchers Redeemed";
    els.redeemButton.disabled = true;
  }

  renderHistory();
}

function renderHistory() {
  els.historyList.innerHTML = "";

  if (!state.redeemed.length) {
    const empty = document.createElement("li");
    empty.textContent = "No vouchers redeemed yet.";
    els.historyList.append(empty);
    return;
  }

  state.redeemed.forEach((entry, index) => {
    const voucher = voucherForEntry(entry, index);
    const item = document.createElement("li");
    item.textContent = `${voucher.title} - ${formatDate(entry.redeemedAt)} - ${voucher.serial}`;
    els.historyList.append(item);
  });
}

function redeemNext() {
  const voucher = currentVoucher();
  if (!voucher) return;

  state.redeemed.push({
    voucherIndex: state.redeemed.length,
    redeemedAt: new Date().toISOString(),
  });
  saveState(state);

  els.ticket.classList.add("is-flipping");
  window.setTimeout(() => els.ticket.classList.remove("is-flipping"), 540);
  render();
  launchConfetti();

  if (navigator.vibrate) {
    navigator.vibrate([20, 35, 20]);
  }
}

function launchConfetti() {
  const ctx = els.confetti.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  els.confetti.width = width * ratio;
  els.confetti.height = height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const colors = ["#7f2f44", "#b98242", "#426654", "#f1c6bf", "#fff4d8"];
  const pieces = Array.from({ length: 70 }, () => ({
    x: width / 2 + (Math.random() - 0.5) * 90,
    y: height * 0.42,
    vx: (Math.random() - 0.5) * 7,
    vy: -Math.random() * 6 - 2,
    size: Math.random() * 7 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * Math.PI,
  }));

  let frame = 0;
  function tick() {
    ctx.clearRect(0, 0, width, height);
    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.vy += 0.17;
      piece.rotation += 0.14;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.62);
      ctx.restore();
    });
    frame += 1;
    if (frame < 120) {
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }
  tick();
}

els.openBook.addEventListener("click", () => {
  state.opened = true;
  saveState(state);
  render();
});

els.redeemButton.addEventListener("click", redeemNext);

els.historyButton.addEventListener("click", () => {
  els.historyPanel.hidden = !els.historyPanel.hidden;
  els.historyButton.textContent = els.historyPanel.hidden ? "View History" : "Hide History";
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  els.installApp.hidden = false;
});

els.installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  els.installApp.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

hydrateStaticText();
render();
