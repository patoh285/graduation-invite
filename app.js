// EVENT SITE: the whole application (everything except where data is saved).
//
// CONTENTS
//   1. Backend        where data is saved (chosen in js/backend.js)
//   2. Wording        all guest text, English and Kiswahili
//   3. Shared data    default event details, small helpers
//   4. Interface      pop-up messages, downloads, clipboard, picture shrinking
//   5. Guest side     event page, booking, ticket, questions, photos
//   6. Admin side     login, overview, bookings, door, messages, content, event, team
//   7. Start-up       page links (#book, #admin ...) and live data
//
// Tip: to find a section, search this file for its number, for example "5. GUEST SIDE".

/* ================================================================
   2. WORDING
   All guest-facing text in English and Kiswahili. Edit the text, keep the names on the left.
   ================================================================ */
// To change a sentence, edit the text inside the quotes. Do not change the names on the left.
// The same name must exist in both English and Kiswahili.
const T = {
  // English
  en: {

    // Header and menu
    kicker: "You are invited",
    lang: "Kiswahili",
    nHome: "Home",
    nBook: "Book seats",
    nTicket: "My ticket",
    nPhotos: "Photos",
    nAsk: "Questions",
    nAdmin: "Admin",
    bookNow: "Book your seats",
    noPhotos: "No photos yet.",
    copyLink: "Copy my ticket link",
    testBanner: "Test mode: bookings and changes are saved on this device only, until the online backend is connected.",

    // Home page
    about: "About the event",
    when: "When",
    where: "Where",
    map: "Open map",
    cal: "Add to calendar",
    share: "Share",
    copied: "Link copied",
    nodate: "The date is not set yet.",
    seatsT: "Seats",
    left: "seats left",
    full: "Fully booked",

    // Booking form
    res: "Reserve your seats",
    ppl: "Number of people",
    nm: "Full name",
    ph: "Phone (or N/A)",
    mp: "M-Pesa confirmation code",
    send: "Send for confirmation",
    tot: "Total to pay",
    pay: "Pay to",

    // Ticket page (check a booking)
    chk: "Check my booking",
    chkHint: "Enter the M-Pesa code you paid with. This page updates by itself once your payment is approved.",
    nf: "No booking found with that code yet.",
    pend: "Payment pending. We are confirming it. This page will update by itself.",
    rej: "This payment could not be confirmed. Please contact us.",
    dl: "Download my card",
    bad: "Fill every name and phone box (N/A allowed) and a valid M-Pesa code.",
    dup: "That M-Pesa code is already used.",
    fullm: "Not enough seats left.",
    ok: "Booking received. We will confirm your payment shortly.",

    // The invitation ticket
    invite: "Your invitation",
    show: "Show this code at the entrance",

    // Questions and feedback page
    ask: "Questions and feedback",
    askHint: "Ask the organisers anything or share your feedback.",
    kindQ: "Question",
    kindF: "Feedback",
    yname: "Your name (optional)",
    ycontact: "Phone or email so we can reply (optional)",
    ytext: "Your message",
    asend: "Send message",
    asent: "Thank you, your message was sent.",
    abad: "Please write your message first.",
    aerr: "Could not send. Please try again.",

    // FAQ
    faq: "Frequently asked questions",
    nofaq: "No questions answered yet.",

    // Photos viewer and countdown
    gallery: "Photos",
    close: "Close",
    days: "days",
    hrs: "hrs",
    min: "min",
    sec: "sec",
    started: "The event has started",
  },

  // Kiswahili
  sw: {

    // Header and menu
    kicker: "Umealikwa",
    lang: "English",
    nHome: "Nyumbani",
    nBook: "Weka viti",
    nTicket: "Tiketi yangu",
    nPhotos: "Picha",
    nAsk: "Maswali",
    nAdmin: "Msimamizi",
    bookNow: "Weka viti vyako",
    noPhotos: "Hakuna picha bado.",
    copyLink: "Nakili kiungo cha tiketi yangu",
    testBanner: "Hali ya majaribio: nafasi na mabadiliko huhifadhiwa kwenye kifaa hiki tu, hadi mfumo wa mtandaoni uunganishwe.",

    // Home page
    about: "Kuhusu tukio",
    when: "Lini",
    where: "Wapi",
    map: "Fungua ramani",
    cal: "Ongeza kwenye kalenda",
    share: "Shiriki",
    copied: "Kiungo kimenakiliwa",
    nodate: "Tarehe haijawekwa bado.",
    seatsT: "Viti",
    left: "viti vimebaki",
    full: "Viti vimejaa",

    // Booking form
    res: "Weka nafasi yako",
    ppl: "Idadi ya watu",
    nm: "Jina kamili",
    ph: "Simu (au N/A)",
    mp: "Nambari ya uthibitisho wa M-Pesa",
    send: "Tuma kwa uthibitisho",
    tot: "Jumla ya kulipa",
    pay: "Lipa kwa",

    // Ticket page (check a booking)
    chk: "Angalia nafasi yangu",
    chkHint: "Weka nambari ya M-Pesa uliyolipia. Ukurasa huu utajisasisha malipo yakithibitishwa.",
    nf: "Hakuna nafasi iliyopatikana kwa nambari hiyo bado.",
    pend: "Malipo yanasubiri. Tunayathibitisha. Ukurasa huu utajisasisha.",
    rej: "Malipo hayakuthibitishwa. Tafadhali wasiliana nasi.",
    dl: "Pakua kadi yangu",
    bad: "Jaza kila jina na simu (N/A inaruhusiwa) na nambari sahihi ya M-Pesa.",
    dup: "Nambari hiyo ya M-Pesa imetumika.",
    fullm: "Viti havitoshi.",
    ok: "Nafasi imepokelewa. Tutathibitisha malipo yako hivi karibuni.",

    // The invitation ticket
    invite: "Mwaliko wako",
    show: "Onyesha nambari hii mlangoni",

    // Questions and feedback page
    ask: "Maswali na maoni",
    askHint: "Waulize waandaaji chochote au toa maoni yako.",
    kindQ: "Swali",
    kindF: "Maoni",
    yname: "Jina lako (si lazima)",
    ycontact: "Simu au barua pepe ili tukujibu (si lazima)",
    ytext: "Ujumbe wako",
    asend: "Tuma ujumbe",
    asent: "Asante, ujumbe wako umetumwa.",
    abad: "Tafadhali andika ujumbe kwanza.",
    aerr: "Imeshindwa kutuma. Jaribu tena.",

    // FAQ
    faq: "Maswali yanayoulizwa mara kwa mara",
    nofaq: "Hakuna maswali yaliyojibiwa bado.",

    // Photos viewer and countdown
    gallery: "Picha",
    close: "Funga",
    days: "siku",
    hrs: "saa",
    min: "dak",
    sec: "sek",
    started: "Tukio limeanza",
  },
};

/* ================================================================
   3. SHARED DATA AND HELPERS
   Default event details, live data, small helper functions.
   ================================================================ */
// Shared helpers and shared data used by the guest and admin sides.

// Shortcut: $("name") finds the element on the page that has that id.
const $ = (id) => document.getElementById(id);

// Makes text safe to place inside the page, so nobody can sneak code in by typing it into a form.
const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Writes a number as money, for example 3500 becomes KES 3,500.
const money = (x) => "KES " + Number(x || 0).toLocaleString();

// Default event details, used until the organiser saves their own in the dashboard.
const DEFAULT_C = {
  title: "Your Event Title", host: "", description: "", when: "", venue: "", map: "",
  price: 3000, seats: 30, phone: "", paybill: "", account: "", whatsapp: "",
};

// Live data: C = event details, taken = seats booked, faq = published answers, lg = language
const S = { C: { ...DEFAULT_C }, taken: 0, faq: [], header: "", photos: [], sections: [], lg: "en" };

const t = (key) => T[S.lg][key];

// Turns the saved date and time into a readable sentence, in the chosen language.
function whenText() {
  if (!S.C.when) return "";
  const d = new Date(S.C.when);
  if (isNaN(d)) return S.C.when;
  return d.toLocaleString(S.lg == "sw" ? "sw-KE" : "en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

/* ================================================================
   4. INTERFACE HELPERS
   Pop-up messages, downloads, clipboard, times, picture shrinking.
   ================================================================ */
// Small interface helpers: messages, downloads, clipboard, time.

// Shows a small pop-up message at the bottom of the screen.
function toast(text, kind = "ok") {
  const el = document.createElement("div");
  el.className = "toast " + (kind == "bad" ? "bad" : "");
  el.textContent = text;
  $("toast").appendChild(el);
  setTimeout(() => el.remove(), 3800);
}

// Saves a file to the person's device (used for the guest list and calendar file).
function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// Copies text to the clipboard. Returns true if it worked.
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (e) {}
  try {
    const box = document.createElement("textarea");
    box.value = text; document.body.appendChild(box); box.select();
    const ok = document.execCommand("copy"); box.remove(); return ok;
  } catch (e) { return false; }
}

// Turns a time into words such as "5 min ago".
function ago(ms) {
  if (!ms) return "";
  const s = Math.floor((Date.now() - ms) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return Math.floor(s / 60) + " min ago";
  if (s < 86400) return Math.floor(s / 3600) + " h ago";
  return Math.floor(s / 86400) + " d ago";
}

// Shrinks a picture in the browser so it fits in the database (about 800 KB at most).
function resizeImage(file, max, quality) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const r = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(img.width * r));
      c.height = Math.max(1, Math.round(img.height * r));
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      let q = quality, data = c.toDataURL("image/jpeg", q);
      while (data.length > 800000 && q > 0.35) { q -= 0.1; data = c.toDataURL("image/jpeg", q); }
      data.length > 800000 ? reject(new Error("That picture is too large. Try a smaller one.")) : resolve(data);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("That file is not a picture.")); };
    img.src = url;
  });
}

/* ================================================================
   5. GUEST SIDE
   Event info, booking, live booking status, card download, questions, FAQ, photos.
   ================================================================ */
// Guest side: event info, seat meter, booking, live booking status, questions and FAQ.

let people = 1;        // number of people selected in the booking form
let unwatch = null;    // stops the live listener on the current booking
let watching = false;  // true once a booking has been looked up
let last = null;       // last booking data received
let curId = "";        // the M-Pesa code of the booking being watched

/* ---------- Drawing ---------- */
// Redraws everything a guest sees, using the latest data. It runs every time the data changes.
function draw() {
  const C = S.C;
  document.querySelectorAll("[data-t]").forEach((e) => (e.textContent = t(e.dataset.t)));
  document.querySelectorAll("[data-p]").forEach((e) => (e.placeholder = t(e.dataset.p)));

  $("lg").textContent = t("lang");
  $("hn").textContent = C.title;
  $("hh").textContent = C.host ? (S.lg == "sw" ? "Mwenyeji: " : "Hosted by ") + C.host : "";
  $("hw").textContent = whenText();
  $("hv").textContent = C.venue;
  $("ab").textContent = C.description;
  $("ab").hidden = !C.description;
  $("mw").textContent = whenText() || "—";
  $("mv").textContent = C.venue || "—";
  const okMap = /^https?:\/\//.test(C.map || "");
  $("amap").hidden = !okMap;
  if (okMap) $("amap").href = C.map;

  const left = Math.max(0, C.seats - S.taken);
  $("cnt").textContent = left ? left + " " + t("left") : t("full");
  $("sbar").style.width = Math.min(100, Math.round((S.taken / Math.max(1, C.seats)) * 100)) + "%";
  $("form").hidden = !left;
  $("fullnote").hidden = !!left;

  $("pay").innerHTML =
    t("pay") + ": <b>" + esc(C.phone || "—") + "</b>" +
    (C.paybill ? " · Paybill <b>" + esc(C.paybill) + "</b> · Acc <b>" + esc(C.account) + "</b>" : "");

  const max = Math.min(10, left) || 1;
  $("n").innerHTML = Array.from({ length: max }, (_, i) =>
    `<option ${i + 1 == people ? "selected" : ""}>${i + 1}</option>`).join("");
  drawRows();

  $("fq").innerHTML = S.faq.length
    ? S.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")
    : `<p class="mut">${t("nofaq")}</p>`;
  $("hero").style.backgroundImage = S.header
    ? `linear-gradient(rgba(10,30,20,.62), rgba(10,30,20,.85)), url("${S.header}")` : "";
  $("sx").innerHTML = S.sections.map((s) =>
    `<section class="card"><h2>${esc(s.title)}</h2><p class="desc">${esc(s.text)}</p></section>`).join("");
  $("gg").innerHTML = S.photos.length
    ? S.photos.map((p, i) => `<button class="ph" data-i="${i}"><img src="${p.data}" alt="${esc(p.caption)}" loading="lazy"></button>`).join("")
    : `<p class="mut">${t("noPhotos")}</p>`;
  if (watching) renderResult(last);
  tick();
}

// Shows one name-and-phone row for each person being booked, and updates the total price.
function drawRows() {
  const old = [...document.querySelectorAll("#rows input")].map((i) => i.value);
  people = +$("n").value || 1;
  $("rows").innerHTML = Array.from({ length: people }, (_, i) => `
    <div class="row2">
      <input placeholder="${t("nm")} ${i + 1}" value="${esc(old[i * 2] || "")}">
      <input placeholder="${t("ph")}" inputmode="tel" value="${esc(old[i * 2 + 1] || "")}">
    </div>`).join("");
  $("tot").textContent = t("tot") + ": " + money(people * S.C.price);
}

// Shows a short message under a form: red for a problem, grey for a note.
function say(id, text, good) {
  $(id).textContent = text;
  $(id).className = good ? "mut" : "err";
}

/* ---------- Countdown ---------- */
// Updates the countdown. It runs once every second.
function tick() {
  const el = $("cd");
  const ms = S.C.when ? new Date(S.C.when) - Date.now() : NaN;
  if (isNaN(ms)) { el.innerHTML = ""; return; }
  if (ms <= 0) { el.innerHTML = `<span>${t("started")}</span>`; return; }
  const s = Math.floor(ms / 1000);
  const parts = [[Math.floor(s / 86400), "days"], [Math.floor((s % 86400) / 3600), "hrs"], [Math.floor((s % 3600) / 60), "min"], [s % 60, "sec"]];
  el.innerHTML = parts.map(([v, k]) => `<div><b>${v}</b><small>${t(k)}</small></div>`).join("");
}

/* ---------- Booking ---------- */
// Saves a booking: checks the form, reserves the seats and stores the booking together in one safe step.
async function send() {
  const v = [...document.querySelectorAll("#rows input")].map((i) => i.value.trim());
  const mpesa = $("mp").value.trim().toUpperCase();
  if (v.some((x) => !x) || !/^[A-Z0-9]{8,12}$/.test(mpesa)) return say("msg", t("bad"));

  const list = Array.from({ length: people }, (_, i) => ({ n: v[i * 2], t: v[i * 2 + 1] }));
  const code = "EVT-" + (1000 + Math.floor(Math.random() * 9000));
  $("go").disabled = true;
  try {
    // One transaction: check seats, reserve them, and save the booking together.
    await runTransaction(db, async (tx) => {
      const counterRef = doc(db, "stats", "counter");
      const counter = await tx.get(counterRef);
      const taken = counter.exists() ? counter.data().taken : 0;
      if (taken + people > S.C.seats) throw "full";
      tx.set(counterRef, { taken: taken + people });
      tx.set(doc(db, "bookings", mpesa), {
        people: list, status: "pending", code, admitted: false, admittedAt: 0,
        paid: people * S.C.price, created: Date.now(),
      });
    });
    say("msg", "");
    toast(t("ok"));
    $("mp").value = "";
    location.hash = "#ticket-" + mpesa;   // opens the ticket page for this booking
  } catch (e) {
    say("msg", e == "full" ? t("fullm") : t("dup"));
  }
  $("go").disabled = false;
}

/* ---------- Live booking status ---------- */
// Looks up a booking by its M-Pesa code, then keeps the page up to date if its status changes.
function watch(raw) {
  const id = (raw || $("q").value).trim().toUpperCase();
  if (!id) return;
  if (unwatch) unwatch();
  curId = id;
  try { localStorage.setItem("event_code", id); } catch (e) {}
  watching = true;
  unwatch = onSnapshot(
    doc(db, "bookings", id),
    (snap) => { last = snap.exists() ? snap.data() : null; renderResult(last); },
    () => { last = null; renderResult(null); }
  );
}

// Reopens the last booking this device looked up.
function autoCheck() {
  let id = "";
  try { id = localStorage.getItem("event_code") || ""; } catch (e) {}
  if (id) { $("q").value = id; watch(id); }
}

// Shows the state of a booking: not found, pending, rejected, or the ticket itself.
function renderResult(b) {
  const C = S.C;
  if (!b) { $("res").innerHTML = `<p class="mut">${t("nf")}</p>`; return; }
  let html;
  if (b.status == "pending") html = `<p><span class="badge pending">${esc(b.code)}</span> ${t("pend")}</p>`;
  else if (b.status == "rejected") html = `<p class="err">${t("rej")}</p>`;
  else html = `
    <div class="ticket">
      <small class="mut">${esc(C.title)}</small>
      <h3>${t("invite")}</h3>
      ${b.people.map((p) => "<div><b>" + esc(p.n) + "</b></div>").join("")}
      <p class="mut">${esc(whenText())}<br>${esc(C.venue)}</p>
      <div class="code">${esc(b.code)}</div>
      <small class="mut">${t("show")}</small>
    </div>
    <button class="btn" id="dl">${t("dl")}</button>`;
  $("res").innerHTML = html + `<p><button class="btn ghost sm" id="cl">${t("copyLink")}</button></p>`;
  if ($("dl")) $("dl").onclick = () => downloadCard(b);
  $("cl").onclick = async () => {
    const link = location.origin + location.pathname + "#ticket-" + curId;
    toast((await copyText(link)) ? t("copied") : link);
  };
}

// Draws the invitation card as a picture and saves it to the device.
function downloadCard(b) {
  const C = S.C;
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 420 + b.people.length * 40;
  const x = canvas.getContext("2d");
  x.fillStyle = "#fffdf6"; x.fillRect(0, 0, 800, canvas.height);
  x.fillStyle = "#123524"; x.fillRect(0, 0, 800, 120);
  x.strokeStyle = "#b8892f"; x.lineWidth = 8; x.strokeRect(14, 14, 772, canvas.height - 28);
  x.textAlign = "center";
  x.fillStyle = "#e0bb62"; x.font = "20px Georgia"; x.fillText("YOU ARE INVITED", 400, 60);
  x.fillStyle = "#f6efdc"; x.font = "bold 34px Georgia"; x.fillText(C.title.slice(0, 40), 400, 100);
  let y = 190;
  x.fillStyle = "#123524"; x.font = "bold 28px Georgia";
  b.people.forEach((p) => { x.fillText(p.n, 400, y); y += 40; });
  x.fillStyle = "#5d6b61"; x.font = "22px Georgia";
  x.fillText(whenText(), 400, y + 15);
  x.fillText(C.venue, 400, y + 50);
  x.fillStyle = "#b8892f"; x.font = "bold 48px Georgia"; x.fillText(b.code, 400, y + 120);
  x.fillStyle = "#5d6b61"; x.font = "18px Georgia"; x.fillText("Show this code at the entrance", 400, y + 155);
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "invitation-" + b.code + ".png";
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- Calendar and sharing ---------- */
// Makes a calendar file (.ics) that the guest can add to their phone calendar.
function addToCalendar() {
  if (!S.C.when || isNaN(new Date(S.C.when))) return toast(t("nodate"), "bad");
  const start = new Date(S.C.when), end = new Date(+start + 3 * 3600e3);
  const f = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "DTSTART:" + f(start), "DTEND:" + f(end),
    "SUMMARY:" + S.C.title, "LOCATION:" + (S.C.venue || ""), "END:VEVENT", "END:VCALENDAR"];
  download("event.ics", lines.join("\r\n"), "text/calendar");
}

// Shares the site link: the phone's share sheet if available, otherwise copies the link.
async function share() {
  const url = location.origin + location.pathname;
  if (navigator.share) { try { await navigator.share({ title: S.C.title, url }); } catch (e) {} return; }
  toast((await copyText(url)) ? t("copied") : url);
}

/* ---------- Questions and feedback ---------- */
// Sends a question or feedback to the organisers.
async function ask() {
  const text = $("at").value.trim();
  if (text.length < 3) return say("am", t("abad"));
  $("as").disabled = true;
  try {
    await addDoc(collection(db, "messages"), {
      kind: $("ak").value, name: $("an").value.trim().slice(0, 80), contact: $("ac").value.trim().slice(0, 80),
      text: text.slice(0, 1000), created: Date.now(), status: "new",
    });
    ["an", "ac", "at"].forEach((i) => ($(i).value = ""));
    say("am", ""); toast(t("asent"));
  } catch (e) { say("am", t("aerr")); }
  $("as").disabled = false;
}

/* ---------- Photo viewer ---------- */
let viewing = 0;
// Opens a photo full-screen in the viewer.
function openPhoto(i) {
  if (!S.photos.length) return;
  viewing = (i + S.photos.length) % S.photos.length;
  $("lbi").src = S.photos[viewing].data;
  $("lbc").textContent = S.photos[viewing].caption || "";
  $("lb").hidden = false;
}

/* ---------- Wire up buttons ---------- */
// Connects every guest button to the function it should run.
function initGuest() {
  $("n").onchange = drawRows;
  $("go").onclick = send;
  $("ck").onclick = () => watch();
  $("q").onkeydown = (e) => { if (e.key == "Enter") watch(); };
  $("bcal").onclick = addToCalendar;
  $("bshare").onclick = share;
  $("as").onclick = ask;
  $("gg").onclick = (e) => { const b = e.target.closest(".ph"); if (b) openPhoto(+b.dataset.i); };
  $("lbx").onclick = () => ($("lb").hidden = true);
  $("lbp").onclick = () => openPhoto(viewing - 1);
  $("lbn").onclick = () => openPhoto(viewing + 1);
  document.addEventListener("keydown", (e) => {
    if ($("lb").hidden) return;
    if (e.key == "Escape") $("lb").hidden = true;
    if (e.key == "ArrowLeft") openPhoto(viewing - 1);
    if (e.key == "ArrowRight") openPhoto(viewing + 1);
  });
  $("lg").onclick = () => { S.lg = S.lg == "en" ? "sw" : "en"; draw(); };
  setInterval(tick, 1000);
  draw();
}

/* ================================================================
   6. ADMIN DASHBOARD
   Login, overview, bookings, door check-in, messages, content, event settings, team.
   ================================================================ */
// Admin dashboard: overview, bookings, door check-in, messages and FAQ, event settings, team.
// Roles (stored in the Firestore "admins" collection): "full" = everything, "door" = check-in only.

/* ---------- State ---------- */
let role = null;            // "full", "door" or null
let tab = "";               // current dashboard tab
let bookings = [], messages = [], admins = [];
let unsubscribe = [];       // live listeners to stop on sign-out
let flt = "all", mflt = "new", bq = "", dq = "";
let dirty = false;          // a refresh was held back while the user was typing in a form

const isFull = () => role == "full";
const TABS = {
  full: [["overview", "Overview"], ["bookings", "Bookings"], ["door", "Door"], ["messages", "Messages"], ["content", "Content"], ["event", "Event"], ["team", "Team"]],
  door: [["door", "Door"], ["guests", "Guests"]],
};
const FIELDS = [
  ["title", "Event title", "text"], ["host", "Host / organiser", "text"],
  ["description", "About the event (guests read this)", "textarea"],
  ["when", "Date and time", "datetime-local"], ["venue", "Venue", "text"], ["map", "Map link (optional, starts with https://)", "url"],
  ["price", "Price per person (KES)", "number"], ["seats", "Total seats", "number"],
  ["phone", "Phone number that receives payments", "tel"], ["paybill", "Paybill number (optional)", "text"],
  ["account", "Paybill account name (optional)", "text"], ["whatsapp", "Contact WhatsApp number (optional)", "tel"],
];
const peopleText = (b) => b.people.map((p) => esc(p.n) + " (" + esc(p.t) + ")").join(", ");
const get = (id) => bookings.find((b) => b.id == id);
const errText = (e) => e && e.code
  ? (e.code == "permission-denied" ? "You don't have permission to do that." : "Something went wrong (" + e.code + ").")
  : (e && e.message) || "Something went wrong.";

/* ---------- Sign-in and loading ---------- */
function initAdmin() {
  $("app").addEventListener("click", onClick);
  $("app").addEventListener("input", onInput);
  $("app").addEventListener("change", onChange);
  $("app").addEventListener("keydown", onKey);
  document.addEventListener("focusout", () => setTimeout(() => { if (dirty && !typing()) redraw(); }, 80));
  onAuthStateChanged(auth, (user) => loadUser(user));
}

// Runs when someone signs in or out. Loads only the data their role is allowed to see.
async function loadUser(user) {
  unsubscribe.forEach((stop) => stop());
  unsubscribe = []; role = null; bookings = []; messages = []; admins = []; tab = "";
  flt = "all"; mflt = "new"; bq = ""; dq = ""; // fresh filters for each sign-in
  if (!user) return showLogin();

  const snap = await getDoc(doc(db, "admins", user.uid));
  role = snap.exists() ? snap.data().role : null;
  if (!role) return showNoAccess();

  const listen = (name, set) => unsubscribe.push(onSnapshot(collection(db, name), (s) => {
    set(s.docs.map((d) => ({ id: d.id, ...d.data() })));
    redraw();
  }, () => {}));
  if (isFull()) {
    await createCounterIfMissing();
    listen("admins", (l) => (admins = l));
    listen("messages", (l) => (messages = l));
  }
  listen("bookings", (l) => (bookings = l));
}

async function createCounterIfMissing() {
  const ref = doc(db, "stats", "counter");
  if (!(await getDoc(ref)).exists()) await setDoc(ref, { taken: 0 });
}

// The sign-in box (and, until an owner exists, the create-owner box).
async function showLogin() {
  // The "create owner" box only appears until the first owner exists.
  let ownerExists = true;
  try { ownerExists = (await getDoc(doc(db, "meta", "owner"))).exists(); } catch (e) {}
  $("app").innerHTML = `
    <div class="card">
      <h2>Sign in</h2>
      ${BACKEND == "local" ? '<p class="mut">Test mode: admin accounts are saved on this device only.</p>' : ""}
      <input id="em" type="email" placeholder="Email" autocomplete="username">
      <input id="pw" type="password" placeholder="Password" autocomplete="current-password">
      <div id="le" class="err"></div>
      <button class="btn" data-act="login">Sign in</button>
    </div>` + (ownerExists ? "" : `
    <div class="card">
      <h2>First time? Create the owner account</h2>
      <p class="mut">Only one owner account can be created. After that, the owner adds other admins from the dashboard.</p>
      <input id="oe" type="email" placeholder="Your email">
      <input id="op" type="password" placeholder="Password (6+ characters)">
      <div id="oerr" class="err"></div>
      <button class="btn" data-act="owner">Create owner account</button>
    </div>`);
}

function showNoAccess() {
  $("app").innerHTML = `<div class="card"><p>This account has no admin access.</p><button class="btn" data-act="out">Sign out</button></div>`;
}

/* ---------- Drawing ---------- */
// True while the admin is typing in a form. The dashboard then waits to refresh so nothing they typed is lost.
const typing = () => { const f = document.activeElement; return !!(f && f.dataset && f.dataset.keep !== undefined); };

// Redraws the admin dashboard for the tab that is open.
function redraw() {
  if (!role) return;
  if (typing()) { dirty = true; return; }
  dirty = false;
  const tabs = TABS[role];
  if (!tabs.some((x) => x[0] == tab)) tab = tabs[0][0];

  const f = document.activeElement, fid = f && f.id, caret = f && f.selectionStart;
  const view = { overview: vOverview, bookings: () => vBookings(false), guests: () => vBookings(true), door: vDoor, messages: vMessages, content: vContent, event: vEvent, team: vTeam }[tab];
  $("app").innerHTML = `
    <div class="bar-top"><div><b>${esc(S.C.title)}</b> <span class="mut">· ${role}</span></div>
      <button class="btn ghost sm" data-act="out">Sign out</button></div>
    <nav class="tabs">${tabs.map(([k, label]) =>
      `<button class="tab ${k == tab ? "on" : ""}" data-act="tab" data-id="${k}">${label}${badge(k)}</button>`).join("")}</nav>
    <div>${view()}</div>`;
  if (fid && $(fid)) { const el = $(fid); el.focus(); if (caret != null && el.setSelectionRange) try { el.setSelectionRange(caret, caret); } catch (e) {} }
}

// The small red number on a tab, for example the count of pending payments.
function badge(k) {
  const n = k == "bookings" ? bookings.filter((b) => b.status == "pending").length
    : k == "messages" ? messages.filter((m) => m.status == "new").length : 0;
  return n ? `<i class="dot">${n}</i>` : "";
}

const stat = (label, value, sub = "") => `<div class="stat"><small>${label}</small><b>${value}</b><span>${sub}</span></div>`;
const sum = (list, f) => list.reduce((s, b) => s + f(b), 0);

// Overview tab: totals, seats, income and quick actions.
function vOverview() {
  const ap = bookings.filter((b) => b.status == "approved"), pe = bookings.filter((b) => b.status == "pending");
  const pct = Math.min(100, Math.round((S.taken / Math.max(1, S.C.seats)) * 100));
  const seen = sum(ap.filter((b) => b.admitted), (b) => b.people.length), all = sum(ap, (b) => b.people.length);
  const latest = bookings.slice().sort((a, b) => b.created - a.created).slice(0, 5);
  return `
    <div class="stats">
      ${stat("Seats booked", S.taken + " / " + S.C.seats, `<div class="bar"><div class="fill" style="width:${pct}%"></div></div>`)}
      ${stat("Pending payments", pe.length, money(sum(pe, (b) => b.paid)) + " to confirm")}
      ${stat("Confirmed income", money(sum(ap, (b) => b.paid)), ap.length + " bookings")}
      ${stat("Checked in", seen + " / " + all, "people at the door")}
      ${stat("New messages", messages.filter((m) => m.status == "new").length, "questions and feedback")}
      ${stat("Seats left", Math.max(0, S.C.seats - S.taken), "")}
    </div>
    <div class="card"><h2>Quick actions</h2><div class="actions">
      <button class="btn ghost sm" data-act="copylink">Copy guest link</button>
      <button class="btn ghost sm" data-act="washare">Share on WhatsApp</button>
      <button class="btn ghost sm" data-act="csv">Export guest list (CSV)</button></div></div>
    <div class="card"><h2>Latest bookings</h2>${latest.map((b) =>
      `<p><b>${b.code}</b> <span class="badge ${b.status}">${b.status}</span><br><span class="mut">${peopleText(b)} · ${ago(b.created)}</span></p>`).join("") || '<p class="mut">No bookings yet.</p>'}</div>`;
}

function matches(b) {
  const text = (b.code + " " + b.id + " " + b.people.map((p) => p.n + " " + p.t).join(" ")).toLowerCase();
  return !bq || text.includes(bq.toLowerCase());
}

// Bookings tab (and the door team's Guests tab): list, search and filters.
function vBookings(locked) {
  const list = bookings.filter((b) => (locked ? b.status == "approved" : flt == "all" || b.status == flt) && matches(b))
    .sort((a, b) => b.created - a.created);
  const chips = locked ? "" : `<div class="chips">${["all", "pending", "approved", "rejected"].map((k) =>
    `<button class="chip ${k == flt ? "on" : ""}" data-act="flt" data-id="${k}">${k}</button>`).join("")}</div>`;
  return `
    <div class="card"><input id="bq" placeholder="Search by name, phone, code or M-Pesa code" value="${esc(bq)}">${chips}
      ${isFull() ? `<button class="btn ghost sm" data-act="csv">Export CSV</button>` : ""}</div>
    ${list.map(bookingCard).join("") || '<p class="mut">Nothing to show.</p>'}`;
}

// One booking in the list, with the buttons that fit its status.
function bookingCard(b) {
  let buttons = "";
  if (b.status == "pending" && isFull())
    buttons = `<button class="btn good sm" data-act="ok" data-id="${b.id}">Approve</button><button class="btn danger sm" data-act="no" data-id="${b.id}">Reject</button>`;
  if (b.status == "approved")
    buttons = `<button class="btn ghost sm" data-act="in" data-id="${b.id}">${b.admitted ? "Undo admit" : "Admit"}</button>` +
      (isFull() ? `<button class="btn danger sm" data-act="no" data-id="${b.id}">Cancel and release seats</button>` : "");
  if (b.status == "rejected" && isFull())
    buttons = `<button class="btn danger sm" data-act="del" data-id="${b.id}">Delete</button>`;
  return `
    <div class="card item"><div class="between"><b>${esc(b.code)}</b><span class="badge ${b.status}">${b.status}</span></div>
      <div class="mut">M-Pesa ${esc(b.id)} · ${money(b.paid)} · ${ago(b.created)}${b.admitted ? " · admitted ✓" : ""}</div>
      <div>${peopleText(b)}</div><div class="actions">${buttons}</div></div>`;
}

// Door tab: type an entry code and see at once whether it is valid.
function vDoor() {
  const code = dq.trim().toUpperCase();
  const f = bookings.find((b) => b.code == code);
  const ap = bookings.filter((b) => b.status == "approved");
  const seen = sum(ap.filter((b) => b.admitted), (b) => b.people.length), all = sum(ap, (b) => b.people.length);
  let result = "";
  if (f && f.status == "approved") {
    result = `<div class="verdict ${f.admitted ? "warn" : "good"}"><h2>${f.admitted ? "ALREADY ADMITTED" : "VALID"}</h2>
      <b>${f.code}</b> · ${f.people.length} ${f.people.length == 1 ? "person" : "people"}<br>${peopleText(f)}
      ${f.admitted ? `<br><span class="mut">at ${new Date(f.admittedAt).toLocaleTimeString()}</span>` : `<br><button class="btn good" data-act="in" data-id="${f.id}">Admit ${f.people.length}</button>`}</div>`;
  } else if (f) {
    result = `<div class="verdict bad"><h2>NOT VALID</h2>Payment is ${f.status}.</div>`;
  } else if (code.length >= 8) {
    result = `<div class="verdict bad"><h2>CODE NOT FOUND</h2></div>`;
  }
  return `<div class="card"><h2>Door check-in</h2><p class="mut">${seen} of ${all} approved guests are in.</p>
    <input id="dq" class="big" placeholder="EVT-1234" autocapitalize="characters" autocomplete="off" value="${esc(dq)}">${result}</div>`;
}

// Messages tab: questions and feedback, answers, and the published FAQ.
function vMessages() {
  const list = messages.filter((m) => m.status == mflt).sort((a, b) => b.created - a.created);
  const cards = list.map((m) => `
    <div class="card item"><div class="between"><span><span class="badge ${m.status}">${m.kind}</span> <b>${esc(m.name || "Anonymous")}</b></span><span class="mut">${ago(m.created)}</span></div>
      <p>${esc(m.text)}</p>${m.contact ? `<p class="mut">Contact: ${esc(m.contact)}</p>` : ""}
      ${m.kind == "question" ? `<textarea id="r_${m.id}" data-keep placeholder="Write your answer"></textarea>` : ""}
      <div class="actions">
        ${m.kind == "question" ? `<button class="btn good sm" data-act="pub" data-id="${m.id}">Publish to FAQ</button><button class="btn ghost sm" data-act="wareply" data-id="${m.id}">Reply on WhatsApp</button>` : ""}
        ${m.status == "new" ? `<button class="btn ghost sm" data-act="done" data-id="${m.id}">Mark done</button>` : ""}
        <button class="btn danger sm" data-act="delm" data-id="${m.id}">Delete</button></div></div>`).join("");
  const faqs = S.faq.map((f) => `<div class="item"><b>${esc(f.q)}</b><p>${esc(f.a)}</p>
    <button class="btn danger sm" data-act="faqdel" data-id="${f.id}">Remove</button></div>`).join("");
  return `
    <div class="chips">${["new", "done"].map((k) => `<button class="chip ${k == mflt ? "on" : ""}" data-act="mflt" data-id="${k}">${k}</button>`).join("")}</div>
    ${cards || '<p class="mut">No messages here.</p>'}
    <div class="card"><h2>Published FAQ</h2>${faqs || '<p class="mut">Nothing published yet.</p>'}
      <h3>Add a question and answer</h3>
      <input id="fq_q" data-keep placeholder="Question"><textarea id="fq_a" data-keep placeholder="Answer"></textarea>
      <button class="btn" data-act="faqadd">Add to FAQ</button></div>`;
}

// Content tab: header picture, event photos and extra text sections.
function vContent() {
  const photos = S.photos.map((p) => `
    <div class="item"><img class="thumb" src="${p.data}" alt="">
      <input id="cap_${p.id}" data-keep value="${esc(p.caption)}" placeholder="Caption">
      <div class="actions"><button class="btn ghost sm" data-act="capsave" data-id="${p.id}">Save caption</button>
        <button class="btn danger sm" data-act="photodel" data-id="${p.id}">Delete</button></div></div>`).join("");
  const sections = S.sections.map((s) => `
    <div class="item"><input id="sec_t_${s.id}" data-keep value="${esc(s.title)}">
      <textarea id="sec_x_${s.id}" data-keep>${esc(s.text)}</textarea>
      <div class="actions"><button class="btn ghost sm" data-act="secsave" data-id="${s.id}">Save</button>
        <button class="btn danger sm" data-act="secdel" data-id="${s.id}">Remove</button></div></div>`).join("");
  return `
    <div class="card"><h2>Header picture</h2>
      ${S.header ? `<img class="thumb wide" src="${S.header}" alt="">` : '<p class="mut">No header picture yet, so the default green header is used.</p>'}
      <label for="hdr">Choose a picture (a wide, landscape photo works best)</label>
      <input id="hdr" type="file" accept="image/*">
      ${S.header ? '<button class="btn danger sm" data-act="hdrdel">Remove header picture</button>' : ""}</div>
    <div class="card"><h2>Event photos (${S.photos.length} / 12)</h2>
      <label for="pcap">Caption for the photos you are about to add (optional)</label>
      <input id="pcap" data-keep placeholder="e.g. Graduation day with the family">
      <label for="phs">Add photos</label>
      <input id="phs" type="file" accept="image/*" multiple>${photos}</div>
    <div class="card"><h2>Extra sections</h2>
      <p class="mut">Add text blocks such as Programme, Dress code, Directions or Our story. They appear on the guest page under the description.</p>${sections}
      <h3>Add a section</h3>
      <input id="sn_t" data-keep placeholder="Title"><textarea id="sn_x" data-keep placeholder="Text"></textarea>
      <button class="btn" data-act="secadd">Add section</button></div>`;
}

// Event tab: title, description, date, venue, price, seats and payment details.
function vEvent() {
  const inputs = FIELDS.map(([k, label, type]) => type == "textarea"
    ? `<label for="f_${k}">${label}</label><textarea id="f_${k}" data-keep>${esc(S.C[k])}</textarea>`
    : `<label for="f_${k}">${label}</label><input id="f_${k}" data-keep type="${type}" value="${esc(S.C[k])}">`).join("");
  return `<div class="card"><h2>Event details</h2>${inputs}<button class="btn" data-act="save">Save event</button></div>
    <div class="card"><h2>Start a new event</h2>
      <p class="mut">Use this when you reuse the site for another event. It deletes all bookings and messages and resets the seat counter. Export your guest list first. Your published FAQ and the event details stay.</p>
      <button class="btn danger" data-act="reset">Delete bookings and start fresh</button></div>`;
}

// Team tab: the admins, and adding or removing them.
function vTeam() {
  const me = auth.currentUser && auth.currentUser.uid;
  return `<div class="card"><h2>Admins</h2>${admins.map((a) => `
      <p>${esc(a.email || a.id)} · <b>${a.role}</b> ${a.id == me ? "(you)" : `<button class="btn danger sm" data-act="rmadm" data-id="${a.id}">Remove</button>`}</p>`).join("")}
    <h3>Add an admin</h3>
    <input id="ae" data-keep type="email" placeholder="Their email">
    <input id="ap" data-keep type="text" placeholder="Temporary password (6+ characters)">
    <select id="ar" data-keep><option value="door">Door (check-in only)</option><option value="full">Full (everything)</option></select>
    <div id="am" class="err"></div><button class="btn" data-act="addadm">Add admin</button></div>`;
}

/* ---------- Events ---------- */
function onInput(e) {
  if (e.target.id == "dq") { dq = e.target.value; redraw(); }
  if (e.target.id == "bq") { bq = e.target.value; redraw(); }
}
async function onChange(e) {
  if (!e.target || e.target.type != "file") return;
  try {
    if (e.target.id == "hdr") await uploadHeader(e.target.files[0]);
    if (e.target.id == "phs") await uploadPhotos([...e.target.files]);
  } catch (err) { toast(errText(err), "bad"); }
  if (e.target && e.target.type == "file") e.target.value = ""; // lets the same file be chosen again
}
async function uploadHeader(file) {
  if (!file) return;
  const data = await resizeImage(file, 1600, 0.75);
  await setDoc(doc(db, "media", "header"), { data, created: Date.now() });
  toast("Header picture saved");
}
async function uploadPhotos(files) {
  if (!files.length) return;
  const room = 12 - S.photos.length;
  if (room <= 0) throw new Error("You already have 12 photos. Delete one first.");
  const caption = ($("pcap").value || "").trim().slice(0, 200);
  let n = 0;
  for (const f of files.slice(0, room)) {
    const data = await resizeImage(f, 1000, 0.72);
    await addDoc(collection(db, "photos"), { data, caption, created: Date.now() + n++ });
  }
  toast(n + (n == 1 ? " photo added" : " photos added"));
  if (files.length > room) toast("Only " + room + " fit. The rest were skipped.", "bad");
}
function onKey(e) {
  if (e.key != "Enter") return;
  if (["em", "pw"].includes(e.target.id)) H.login();
  if (["oe", "op"].includes(e.target.id)) H.owner();
}
async function onClick(e) {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  try { await H[el.dataset.act](el.dataset.id, el); } catch (err) { toast(errText(err), "bad"); }
}

// All dashboard buttons. Each name below matches a data-act in the buttons above.
const H = {
  tab: (id) => { tab = id; redraw(); },
  flt: (id) => { flt = id; redraw(); },
  mflt: (id) => { mflt = id; redraw(); },
  out: () => signOut(auth),

  login: () => signInWithEmailAndPassword(auth, $("em").value, $("pw").value)
    .catch(() => ($("le").textContent = "Wrong email or password.")),

  // First-time setup: creates the one owner account (database rules allow this only once).
  owner: async () => {
    const email = $("oe").value.trim(), pw = $("op").value;
    if (!email || pw.length < 6) return ($("oerr").textContent = "Enter your email and a password of at least 6 characters.");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pw);
      const batch = writeBatch(db);
      batch.set(doc(db, "meta", "owner"), { uid: cred.user.uid });
      batch.set(doc(db, "admins", cred.user.uid), { role: "full", email });
      await batch.commit();
      await loadUser(auth.currentUser);
    } catch (err) {
      $("oerr").textContent = err.code == "auth/email-already-in-use" ? "That email already has an account." : "Could not create the account. An owner may already exist.";
    }
  },

  ok: async (id) => { await updateDoc(doc(db, "bookings", id), { status: "approved" }); toast("Payment approved"); },
  no: async (id) => {
    const b = get(id);
    if (!confirm(b.status == "approved" ? "Cancel this booking and release its seats?" : "Reject this payment and release its seats?")) return;
    await runTransaction(db, async (tx) => {
      const counterRef = doc(db, "stats", "counter");
      const counter = await tx.get(counterRef);
      tx.update(counterRef, { taken: Math.max(0, counter.data().taken - b.people.length) });
      tx.update(doc(db, "bookings", id), { status: "rejected" });
    });
    toast("Seats released");
  },
  in: async (id) => {
    const b = get(id);
    await updateDoc(doc(db, "bookings", id), { admitted: !b.admitted, admittedAt: b.admitted ? 0 : Date.now() });
    toast(b.admitted ? "Admit undone" : "Admitted " + b.people.length);
  },
  del: async (id) => { if (confirm("Delete this booking?")) await deleteDoc(doc(db, "bookings", id)); },

  copylink: async () => toast((await copyText(location.origin + location.pathname)) ? "Guest link copied" : "Could not copy", "ok"),
  washare: () => window.open("https://wa.me/?text=" + encodeURIComponent(S.C.title + " - book your seat here: " + location.origin + location.pathname), "_blank"),
  csv: () => {
    const safe = (c) => { c = String(c ?? ""); return /^[=+\-@]/.test(c) ? "'" + c : c; };
    const rows = [["Code", "M-Pesa", "Status", "Amount", "Name", "Phone", "Admitted"]];
    bookings.forEach((b) => b.people.forEach((p, i) => rows.push([b.code, b.id, b.status, i ? "" : b.paid, p.n, p.t, b.admitted ? "yes" : "no"])));
    download("guest-list.csv", rows.map((r) => r.map((c) => '"' + safe(c).replace(/"/g, '""') + '"').join(",")).join("\n"), "text/csv");
  },

  pub: async (id) => {
    const m = messages.find((x) => x.id == id), a = ($("r_" + id).value || "").trim();
    if (!a) return toast("Write an answer first", "bad");
    await addDoc(collection(db, "faq"), { q: m.text, a, created: Date.now() });
    await updateDoc(doc(db, "messages", id), { status: "done" });
    toast("Published to the FAQ");
  },
  wareply: (id) => {
    const m = messages.find((x) => x.id == id);
    let n = (m.contact || "").replace(/\D/g, "");
    if (n.length < 9) return toast("This person did not leave a phone number", "bad");
    if (n.startsWith("0")) n = "254" + n.slice(1);
    window.open("https://wa.me/" + n + "?text=" + encodeURIComponent($("r_" + id).value || ""), "_blank");
  },
  done: async (id) => { await updateDoc(doc(db, "messages", id), { status: "done" }); toast("Marked as done"); },
  delm: async (id) => { if (confirm("Delete this message?")) await deleteDoc(doc(db, "messages", id)); },
  faqdel: async (id) => { if (confirm("Remove this FAQ?")) await deleteDoc(doc(db, "faq", id)); },
  faqadd: async () => {
    const q = $("fq_q").value.trim(), a = $("fq_a").value.trim();
    if (!q || !a) return toast("Enter both a question and an answer", "bad");
    await addDoc(collection(db, "faq"), { q, a, created: Date.now() });
    $("fq_q").value = ""; $("fq_a").value = ""; toast("Added to the FAQ");
  },

  hdrdel: async () => { if (confirm("Remove the header picture?")) await deleteDoc(doc(db, "media", "header")); },
  capsave: async (id) => { await updateDoc(doc(db, "photos", id), { caption: $("cap_" + id).value.trim().slice(0, 200) }); toast("Caption saved"); },
  photodel: async (id) => { if (confirm("Delete this photo?")) await deleteDoc(doc(db, "photos", id)); },
  secadd: async () => {
    const title = $("sn_t").value.trim(), text = $("sn_x").value.trim();
    if (!title || !text) return toast("Enter a title and some text", "bad");
    await addDoc(collection(db, "sections"), { title: title.slice(0, 80), text: text.slice(0, 3000), created: Date.now() });
    $("sn_t").value = ""; $("sn_x").value = ""; toast("Section added");
  },
  secsave: async (id) => {
    const title = $("sec_t_" + id).value.trim(), text = $("sec_x_" + id).value.trim();
    if (!title || !text) return toast("Title and text cannot be empty", "bad");
    await updateDoc(doc(db, "sections", id), { title: title.slice(0, 80), text: text.slice(0, 3000) });
    toast("Section saved");
  },
  secdel: async (id) => { if (confirm("Remove this section?")) await deleteDoc(doc(db, "sections", id)); },

  save: async () => {
    const v = {};
    FIELDS.forEach(([k, , type]) => { const raw = $("f_" + k).value.trim(); v[k] = type == "number" ? Number(raw) : raw; });
    if (!v.title) throw new Error("Enter an event title.");
    if (!(v.price > 0) || !(v.seats > 0)) throw new Error("Price and seats must be more than zero.");
    if (v.seats < S.taken) throw new Error("Seats cannot be fewer than the " + S.taken + " already booked.");
    if (v.map && !/^https?:\/\//.test(v.map)) throw new Error("The map link must start with https://");
    await setDoc(doc(db, "settings", "main"), v);
    toast("Event saved");
  },
  reset: async () => {
    if (prompt("This deletes ALL bookings and messages. Type RESET to continue.") != "RESET") return;
    const refs = [...bookings.map((b) => doc(db, "bookings", b.id)), ...messages.map((m) => doc(db, "messages", m.id))];
    for (let i = 0; i < refs.length; i += 400) {
      const batch = writeBatch(db);
      refs.slice(i, i + 400).forEach((r) => batch.delete(r));
      await batch.commit();
    }
    await setDoc(doc(db, "stats", "counter"), { taken: 0 });
    toast("Ready for a new event");
  },

  // The owner adds helpers: creates their login, then gives them a role.
  addadm: async () => {
    const email = $("ae").value.trim(), pw = $("ap").value, r = $("ar").value;
    if (!email || pw.length < 6) return ($("am").textContent = "Enter their email and a password of at least 6 characters.");
    try {
      const cred = await createUserWithEmailAndPassword(secondaryAuth, email, pw);
      await setDoc(doc(db, "admins", cred.user.uid), { role: r, email });
      await signOut(secondaryAuth);
      $("ae").value = ""; $("ap").value = ""; $("am").textContent = "";
      toast("Admin added. Give them the email and temporary password.");
    } catch (err) {
      $("am").textContent = err.code == "auth/email-already-in-use" ? "That email already has an account. Use a different email." : "Could not add the admin.";
    }
  },
  rmadm: async (id) => { if (confirm("Remove this admin's access?")) await deleteDoc(doc(db, "admins", id)); },
};

/* ================================================================
   7. START-UP
   Page links (#home, #book, #ticket, #photos, #ask, #admin) and live data.
   ================================================================ */
// Starts everything: page links + live settings, seat counter, FAQ, photos.

/* ---------- Page links ---------- */
// Every page has its own link. Example: yoursite/#book  or  yoursite/#ticket-ABC123XYZ
const PAGES = ["home", "book", "ticket", "photos", "ask", "admin"];
// Shows the page that matches the link, for example #book, and highlights it in the menu.
function route() {
  let page = location.hash.replace("#", "") || "home";
  let code = "";
  const m = page.match(/^ticket-(.+)$/);
  if (m) { page = "ticket"; code = m[1]; }
  if (!PAGES.includes(page)) page = "home";

  PAGES.forEach((p) => ($("p-" + p).hidden = p != page));
  document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("on", a.dataset.page == page));
  document.body.classList.toggle("compact", page != "home");
  window.scrollTo(0, 0);

  if (page == "ticket") {
    if (code) { $("q").value = code.toUpperCase(); watch(code); }
    else if (!watching) autoCheck();
  }
}
addEventListener("hashchange", route);
$("mode").hidden = BACKEND != "local";

/* ---------- Live data ---------- */
onSnapshot(doc(db, "settings", "main"), (snap) => {
  S.C = { ...DEFAULT_C, ...(snap.exists() ? snap.data() : {}) };
  document.title = S.C.title;
  draw();
  redraw();
});
onSnapshot(doc(db, "stats", "counter"), (snap) => {
  S.taken = snap.exists() ? snap.data().taken : 0;
  draw();
  redraw();
});
onSnapshot(collection(db, "faq"), (snap) => {
  S.faq = snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => b.created - a.created);
  draw();
  redraw();
});

const byCreated = (snap) => snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => a.created - b.created);
onSnapshot(doc(db, "media", "header"), (snap) => {
  S.header = snap.exists() ? snap.data().data : "";
  draw();
  redraw();
});
onSnapshot(collection(db, "photos"), (snap) => { S.photos = byCreated(snap); draw(); redraw(); });
onSnapshot(collection(db, "sections"), (snap) => { S.sections = byCreated(snap); draw(); redraw(); });

initGuest();
initAdmin();
route();
