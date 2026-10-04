import type { ReactNode } from "react";
import type { JourneyScene } from "@/content/journey";

/**
 * Original flat illustrations for each step of the student journey.
 * Pure SVG with CSS animation classes from globals.css.
 */

type PersonProps = {
  x: number;
  y: number;
  scale?: number;
  skin?: string;
  hair?: string;
  shirt?: string;
  tie?: string;
  children?: ReactNode;
};

function Person({
  x,
  y,
  scale = 1,
  skin = "#f2c29b",
  hair = "#1f2a44",
  shirt = "#ffffff",
  tie = "#ffc20e",
  children,
}: PersonProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-24 0C-24 -24 -13 -32 0 -32S24 -24 24 0Z"
        fill={shirt}
        stroke="#c9d8e6"
        strokeWidth="1.2"
      />
      <rect x="-4.5" y="-38" width="9" height="8" rx="3" fill={skin} />
      <circle cx="0" cy="-50" r="15" fill={skin} />
      <path d="M-15.5 -52C-16 -70 16 -70 15.5 -52C9 -59 -9 -59 -15.5 -52Z" fill={hair} />
      <circle cx="-5.5" cy="-49" r="1.7" fill="#1f2a44" />
      <circle cx="5.5" cy="-49" r="1.7" fill="#1f2a44" />
      <path
        d="M-5 -43Q0 -38.5 5 -43"
        fill="none"
        stroke="#b5654a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M-5 -31L0 -27L5 -31L5 -24L0 -27L-5 -24Z" fill={tie} />
      {children}
    </g>
  );
}

function Sparkle({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <path
      className="anim-twinkle"
      style={{ animationDelay: `${delay}s` }}
      d={`M${x} ${y - 8}L${x + 2.5} ${y - 2.5}L${x + 8} ${y}L${x + 2.5} ${y + 2.5}L${x} ${y + 8}L${x - 2.5} ${y + 2.5}L${x - 8} ${y}L${x - 2.5} ${y - 2.5}Z`}
      fill="#ffc20e"
    />
  );
}

function Welcome() {
  return (
    <>
      <rect x="18" y="14" width="284" height="200" rx="18" fill="#3b4a5e" />
      <rect x="28" y="24" width="264" height="180" rx="10" fill="#ffffff" />
      <text
        x="160"
        y="58"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="22"
        fill="#1f6feb"
      >
        Welcome to KCP
      </text>
      <Person x={160} y={204} scale={1.9} shirt="#e9f3fc" hair="#1f2a44">
        {/* left arm and book */}
        <path d="M-22 -20L-38 -12" stroke="#f2c29b" strokeWidth="8" strokeLinecap="round" />
        <g className="anim-float-slow">
          <rect x="-54" y="-30" width="22" height="28" rx="3" fill="#2a78c2" />
          <rect x="-51" y="-27" width="3" height="22" fill="#ffffff" opacity="0.6" />
        </g>
        {/* right arm and flask */}
        <path d="M22 -20L38 -12" stroke="#f2c29b" strokeWidth="8" strokeLinecap="round" />
        <path
          d="M36 -36H44V-26L53 -6Q55 0 49 0H31Q25 0 27 -6L36 -26Z"
          fill="#ffffff"
          fillOpacity="0.75"
          stroke="#4aa8f0"
          strokeWidth="1.6"
        />
        <path d="M32 -12L28.5 -4Q27 -1 31 -1H49Q53 -1 51.5 -4L48 -12Z" fill="#27a463" />
        <circle className="anim-twinkle" cx="38" cy="-6" r="1.8" fill="#ffffff" />
        <circle
          className="anim-twinkle"
          style={{ animationDelay: "0.9s" }}
          cx="44"
          cy="-4"
          r="1.4"
          fill="#ffffff"
        />
      </Person>
      <Sparkle x={54} y={84} />
      <Sparkle x={270} y={96} delay={1} />
    </>
  );
}

function Material() {
  return (
    <>
      {/* desk */}
      <rect x="20" y="196" width="280" height="10" rx="5" fill="#b88a5a" />
      {/* book stack */}
      <rect x="38" y="172" width="128" height="22" rx="3" fill="#e4570e" />
      <rect x="46" y="150" width="112" height="22" rx="3" fill="#2a78c2" />
      <rect x="38" y="128" width="128" height="22" rx="3" fill="#1aa14a" />
      <rect x="46" y="176" width="100" height="3" fill="#ffffff" opacity="0.6" />
      <rect x="54" y="154" width="84" height="3" fill="#ffffff" opacity="0.6" />
      <g className="anim-float">
        <rect x="52" y="104" width="100" height="22" rx="3" fill="#ffc20e" />
        <rect x="60" y="108" width="70" height="3" fill="#ffffff" opacity="0.7" />
      </g>
      {/* open notebook */}
      <path d="M184 196L200 150H254L240 196Z" fill="#ffffff" stroke="#c9d8e6" strokeWidth="1.5" />
      <path d="M240 196L254 150H292L286 196Z" fill="#f4f9ff" stroke="#c9d8e6" strokeWidth="1.5" />
      <path d="M204 162H248M200 172H244M196 182H240" stroke="#bcd3ea" strokeWidth="2" strokeLinecap="round" />
      <path d="M262 164H286M260 174H282" stroke="#bcd3ea" strokeWidth="2" strokeLinecap="round" />
      {/* pencil */}
      <g transform="rotate(-24 262 120)">
        <rect x="236" y="116" width="52" height="9" rx="2" fill="#ffc20e" />
        <path d="M288 116L300 120.5L288 125Z" fill="#f2c29b" />
        <rect x="230" y="116" width="8" height="9" rx="2" fill="#e4570e" />
      </g>
      {/* idea bulb */}
      <g className="anim-float-slow">
        <circle cx="222" cy="64" r="22" fill="#ffe27a" />
        <path d="M214 90H230V98Q230 102 222 102Q214 102 214 98Z" fill="#8a97a6" />
        <path d="M216 64Q222 54 228 64" fill="none" stroke="#e4570e" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <Sparkle x={196} y={36} />
      <Sparkle x={256} y={44} delay={0.8} />
      <Sparkle x={36} y={90} delay={1.4} />
    </>
  );
}

function Classes() {
  const students = [
    { x: 150, delay: "0s" },
    { x: 212, delay: "0.5s" },
    { x: 274, delay: "1s" },
  ];
  return (
    <>
      {/* board */}
      <rect x="104" y="22" width="196" height="112" rx="8" fill="#ffffff" stroke="#3b4a5e" strokeWidth="4" />
      <text
        x="140"
        y="68"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="26"
        fill="#1f6feb"
      >
        F = m·a
      </text>
      <path d="M228 108Q246 40 280 52" fill="none" stroke="#e4570e" strokeWidth="3" strokeLinecap="round" />
      <path d="M126 112H214" stroke="#bcd3ea" strokeWidth="3" strokeLinecap="round" />
      {/* teacher */}
      <Person x={58} y={206} scale={1.5} shirt="#1f2a44" tie="#ffc20e" hair="#2b2a3a">
        <path d="M22 -22L58 -52" stroke="#f2c29b" strokeWidth="8" strokeLinecap="round" />
        <path d="M58 -52L84 -88" stroke="#8a6a3b" strokeWidth="3" strokeLinecap="round" />
      </Person>
      {/* students with raised hands */}
      {students.map((student, i) => (
        <g key={student.x}>
          <Person
            x={student.x}
            y={216}
            scale={0.88}
            shirt={i === 1 ? "#ffffff" : "#e9f3fc"}
            hair={i === 1 ? "#2b2a3a" : "#1f2a44"}
            tie={i === 1 ? "#1aa14a" : "#1f2a44"}
          >
            <g className="anim-wave" style={{ animationDelay: student.delay }}>
              <rect x="14" y="-66" width="8" height="46" rx="4" fill="#f2c29b" />
              <circle cx="18" cy="-68" r="6" fill="#f2c29b" />
            </g>
          </Person>
          <rect x={student.x - 30} y="198" width="60" height="16" rx="4" fill="#b88a5a" />
        </g>
      ))}
    </>
  );
}

function Tests() {
  const rows = [0, 1, 2, 3];
  return (
    <>
      {/* clock */}
      <circle cx="50" cy="78" r="28" fill="#ffffff" stroke="#3b4a5e" strokeWidth="4" />
      <path d="M50 78V62" stroke="#3b4a5e" strokeWidth="3" strokeLinecap="round" />
      <g className="anim-tick" style={{ transformOrigin: "50px 78px" }}>
        <path d="M50 78V56" stroke="#e4570e" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="50" cy="78" r="3" fill="#3b4a5e" />
      {/* answer sheet */}
      <rect x="96" y="16" width="132" height="200" rx="10" fill="#ffffff" stroke="#c9d8e6" strokeWidth="2" />
      <rect x="110" y="30" width="64" height="9" rx="4.5" fill="#1f6feb" />
      {rows.map((row) => {
        const y = 58 + row * 38;
        return (
          <g key={row}>
            <path
              className="anim-draw"
              style={{ animationDelay: `${row * 0.5}s` }}
              d={`M110 ${y + 6}L117 ${y + 13}L129 ${y - 2}`}
              fill="none"
              stroke="#1aa14a"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="142" y={y} width="72" height="6" rx="3" fill="#bcd3ea" />
            <rect x="142" y={y + 12} width="48" height="6" rx="3" fill="#dce9f6" />
          </g>
        );
      })}
      {/* progress bars */}
      <rect className="anim-grow" x="244" y="140" width="16" height="64" rx="3" fill="#4aa8f0" />
      <rect
        className="anim-grow"
        style={{ animationDelay: "0.4s" }}
        x="266"
        y="110"
        width="16"
        height="94"
        rx="3"
        fill="#1f6feb"
      />
      <rect
        className="anim-grow"
        style={{ animationDelay: "0.8s" }}
        x="288"
        y="76"
        width="16"
        height="128"
        rx="3"
        fill="#ffc20e"
      />
      <path d="M236 206H310" stroke="#3b4a5e" strokeWidth="3" strokeLinecap="round" />
      {/* star badge */}
      <path
        className="anim-pulse"
        d="M268 22L274 36L289 37L277.500 47L281 62L268 54L255 62L258.500 47L247 37L262 36Z"
        fill="#ffc20e"
        stroke="#d89b12"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Sparkle x={36} y={170} delay={0.6} />
    </>
  );
}

const confetti = [
  { x: 24, c: "#ffc20e", d: "0s", t: "4.2s" },
  { x: 52, c: "#e4570e", d: "1.1s", t: "3.6s" },
  { x: 80, c: "#4aa8f0", d: "2.2s", t: "4.6s" },
  { x: 108, c: "#1aa14a", d: "0.5s", t: "3.9s" },
  { x: 136, c: "#ffc20e", d: "1.8s", t: "4.4s" },
  { x: 164, c: "#ffffff", d: "2.8s", t: "3.8s" },
  { x: 192, c: "#e4570e", d: "0.2s", t: "4.1s" },
  { x: 220, c: "#4aa8f0", d: "1.4s", t: "4.7s" },
  { x: 248, c: "#1aa14a", d: "2.5s", t: "3.7s" },
  { x: 276, c: "#ffc20e", d: "0.9s", t: "4.3s" },
  { x: 300, c: "#e4570e", d: "2s", t: "4s" },
];

function Results() {
  return (
    <>
      {confetti.map((piece) => (
        <rect
          key={piece.x}
          className="anim-fall"
          style={{ animationDelay: piece.d, animationDuration: piece.t }}
          x={piece.x}
          y="0"
          width="8"
          height="12"
          rx="1.5"
          fill={piece.c}
        />
      ))}
      <g className="anim-float">
        <path
          d="M116 128H92C86 128 80 122 80 114C80 102 88 94 100 94H116"
          fill="none"
          stroke="#d89b12"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M204 128H228C234 128 240 122 240 114C240 102 232 94 220 94H204"
          fill="none"
          stroke="#d89b12"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M110 44H210V96C210 124 188 142 160 142S110 124 110 96Z"
          fill="#ffc20e"
          stroke="#d89b12"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M124 54V94C124 112 134 126 148 132" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M160 66L167 81L183 83L171 94L174.500 110L160 102L145.500 110L149 94L137 83L153 81Z"
          fill="#ffffff"
          stroke="#d89b12"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="150" y="142" width="20" height="30" fill="#d89b12" />
        <rect x="126" y="170" width="68" height="16" rx="5" fill="#e4570e" />
      </g>
      <rect x="112" y="186" width="96" height="16" rx="6" fill="#04284a" />
      <Sparkle x={60} y={60} />
      <Sparkle x={262} y={78} delay={0.9} />
      <Sparkle x={250} y={176} delay={1.5} />
    </>
  );
}

const scenes: Record<JourneyScene, () => ReactNode> = {
  welcome: Welcome,
  material: Material,
  classes: Classes,
  tests: Tests,
  results: Results,
};

export function JourneyArt({ scene }: { scene: JourneyScene }) {
  const Scene = scenes[scene];
  return (
    <svg viewBox="0 0 320 240" role="presentation" aria-hidden="true" className="h-full w-full">
      <Scene />
    </svg>
  );
}
