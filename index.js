
// typing roles
(function () {
    var roles = ["Programmer", "Tech teacher", "Scratch coach for kids", "Web developer", "Data analysis trainer"];
    var el = document.getElementById('role'), i = 0, j = 0, del = false;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) { el.textContent = roles.join(' · '); return }
    (function tick() {
        var w = roles[i];
        el.textContent = w.slice(0, j);
        if (!del && j === w.length) { del = true; return setTimeout(tick, 1400) }
        if (del && j === 0) { del = false; i = (i + 1) % roles.length }
        j += del ? -1 : 1;
        setTimeout(tick, del ? 40 : 80);
    })();
})();

// block stack runs and robot walks
(function () {
    var blocks = [].slice.call(document.querySelectorAll('.blk')), bot = document.getElementById('bot'), btn = document.getElementById('go'), busy = false;
    btn.addEventListener('click', function () {
        if (busy) return; busy = true;
        var track = bot.parentNode, max = track.clientWidth - bot.offsetWidth - 4, pos = 0;
        bot.style.left = '0px';
        blocks.forEach(function (b, k) {
            setTimeout(function () {
                blocks.forEach(function (x) { x.classList.remove('run') });
                b.classList.add('run');
                if (k >= 3) { bot.classList.add('walk'); pos = k === 3 ? max * .5 : max; bot.style.left = pos + 'px' }
            }, k * 700);
        });
        setTimeout(function () {
            blocks.forEach(function (x) { x.classList.remove('run') });
            bot.classList.remove('walk'); busy = false;
        }, blocks.length * 700 + 900);
    });
    // auto-run once after the blocks have dropped in
    setTimeout(function () { btn.click() }, 2800);
})();

// scroll reveal
(function () {
    var els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('on') }); return }
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) } }) }, { threshold: .15 });
    els.forEach(function (e, k) { e.style.transitionDelay = (k % 4) * 80 + 'ms'; io.observe(e) });
})();

document.getElementById('yr').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function (e) {
  
    const lenis = new Lenis();
  
   
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);

   
  });