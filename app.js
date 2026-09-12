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
  pb: [["Wed Sep 9, 2026",[9,40,42,55,65,23]],["Mon Sep 7, 2026",[15,19,28,39,56,3]],["Sat Sep 5, 2026",[15,40,47,53,59,9]],["Wed Sep 2, 2026",[3,10,29,58,64,14]],["Mon Aug 31, 2026",[11,17,25,37,49,10]]],
  mm: [["Tue Sep 8, 2026",[17,30,43,58,66,20]],["Fri Sep 4, 2026",[6,26,34,59,61,24]],["Tue Sep 1, 2026",[1,22,51,61,63,17]]],
  la: [["Wed Sep 9, 2026",[3,4,44,47,49,4]],["Mon Sep 7, 2026",[1,15,24,35,42,9]],["Sat Sep 5, 2026",[20,21,27,32,44,3]]],
  mil: [["Thu Sep 10, 2026",[7,16,43,50,58,1]],["Wed Sep 9, 2026",[2,25,54,55,57,2]],["Tue Sep 8, 2026",[14,19,36,41,42,2]]]
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
      if (/^\d{3}$/.test(md)) out.push([base + " Mid", md.split("").map(Number)]);
      if (/^\d{3}$/.test(ev)) out.push([base + " Eve", ev.split("").map(Number)]);
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
  if (!list.length) { box.innerHTML = '<p class="unofficial">No lottery draw games in AfterDraw for this state.</p>'; return; }
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
  return { hot: ranked.slice(0, 5).map((x) => x[0]), cold: ranked.slice(-5).reverse().map((x) => x[0]), note: "Digits from this state's 3-digit history." };
}
let histCache = { rows: [], game: null };
function drawHistList(q) {
  const g = histCache.game;
  const needle = (q || "").trim().toLowerCase().replace(/\s+/g, "");
  const rows = histCache.rows.filter(([label, nums]) => !needle || (label + " " + nums.join("")).toLowerCase().replace(/\s+/g, "").includes(needle));
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
    document.getElementById("hist-sub").textContent = "Loading official New York year…";
    loadNyYear().then(() => openHistory(id));
    showTab("history");
    return;
  }
  const isP3 = g.id.startsWith("p3");
  const freq = isP3 && rows ? digitHotCold(rows) : FREQ[id.split("_")[0]];
  const qEl = document.getElementById("hist-q");
  if (qEl) { qEl.value = ""; qEl.style.display = rows ? "block" : "none"; }
  if (!rows) {
    document.getElementById("hist-sub").textContent = "This game page is ready.";
    document.getElementById("hist-rows").innerHTML = '<p class="unofficial">History attaches by state. New York Numbers loads official results.</p>';
    showTab("history");
    return;
  }
  const latest = rows[0];
  histCache = { rows, game: g };
  document.getElementById("hist-sub").textContent = "Most recent draw, hot / cold, then the list.";
  document.getElementById("hist-rows").innerHTML =
    `<div class="card" style="margin-bottom:0.7rem"><p class="stat-title">Most recent draw</p><div class="balls">${balls(g, latest[1])}</div><div class="when">${latest[0]}</div></div>` +
    (freq ? `<div class="card" style="margin-bottom:0.7rem"><p class="stat-title">Hot numbers</p><div class="balls">${freqBalls(freq.hot)}</div></div><div class="card" style="margin-bottom:0.85rem"><p class="stat-title">Cold numbers</p><div class="balls">${freqBalls(freq.cold)}</div></div>` : "") +
    `<p class="stat-title">Draws</p><div id="hist-list"></div><p class="unofficial">Results are unofficial until certified and published by the applicable state lottery.</p>`;
  drawHistList("");
  showTab("history");
}
document.getElementById("do-login").onclick = () => showScreen("pay");
document.getElementById("do-create").onclick = () => showScreen("pay");
document.getElementById("do-unlock").onclick = () => { showTab("results"); loadNyYear().then(renderResults); };
document.getElementById("do-out").onclick = () => showScreen("login");
document.getElementById("back-results").onclick = () => showTab("results");
const hq = document.getElementById("hist-q");
if (hq) hq.addEventListener("input", (e) => drawHistList(e.target.value));
document.getElementById("result-list").addEventListener("click", (e) => { const btn = e.target.closest("[data-game]"); if (btn) openHistory(btn.dataset.game); });
document.querySelectorAll("nav.tab button").forEach((b) => { b.onclick = () => showTab(b.dataset.go); });
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
const GRID_LIST = {
  c3: [{id:"g92",name:"92 grid"},{id:"g927",name:"927 grid"},{id:"g646",name:"646 grid"},{id:"g628",name:"628 grid"},{id:"g111",name:"111 grid"},{id:"g123",name:"123 grid"},{id:"g317",name:"317 grid"},{id:"g369",name:"369 grid"},{id:"g31",name:"31 grid"},{id:"gmmb",name:"MMB grid"},{id:"gnamg",name:"NAMG"}],
  c4: [{id:"g6464",name:"6464 grid"},{id:"g4228",name:"4228 grid"},{id:"g1111",name:"1111 grid"}],
  pop: [{id:"gpop1",name:"Cash Pop grid 1"},{id:"gpop2",name:"Cash Pop grid 2"}]
};
let activeGrid = null, gridGame = "c3", grid92Mode = "92";
function paintCatalog() {
  [["c3-grids","c3"],["c4-grids","c4"],["pop-grids","pop"]].forEach(([boxId, kind]) => {
    document.getElementById(boxId).innerHTML = GRID_LIST[kind].map((g) => `<button class="game" type="button" data-kind="${kind}" data-gid="${g.id}"><b>${g.name}</b><div class="when">${kind==="c3"?"Cash 3 / Pick 3":kind==="c4"?"Cash 4 / Pick 4":"Cash Pop"}</div></button>`).join("");
  });
}
function openGrid(kind, gid) {
  activeGrid = GRID_LIST[kind].find((g) => g.id === gid);
  if (!activeGrid) return;
  gridGame = kind === "pop" ? "pop" : kind;
  document.getElementById("grid-catalog").style.display = "none";
  document.getElementById("grid-builder").style.display = "block";
  document.getElementById("grid-title").textContent = activeGrid.name;
  document.getElementById("grid-92").style.display = gid === "g92" ? "flex" : "none";
  document.getElementById("grid-card").style.display = "none";
  document.getElementById("g1").closest("label").style.display = gridGame === "pop" ? "none" : "block";
  document.getElementById("g2-wrap").style.display = gridGame === "c3" ? "block" : "none";
  window.scrollTo(0, 0);
}
paintCatalog();
document.getElementById("c3-grids").onclick = document.getElementById("c4-grids").onclick = document.getElementById("pop-grids").onclick = (e) => {
  const b = e.target.closest("[data-gid]");
  if (b) openGrid(b.dataset.kind, b.dataset.gid);
};
document.getElementById("back-grids").onclick = () => {
  document.getElementById("grid-builder").style.display = "none";
  document.getElementById("grid-catalog").style.display = "block";
};
document.getElementById("grid-92").onclick = (e) => {
  const b = e.target.closest("[data-92]");
  if (!b) return;
  grid92Mode = b.getAttribute("data-92");
  document.querySelectorAll("#grid-92 .chip").forEach((c) => c.classList.toggle("on", c === b));
  document.getElementById("grid-title").textContent = grid92Mode + " grid";
};
const gridState = document.getElementById("grid-state");
gridState.innerHTML = ["Any State"].concat(STATES.slice().sort((a,b)=>a[1].localeCompare(b[1])).map((s)=>s[1])).map((n)=>`<option>${n}</option>`).join("");
const gd = document.getElementById("grid-date");
const now = new Date();
gd.value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
document.getElementById("build-grid").onclick = () => {
  if (!document.getElementById("grid-agree").checked) {
    document.getElementById("grid-label").textContent = "Check the research agreement first.";
    return;
  }
  const title = activeGrid && activeGrid.id === "g92" ? grid92Mode + " grid" : (activeGrid ? activeGrid.name : "Grid");
  document.getElementById("grid-card").style.display = "block";
  document.getElementById("grid-card-title").textContent = title;
  const raw = ["g0","g1","g2"].map((id) => document.getElementById(id).value.replace(/\D/g,"")).join("") || "0";
  document.getElementById("grid-box").innerHTML = Array.from({length: 28}, (_, i) => {
    const n = Number(raw[i % raw.length]);
    return `<div class="mini-cell${i % 4 === 0 ? " hl" : ""}">${n}</div>`;
  }).join("");
  document.getElementById("grid-label").textContent = "Layout preview. Named mix rules attach next.";
};
document.getElementById("grid-convert").onclick = () => {
  document.querySelectorAll("#grid-box .mini-cell").forEach((c) => {
    const n = Number(c.textContent);
    c.textContent = (n + 5) % 10;
  });
};
