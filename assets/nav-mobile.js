/* Navigation : liens sur une seule ligne, barre qui tient sur téléphone,
   et menu hamburger qui ouvre/ferme les liens sur mobile */
(function () {
  var nav = document.querySelector('.nav');
  var btn = nav && nav.querySelector('.hburg');
  var links = nav && nav.querySelector('.nav-links');
  if (!btn || !links) return;

  var css = document.createElement('style');
  css.textContent =
    '.nav-links a{white-space:nowrap}' +
    '@media(max-width:1100px){.nav-links a{padding-left:10px;padding-right:10px}}' +
    '@media(max-width:768px){' +
    '.nav .container{padding-left:20px;padding-right:20px}' +
    '.nav .nav-in{gap:12px}' +
    '.nav .nav-acts{gap:6px}' +
    '.nav .nav-acts .btn{padding:10px 16px;font-size:.85rem}' +
    '.nav .hburg{padding:8px 4px}' +
    '}' +
    '@media(max-width:420px){.nav .logo-sub{display:none}}' +
    '@media(max-width:768px){' +
    '.nav.nav-open .nav-links{display:flex!important;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;margin:0;padding:12px 20px 20px;list-style:none;background:#fff;border-bottom:1px solid #E0D8F5;box-shadow:0 18px 40px rgba(59,31,107,.12)}' +
    '.nav.nav-open .nav-links a{display:block;padding:12px 14px;font-size:1rem}' +
    '}';
  document.head.appendChild(css);

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('nav-open')); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
