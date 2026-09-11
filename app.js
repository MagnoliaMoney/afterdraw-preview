const PB = { id: "pb", name: "Powerball", balls: 6, gold: true, tag: "Powerball" };
const MM = { id: "mm", name: "Mega Millions", balls: 6, gold: true, tag: "Mega Ball" };
const POP = { id: "pop", name: "Cash Pop", balls: 1 };
const LA = { id: "la", name: "Lotto America", balls: 6, gold: true, tag: "Star Ball" };
const MIL = { id: "mil", name: "Millionaire for Life", balls: 6, gold: true, tag: "Gold Ball" };
const p3 = (name) => ({ id: "p3", name, balls: 3 });
const p4 = (name) => ({ id: "p4", name, balls: 4 });
const p5 = (name) => ({ id: "p5", name, balls: 5 });
const NO_LOTTERY = new Set(["AL","AK","HI","NV","UT"]);
const CASH_POP = new Set(["FL","GA","IN","KY","ME","MD","MI","MS","MO","NJ","NC","OR","PA","SC","VA","WA","WV"]);
const LOTTO_AM = new Set(["DE","DC","ID","IA","KS","ME","MN","MS","MT","NE","NM","ND","OK","SD","TN","WV"]);
const MIL_LIFE = new Set(["AR","CO","CT","DC","GA","ID","IN","IA","KS","KY","ME","MA","MI","MS","MT","NE","NH","NJ","NY","NC","ND","OH","OK","PA","RI","SD","TN","VA","VT","WV","WY"]);
const LOCAL = {
  MS: [p3("Cash 3"), p4("Cash 4"), p5("Mississippi Match 5")],
  TN: [p3("Cash 3"), p4("Cash 4"), p5("Tennessee Cash")],
  FL: [p3("Cash 3"), p4("Play 4"), p5("Fantasy 5")],
  GA: [p3("Cash 3"), p4("Cash 4"), p5("Fantasy 5")],
  TX: [p3("Pick 3"), p4("Daily 4"), p5("Cash Five")],
  NY: [p3("Numbers"), p4("Win 4"), p5("Take 5")],
  CA: [p3("Daily 3"), p4("Daily 4"), p5("Fantasy 5")],
  PA: [p3("Pick 3"), p4("Pick 4"), p5("Cash 5")],
  NJ: [p3("Pick 3"), p4("Pick 4"), p5("Jersey Cash 5")],
  NC: [p3("Pick 3"), p4("Pick 4"), p5("Cash 5")],
  SC: [p3("Pick 3"), p4("Pick 4"), p5("Palmetto Cash 5")],
  LA: [p3("Pick 3"), p4("Pick 4")], KY: [p3("Pick 3"), p4("Pick 4")],
  OH: [p3("Pick 3"), p4("Pick 4"), p5("Rolling Cash 5")],
  IN: [p3("Daily 3"), p4("Daily 4"), p5("Cash 5")],
  MO: [p3("Pick 3"), p4("Pick 4"), p5("Show Me Cash")],
  AR: [p3("Cash 3"), p4("Cash 4")], VA: [p3("Pick 3"), p4("Pick 4"), p5("Cash 5")],
  MD: [p3("Pick 3"), p4("Pick 4"), p5("Bonus Match 5")],
  IL: [p3("Pick 3"), p4("Pick 4")], MI: [p3("Daily 3"), p4("Daily 4"), p5("Fantasy 5")],
  WI: [p3("Pick 3"), p4("Pick 4")], MN: [p3("Daily 3"), p4("Daily 4"), p5("Northstar Cash")],
  IA: [p3("Pick 3"), p4("Pick 4")], KS: [p3("Pick 3"), p4("Pick 4")],
  OK: [p3("Pick 3"), p4("Pick 4")], NE: [p3("Pick 3"), p4("Pick 4")],
  CO: [p3("Pick 3"), p5("Cash 5")], AZ: [p3("Pick 3"), p4("Pick 4"), p5("Fantasy 5")],
  NM: [p3("Pick 3"), p4("Pick 4"), p5("Roadrunner Cash")],
  WA: [p3("Daily Game"), p5("Match 4")], OR: [p4("Pick 4")],
  CT: [p3("Play 3"), p4("Play 4"), p5("Cash 5")],
  MA: [p3("The Numbers Game"), p4("The Numbers Game 4"), p5("Mass Cash")],
  ME: [p3("Pick 3"), p4("Pick 4"), p5("Gimme 5")],
  NH: [p3("Pick 3"), p4("Pick 4")], VT: [p3("Pick 3"), p4("Pick 4")],
  RI: [p3("The Numbers"), p4("The Numbers 4")], DE: [p3("Play 3"), p4("Play 4")],
  WV: [p3("Daily 3"), p4("Daily 4")], DC: [p3("DC 3"), p4("DC 4"), p5("DC 5")]
};
const STATES = [["MS","Mississippi"],["AL","Alabama"],["TN","Tennessee"],["FL","Florida"],["GA","Georgia"],["LA","Louisiana"],["AR","Arkansas"],["TX","Texas"],["OK","Oklahoma"],["MO","Missouri"],["KY","Kentucky"],["NC","North Carolina"],["SC","South Carolina"],["VA","Virginia"],["WV","West Virginia"],["MD","Maryland"],["DE","Delaware"],["DC","District of Columbia"],["PA","Pennsylvania"],["NJ","New Jersey"],["NY","New York"],["CT","Connecticut"],["MA","Massachusetts"],["RI","Rhode Island"],["NH","New Hampshire"],["VT","Vermont"],["ME","Maine"],["OH","Ohio"],["IN","Indiana"],["IL","Illinois"],["MI","Michigan"],["WI","Wisconsin"],["MN","Minnesota"],["IA","Iowa"],["KS","Kansas"],["NE","Nebraska"],["SD","South Dakota"],["ND","North Dakota"],["CO","Colorado"],["NM","New Mexico"],["AZ","Arizona"],["CA","California"],["OR","Oregon"],["WA","Washington"],["ID","Idaho"],["MT","Montana"],["WY","Wyoming"],["AK","Alaska"],["HI","Hawaii"],["NV","Nevada"],["UT","Utah"]];
function gamesFor(code) {
  if (NO_LOTTERY.has(code)) return [];
  const list = [PB, MM];
  list.push(...(LOCAL[code] || [p3("Pick 3"), p4("Pick 4")]).map((g) => ({ ...g, id: g.id + "_" + code })));
  if (CASH_POP.has(code)) list.push(POP);
  if (LOTTO_AM.has(code)) list.push(LA);
  if (MIL_LIFE.has(code)) list.push(MIL);
  return list;
}
const HISTORY = {
  pb: [["Wed Sep 9, 2026",[9,40,42,55,65,23]],["Mon Sep 7, 2026",[15,19,28,39,56,3]],["Sat Sep 5, 2026",[15,40,47,53,59,9]],["Wed Sep 2, 2026",[3,10,29,58,64,14]],["Mon Aug 31, 2026",[11,17,25,37,49,10]],["Sat Aug 29, 2026",[18,56,62,65,67,18]],["Wed Aug 26, 2026",[12,32,45,50,58,2]],["Mon Aug 24, 2026",[3,16,33,38,68,2]],["Sat Aug 22, 2026",[13,31,54,57,65,23]],["Wed Aug 19, 2026",[10,21,58,61,64,17]],["Mon Aug 17, 2026",[8,15,25,49,65,22]],["Sat Aug 15, 2026",[5,8,27,29,63,13]],["Wed Aug 12, 2026",[4,26,66,67,69,9]]],
  mm: [["Tue Sep 8, 2026",[17,30,43,58,66,20]],["Fri Sep 4, 2026",[6,26,34,59,61,24]],["Tue Sep 1, 2026",[1,22,51,61,63,17]],["Fri Aug 28, 2026",[8,17,29,42,55,2]],["Tue Aug 25, 2026",[7,10,47,48,50,14]],["Fri Aug 21, 2026",[1,25,34,48,57,24]],["Tue Aug 18, 2026",[5,19,30,38,59,12]],["Fri Aug 14, 2026",[3,23,27,46,60,11]],["Tue Aug 11, 2026",[1,20,30,46,68,17]]],
  la: [["Wed Sep 9, 2026",[3,4,44,47,49,4]],["Mon Sep 7, 2026",[1,15,24,35,42,9]],["Sat Sep 5, 2026",[20,21,27,32,44,3]],["Wed Sep 2, 2026",[2,4,16,39,45,6]],["Mon Aug 31, 2026",[8,22,27,30,34,4]],["Sat Aug 29, 2026",[7,10,25,30,33,2]],["Wed Aug 26, 2026",[5,8,36,37,45,5]],["Mon Aug 24, 2026",[7,13,23,35,44,3]],["Sat Aug 22, 2026",[20,23,36,42,50,4]],["Wed Aug 19, 2026",[23,31,40,41,45,1]],["Mon Aug 17, 2026",[5,8,10,24,27,4]],["Sat Aug 15, 2026",[8,18,19,40,41,10]],["Wed Aug 12, 2026",[1,9,27,32,36,2]]],
  mil: [["Thu Sep 10, 2026",[7,16,43,50,58,1]],["Wed Sep 9, 2026",[2,25,54,55,57,2]],["Tue Sep 8, 2026",[14,19,36,41,42,2]],["Mon Sep 7, 2026",[1,14,35,42,51,2]],["Sun Sep 6, 2026",[17,30,39,40,55,4]],["Sat Sep 5, 2026",[8,22,24,38,58,3]],["Fri Sep 4, 2026",[13,34,41,51,52,4]],["Thu Sep 3, 2026",[1,10,23,29,33,3]],["Wed Sep 2, 2026",[7,23,43,46,53,3]],["Tue Sep 1, 2026",[16,37,45,55,58,4]],["Mon Aug 31, 2026",[2,9,30,37,45,4]],["Sun Aug 30, 2026",[9,27,36,54,56,3]],["Sat Aug 29, 2026",[2,7,26,45,52,4]],["Fri Aug 28, 2026",[8,10,11,12,44,2]],["Thu Aug 27, 2026",[3,7,29,35,49,5]],["Wed Aug 26, 2026",[3,25,51,54,56,4]],["Tue Aug 25, 2026",[24,45,50,53,57,3]],["Mon Aug 24, 2026",[7,19,26,41,49,4]],["Sun Aug 23, 2026",[15,28,32,55,57,1]],["Sat Aug 22, 2026",[7,17,27,36,39,4]],["Fri Aug 21, 2026",[1,20,25,56,57,2]],["Thu Aug 20, 2026",[1,16,26,40,44,4]],["Wed Aug 19, 2026",[10,12,26,44,57,4]],["Tue Aug 18, 2026",[4,18,29,32,37,4]],["Mon Aug 17, 2026",[3,6,33,42,48,4]],["Sun Aug 16, 2026",[10,13,41,43,52,2]],["Sat Aug 15, 2026",[12,13,26,35,43,4]],["Fri Aug 14, 2026",[12,15,18,28,35,3]],["Thu Aug 13, 2026",[7,16,25,35,42,2]],["Wed Aug 12, 2026",[8,22,23,28,35,3]]]
};
const FREQ = {
  pb: { note: "All Powerball draws under current rules (since Oct 2015).", hot: [61,21,64,28,27,32], cold: [13,26,46,49,34,25] },
  mm: { note: "All Mega Millions draws under current rules (since Apr 2025).", hot: [17,18,40,42,49,63], cold: [28,67,3,29,7,9] },
  la: { note: "All Lotto America draws since Nov 2017.", hot: [51,1,8,35,15,10], cold: [20,49,28,13,44,43] },
  mil: { note: "All Millionaire for Life draws since launch.", hot: [55,1,3,54,17,13], cold: [5,11,34,27,39,52] }
};
async function loadNyYear() {
  if (HISTORY.p3_NY && HISTORY.p3_NY.length > 20) return HISTORY.p3_NY;
  try {
    const url = "https://data.ny.gov/resource/hsys-3def.json?$where=draw_date>='2025-09-11T00:00:00'&$order=draw_date DESC&$limit=400";
    const rows = await fetch(url).then((r) => r.json());
    const months = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
    const out = [];
    rows.forEach((r) => {
      const d = (r.draw_date || "").slice(0, 10);
      const [y, m, dd] = d.split("-");
      const base = months[Number(m) - 1] + " " + Number(dd) + ", " + y;
      const md = String(r.midday_daily || "").padStart(3, "0").slice(-3);
      const ev = String(r.evening_daily || "").padStart(3, "0").slice(-3);
      if (/^\\d{3}$/.test(md)) out.push([base + " Mid", md.split("").map(Number)]);
      if (/^\\d{3}$/.test(ev)) out.push([base + " Eve", ev.split("").map(Number)]);
    });
    HISTORY.p3_NY = out;
  } catch (e) {}
  return HISTORY.p3_NY || [];
}
const app = document.getElementById("app");
const phase = document.getElementById("phase");
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("on", s.id === id));
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("on"));
  app.classList.remove("tabs-on");
  phase.textContent = id === "pay" ? "Paywall" : "Sign in";
}
function showTab(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("on"));
  document.querySelectorAll(".page").forEach((p) => p.classList.toggle("on", p.id === id));
  app.classList.add("tabs-on");
  phase.textContent = "Member";
  document.querySelectorAll("nav.tab button").forEach((b) => {
    b.setAttribute("aria-current", b.dataset.go === (id === "history" ? "results" : id) ? "page" : "false");
  });
  window.scrollTo(0, 0);
}
function balls(g, nums) {
  const list = nums && nums.length ? nums : Array.from({ length: g.balls }, (_, i) => (i * 7 + 3) % 20 + 1);
  return list.map((n, i) => {
    const gold = g.gold && i === list.length - 1;
    return `<span class="ball${gold ? " gold" : ""}" style="color:${gold ? "#1a1406" : "#ffffff"}">${n}</span>`;
  }).join("") + (g.tag ? `<span class="tag">${g.tag}</span>` : "");
}
function currentState() { return document.getElementById("state").value || "MS"; }
function renderResults() {
  const list = gamesFor(currentState());
  const box = document.getElementById("result-list");
  if (!list.length) { box.innerHTML = '<p class="unofficial">No lottery draw games in AfterDraw\u2019s list for this state.</p>'; return; }
  box.innerHTML = list.map((g) => {
    const latest = (HISTORY[g.id] || [])[0];
    const when = latest ? latest[0] : "History coming later";
    return `<button class="game" type="button" data-game="${g.id}"><b>${g.name}</b><div class="balls">${balls(g, latest && latest[1])}</div><div class="when">${when}</div></button>`;
  }).join("") + '<p class="unofficial">Results are unofficial until certified and published by the applicable state lottery.</p>';
}
function freqBalls(nums) { return nums.map((n) => `<span class="ball" style="color:#ffffff">${n}</span>`).join(""); }
function digitHotCold(rows) {
  const freq = Array(10).fill(0);
  rows.forEach(([, nums]) => nums.forEach((n) => { if (n >= 0 && n <= 9) freq[n]++; }));
  const ranked = freq.map((c, n) => [n, c]).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  return { hot: ranked.slice(0, 5).map((x) => x[0]), cold: ranked.slice(-5).reverse().map((x) => x[0]), note: "Digits from this state\u2019s 3-digit history (all positions)." };
}
let histCache = { rows: [], game: null };
function drawHistList(q) {
  const g = histCache.game;
  const needle = (q || "").trim().toLowerCase().replace(/\s+/g, "");
  const rows = histCache.rows.filter(([label, nums]) => {
    if (!needle) return true;
    return (label + " " + nums.join("")).toLowerCase().replace(/\s+/g, "").includes(needle);
  });
  const box = document.getElementById("hist-list");
  if (!box) return;
  box.innerHTML = rows.length ? rows.map(([label, nums]) => `<div class="hist"><span class="note">${label}</span><div class="balls">${balls(g, nums)}</div></div>`).join("") : '<p class="unofficial">No draws match that search.</p>';
}
function openHistory(id) {
  const g = gamesFor(currentState()).find((x) => x.id === id);
  if (!g) return;
  document.getElementById("hist-title").textContent = g.name;
  let rows = HISTORY[g.id] || HISTORY[g.id.split("_")[0]];
  if (g.id === "p3_NY" && (!rows || rows.length < 20)) {
    document.getElementById("hist-sub").textContent = "Loading official New York year\u2026";
    loadNyYear().then(() => openHistory(id));
    showTab("history");
    return;
  }
  const isP3 = g.id.startsWith("p3");
  const freq = isP3 && rows ? digitHotCold(rows) : FREQ[id.split("_")[0]];
  document.getElementById("hist-q").value = "";
  document.getElementById("hist-q").style.display = rows ? "block" : "none";
  if (!rows) {
    document.getElementById("hist-sub").textContent = isP3 ? "3-digit page is ready for every state. Full year attaches by state." : "This game\u2019s page is ready. Draw history comes later.";
    document.getElementById("hist-rows").innerHTML = '<p class="unofficial">' + (isP3 ? "Year of official 3-digit results for this state is next. New York Numbers is loaded now so you can search a full year." : "Pick 4 / 5, Cash Pop, and Match 5 history not loaded yet.") + "</p>";
    showTab("history");
    return;
  }
  const latest = rows[0];
  document.getElementById("hist-sub").textContent = isP3 ? "Hot / cold from this state\u2019s 3-digit history. Search the year below." : "Hot / cold from all history. Search the list below.";
  histCache = { rows, game: g };
  document.getElementById("hist-rows").innerHTML =
    `<div class="card" style="margin-bottom:0.7rem"><p class="stat-title">Most recent draw</p><div class="balls">${balls(g, latest[1])}</div><div class="when">${latest[0]}</div></div>` +
    `<div class="card" style="margin-bottom:0.7rem"><p class="stat-title">Hot numbers</p><div class="balls">${freqBalls(freq.hot)}</div><p class="when">${freq.note}</p></div>` +
    `<div class="card" style="margin-bottom:0.85rem"><p class="stat-title">Cold numbers</p><div class="balls">${freqBalls(freq.cold)}</div><p class="when">${freq.note}</p></div>` +
    `<p class="stat-title">Draws</p><div id="hist-list"></div>` +
    `<p class="unofficial">Results are unofficial until certified and published by the applicable state lottery.</p>`;
  drawHistList("");
  showTab("history");
}
document.getElementById("do-login").onclick = () => showScreen("pay");
document.getElementById("do-create").onclick = () => showScreen("pay");
document.getElementById("do-unlock").onclick = () => { showTab("results"); loadNyYear().then(renderResults); };
document.getElementById("do-out").onclick = () => showScreen("login");
document.getElementById("back-results").onclick = () => showTab("results");
document.getElementById("hist-q").addEventListener("input", (e) => drawHistList(e.target.value));
document.getElementById("result-list").addEventListener("click", (e) => { const btn = e.target.closest("[data-game]"); if (btn) openHistory(btn.dataset.game); });
document.querySelectorAll("nav.tab button").forEach((b) => { b.onclick = () => showTab(b.dataset.go); });
document.getElementById("build-grid").onclick = () => {
  const raw = document.getElementById("grid-in").value.trim();
  document.getElementById("grid-label").textContent = raw ? "Mapped from: " + raw : "Type something first.";
  const box = document.getElementById("grid-box");
  box.innerHTML = "";
  const seed = raw.replace(/\D/g, "") || "0";
  for (let i = 0; i < 20; i++) {
    const cell = document.createElement("div");
    const n = (Number(seed[i % seed.length]) + i) % 10;
    cell.className = "cell" + (raw && i % 3 !== 2 ? " on" : "");
    cell.textContent = n;
    box.appendChild(cell);
  }
};
const KEY = "afterdraw-default-state";
function stateName(code) { const row = STATES.find((s) => s[0] === code); return row ? row[1] : code; }
function showDefault() { document.getElementById("default-note").textContent = "Default state: " + stateName(localStorage.getItem(KEY) || "MS"); }
const stateSel = document.getElementById("state");
stateSel.innerHTML = STATES.slice().sort((a, b) => a[1].localeCompare(b[1])).map(([code, name]) => `<option value="${code}">${name}</option>`).join("");
stateSel.value = localStorage.getItem(KEY) || "MS";
stateSel.onchange = renderResults;
document.getElementById("save-state").onclick = () => { localStorage.setItem(KEY, currentState()); showDefault(); };
showDefault();
renderResults();
document.getElementById("grid-box").innerHTML = Array.from({ length: 20 }, () => '<div class="cell">\u00b7</div>').join("");
