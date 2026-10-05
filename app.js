const categories = [
  { id: "all", name: "전체 부품", icon: "▦", count: 128 },
  { id: "cpu", name: "프로세서 (CPU)", icon: "▣", count: 24 },
  { id: "gpu", name: "그래픽카드 (GPU)", icon: "▰", count: 32 },
  { id: "ram", name: "메모리 (RAM)", icon: "▥", count: 18 },
  { id: "ssd", name: "저장장치 (SSD)", icon: "▱", count: 16 },
  { id: "board", name: "메인보드", icon: "▦", count: 14 },
  { id: "psu", name: "파워서플라이", icon: "ϟ", count: 10 },
  { id: "case", name: "케이스", icon: "▯", count: 8 },
  { id: "cooler", name: "쿨러", icon: "❋", count: 6 },
];

// 데모용 제품 정보입니다. 가격과 성능 점수는 실제 판매가 및 공인 벤치마크가 아닙니다.
const products = [
  { id: "p1", category: "cpu", maker: "AMD", name: "Ryzen 7 9800X3D", subtitle: "Zen 5 · 8코어 16스레드 · AM5", price: 729000, score: 97, scoreLabel: "게이밍 성능 지수", trend: "−2.4%", updated: "2026.09.30", glyph: "▦", visual: "cpu", spec: "8C / 16T · 4.7 GHz", note: "샘플 가격" },
  { id: "p2", category: "gpu", maker: "NVIDIA", name: "GeForce RTX 5080", subtitle: "Blackwell · 16GB GDDR7 · 360W", price: 1899000, score: 96, scoreLabel: "4K 게임 성능 지수", trend: "+1.2%", updated: "2026.09.30", glyph: "▰", visual: "gpu", spec: "16 GB · GDDR7", note: "샘플 가격" },
  { id: "p3", category: "cpu", maker: "AMD", name: "Ryzen 5 9600X", subtitle: "Zen 5 · 6코어 12스레드 · AM5", price: 379000, score: 78, scoreLabel: "종합 성능 지수", trend: "−4.8%", updated: "2026.09.29", glyph: "▦", visual: "cpu", spec: "6C / 12T · 3.9 GHz", note: "샘플 가격" },
  { id: "p4", category: "gpu", maker: "AMD", name: "Radeon RX 9070 XT", subtitle: "RDNA 4 · 16GB GDDR6 · 304W", price: 999000, score: 88, scoreLabel: "4K 게임 성능 지수", trend: "−1.6%", updated: "2026.09.30", glyph: "▰", visual: "gpu", spec: "16 GB · GDDR6", note: "샘플 가격" },
  { id: "p5", category: "ram", maker: "G.SKILL", name: "Trident Z5 Neo 32GB", subtitle: "DDR5 · 6000 MT/s · CL30 · 16GB × 2", price: 149000, score: 89, scoreLabel: "메모리 성능 지수", trend: "−3.1%", updated: "2026.09.28", glyph: "▥", visual: "ram", spec: "32 GB · DDR5-6000", note: "샘플 가격" },
  { id: "p6", category: "ssd", maker: "SAMSUNG", name: "990 PRO 2TB", subtitle: "PCIe 4.0 ×4 · NVMe · 최대 7,450 MB/s", price: 229000, score: 92, scoreLabel: "순차 읽기 성능 지수", trend: "−5.0%", updated: "2026.09.30", glyph: "▱", visual: "ssd", spec: "2 TB · PCIe 4.0", note: "샘플 가격" },
  { id: "p7", category: "board", maker: "MSI", name: "MAG X870 TOMAHAWK WIFI", subtitle: "AMD X870 · ATX · Wi-Fi 7", price: 429000, score: 91, scoreLabel: "확장성 지수", trend: "−2.0%", updated: "2026.09.27", glyph: "▦", visual: "board", spec: "AM5 · X870 · ATX", note: "샘플 가격" },
  { id: "p8", category: "psu", maker: "CORSAIR", name: "RM850x (2024) 850W", subtitle: "80 PLUS Gold · ATX 3.1 · 풀 모듈러", price: 189000, score: 90, scoreLabel: "전력 효율 지수", trend: "−1.3%", updated: "2026.09.26", glyph: "ϟ", visual: "psu", spec: "850 W · 80+ Gold", note: "샘플 가격" },
  { id: "p9", category: "cpu", maker: "INTEL", name: "Core Ultra 7 265K", subtitle: "Arrow Lake · 20코어 · LGA1851", price: 519000, score: 85, scoreLabel: "종합 성능 지수", trend: "−6.2%", updated: "2026.09.29", glyph: "▦", visual: "cpu", spec: "20C · 20T · 5.5 GHz", note: "샘플 가격" },
  { id: "p10", category: "case", maker: "FRACTAL DESIGN", name: "North XL TG", subtitle: "E-ATX · 강화유리 · 최대 413mm GPU", price: 279000, score: 87, scoreLabel: "조립 편의 지수", trend: "−1.8%", updated: "2026.09.25", glyph: "▯", visual: "case", spec: "E-ATX · 413 mm GPU", note: "샘플 가격" },
  { id: "p11", category: "cooler", maker: "THERMALRIGHT", name: "Peerless Assassin 120 SE", subtitle: "듀얼 타워 공랭 · 120mm 팬 2개", price: 42000, score: 84, scoreLabel: "냉각 성능 지수", trend: "−2.3%", updated: "2026.09.24", glyph: "❋", visual: "cooler", spec: "듀얼 타워 · 120 mm × 2", note: "샘플 가격" },
  { id: "p12", category: "ssd", maker: "WD_BLACK", name: "SN850X 2TB", subtitle: "PCIe 4.0 ×4 · NVMe · 최대 7,300 MB/s", price: 209000, score: 90, scoreLabel: "순차 읽기 성능 지수", trend: "−3.8%", updated: "2026.09.30", glyph: "▱", visual: "ssd", spec: "2 TB · PCIe 4.0", note: "샘플 가격" },
];

const state = { category: "all", query: "", sort: "recommended", brands: new Set(), compare: new Set(), expanded: false };
const $ = (selector) => document.querySelector(selector);
const won = (amount) => new Intl.NumberFormat("ko-KR").format(amount);

function renderCategories() {
  $("#categoryNav").innerHTML = categories.filter(({ id }) => id !== "all").map((category) => `
    <button class="category-item ${state.category === category.id ? "selected" : ""}" data-category="${category.id}">
      <span class="category-glyph">${category.icon}</span><span class="category-name">${category.name}</span><span class="category-count">${category.count}</span><span class="category-arrow">↗</span>
    </button>`).join("");
  const tabs = [{ id: "all", name: "전체" }, ...categories.filter(({ id }) => id !== "all").map(({ id, name }) => ({ id, name: name.replace(/\s*\(.+\)/, "") }))];
  $("#categoryTabs").innerHTML = tabs.map(({ id, name }) => `<button class="tab-button ${state.category === id ? "active" : ""}" role="tab" aria-selected="${state.category === id}" data-category="${id}">${name}</button>`).join("");
}

function filteredProducts() {
  const normalized = state.query.trim().toLocaleLowerCase("ko");
  let list = products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const haystack = `${product.name} ${product.maker} ${product.subtitle} ${product.spec}`.toLocaleLowerCase("ko");
    return matchesCategory && (!normalized || haystack.includes(normalized)) && (!state.brands.size || state.brands.has(product.maker));
  });
  if (state.sort === "performance") list = [...list].sort((a, b) => b.score - a.score);
  if (state.sort === "recent") list = [...list].sort((a, b) => b.updated.localeCompare(a.updated));
  if (state.sort === "priceAsc") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") list = [...list].sort((a, b) => b.price - a.price);
  return list;
}

function renderProducts() {
  const list = filteredProducts();
  const visible = state.expanded || state.query || state.category !== "all" || state.brands.size ? list : list.slice(0, 9);
  $("#productGrid").innerHTML = visible.map((product, index) => `
    <article class="product-card">
      <div class="card-top"><span class="category-pill">${categoryName(product.category)}</span><label class="compare-check"><input type="checkbox" data-compare="${product.id}" ${state.compare.has(product.id) ? "checked" : ""} ${!state.compare.has(product.id) && state.compare.size >= 4 ? "disabled" : ""} /> 비교에 추가</label></div>
      <div class="product-visual visual-${product.visual}"><span class="visual-index">BK / ${String(index + 1).padStart(2, "0")}</span><span class="product-glyph">${productIllustration(product)}</span><span class="visual-spec">${product.spec}</span></div>
      <div class="product-maker">${product.maker}</div><h3 class="product-name" title="${product.name}">${product.name}</h3><p class="product-subtitle">${product.subtitle}</p>
      <div class="card-divider"></div>
      <div class="metric-row"><div class="metric-label">${product.scoreLabel}<strong>벤치마크 지수 <span class="metric-unit">/ 100</span></strong></div><div><span class="metric-score">${product.score}</span><span class="metric-unit">/100</span></div></div><div class="metric-bar"><span style="width:${product.score}%"></span></div>
      <div class="price-row"><span class="price-caption">참고 가격</span><span class="price">₩${won(product.price)}<small>원</small></span><span class="trend ${product.trend.startsWith("+") ? "up" : ""}">${product.trend}</span></div>
      <div class="product-meta"><span>${product.note}</span><span>${product.updated}</span></div>
      <button class="detail-button" data-detail="${product.id}">상세 보기 <span>↗</span></button>
    </article>`).join("");
  $("#emptyState").hidden = list.length > 0;
  $("#resultCount").textContent = `${list.length}개 제품`;
  $("#loadMore").hidden = Boolean(state.expanded || state.query || state.category !== "all" || state.brands.size || list.length <= 9);
  renderBrandFilters();
  renderCompareDock();
}

function categoryName(id) { return categories.find((category) => category.id === id)?.name.split(" ")[0] || id; }

function productIllustration(product) {
  const drawings = {
    cpu: '<rect x="25" y="25" width="50" height="50" rx="6"/><rect x="35" y="35" width="30" height="30" rx="3" class="accent"/><path d="M33 14v10m12-10v10m12-10v10m12-10v10M33 76v10m12-10v10m12-10v10m12-10v10M14 33h10m-10 12h10m-10 12h10m-10 12h10m52-36h10M76 45h10m-10 12h10m-10 12h10"/>',
    gpu: '<rect x="12" y="31" width="76" height="38" rx="5"/><circle cx="37" cy="50" r="13" class="accent"/><circle cx="37" cy="50" r="5"/><circle cx="65" cy="50" r="13" class="accent"/><circle cx="65" cy="50" r="5"/><path d="M20 69v7m8-7v7m45-7v7m8-7v7M88 41h5v18h-5"/>',
    ram: '<rect x="15" y="37" width="70" height="27" rx="4"/><rect x="22" y="43" width="54" height="13" rx="2" class="accent"/><path d="M25 65v7m10-7v7m10-7v7m10-7v7m10-7v7m10-7v7"/>',
    ssd: '<path d="M20 43 67 27l18 29-47 17z"/><circle cx="39" cy="54" r="4" class="accent"/><rect x="54" y="39" width="16" height="8" rx="2" class="accent"/><path d="m70 64 8-3m-15 9 7-3"/>',
    board: '<rect x="25" y="16" width="51" height="68" rx="4"/><rect x="34" y="25" width="23" height="23" rx="3" class="accent"/><rect x="61" y="25" width="8" height="34" rx="2"/><rect x="34" y="54" width="23" height="5" rx="2"/><path d="M35 66h34m-34 7h20"/>',
    psu: '<rect x="19" y="27" width="63" height="46" rx="5"/><circle cx="48" cy="50" r="16" class="accent"/><circle cx="48" cy="50" r="4"/><path d="M48 34v12m0 8v12M32 50h12m8 0h12M74 39h3m-3 6h3m-3 6h3"/>',
    case: '<rect x="34" y="14" width="38" height="74" rx="5"/><rect x="40" y="21" width="26" height="57" rx="3" class="accent"/><circle cx="53" cy="35" r="8"/><circle cx="53" cy="61" r="8"/><path d="M50 82h6m-3-7v7"/>',
    cooler: '<rect x="26" y="27" width="19" height="43" rx="3"/><rect x="55" y="27" width="19" height="43" rx="3"/><circle cx="50" cy="48" r="20" class="accent"/><circle cx="50" cy="48" r="5"/><path d="M50 28v15m14-9-10 10m16 4H55m9 14-10-10m-4 16V53m-14 9 10-10m-16-4h15m-8-14 10 10"/>',
  };
  return `<svg viewBox="0 0 100 100" fill="#dbe5f3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[product.visual] || drawings.cpu}</svg>`;
}

function renderBrandFilters() {
  const current = products.filter((product) => state.category === "all" || product.category === state.category);
  const makers = [...new Set(current.map((product) => product.maker))];
  $("#brandFilters").innerHTML = makers.map((maker) => `<button class="brand-filter ${state.brands.has(maker) ? "active" : ""}" data-brand="${maker}">${maker}</button>`).join("");
}

function renderCompareDock() {
  const selected = products.filter(({ id }) => state.compare.has(id));
  $("#compareDock").hidden = selected.length === 0;
  $("#compareCount").textContent = selected.length;
  $("#dockItems").innerHTML = selected.map(({ name }) => `<span class="dock-chip" title="${name}">${name}</span>`).join("");
  $("#compareAction").disabled = selected.length < 2;
  $("#navCompareCount").textContent = selected.length;
  document.querySelectorAll("[data-compare]").forEach((input) => { input.disabled = !input.checked && selected.length >= 4; });
}

function renderComparison() {
  const selected = products.filter(({ id }) => state.compare.has(id));
  const rows = [
    { label: "제품", values: selected.map((p) => `<span>${p.maker}</span><span class="table-product-name">${p.name}</span>`), compare: selected.map((p) => p.name) },
    { label: "참고 가격", values: selected.map((p) => `<span class="table-price">₩${won(p.price)}</span>`), compare: selected.map((p) => p.price) },
    { label: "벤치마크", values: selected.map((p) => `${p.scoreLabel}<br><strong class="table-score">${p.score} / 100</strong>`), compare: selected.map((p) => p.score) },
    { label: "핵심 사양", values: selected.map((p) => p.subtitle), compare: selected.map((p) => p.subtitle) },
    { label: "제품 세부 사양", values: selected.map((p) => p.spec), compare: selected.map((p) => p.spec) },
    { label: "테스트 환경", values: selected.map(() => "미제공 · 데모 점수"), compare: selected.map(() => "미제공") },
    { label: "데이터 출처", values: selected.map(() => "예시 데이터 · 실제 출처 미연결"), compare: selected.map(() => "예시 데이터") },
    { label: "예시 정보 기준일", values: selected.map((p) => p.updated), compare: selected.map((p) => p.updated) },
  ];
  $("#comparisonTable").innerHTML = `<thead><tr>${["비교 항목", ...selected.map(() => "제품")].map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => {
    const different = new Set(row.compare).size > 1;
    return `<tr><td>${row.label}</td>${row.values.map((value) => `<td class="${different ? "diff-cell" : ""}">${value}</td>`).join("")}</tr>`;
  }).join("")}</tbody>`;
}

function openProductDetails(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  $("#productModalTitle").textContent = product.name;
  $("#productDetail").innerHTML =
    '<div class="detail-summary"><div class="detail-art">' + productIllustration(product) + '</div><div class="detail-heading"><span class="category-pill">' + categoryName(product.category) + '</span><p class="product-maker">' + product.maker + '</p><h3>' + product.name + '</h3><p>' + product.subtitle + '</p><span class="detail-demo">DEMO DATA · 예시 정보</span></div></div>' +
    '<div class="detail-columns"><section class="detail-block"><h3>주요 사양</h3><dl class="spec-list"><div><dt>카테고리</dt><dd>' + categoryName(product.category) + '</dd></div><div><dt>모델명</dt><dd>' + product.name + '</dd></div><div><dt>핵심 사양</dt><dd>' + product.spec + '</dd></div><div><dt>제조사</dt><dd>' + product.maker + '</dd></div></dl></section>' +
    '<section class="detail-block"><h3>가격 및 벤치마크</h3><dl class="spec-list"><div><dt>참고 가격</dt><dd>₩' + won(product.price) + ' <span class="detail-demo">예시</span></dd></div><div><dt>가격 기준일</dt><dd>' + product.updated + ' <span class="detail-demo">샘플 날짜</span></dd></div><div><dt>' + product.scoreLabel + '</dt><dd>' + product.score + ' / 100 <span class="detail-demo">예시 점수</span></dd></div><div><dt>측정 환경</dt><dd>미제공 · 공인 측정 결과 아님</dd></div></dl></section></div>' +
    '<p class="detail-disclosure">가격, 점수, 기준일은 화면 구성을 위한 예시입니다. 실제 판매처 정보와 벤치마크 출처는 아직 연결되지 않았습니다.</p><div class="detail-actions"><button class="detail-compare-action" data-modal-compare="' + product.id + '">비교에 추가 <span>＋</span></button><a href="#sources" class="detail-source-link">데이터 기준 보기 ↗</a></div>';
  $("#productModal").hidden = false;
}

let toastTimer;
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 2300);
}

function setCategory(id) {
  state.category = id;
  state.brands.clear();
  state.expanded = false;
  renderCategories();
  renderProducts();
}

function resetFilters() {
  state.query = "";
  state.category = "all";
  state.brands.clear();
  state.expanded = false;
  $("#searchInput").value = "";
  renderCategories();
  renderProducts();
}

renderCategories();
renderProducts();

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  const brandButton = event.target.closest("[data-brand]");
  if (categoryButton) setCategory(categoryButton.dataset.category);
  if (brandButton) {
    const maker = brandButton.dataset.brand;
    state.brands.has(maker) ? state.brands.delete(maker) : state.brands.add(maker);
    state.expanded = true;
    renderProducts();
  }
});

$("#searchInput").addEventListener("input", (event) => { state.query = event.target.value; state.expanded = true; renderProducts(); });
$("#searchButton").addEventListener("click", () => { state.query = $("#searchInput").value; state.expanded = true; renderProducts(); $("#catalog").scrollIntoView({ behavior: "smooth" }); });
$("#searchInput").addEventListener("keydown", (event) => { if (event.key === "Enter") { state.query = event.target.value; state.expanded = true; renderProducts(); $("#catalog").scrollIntoView({ behavior: "smooth" }); } });
document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#searchInput").focus(); } if (event.key === "Escape") { $("#compareModal").hidden = true; $("#productModal").hidden = true; } });
$("#sortSelect").addEventListener("change", (event) => { state.sort = event.target.value; renderProducts(); });
$("#filterButton").addEventListener("click", () => $("#filterRow").classList.toggle("open"));
$("#clearFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);
$("#loadMore").addEventListener("click", () => { state.expanded = true; renderProducts(); });
$("#productGrid").addEventListener("change", (event) => {
  const input = event.target.closest("[data-compare]");
  if (!input) return;
  if (input.checked && state.compare.size >= 4) { input.checked = false; toast("비교는 제품 4개까지 담을 수 있어요."); return; }
  input.checked ? state.compare.add(input.dataset.compare) : state.compare.delete(input.dataset.compare);
  renderProducts();
  if (state.compare.size) toast(`${state.compare.size}개 제품을 비교 목록에 담았어요.`);
});
$("#dockClear").addEventListener("click", () => { state.compare.clear(); renderProducts(); });
$("#navCompare").addEventListener("click", () => { if (state.compare.size >= 2) { renderComparison(); $("#compareModal").hidden = false; } else { toast("비교할 제품을 2개 이상 선택해 주세요."); $("#catalog").scrollIntoView({ behavior: "smooth" }); } });
$("#compareAction").addEventListener("click", () => { renderComparison(); $("#compareModal").hidden = false; });
$("#modalClose").addEventListener("click", () => { $("#compareModal").hidden = true; });
$("#compareModal").addEventListener("click", (event) => { if (event.target.id === "compareModal") event.currentTarget.hidden = true; });
$("#productGrid").addEventListener("click", (event) => { const button = event.target.closest("[data-detail]"); if (button) openProductDetails(button.dataset.detail); });
$("#productDetail").addEventListener("click", (event) => {
  if (event.target.closest(".detail-source-link")) $("#productModal").hidden = true;
  const button = event.target.closest("[data-modal-compare]");
  if (!button) return;
  const id = button.dataset.modalCompare;
  if (state.compare.has(id)) { toast("이미 비교 목록에 있는 제품이에요."); return; }
  if (state.compare.size >= 4) { toast("비교는 제품 4개까지 담을 수 있어요."); return; }
  state.compare.add(id);
  renderProducts();
  toast("제품을 비교 목록에 담았어요.");
});
$("#productModalClose").addEventListener("click", () => { $("#productModal").hidden = true; });
$("#productModal").addEventListener("click", (event) => { if (event.target.id === "productModal") event.currentTarget.hidden = true; });

