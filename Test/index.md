<link rel="stylesheet" href="node_modules/reveal.js/dist/reveal.css">
<link rel="stylesheet" href="node_modules/reveal.js/dist/theme/white.css">
<link rel="stylesheet" href="node_modules/reveal.js/plugin/highlight/monokai.css">
<style>
.reveal .slide-number {
    bottom: 10px;  /* Abstand vom unteren Rand */
    right: 60px;   /* Abstand vom rechten Rand */
    font-size: 14px;
    color: #555;
}

.reveal .slides section.present {
  animation: slideInFromRight 5s ease-in-out;
}

.reveal .slides section.past {
  animation: fadeOut 5s ease-in-out;
}

@keyframes slideInFromRight {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
</style>
<script src="node_modules/reveal.js/plugin/highlight/highlight.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="node_modules/reveal.js/dist/reveal.js"></script>
<script src="node_modules/reveal.js/plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealHighlight],
    //transition: 'fade', 
    slideNumber: 'c/t'
  });
</script>


# Smart Home 🏠

---

## Vorteile 🌟

- Komfort, Sicherheit, Energieeffizienz, Fernsteuerung

<canvas id="advantagesChart" width="300" height="200"></canvas>

<script>
const ctx = document.getElementById('advantagesChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Komfort', 'Sicherheit', 'Energieeffizienz', 'Fernsteuerung'],
        datasets: [{
            label: 'Smart Home Nutzen',
            data: [85, 90, 75, 80],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Nutzen von Smart Home' }
        },
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});
</script>

---

## Typische Smart Home Geräte 🛠️

<div class="chart-container">
  <canvas id="devicesChart"></canvas>
</div>

<script>
const ctx2 = document.getElementById('devicesChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Beleuchtung', 'Heizung', 'Sicherheit', 'Sprachassistenten', 'Haushaltsgeräte'],
        datasets: [{
            label: 'Anteil Geräte',
            data: [25, 20, 20, 15, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { title: { display: true, text: 'Verteilung Smart Home Geräte' } }
    }
});
</script>

<style>
.chart-container {
    display: flex;
    justify-content: center; /* horizontal zentrieren */
    margin-top: 20px;       /* Abstand nach oben für Überschrift */
    height: 700px;           /* feste Höhe für das Canvas */
}

#devicesChart {
    width: 500px; 
    height: 500px;
}
</style>

---

## Energieverbrauch 📊

- Vergleich traditionell vs. Smart Home

<canvas id="energyChart" width="300" height="200"></canvas>

<script>
const ctx3 = document.getElementById('energyChart').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni'],
        datasets: [
            {
                label: 'Traditionell',
                data: [120, 115, 130, 125, 140, 135],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Smart Home',
                data: [100, 95, 110, 105, 115, 110],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Monatlicher Energieverbrauch' } },
        scales: { y: { beginAtZero: true } }
    }
});
</script>

---

## Zusammenfassung ✅

- Smart Home steigert Komfort, Sicherheit und Effizienz
- Automatisierung ist Schlüsseltechnologie
- Herausforderungen: Datenschutz, Kompatibilität, Kosten
- Zukunft: KI, Smart Cities, Nachhaltigkeit

---

## Smart Home Vorteile ✨

- <span class="fragment fly-in-left">Komfort</span>
- <span class="fragment fly-in-right">Sicherheit</span>
- <span class="fragment fade-in-up">Energieeffizienz</span>
- <span class="fragment scale-up">Fernsteuerung</span>

<style>
.fragment.fly-in-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fly-in-left {
  opacity: 1;
  transform: translateX(0);
}

.fragment.fly-in-right {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fly-in-right {
  opacity: 1;
  transform: translateX(0);
}

.fragment.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.fragment.scale-up {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease-out;
}
.fragment.visible.scale-up {
  opacity: 1;
  transform: scale(1);
}
</style>

---

Fancy Animationen für Bilder oder Diagramme

Du kannst Bilder animiert reinzoomen, pulsieren oder rotieren:

![](https://upload.wikimedia.org/wikipedia/commons/b/bf/OpenHAB_Architecture.png){.pulse-img}

<style>
.pulse-img {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>

---

Fancy Animationen für Bilder oder Diagramme

Du kannst Bilder animiert reinzoomen, pulsieren oder rotieren:

![](https://upload.wikimedia.org/wikipedia/commons/b/bf/OpenHAB_Architecture.png){.pulse-img}

<style>
.fragment.rotate-in {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
  transition: all 0.7s ease;
}
.fragment.visible.rotate-in {
  opacity: 1;
  transform: rotate(0) scale(1);
}
</style>

---

<section data-transition="zoom">
  <h2>Wow Effekt 🎉</h2>
</section>

<section data-transition="convex">
  <h2>Cooler Wechsel</h2>
</section>

---

## Smart Home Vorteile ✨

- <span class="fragment fly-in-left">Komfort</span>
- <span class="fragment fly-in-right">Sicherheit</span>
- <span class="fragment fade-in-up">Energieeffizienz</span>
- <span class="fragment scale-up">Fernsteuerung</span>

<style>
.fragment.fly-in-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fly-in-left {
  opacity: 1;
  transform: translateX(0);
}

.fragment.fly-in-right {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fly-in-right {
  opacity: 1;
  transform: translateX(0);
}

.fragment.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease-out;
}
.fragment.visible.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.fragment.scale-up {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease-out;
}
.fragment.visible.scale-up {
  opacity: 1;
  transform: scale(1);
}
</style>

<script>
  // Auf Tastendrücke hören
  document.addEventListener('keydown', function(event) {
    // Wenn Taste "A" gedrückt wird
    if (event.key.toLowerCase() === 'a') {
      // Alle Fragments der aktuellen Folie holen
      const currentSlide = Reveal.getCurrentSlide();
      const fragments = currentSlide.querySelectorAll('.fragment');

      fragments.forEach(f => {
        // Normalerweise setzt Reveal selbst "visible",
        // wir zwingen das hier für alle gleichzeitig
        f.classList.add('visible');
      });
    }
  });
</script>

---

# Animationen Demo

---

## Quadrat: umlaufend (Uhrzeigersinn)

<style>
/* Container füllt die Slide, damit die Bewegung relativ zur Folie ist */
.clockwise-container {
  position: relative;
  width: 100%;
  height: 60vh; /* Höhe der Zone, in der das Quadrat läuft */
  display: flex;
  align-items: flex-start; /* Überschrift bleibt oben */
  justify-content: center;
}

/* Das Quadrat */
.clockwise-box {
  --size: 60px;            /* Quadratgröße */
  position: absolute;
  top: 5vh;                /* etwas Abstand vom oberen Folienrand */
  left: 5vw;               /* Startposition: leicht innen vom Rand */
  width: var(--size);
  height: var(--size);
  background: linear-gradient(135deg,#4e9af1,#2b7be9);
  border-radius: 6px;
  box-shadow: 0 6px 14px rgba(43,123,233,0.35);
  will-change: transform;
  /* Animation: umlaufend (clockwise) */
  animation: pathClockwise 8s linear infinite;
}

/* Keyframes: top-left -> top-right -> bottom-right -> bottom-left -> top-left (clockwise) */
@keyframes pathClockwise {
  0% {
    transform: translate(0, 0);
  }
  25% {
    /* nach rechts */
    transform: translate(calc(100vw - 10vw - var(--size)), 0);
  }
  50% {
    /* nach unten */
    transform: translate(calc(100vw - 10vw - var(--size)), calc(60vh - 10vh - var(--size)));
  }
  75% {
    /* nach links */
    transform: translate(0, calc(60vh - 10vh - var(--size)));
  }
  100% {
    /* zurück oben links */
    transform: translate(0, 0);
  }
}

/* Optional: kleine Responsiv-Anpassung für enge Clients */
@media (max-width: 600px) {
  .clockwise-box { --size: 44px; }
}
</style>

<div class="clockwise-container">
  <div class="clockwise-box" aria-hidden="true"></div>
</div>

---

## Purzelbaum im unteren Drittel (links ↔ rechts)

<style>
.tumble-slide {
  position: relative;
  width: 100%;
  height: 60vh;
}

/* Container am unteren Drittel */
.tumble-area {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8vh; /* etwas Abstand vom unteren Rand */
  height: 32vh; /* unteres Drittel (ungefähr) */
  display: flex;
  align-items: center; /* vertikal zentriert in diesem Bereich */
  justify-content: center;
  pointer-events: none; /* Interaktion nicht blockieren */
}

/* Die Bahn, innerhalb der das Quadrat läuft */
/* ein innerer Wrapper mit Breite in Prozent, damit es auf verschiedenen Bildschirmen funktioniert */
.tumble-track {
  position: relative;
  width: 80%;               /* Breite der Hin- und Rückfahrt */
  height: 160px;            /* Platz für die Rotation */
  max-width: 900px;
  min-width: 280px;
}

/* Das Purzelbau-Quadrat */
.tumble-box {
  --size: 70px;
  position: absolute;
  left: 0;
  top: calc(50% - var(--size)/2);
  width: var(--size);
  height: var(--size);
  background: linear-gradient(135deg,#ffb86b,#ff7a59);
  border-radius: 8px;
  box-shadow: 0 6px 14px rgba(255,122,89,0.28);
  transform-origin: center;
  will-change: transform;
  /* Animation: vorwärts (links->rechts) mit Doppelrotation, dann zurück */
  animation: tumble 3s ease-in-out infinite;
}

/* Keyframes: links -> rechts (360°) -> zurück (720° insgesamt),
   dadurch wirkt es wie ein Purzelbaum beim Hin- und Zurückfahren */
@keyframes tumble {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(calc(100% - var(--size))) rotate(360deg);
  }
  100% {
    transform: translateX(0) rotate(720deg);
  }
}

/* Für kleinere Displays die Größe anpassen */
@media (max-width: 600px) {
  .tumble-box { --size: 48px; }
  .tumble-track { height: 120px; }
}
</style>

<div class="tumble-slide">
  <div class="tumble-area">
    <div class="tumble-track">
      <div class="tumble-box" aria-hidden="true"></div>
    </div>
  </div>
</div>

---

<section>
  <h2>Purzelbaum: Hin & Rückwärts</h2>

  <style>
  .flip-slide {
    position: relative;
    width: 100%;
    height: 60vh;
  }

  .flip-track {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 120px;
    transform: translateY(-50%);
  }

  .flip-box {
    --size: 70px;
    position: absolute;
    top: calc(50% - var(--size)/2);
    left: 0;
    width: var(--size);
    height: var(--size);
    background: linear-gradient(135deg,#6be2ff,#0077b6);
    border-radius: 8px;
    box-shadow: 0 6px 14px rgba(0,119,182,0.35);
    transform-origin: center;
    will-change: transform;
    animation: flipRoll 5s ease-in-out infinite;
  }

  @keyframes flipRoll {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      /* rechts angekommen mit Vorwärtsrolle */
      transform: translateX(calc(100% - var(--size))) rotate(360deg);
    }
    50% {
      /* wieder links angekommen nach Rückwärtsrolle */
      transform: translateX(0) rotate(0deg);
    }
    75% {
      /* nochmal rechts mit Vorwärtsrolle */
      transform: translateX(calc(100% - var(--size))) rotate(360deg);
    }
    100% {
      /* und zurück links */
      transform: translateX(0) rotate(0deg);
    }
  }

  @media (max-width: 600px) {
    .flip-box { --size: 48px; }
    .flip-track { height: 80px; }
  }
  </style>

  <div class="flip-slide">
    <div class="flip-track">
      <div class="flip-box" aria-hidden="true"></div>
    </div>
  </div>
</section>

---

<section>
  <h2>Purzelbaum vorwärts & rückwärts</h2>

  <style>
  .roll-slide {
    position: relative;
    width: 100%;
    height: 60vh;
  }

  .roll-track {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 140px;
    transform: translateY(-50%);
  }

  .roll-box {
    --size: 70px;
    position: absolute;
    top: calc(50% - var(--size)/2);
    left: 0;
    width: var(--size);
    height: var(--size);
    background: linear-gradient(135deg,#ff9e6d,#ff5e62);
    border-radius: 8px;
    box-shadow: 0 6px 14px rgba(255,94,98,0.35);
    transform-origin: center;
    animation: rollMotion 6s ease-in-out infinite;
    will-change: transform;
  }

  @keyframes rollMotion {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      /* rechts angekommen mit Vorwärtsrolle */
      transform: translateX(calc(100% - var(--size))) rotate(360deg);
    }
    50% {
      /* zurück links mit Rückwärtsrolle */
      transform: translateX(0) rotate(-360deg);
    }
    75% {
      /* wieder rechts mit Vorwärtsrolle */
      transform: translateX(calc(100% - var(--size))) rotate(360deg);
    }
    100% {
      /* zurück links mit Rückwärtsrolle */
      transform: translateX(0) rotate(-360deg);
    }
  }

  @media (max-width: 600px) {
    .roll-box { --size: 48px; }
    .roll-track { height: 100px; }
  }
  </style>

  <div class="roll-slide">
    <div class="roll-track">
      <div class="roll-box" aria-hidden="true"></div>
    </div>
  </div>
</section>

---

<section>
<h2>MQTT Model — Publisher → Broker → Subscriber</h2>

<style>
/* --- Layout --- */
.mqtt-stage {
  position: relative;
  width: 100%;
  height: 48vh;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6vw;
  box-sizing: border-box;
}

/* Boxen: Publisher, Broker, Subscriber */
.mqtt-node {
  width: 220px;
  min-width: 160px;
  height: 120px;
  border-radius: 10px;
  background: linear-gradient(180deg, #ffffff, #f3f6fb);
  box-shadow: 0 8px 20px rgba(30,60,120,0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  position: relative;
}

/* Labels und icons */
.node-title {
  font-weight: 700;
  color: #163b67;
  margin-bottom: 6px;
}
.node-sub {
  font-size: 12px;
  color: #4b6b8b;
}

/* Distinct styles */
.publisher { border: 2px solid #7db7ff; }
.broker    { border: 2px solid #ffa94d; background: linear-gradient(180deg,#fffaf0,#fff3e6); }
.subscriber{ border: 2px solid #9ff3c6; }

/* Arrows (SVG overlay) */
.mqtt-arrows {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  pointer-events: none;
}

/* Packet style */
.packet {
  --size: 28px;
  width: var(--size);
  height: var(--size);
  border-radius: 6px;
  background: linear-gradient(135deg,#4e9af1,#2b7be9);
  color: white;
  font-size: 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  box-shadow: 0 6px 18px rgba(43,123,233,0.25);
  opacity: 0;
  pointer-events: none;
}

/* packet text small */
.packet span { transform: translateY(-1px); font-weight:600; }

/* Broker processing pulse */
.broker.pulse::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 12px;
  box-shadow: 0 0 0 4px rgba(255,169,77,0.12);
  animation: pulse 0.6s ease-out 2;
}
@keyframes pulse {
  from { transform: scale(0.98); opacity: 1; }
  to   { transform: scale(1.08); opacity: 0; }
}

/* --- Bewegung: CSS Keyframes use computed --dx1 and --dx2 distances --- */
/* The packet animation moves across two phases:
   0%..50% : publisher -> broker
   50%..100%: broker -> subscriber
   we use CSS variables to compute translateX distances dynamically via JS */
@keyframes mqttFlow {
  0% {
    opacity: 1;
    transform: translateX(var(--startX, 0px)) translateY(-50%) scale(1) rotate(0deg);
    filter: brightness(1);
  }
  45% {
    /* arrive near broker */
    transform: translateX(calc(var(--dx1))) translateY(-50%) scale(1.05) rotate(10deg);
    filter: drop-shadow(0 8px 14px rgba(0,0,0,0.08));
  }
  50% {
    /* pause in broker - slight shrink to simulate processing */
    transform: translateX(calc(var(--dx1))) translateY(-50%) scale(0.9) rotate(0deg);
    opacity: 0.95;
  }
  55% {
    /* leave broker */
    transform: translateX(calc(var(--dx1))) translateY(-50%) scale(1) rotate(0deg);
  }
  95% {
    /* near subscriber */
    transform: translateX(calc(var(--dx2))) translateY(-50%) scale(1.05) rotate(-10deg);
  }
  100% {
    transform: translateX(calc(var(--dx2))) translateY(-50%) scale(0.95) rotate(-10deg);
    opacity: 0.0;
  }
}

/* class to start animation with customized duration */
.packet.animate {
  animation-name: mqttFlow;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-duration: var(--duration, 3000ms);
}

/* Controls layout */
.mqtt-controls {
  margin-top: 14px;
  display:flex;
  gap:10px;
  justify-content: center;
  align-items: center;
}
.mqtt-controls input[type="text"]{
  padding:6px 8px;
  border-radius:6px;
  border:1px solid #d6e4ff;
  min-width: 200px;
}
.mqtt-controls button{
  padding:8px 12px;
  border-radius:6px;
  border: none;
  background:#2b7be9;
  color:white;
  cursor:pointer;
  font-weight:600;
}
.mqtt-controls button.secondary{
  background:#ffa94d;
  color:#2b2a2a;
}
.mqtt-note { font-size:12px; color:#4b6b8b; margin-top:8px; text-align:center; }
@media (max-width: 780px) {
  .mqtt-stage { gap: 3vw; flex-direction: column; height: 56vh; }
  .mqtt-node { width: 86%; max-width: 420px; }
  .packet { display:none; } /* hide packets on tiny screens to avoid overflow issues (optional) */
}
</style>

<div class="mqtt-stage" id="mqttStage">
  <div class="mqtt-node publisher" id="publisher">
    <div class="node-title">Publisher</div>
    <div class="node-sub">Topic: <strong>home/living/temperature</strong></div>
  </div>

  <div class="mqtt-node broker" id="broker">
    <div class="node-title">Broker</div>
    <div class="node-sub">Central MQTT Broker</div>
  </div>

  <div class="mqtt-node subscriber" id="subscriber">
    <div class="node-title">Subscriber</div>
    <div class="node-sub">Subscribes to <strong>home/living/temperature</strong></div>
  </div>

  <!-- svg arrows -->
  <svg class="mqtt-arrows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <!-- left->center -->
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 z" fill="#aac7ff" />
      </marker>
      <marker id="arrow-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 z" fill="#ffd1a3" />
      </marker>
      <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 z" fill="#bff3d0" />
      </marker>
    </defs>
  </svg>
</div>

<div class="mqtt-controls">
  <input id="msgInput" type="text" placeholder='Message (z. B. "22.5°C")' value="22.5°C">
  <button id="pubBtn">Publish</button>
  <button id="autoBtn" class="secondary">Auto: Off</button>
  <button id="clearBtn" class="secondary">Clear Packets</button>
</div>
<div class="mqtt-note">Klicke <strong>Publish</strong> — Paket fährt Publisher → Broker → Subscriber. <br>Broker "pulst" beim Empfang.</div>

<script>
/* Minimal JS: position compute + spawn CSS-animated packets.
   Works by measuring publisher/broker/subscriber centers and setting --dx1 and --dx2 variables.
*/

(function(){
  const stage = document.getElementById('mqttStage');
  const pub = document.getElementById('publisher');
  const broker = document.getElementById('broker');
  const sub = document.getElementById('subscriber');
  const pubBtn = document.getElementById('pubBtn');
  const autoBtn = document.getElementById('autoBtn');
  const clearBtn = document.getElementById('clearBtn');
  const msgInput = document.getElementById('msgInput');

  let auto = false;
  let autoHandle = null;

  function computeDX(pkt) {
    // compute horizontal translate distances in px relative to stage left
    const sRect = stage.getBoundingClientRect();
    const pRect = pub.getBoundingClientRect();
    const bRect = broker.getBoundingClientRect();
    const rRect = sub.getBoundingClientRect();

    // centers relative to stage left
    const cx = (rect)=> (rect.left + rect.right)/2 - sRect.left;

    const pX = cx(pRect);
    const bX = cx(bRect);
    const sX = cx(rRect);

    // we will set packet at publisher's X, and move to broker (dx1), then to subscriber (dx2).
    // Use CSS translateX distances (targetX - startX)
    const dx1 = (bX - pX) + 'px';
    const dx2 = (sX - pX) + 'px'; // final translate relative to start pos

    // also compute vertical offset to center over track (not used because we use translateY(-50%))
    return {dx1, dx2, startX: pX + 'px'};
  }

  function spawnPacket(message) {
    const {dx1, dx2, startX} = computeDX();
    const packet = document.createElement('div');
    packet.className = 'packet';
    packet.style.left = '0px';
    packet.style.setProperty('--dx1', dx1);
    packet.style.setProperty('--dx2', dx2);
    packet.style.setProperty('--startX', '0px');
    packet.style.setProperty('--duration', '3000ms');

    // small label inside packet
    const span = document.createElement('span');
    span.textContent = message || '';
    packet.appendChild(span);

    // put packet in stage and position at publisher center (visually)
    // compute publisher center left relative to stage and set transform initial translateX
    const sRect = stage.getBoundingClientRect();
    const pRect = pub.getBoundingClientRect();
    const startLeft = ((pRect.left + pRect.right)/2 - sRect.left) - 14; // center minus half size
    packet.style.left = startLeft + 'px';

    // add to DOM
    stage.appendChild(packet);

    // trigger animation (next tick)
    requestAnimationFrame(()=>{
      // make sure to reflow so animate class triggers
      packet.classList.add('animate');
      // when arrives at broker (50% of duration), pulse the broker once
      const dur = parseInt(getComputedStyle(packet).getPropertyValue('--duration')) || 3000;
      setTimeout(()=> {
        // small pulse effect
        broker.classList.add('pulse');
        setTimeout(()=> broker.classList.remove('pulse'), 700);
      }, dur * 0.48); // slightly before to match "arrival"
    });

    // cleanup after animation
    packet.addEventListener('animationend', ()=> {
      try { stage.removeChild(packet); } catch(e){}
    });
  }

  pubBtn.addEventListener('click', ()=>{
    spawnPacket(msgInput.value || 'msg');
  });

  clearBtn.addEventListener('click', ()=>{
    // remove any remaining packets
    document.querySelectorAll('.packet').forEach(p=>p.remove());
  });

  autoBtn.addEventListener('click', ()=>{
    auto = !auto;
    autoBtn.textContent = auto ? 'Auto: On' : 'Auto: Off';
    if (auto) {
      autoHandle = setInterval(()=> spawnPacket(msgInput.value || 'msg'), 1500);
    } else {
      clearInterval(autoHandle);
      autoHandle = null;
    }
  });

  // Recompute positions on resize so dx1/dx2 are correct
  window.addEventListener('resize', ()=> { /* no-op; computeDX uses up-to-date getBoundingClientRect */ });

  // Optional: Spawn initial demo packet
  // setTimeout(()=> spawnPacket('22.5°C'), 600);
})();
</script>
</section>

---

<section>
<h2>ISO/OSI Schichtenmodell</h2>

<style>
.osi-stage {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8vw;
  height: 70vh;
  position: relative;
  font-family: system-ui, sans-serif;
}

.osi-stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.osi-layer {
  width: 180px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  background: linear-gradient(to bottom, #fdfdfd, #f0f0f0);
  position: relative;
  z-index: 1;
}

.osi-stack.sender .osi-layer { border-left: 4px solid #4e9af1; }
.osi-stack.receiver .osi-layer { border-right: 4px solid #4caf50; }

.packet {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: linear-gradient(135deg,#4e9af1,#2b7be9);
  color: white;
  font-size: 11px;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  left: calc(50% - 14px);
  top: 0;
  opacity: 0;
  z-index: 20;
}

/* Animation Pfad: runter, rüber, hoch */
@keyframes osiFlow {
  0%   { top: 0%; left: 20%; opacity: 1; }
  40%  { top: 90%; left: 20%; }
  50%  { top: 90%; left: 80%; }
  90%  { top: 0%; left: 80%; }
  100% { top: 0%; left: 80%; opacity: 0; }
}

.packet.animate {
  animation: osiFlow 6s linear forwards;
}
</style>

<div class="osi-stage">
  <div class="osi-stack sender">
    <div class="osi-layer">Application</div>
    <div class="osi-layer">Presentation</div>
    <div class="osi-layer">Session</div>
    <div class="osi-layer">Transport</div>
    <div class="osi-layer">Network</div>
    <div class="osi-layer">Data Link</div>
    <div class="osi-layer">Physical</div>
  </div>

  <div class="osi-stack receiver">
    <div class="osi-layer">Application</div>
    <div class="osi-layer">Presentation</div>
    <div class="osi-layer">Session</div>
    <div class="osi-layer">Transport</div>
    <div class="osi-layer">Network</div>
    <div class="osi-layer">Data Link</div>
    <div class="osi-layer">Physical</div>
  </div>

  <div class="packet" id="osiPacket">P</div>
</div>

<div style="text-align:center; margin-top:10px;">
  <button id="startOsiBtn">Starte Paket-Übertragung</button>
</div>

<script>
const osiBtn = document.getElementById('startOsiBtn');
const osiPacket = document.getElementById('osiPacket');
osiBtn.addEventListener('click', ()=>{
  osiPacket.classList.remove('animate');
  void osiPacket.offsetWidth; // reflow zum Neustarten
  osiPacket.classList.add('animate');
});
</script>
</section>

---

<section>
<h2>openHAB REST API: Request → Response Beispiel</h2>

<style>
.api-stage {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8vw;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.api-box {
  width: 300px;
  min-width: 220px;
  height: auto;
  padding: 16px;
  border: 2px solid #4e9af1;
  border-radius: 8px;
  background: #f0f8ff;
  box-shadow: 0 8px 20px rgba(30,60,120,0.12);
  position: relative;
}

.api-box.server {
  border-color: #ffa94d;
  background: #fffaf0;
}

.api-title {
  font-weight: 700;
  margin-bottom: 8px;
  color: #163b67;
}

.api-code {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9em;
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  overflow-x: auto;
}

.arrow {
  position: absolute;
  width: 2px;
  height: 40px;
  background: #888;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.packet-api {
  position: absolute;
  width: 120px;
  height: 30px;
  background: #2b7be9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 0;
  font-size: 0.85em;
  transform-origin: center;
}

@keyframes apiMove {
  0% {
    left: 20%;
    top: 50%;
    opacity: 1;
  }
  40% {
    left: 40%;
    top: 50%;
  }
  45% {
    opacity: 0;
  }
  50% {
    left: 60%;
    opacity: 1;
  }
  90% {
    left: 80%;
    top: 50%;
  }
  100% {
    left: 80%;
    top: 50%;
    opacity: 0;
  }
}

.packet-api.animate {
  animation: apiMove 4s ease-in-out forwards;
}

button.start-api {
  margin-top: 16px;
  padding: 8px 12px;
  background: #4e9af1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<div class="api-stage" id="apiStage">
  <div class="api-box client" id="clientBox">
    <div class="api-title">Client (Python)</div>
    <div class="api-code">
// Python code
import requests

url = "http://openhab.local:8080/rest/items/TemperatureSensor/state"
headers = {
    "Accept": "application/json"
}

resp = requests.get(url, headers=headers)
print("Status:", resp.status_code)
print("Body:", resp.json())
    </div>
  </div>

  <div class="api-box server" id="serverBox">
    <div class="api-title">Server (openHAB REST API)</div>
    <div class="api-code">
HTTP/1.1 200 OK  
Content-Type: application/json  

{
  "state": "22.5",
  "type": "Number",
  "name": "TemperatureSensor",
  "link": "http://openhab.local:8080/rest/items/TemperatureSensor"
}
    </div>
  </div>

  <div class="packet-api" id="apiPacket">GET /items/TemperatureSensor/state</div>
</div>

<div style="text-align:center;">
  <button class="start-api" id="startApiBtn">Request senden</button>
</div>

<script>
const btn = document.getElementById('startApiBtn');
const packet = document.getElementById('apiPacket');
btn.addEventListener('click', ()=>{
  packet.classList.remove('animate');
  void packet.offsetWidth; // Reflow, damit Animation neu startet
  packet.classList.add('animate');
});
</script>

</section>

---

## Request-Response Beispiel: openHAB API

<div class="rr-container">
  <div class="client">Python Client</div>
  <div class="server">openHAB REST API</div>
  
  <div class="request-packet">GET /items/TemperatureSensor/state<br>{}</div>
  <div class="response-packet">{ "state": "22.5" }</div>
</div>

<style>
.rr-container {
  position: relative;
  height: 200px;
  margin-top: 50px;
}

.client, .server {
  position: absolute;
  top: 50px;
  width: 120px;
  height: 40px;
  background-color: #f2f2f2;
  border: 2px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.client { left: 50px; }
.server { right: 50px; }

.request-packet, .response-packet {
  position: absolute;
  top: 100px;
  width: 160px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: monospace;
  text-align: center;
}

.request-packet {
  background-color: #4da6ff;
  color: white;
  left: 50px;
  animation: moveRequest 6s linear infinite;
}

.response-packet {
  background-color: #33cc33;
  color: white;
  right: 50px;
  animation: moveResponse 6s linear infinite;
  animation-delay: 6s;
}

/* Animation: Request von Client zu Server */
@keyframes moveRequest {
  0% { left: 50px; }
  90% { left: calc(100% - 210px); } /* 50px + server width + padding */
  100% { left: calc(100% - 210px); }
}

/* Animation: Response von Server zu Client */
@keyframes moveResponse {
  0% { right: 50px; }
  90% { right: calc(100% - 210px); } /* Rückweg */
  100% { right: 50px; }
}
</style>

---

## Request-Response Modell mit Pfeilen

<div class="rr-container">
  <div class="client">Python Client</div>
  <div class="server">openHAB REST API</div>
  
  <div class="request-arrow"></div>
  <div class="response-arrow"></div>

  <div class="request-packet">GET /items/TemperatureSensor/state<br>{}</div>
  <div class="response-packet">{ "state": "22.5" }</div>
</div>

<style>
.rr-container {
  position: relative;
  height: 550px;
  margin-top: 50px;
}

/* Client & Server Boxen */
.client, .server {
  position: absolute;
  top: 25px;
  width: 120px;
  height: 500px; /* doppelte Höhe */
  background-color: #f2f2f2;
  border: 2px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 28px; /* unverändert */
}

.client { left: 25px; }
.server { right: 25px; }

/* Pfeile */
.request-arrow, .response-arrow {
  position: absolute;
  left: 145px;
  right: 145px;
  height: 0;
  border-top: 2px solid #000;
}

.request-arrow { top: 40px; }
.response-arrow { bottom: 40px; border-top: none; border-bottom: 2px solid #000; }

/* Paket-Boxen */
.request-packet, .response-packet {
  position: absolute;
  width: 350px;
  height: 120px; /* doppelte Höhe */
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  text-align: center;
  font-size: 20px; /* doppelte Schriftgröße */
}

/* Request Paket */
.request-packet {
  background-color: #4da6ff;
  color: white;
  top: 20px; /* auf Pfeil oben */
  left: 50px;
  animation: moveRequest 4s linear forwards;
}

/* Response Paket */
.response-packet {
  background-color: #33cc33;
  color: white;
  top: 425px; /* auf Pfeil unten */
  right: 50px;
  opacity: 0;
  animation: moveResponse 4s linear forwards;
  animation-delay: 4s; /* erst nachdem Request da war */
}

/* Request Animation */
@keyframes moveRequest {
  0% { left: 50px; }
  90% { left: calc(100% - 210px); }
  100% { left: calc(100% - 210px); }
}

/* Response Animation */
@keyframes moveResponse {
  0% { right: 50px; opacity: 0; }
  80% { opacity: 1; }
  100% { right: calc(100% - 210px); }
}
</style>

---

<div class="rr-container">
  <div class="client">Python Client</div>
  <div class="server">openHAB REST API</div>
  
  <div class="request-arrow"></div>
  <div class="response-arrow"></div>

  <div class="request-packet">GET /items/TemperatureSensor/state<br>{}</div>
  <div class="response-packet">{ "state": "22.5" }</div>
</div>

<style>
.rr-container { position: relative; height: 550px; margin-top: 50px; }
.client, .server {
  position: absolute; top: 25px; width: 120px; height: 500px;
  background-color: #f2f2f2; border: 2px solid #333; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 28px;
}
.client { left: 25px; } .server { right: 25px; }

.request-arrow, .response-arrow {
  position: absolute; left: 145px; right: 145px; height: 0; border-top: 2px solid #000;
}
.request-arrow { top: 40px; }
.response-arrow { top: 425px; border-top: none; border-bottom: 2px solid #000; }

.request-packet, .response-packet {
  position: absolute; width: 350px; height: 120px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; font-family: monospace;
  text-align: center; font-size: 20px;
}
.request-packet { background-color: #4da6ff; color: white; top: 20px; left: 50px; opacity: 0; }
.response-packet { background-color: #33cc33; color: white; top: 425px; right: 50px; opacity: 0; }

/* Keyframes */
@keyframes moveRequest {
  0% { left: 50px; opacity: 1; }
  100% { left: calc(100% - 210px); opacity: 1; }
}

@keyframes moveResponse {
  0% { right: 50px; opacity: 1; }
  100% { right: calc(100% - 210px); opacity: 1; }
}
</style>

<script>
const request = document.querySelector('.request-packet');
const response = document.querySelector('.response-packet');

const totalRequests = 20;

let count = 0;

function startCycle() {
  if (count >= totalRequests) return;

  // Request Animation
  request.style.animation = "moveRequest 2s linear forwards";
  request.style.opacity = 1;

  request.addEventListener('animationend', function onRequestEnd() {
    request.style.opacity = 0; // Request verschwindet
    request.style.animation = ""; // reset
    request.removeEventListener('animationend', onRequestEnd);

    // Response Animation starten
    response.style.animation = "moveResponse 2s linear forwards";
    response.style.opacity = 1;

    response.addEventListener('animationend', function onResponseEnd() {
      response.style.opacity = 0;
      response.style.animation = "";
      response.removeEventListener('animationend', onResponseEnd);

      count++;
      setTimeout(startCycle, 300); // kleiner Delay vor nächstem Request
    });
  });
}

startCycle();
</script>

---

<div class="rr-container">
  <div class="client">Python Client</div>
  <div class="server">openHAB REST API</div>
  
  <div class="request-arrow"></div>
  <div class="response-arrow"></div>

  <div class="request-packet">GET /items/TemperatureSensor/state<br>{}</div>
  <div class="response-packet">{ "state": "22.5" }</div>
</div>

<style>
.rr-container { position: relative; height: 550px; margin-top: 50px; }
.client, .server {
  position: absolute; top: 25px; width: 120px; height: 500px;
  background-color: #f2f2f2; border: 2px solid #333; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 28px;
}
.client { left: 25px; } .server { right: 25px; }

.request-arrow, .response-arrow {
  position: absolute; left: 145px; right: 145px; height: 0; border-top: 2px solid #000;
}
.request-arrow { top: 40px; }
.response-arrow { top: 425px; border-top: none; border-bottom: 2px solid #000; }

.request-packet, .response-packet {
  position: absolute; width: 350px; height: 120px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; font-family: monospace;
  text-align: center; font-size: 20px;
}
.request-packet { background-color: #4da6ff; color: white; top: 20px; left: 50px; opacity: 0; }
.response-packet { background-color: #33cc33; color: white; top: 425px; right: 50px; opacity: 0; }

@keyframes moveRequest {
  0% { left: 50px; opacity: 1; }
  100% { left: calc(100% - 210px); opacity: 1; }
}

@keyframes moveResponse {
  0% { right: 50px; opacity: 1; }
  100% { right: calc(100% - 210px); opacity: 1; }
}
</style>

<script>
const request = document.querySelector('.request-packet');
const response = document.querySelector('.response-packet');

function getRandomTemperature() {
  return (21 + Math.random() * 2).toFixed(1); // 21.0 - 23.0 °C
}

function startCycle() {
  // Request-Paket vorbereiten
  request.style.opacity = 1;
  request.style.left = '50px';
  request.innerHTML = `GET /items/TemperatureSensor/state<br>{}`;

  // Request Animation starten
  request.style.animation = 'moveRequest 2s linear forwards';

  request.addEventListener('animationend', function onRequestEnd() {
    request.style.opacity = 0;
    request.style.animation = '';
    request.removeEventListener('animationend', onRequestEnd);

    // Response-Paket vorbereiten
    const temp = getRandomTemperature();
    response.innerHTML = `{ "state": "${temp}" }`;
    response.style.opacity = 1;
    response.style.right = '50px';
    response.style.animation = 'moveResponse 2s linear forwards';

    response.addEventListener('animationend', function onResponseEnd() {
      response.style.opacity = 0;
      response.style.animation = '';
      response.removeEventListener('animationend', onResponseEnd);

      // nächster Request direkt starten
      setTimeout(startCycle, 3);
    });
  });
}

// Loop starten
startCycle();
</script>
