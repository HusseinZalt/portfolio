(function () {
  "use strict";
  var AR = {
    skip: "تخطَّ إلى الأعمال", nav_work: "الأعمال", nav_services: "الخدمات", nav_about: "عنّي", nav_contact: "تواصل",
    hero_eyebrow: "موشن ديزاينر / فيديو إديتور — حلب · عن بُعد",
    hero_l1: "لكل فريم", hero_l2: "معنى.",
    hero_lead: "بمنتج إعلانات، بصمم موشن، وبحوّل الفوتاج الخام لمحتوى بيوقّف الناس عن التمرير.",
    cta_reel: "شغّل الشوريل", cta_project: "خلينا نبلّش مشروع",
    n1: "فيديو مونتاج وتسليم", n2: "سنتين بالموشن والمونتاج", n3: "مجالات: موشن · إعلانات · محتوى · AI", n4: "خط وكابشنز وموشن بالعربي والإنكليزي",
    brands: "براندات اشتغلت على محتواها",
    work_title: "أعمال مختارة", work_sub: "مرّق الماوس لتشوف. اكبس لتتفرج مع الصوت.",
    f_all: "الكل", f_motion: "موشن", f_commercial: "إعلانات", f_content: "محتوى", f_ai: "ذكاء اصطناعي",
    reel_word: "شوف الشوريل",
    svc_title: "شو بقدّم",
    s1_t: "مونتاج فيديو", s1_p: "ريلز إعلانية، إعلانات، ويوتيوب طويل. إيقاع، موسيقى، ساوند ديزاين، كابشنز وتلوين — جاهز للنشر.",
    s2_t: "موشن جرافيك", s2_p: "لوغو أنيميشن، تايبوغرافي متحرك، وموشن 2D بيخلي البراند حي — بالعربي والإنكليزي.",
    s3_t: "صناعة محتوى", s3_p: "ريلز متحدث مع كابشنز متحركة، تأثيرات زجاج على النص، أرقام متحركة، ولقطات B-roll بتخلي الناس تكمّل.",
    s4_t: "فيجوال بالذكاء الاصطناعي", s4_p: "لقطات منتجات وكاركترات وعوالم مولّدة — بإخراج وتركيب ومونتاج متل الفوتاج الحقيقي.",
    proc_title: "كيف بيمشي المشروع",
    p1_t: "البريف", p1_p: "الهدف، الجمهور، المنصة، والموعد. مكالمة وحدة وخطة واضحة.",
    p2_t: "المونتاج", p2_p: "القصة والإيقاع والموسيقى أولاً — القص لازم يشتغل قبل ما يتحرك أي شي.",
    p3_t: "الموشن", p3_p: "تايبوغرافي وجرافيك وساوند ديزاين وتلوين فوق مونتاج متين.",
    p4_t: "التسليم", p4_p: "تعديلات، وبعدها الملفات النهائية بكل الصيغ يلي بتحتاجها.",
    about_title: "عنّي",
    about_big: "أنا حسين زلط، موشن ديزاينر وفيديو إديتور من حلب.",
    about_p1: "خلال آخر سنتين عملت مونتاج وموشن لأكتر من 250 فيديو لبراندات وعيادات ومطاعم ووكالات وصنّاع محتوى — من ريلز 15 ثانية للوغو أنيميشن وفيديوهات يوتيوب طويلة.",
    about_p2: "درست هندسة معلوماتية باختصاص ذكاء اصطناعي، فبهمني النظام متل ما بهمني الستايل: تايملاين مرتب، لوك ثابت، تسليم سريع، وأدوات جديدة بتنستخدم بذوق.",
    fa_t1: "المكان", fa_d1: "حلب، سوريا · عن بُعد", fa_t2: "اللغات", fa_d2: "العربية · الإنكليزية", fa_t3: "الدراسة", fa_d3: "بكالوريوس هندسة معلوماتية (ذكاء اصطناعي)", fa_t4: "متاح لـ", fa_d4: "فريلانس · دوام جزئي · دوام كامل",
    cv: "حمّل السيرة الذاتية",
    c_l1: "خلينا", c_l2: "نحرّكها.",
    top: "للأعلى ↑", prev: "→ السابق", next: "التالي ←"
  };
  var CAT = { en: { motion: "Motion", commercial: "Commercial", content: "Content", ai: "AI visuals" }, ar: { motion: "موشن", commercial: "إعلانات", content: "محتوى", ai: "ذكاء اصطناعي" } };
  var EN = {};
  var lang = "en";
  try { lang = localStorage.getItem("hz-lang") || "en"; } catch (e) {}
  if (lang !== "ar") lang = "en";

  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.textContent; });

  function applyLang() {
    var html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    nodes.forEach(function (n) { var k = n.getAttribute("data-i18n"); n.textContent = (lang === "ar" ? AR[k] : EN[k]) || EN[k]; });
    document.getElementById("lang").textContent = lang === "ar" ? "EN" : "عربي";
    renderGrid();
  }
  document.getElementById("lang").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("hz-lang", lang); } catch (e) {}
    applyLang();
  });

  // ---------- grid ----------
  var grid = document.getElementById("grid");
  var filter = "all";
  var P = window.PROJECTS || [];
  function fmt(s) { return "00:" + ("0" + s).slice(-2); }
  function renderGrid() {
    grid.innerHTML = "";
    P.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "card " + (p.shape === "tall" ? "" : p.shape) + (filter !== "all" && p.cat !== filter ? " hide" : "");
      b.setAttribute("aria-label", p.title[lang] + " — " + p.type[lang]);
      b.dataset.i = i;
      b.innerHTML =
        '<img loading="lazy" alt="" src="media/' + p.id + '.jpg">' +
        '<video muted loop playsinline preload="none" data-src="media/' + p.id + '.mp4"></video>' +
        '<span class="card-top mono"><span class="dot">' + CAT[lang][p.cat] + '</span><span>' + fmt(p.dur) + '</span></span>' +
        '<span class="card-ov"><span class="ct"></span><span class="cs"></span></span><i class="corner c1"></i><i class="corner c2"></i>';
      b.querySelector(".ct").textContent = p.title[lang];
      b.querySelector(".cs").textContent = p.type[lang];
      grid.appendChild(b);
    });
    observeCards();
  }
  function play(card) { var v = card.querySelector("video"); if (!v.src) v.src = v.dataset.src; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); card.classList.add("playing"); }
  function stop(card) { var v = card.querySelector("video"); v.pause(); card.classList.remove("playing"); }
  var canHover = window.matchMedia("(hover: hover)").matches;
  grid.addEventListener("mouseover", function (e) { var c = e.target.closest(".card"); if (c && canHover) play(c); });
  grid.addEventListener("mouseout", function (e) { var c = e.target.closest(".card"); if (c && canHover && !c.contains(e.relatedTarget)) stop(c); });
  grid.addEventListener("click", function (e) { var c = e.target.closest(".card"); if (c) openModal(+c.dataset.i); });
  // on touch devices, play cards while they're in view
  var io2 = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (canHover) return; if (en.isIntersecting && en.intersectionRatio > .6) play(en.target); else stop(en.target); });
  }, { threshold: [0, .6] }) : null;
  function observeCards() { if (!io2) return; grid.querySelectorAll(".card").forEach(function (c) { io2.observe(c); }); }

  document.querySelectorAll(".chip").forEach(function (ch) {
    ch.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("is-on"); x.setAttribute("aria-selected", "false"); });
      ch.classList.add("is-on"); ch.setAttribute("aria-selected", "true");
      filter = ch.dataset.filter; renderGrid();
    });
  });

  // ---------- modal ----------
  var modal = document.getElementById("modal"), mv = document.getElementById("m-video"), box = modal.querySelector(".modal-box");
  var current = -1, lastFocus = null;
  function visible() { return P.map(function (p, i) { return i; }).filter(function (i) { return filter === "all" || P[i].cat === filter; }); }
  function openModal(i) {
    current = i; lastFocus = document.activeElement;
    var p = P[i];
    box.classList.toggle("landscape", p.shape === "wide");
    mv.src = "media/" + p.id + ".mp4"; mv.poster = "media/" + p.id + ".jpg";
    document.getElementById("m-cat").textContent = CAT[lang][p.cat] + " · " + fmt(p.dur);
    document.getElementById("m-title").textContent = p.title[lang];
    document.getElementById("m-type").textContent = p.type[lang];
    document.getElementById("m-desc").textContent = p.desc[lang];
    var t = document.getElementById("m-tools"); t.innerHTML = "";
    p.tools.forEach(function (x) { var li = document.createElement("li"); li.textContent = x; t.appendChild(li); });
    document.querySelector(".m-nav").style.display = "";
    showModal();
  }
  function openReel() {
    current = -1; lastFocus = document.activeElement;
    box.classList.add("landscape");
    mv.src = "media/showreel.mp4"; mv.poster = "media/hero.jpg";
    document.getElementById("m-cat").textContent = "SHOWREEL · 00:00:58:14";
    document.getElementById("m-title").textContent = lang === "ar" ? "شوريل 2026" : "Showreel 2026";
    document.getElementById("m-type").textContent = lang === "ar" ? "موشن · إعلانات · محتوى · AI" : "Motion · Commercial · Content · AI";
    document.getElementById("m-desc").textContent = "";
    document.getElementById("m-tools").innerHTML = "";
    document.querySelector(".m-nav").style.display = "none";
    showModal();
  }
  function showModal() {
    modal.hidden = false; document.body.style.overflow = "hidden";
    var pr = mv.play(); if (pr && pr.catch) pr.catch(function () {});
    modal.querySelector(".modal-x").focus();
  }
  function closeModal() { mv.pause(); mv.removeAttribute("src"); mv.load(); modal.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function step(d) { var v = visible(); var k = v.indexOf(current); if (k < 0) return; openModal(v[(k + d + v.length) % v.length]); }
  modal.querySelector(".modal-x").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.getElementById("m-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("m-next").addEventListener("click", function () { step(1); });
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight" && current >= 0) step(lang === "ar" ? -1 : 1);
    if (e.key === "ArrowLeft" && current >= 0) step(lang === "ar" ? 1 : -1);
  });
  document.querySelectorAll("[data-reel]").forEach(function (b) { b.addEventListener("click", openReel); });

  // ---------- scroll: nav, timecode, progress ----------
  var nav = document.querySelector(".nav"), tc = document.getElementById("tc"), bar = document.getElementById("bar");
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    var f = h > 0 ? Math.min(1, scrollY / h) : 0;
    nav.classList.toggle("solid", scrollY > 40);
    bar.style.width = (f * 100) + "%";
    var frames = Math.round(f * 58.5 * 30), s = Math.floor(frames / 30), fr = frames % 30;
    tc.textContent = "00:00:" + ("0" + s).slice(-2) + ":" + ("0" + fr).slice(-2);
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // ---------- reveal ----------
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: .15 });
    document.querySelectorAll(".reveal").forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });
  } else document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });

  applyLang();
})();
