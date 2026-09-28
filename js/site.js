function smoothNav(id, e) {
  if (e) e.preventDefault();
  var el = document.getElementById(id);
  if (!el) return;
  var offset = 70;
  var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: top, behavior: 'smooth' });
  if (history.pushState) {
    history.pushState(null, null, window.location.pathname);
  }
}

function toggleMenu() {
  var menu = document.getElementById('mobileNav');
  var btn = document.getElementById('hamburger');
  var isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function closeMenu() {
  var menu = document.getElementById('mobileNav');
  var btn = document.getElementById('hamburger');
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobileNav');
  var btn = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});

function switchTab(id, btn) {
  document.querySelectorAll('.tc').forEach(function(t) { t.classList.remove('on'); });
  document.querySelectorAll('.tab').forEach(function(b) {
    b.classList.remove('on');
    b.setAttribute('aria-selected', 'false');
  });
  document.getElementById('tc-' + id).classList.add('on');
  btn.classList.add('on');
  btn.setAttribute('aria-selected', 'true');
}

function faq(btn) {
  var item = btn.closest('.faq-item');
  var a = item ? item.querySelector('.faq-a') : btn.nextElementSibling;
  var open = a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(function(x) { x.classList.remove('open'); });
  document.querySelectorAll('.faq-q').forEach(function(x) {
    x.classList.remove('open');
    x.setAttribute('aria-expanded', 'false');
  });
  if (!open) {
    a.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}
