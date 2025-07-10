// Tab switching with animation
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.animated-section');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if(tab.classList.contains('active')) return;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    setTimeout(() => {
      document.getElementById(tabId).scrollIntoView({behavior: "smooth"});
    }, 80);
  });
});

// Trip Survey
document.getElementById('trip-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const scenery = document.querySelector('input[name="scenery"]:checked')?.value;
  const mood = document.querySelector('input[name="mood"]:checked')?.value;
  const dinner = document.querySelector('input[name="dinner"]:checked')?.value;
  const out = document.getElementById('trip-result');
  let tripKey = scenery;

  // Give priority to unique answers
  // Italy: scenery=italy, Greece: scenery=greece, Island: scenery=island, Paris: scenery=city
  // If mood/dinner match a destination strongly, adjust (if you want more logic, let me know!)

  let result = "";
  if (tripKey === "island") {
    result = `
    <div style="font-weight:700; color:#e04c98; margin-bottom:1em;">Wardy’s birthday trippppp 🐚🌺</div>
    okay sooo…<br>
    flight is booked.<br>
    we’re going to an island 🤍<br><br>
    we’re gonna land, check in, drop everything…<br>
    and just chill.<br>
    no plans, no stress. just vibes ya cupcake.<br>
    spa day date first.<br>
    massages, warm towels, all of it.<br>
    then we’re gonna tan by the beach,<br>
    just laying there, laughing, soft music (you choose of course), snacks and stuff w kda…<br>
    +++ you being cute like always.<br><br>
    then at night… your birthday dinner 🎂<br>
    on the beach.<br>
    our own little table, candles, just us.<br>
    waves in the back, all your fav foods coming to us .<br>
    no one around. just you, me, and the starssss.<br><br>
    <i>whatever it is, it’s about you. W it’ll be so BEAUITUFL w I’ll be so lucky because I’ll be with you.<br>
    This birthday is for you w we’re gonna spend it as you like.</i>
    `;
  } else if (tripKey === "city") {
    result = `
    <div style="font-weight:700; color:#e04c98; margin-bottom:1em;">Paris 🎠</div>
    okay sooo…<br>
    flight is booked.<br>
    we’re going to Paris.<br>
    It’ll be us walking around, holding hands, stopping for little pastries and coffee or matchaaaa.<br>
    taking pics of you cause you look good in every corner.<br>
    and yes, shopping spreeeee for Wardyyy 🛍️💄<br>
    i’m carrying the bags, you just smile and pick what you love.<br>
    W eeee I’ll shop too you pick my clothes w stuff for me.<br>
    After that a romantic dinnerrr.<br><br>
    <i>whatever it is, it’s about you. W it’ll be so BEAUITUFL w I’ll be so lucky because I’ll be with you.<br>
    This birthday is for you w we’re gonna spend it as you like.</i>
    `;
  } else if (tripKey === "greece") {
    result = `
    <div style="font-weight:700; color:#e04c98; margin-bottom:1em;">Greece 🏛️</div>
    okay sooo…<br>
    flight is booked.<br>
    we’re going to Greece.<br>
    It’ll be white walls, blue roofs, you looking like a dream ya cupcake.<br>
    we wake up to the ocean.<br>
    you open the window, the air screams ena it’s wardyssss birthdayyyy.<br>
    breakfast outside, w us chilling.<br>
    just peace.<br>
    After that we explore, take cute pics,<br>
    then watch the sunset from a boat, wrapped in a blanket.<br>
    birthday dinner on a yacht.<br>
    All loveeeee it’s wardys day bs I’m the lucky one.<br><br>
    <i>whatever it is, it’s about you. W it’ll be so BEAUITUFL w I’ll be so lucky because I’ll be with you.<br>
    This birthday is for you w we’re gonna spend it as you like.</i>
    `;
  } else if (tripKey === "italy") {
    result = `
    <div style="font-weight:700; color:#e04c98; margin-bottom:1em;">Italy 🇮🇹</div>
    Okayyy soooo…<br>
    Flight booked.<br>
    We’re going to Italy.<br><br>
    super chill, romantic vibes.<br>
    we stay in a quiet villa by the lake.<br>
    mornings with a nice breakfast at the balcony and views that don’t feel real.<br>
    small towns nearby, we walk around, try cute food, w do whatever Wardy wants.<br>
    And yup a birthday dinner next.<br>
    After the dinner we’ll walk and laugh ya tolaaa and then have the best gelato ever.<br><br>
    <i>whatever it is, it’s about you. W it’ll be so BEAUITUFL w I’ll be so lucky because I’ll be with you.<br>
    This birthday is for you w we’re gonna spend it as you like.</i>
    `;
  }
  out.innerHTML = result;
});

// Optional PWA service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
