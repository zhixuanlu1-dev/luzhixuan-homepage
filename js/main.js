/* ============================================================
   卢知轩 Zhixuan Lu — Academic Homepage scripts
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Publication data (source: Google Scholar CSV, 2026-08) ---------- */
    var PUBLICATIONS = [
    { year: 2026,
      authors: "Jiang, Yi; **Lu, Zhixuan**; Yu, Furong; Shi, Yuxian; Wei, Zhanhua",
      title: "Efficient Pure-Blue Perovskite Light-Emitting Diodes via Energy-Level Modulation",
      journal: "Chinese Journal of Luminescence", vol: "", issue: "", pages: "1-9", doi: "10.37188/CJL.20260224",
      badge: { zh: "通讯作者", en: "Corresponding author", cls: "corresp" } },    { year: 2026,
      authors: "**Lu, Zhixuan**; Wang, Jun; Yan, Sen",
      title: "Quantitative Surface-Enhanced Raman Spectroscopy: Challenges, Strategies, and Prospects",
      journal: "Molecules", vol: "31", issue: "1", pages: "191", doi: "10.3390/molecules31010191",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2026,
      authors: "**Lu, Zhixuan**; Weng, Xinhua; Yang, Jiayi; Fan, Huan",
      title: "Water-dispersible perovskite nanocrystals: synthesis strategies, ion sensing applications, and future prospects",
      journal: "RSC Advances", vol: "16", issue: "13", pages: "11855-11863", doi: "10.1039/d5ra09645f",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2026,
      authors: "**Lu, Zhixuan**; Weng, Xinhua; Yang, Jiayi; Fan, Huan; Yu, Furong; Jiang, Yi; Shi, Yuxian; Wei, Zhanhua",
      title: "Water-stable perovskite quantum dots for highly sensitive and selective detection of silver ions",
      journal: "Materials Letters", vol: "411", issue: "", pages: "140309", doi: "10.1016/j.matlet.2026.140309",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2026,
      authors: "Shi, Yuxian; Yang, Jiayi; **Lu, Zhixuan**",
      title: "Perovskite Quantum Dots-Based Blue Light-Emitting Diodes: Advantages, Strategies, and Prospects",
      journal: "Photonics", vol: "13", issue: "2", pages: "151", doi: "10.3390/photonics13020151",
      badge: { zh: "通讯作者", en: "Corresponding author", cls: "corresp" } },
    { year: 2025,
      authors: "**Lu, Zhixuan**; Li, Yuqing; Wei, Lulu; Jiang, Yi; Yu, Furong; Fan, Huan; Yang, Jinxin; Xing, Jun; Wei, Zhanhua",
      title: "Spectral ultra-stable perovskite quantum dots for pure-blue light-emitting diodes",
      journal: "Chemical Engineering Journal", vol: "519", issue: "", pages: "165202", doi: "10.1016/j.cej.2025.165202",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2025,
      authors: "Zhang, Qin; Li, Lang; Chen, Xi; Lin, Yutong; Li, Mengxue; Qi, Yajun; Zhou, Peng; Liu, Chia-Yun; Li, Yuqing; Guan, Xiang; Zhao, Yaping; Gao, Wei; **Lu, Zhixuan**; Xie, Liqiang; Lu, Jianxun; Wei, Zhanhua",
      title: "Cation Engineering Enables Sequentially Ordered Growth of 3D and 2D Perovskites for High-Efficiency Perovskite Light-Emitting Diodes",
      journal: "Advanced Functional Materials", vol: "35", issue: "37", pages: "2502488", doi: "10.1002/adfm.202502488",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2025,
      authors: "**Lu, Zhixuan**",
      title: "Plasmon-enhanced electrochemistry: Fundamentals and potential applications",
      journal: "International Journal of Electrochemical Science", vol: "20", issue: "9", pages: "101100", doi: "10.1016/j.ijoes.2025.101100",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2024,
      authors: "**Lu, Zhixuan**; Huang, Yajun; Chen, Ningyu; Liu, Chuan; Wang, Xiang; Ren, Bin",
      title: "Self-Reconstruction of Core-Shell Structured Electrocatalysts for Tailoring Reaction Pathways Revealed by Electrochemical Surface-Enhanced Raman Spectroscopy",
      journal: "ACS Catalysis", vol: "14", issue: "8", pages: "6204-6210", doi: "10.1021/acscatal.4c00269",
      badge: { zh: "第一作者", en: "First author", cls: "first" } },
    { year: 2023,
      authors: "Wang, Zifeng; Kang, Yiran; Hu, Jingting; Ji, Qinqin; **Lu, Zhixuan**; Xu, Guilan; Qi, Yutai; Zhang, Mo; Zhang, Wangwang; Huang, Rui; et al.",
      title: "Boosting CO2 Hydrogenation to Formate over Edge-Sulfur Vacancies of Molybdenum Disulfide",
      journal: "Angewandte Chemie International Edition", vol: "62", issue: "45", pages: "e202307086", doi: "10.1002/anie.202307086",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2022,
      authors: "**Lu, Zhixuan**; Huang, Yajun; Shao, Liting; Cao, Maofeng; Hu, Shu; Liu, Chuan; Wang, Xiang; Ren, Bin",
      title: "In-situ Raman spectroscopic insight into charge delocalization-improved electrical conductivity in metal-cyanide frameworks",
      journal: "Nanoscale", vol: "14", issue: "48", pages: "18184-18191", doi: "10.1039/d2nr05285g",
      badge: { zh: "第一作者", en: "First author", cls: "first" } },
    { year: 2022,
      authors: "**Lu, Zhixuan**; Huang, Yajun; Cao, Maofeng",
      title: "Electrochemical Surface-Enhanced Raman Spectroscopy for Structure Analysis of 1,4-Benzenedithiol Assembled on Gold Nanoparticles",
      journal: "International Journal of Electrochemical Science", vol: "17", issue: "9", pages: "220970", doi: "10.20964/2022.09.64",
      badge: { zh: "第一作者兼通讯作者", en: "First & corresponding author", cls: "firstcorr" } },
    { year: 2022,
      authors: "Deng, Kai-Chao; **Lu, Zhi-Xuan**; Sun, Juan-Juan; Ye, Jin-Yu; Dong, Fan; Su, Hai-Sheng; Yang, Kang; Sartin, Matthew M.; Yan, Sen; Cheng, Jun; Zhou, Zhi-You; Ren, Bin",
      title: "Accelerated interfacial proton transfer for promoting electrocatalytic activity",
      journal: "Chemical Science", vol: "13", issue: "36", pages: "10884-10890", doi: "10.1039/d2sc01750d",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2022,
      authors: "Chen, Libin; Yang, Jian; **Lu, Zhixuan**; Dai, Peng; Wu, Xiaohong; Hong, Yuhao; Xiao, Liangping; Huang, Ling; Bai, Hua; Sun, Shi-Gang",
      title: "A new type of sealed rechargeable lithium-lithium oxide battery based on reversible LiO2/Li2O2 interconversion",
      journal: "Journal of Materials Chemistry A", vol: "10", issue: "31", pages: "16570-16577", doi: "10.1039/d2ta03314c",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2022,
      authors: "Li, Hongyang; Huang, Jingxin; Yang, Kang; **Lu, Zhixuan**; Yan, Sen; Su, Haisheng; Liu, Chuan; Wang, Xiang; Ren, Bin",
      title: "Operando Electrochemical X-ray Diffraction and Raman Spectroscopic Studies Revealing the Alkali-Metal Ion Intercalation Mechanism in Prussian Blue Analogues",
      journal: "The Journal of Physical Chemistry Letters", vol: "13", issue: "2", pages: "479-485", doi: "10.1021/acs.jpclett.1c03918",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2021,
      authors: "**Lu, Zhixuan**; Wu, Xiang; Chen, Ningyu; Cao, Maofeng; Sartin, Matthew M.; Ren, Bin",
      title: "Photoinduced Charge Transfer from a Semiconductor to a Metal Probed at the Single-Nanoparticle Level",
      journal: "ACS Energy Letters", vol: "6", issue: "10", pages: "3473-3480", doi: "10.1021/acsenergylett.1c01581",
      badge: { zh: "第一作者", en: "First author", cls: "first" } },
    { year: 2020,
      authors: "P\u00e9rez-Jim\u00e9nez, A. I.; Lyu, D.; **Lu, Zhixuan**; Liu, G.; Ren, B.",
      title: "Surface-enhanced Raman spectroscopy: benefits, trade-offs and future developments",
      journal: "Chemical Science", vol: "11", issue: "18", pages: "4563-4577", doi: "10.1039/d0sc00809e",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2018,
      authors: "Xu, Mengxi; Ma, Xin; Wei, Ting; **Lu, Zhi-Xuan**; Ren, Bin",
      title: "In Situ Imaging of Live-Cell Extracellular pH during Cell Apoptosis with Surface-Enhanced Raman Spectroscopy",
      journal: "Analytical Chemistry", vol: "90", issue: "23", pages: "13922-13928", doi: "10.1021/acs.analchem.8b03193",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2018,
      authors: "Wu, Ling; Tang, Hailin; Hu, Shengqiang; Xia, Yonghong; **Lu, Zhixuan**; Fan, Yujuan; Wang, Zixiao; Yi, Xinyao; Zhou, Feimeng; Wang, Jianxiu",
      title: "Sensitive and simultaneous surface plasmon resonance detection of free and p53-bound MDM2 proteins from human sarcomas",
      journal: "Analyst", vol: "143", issue: "9", pages: "2029-2034", doi: "10.1039/c7an01918a",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2017,
      authors: "Wang, Jingrui; **Lu, Zhixuan**; Tang, Hailin; Wu, Ling; Wang, Zixiao; Wu, Minghua; Yi, Xinyao; Wang, Jianxiu",
      title: "Multiplexed Electrochemical Detection of MiRNAs from Sera of Glioma Patients at Different Stages via the Novel Conjugates of Conducting Magnetic Microbeads and Diblock Oligonucleotide-Modified Gold Nanoparticles",
      journal: "Analytical Chemistry", vol: "89", issue: "20", pages: "10834-10840", doi: "10.1021/acs.analchem.7b02342",
      badge: { zh: "共同第一作者", en: "Co-first author", cls: "cofirst" } },
    { year: 2017,
      authors: "Yi, Xinyao; **Lu, Zhixuan**; Kong, Yu; Chen, Zhuo",
      title: "Label-free Electrochemical Detection of MicroRNAs via Intercalation of Hemin into the DNA/RNA Hybridization",
      journal: "International Journal of Electrochemical Science", vol: "12", issue: "4", pages: "2813-2821", doi: "10.20964/2017.04.33",
      badge: { zh: "参与作者", en: "Co-author", cls: "coauthor" } },
    { year: 2016,
      authors: "**Lu, Zhixuan**; Tang, Hailin; Wu, Daohong; Xia, Yonghong; Wu, Minghua; Yi, Xinyao; Li, Hengfeng; Wang, Jianxiu",
      title: "Amplified Voltammetric Detection of miRNA from Serum Samples of Glioma Patients via Combination of Conducting Magnetic Microbeads and Ferrocene-Capped Gold Nanoparticle/Streptavidin Conjugates",
      journal: "Biosensors and Bioelectronics", vol: "86", issue: "", pages: "502-507", doi: "10.1016/j.bios.2016.07.010",
      badge: { zh: "第一作者", en: "First author", cls: "first" } }
  ];
  /* ---------- Render publications ---------- */
  function renderPublications() {
    var root = document.getElementById("pubList");
    var filterRoot = document.getElementById("pubFilter");
    var moreBtn = document.getElementById("pubMore");
    if (!root) return;

    var groups = [];
    PUBLICATIONS.forEach(function (p) {
      var g = groups.filter(function (x) { return x.year === p.year; })[0];
      if (!g) { g = { year: p.year, items: [] }; groups.push(g); }
      g.items.push(p);
    });

    var years = groups.map(function (g) { return g.year; });
    var latestTwo = years.slice(0, 2);

    function getCheckedYears() {
      var arr = [];
      if (!filterRoot) return arr;
      filterRoot.querySelectorAll("input[type=checkbox]:checked").forEach(function (cb) {
        arr.push(parseInt(cb.value, 10));
      });
      return arr;
    }

    function applyFilter() {
      var checked = getCheckedYears();
      groups.forEach(function (g) {
        var el = root.querySelector('.pub-group[data-year="' + g.year + '"]');
        if (el) { el.style.display = checked.indexOf(g.year) !== -1 ? "" : "none"; }
      });
    }

    function updateMoreButton() {
      if (!moreBtn) return;
      var all = getCheckedYears().length === years.length;
      var zh = moreBtn.querySelector("[data-zh]");
      var en = moreBtn.querySelector("[data-en]");
      if (zh) zh.textContent = all ? "收起" : "展开更多";
      if (en) en.textContent = all ? "Show less" : "Show more";
    }

    if (filterRoot) {
      years.forEach(function (y) {
        var label = document.createElement("label");
        label.className = "pub-filter-item";
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = String(y);
        cb.checked = latestTwo.indexOf(y) !== -1;
        var span = document.createElement("span");
        span.textContent = String(y);
        label.appendChild(cb);
        label.appendChild(span);
        cb.addEventListener("change", function () {
          applyFilter();
          updateMoreButton();
        });
        filterRoot.appendChild(label);
      });
    }

    if (moreBtn) {
      moreBtn.addEventListener("click", function () {
        var all = getCheckedYears().length === years.length;
        var target = all ? latestTwo : years;
        if (filterRoot) {
          filterRoot.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
            cb.checked = target.indexOf(parseInt(cb.value, 10)) !== -1;
          });
        }
        applyFilter();
        updateMoreButton();
      });
    }

    var frag = document.createDocumentFragment();
    groups.forEach(function (g) {
      var group = document.createElement("div");
      group.className = "pub-group";
      group.setAttribute("data-year", String(g.year));
      var year = document.createElement("h3");
      year.className = "pub-year";
      year.textContent = g.year;
      group.appendChild(year);

      var ol = document.createElement("ol");
      ol.className = "pub-items";
      g.items.forEach(function (p, i) {
        var li = document.createElement("li");
        li.className = "pub-item";

        var idx = document.createElement("span");
        idx.className = "pub-idx";
        idx.textContent = String(i + 1);

        var body = document.createElement("div");
        body.className = "pub-body";

        var authors = document.createElement("p");
        authors.className = "pub-authors";
        authors.innerHTML = p.authors.split("**").map(function (seg, j) {
          return j % 2 === 1 ? "<strong>" + seg + "</strong>" : seg;
        }).join("");
        body.appendChild(authors);

        var title = document.createElement("p");
        title.className = "pub-title";
        title.textContent = p.title;
        body.appendChild(title);

        var meta = document.createElement("p");
        meta.className = "pub-meta";
        var volIss = p.vol + (p.issue ? "(" + p.issue + ")" : "");
        var parts = [];
        parts.push("<em>" + p.journal + "</em>");
        parts.push(String(p.year) + (volIss ? ", " + volIss : "") + (p.pages ? ", " + p.pages : ""));
        meta.innerHTML = parts.join(" ");
        if (p.doi) {
          var a = document.createElement("a");
          a.className = "pub-doi";
          a.href = "https://doi.org/" + p.doi;
          a.target = "_blank";
          a.rel = "noopener";
          a.textContent = "DOI ↗";
          meta.appendChild(document.createTextNode(" "));
          meta.appendChild(a);
        }
        body.appendChild(meta);

        if (p.badge) {
          var bZh = document.createElement("span");
          bZh.className = "pub-badge" + (p.badge.cls ? " " + p.badge.cls : "");
          bZh.setAttribute("data-zh", "");
          bZh.textContent = p.badge.zh;
          var bEn = document.createElement("span");
          bEn.className = "pub-badge" + (p.badge.cls ? " " + p.badge.cls : "");
          bEn.setAttribute("data-en", "");
          bEn.textContent = p.badge.en;
          body.appendChild(bZh);
          body.appendChild(bEn);
        }

        li.appendChild(idx);
        li.appendChild(body);
        ol.appendChild(li);
      });
      group.appendChild(ol);
      frag.appendChild(group);
    });
    root.appendChild(frag);

    applyFilter();
    updateMoreButton();
  }

/* ---------- Language toggle ---------- */
  var LANGS = { "zh": "zh-CN", "en": "en" };
  function setLang(code) {
    var htmlLang = LANGS[code] || "zh-CN";
    document.documentElement.lang = htmlLang;
    try { localStorage.setItem("lang", code); } catch (e) {}
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === code);
    });
  }
  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
  });
  var saved = "zh";
  try { saved = localStorage.getItem("lang") || "zh"; } catch (e) {}
  setLang(saved);

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  function closeNav() {
    if (!siteNav || !navToggle) return;
    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    siteNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".section-head, .card, .pub-group, .project-list li, .course, .about-grid > *, .gallery-item, .news-item, .student-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  /* ---------- More / expand buttons ---------- */
  function setMoreText(btn, collapsed) {
    var zh = btn.querySelector("[data-zh]");
    var en = btn.querySelector("[data-en]");
    if (zh) zh.textContent = collapsed ? "展开更多" : "收起";
    if (en) en.textContent = collapsed ? "Show more" : "Show less";
  }
  function initMore(btnId, target) {
    var btn = document.getElementById(btnId);
    if (!btn || !target) return;
    btn.addEventListener("click", function () {
      var collapsed = target.classList.toggle("collapsed");
      setMoreText(btn, collapsed);
    });
  }
  initMore("newsMore", document.querySelector(".news-list"));
  initMore("galleryMore", document.querySelector(".gallery-grid"));

  renderPublications();

})();

/* ---------- Gallery lightbox ---------- */
(function () {
  var grid = document.getElementById("galleryGrid");
  if (!grid) return;
  var items = Array.prototype.slice.call(grid.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
    '<button class="lightbox-prev" type="button" aria-label="Previous">&#8249;</button>' +
    '<img alt="">' +
    '<button class="lightbox-next" type="button" aria-label="Next">&#8250;</button>' +
    '<div class="lightbox-caption"></div>';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var caption = box.querySelector(".lightbox-caption");
  var current = 0;

  function open(i) {
    current = (i + items.length) % items.length;
    var fig = items[current];
    var im = fig.querySelector("img");
    img.src = im.src;
    img.alt = im.alt || "";
    var zh = fig.getAttribute("data-caption-zh") || "";
    var en = fig.getAttribute("data-caption-en") || "";
    caption.innerHTML = '<span data-zh>' + zh + '</span><span data-en>' + en + '</span>';
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    box.classList.remove("open");
    document.body.style.overflow = "";
  }

  items.forEach(function (fig, i) {
    fig.addEventListener("click", function () { open(i); });
  });
  box.querySelector(".lightbox-close").addEventListener("click", close);
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  box.querySelector(".lightbox-prev").addEventListener("click", function (e) { e.stopPropagation(); open(current - 1); });
  box.querySelector(".lightbox-next").addEventListener("click", function (e) { e.stopPropagation(); open(current + 1); });
  document.addEventListener("keydown", function (e) {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") open(current - 1);
    if (e.key === "ArrowRight") open(current + 1);
  });
})();


/* ---------- Single image lightbox (avatar & member photos) ---------- */
(function () {
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
    '<img alt="">' +
    '<div class="lightbox-caption"></div>';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var caption = box.querySelector(".lightbox-caption");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    caption.textContent = alt || "";
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    box.classList.remove("open");
    document.body.style.overflow = "";
  }
  box.querySelector(".lightbox-close").addEventListener("click", close);
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && box.classList.contains("open")) close();
  });

  [".profile-avatar img", ".student-photo img"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.addEventListener("click", function () {
        open(el.src, el.alt || "");
      });
    });
  });
})();
