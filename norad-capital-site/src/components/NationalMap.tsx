export default function NationalMap() {
  return (
    <svg
      viewBox="0 0 100 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md lg:max-w-lg"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <pattern id="map-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.4" fill="#C8A45D" opacity="0.12" />
        </pattern>
      </defs>

      <path
        d="M 30,20 L 40,14 L 50,11 L 58,11 L 66,14 L 72,18 L 78,23 L 84,28 L 90,33 L 92,38 L 91,42 L 88,46 L 84,50 L 80,54 L 76,58 L 72,62 L 70,66 L 68,70 L 64,74 L 60,78 L 56,82 L 52,80 L 48,76 L 44,72 L 42,68 L 44,64 L 46,60 L 44,56 L 42,50 L 40,44 L 38,38 L 36,32 L 34,26 Z"
        fill="url(#map-grid)"
        stroke="#C8A45D"
        strokeWidth="0.9"
        vectorEffect="non-scaling-stroke"
        opacity="0.5"
      />

      <circle cx="70" cy="65" r="3.5" fill="#C8A45D" opacity="0.7" />
      <circle cx="70" cy="65" r="6" fill="#C8A45D" opacity="0.08" />

      <circle cx="92" cy="38" r="1.2" fill="#C8A45D" opacity="0.3" />
      <circle cx="80" cy="50" r="1.2" fill="#C8A45D" opacity="0.3" />
      <circle cx="54" cy="50" r="1.2" fill="#C8A45D" opacity="0.3" />
      <circle cx="48" cy="16" r="1.2" fill="#C8A45D" opacity="0.3" />
      <circle cx="64" cy="74" r="1.2" fill="#C8A45D" opacity="0.3" />

      <line
        x1="70" y1="65" x2="44" y2="12"
        stroke="#C8A45D" strokeWidth="0.35" vectorEffect="non-scaling-stroke" opacity="0.2"
      />
      <line
        x1="70" y1="65" x2="92" y2="38"
        stroke="#C8A45D" strokeWidth="0.35" vectorEffect="non-scaling-stroke" opacity="0.2"
      />
      <line
        x1="70" y1="65" x2="56" y2="82"
        stroke="#C8A45D" strokeWidth="0.35" vectorEffect="non-scaling-stroke" opacity="0.2"
      />
      <line
        x1="70" y1="65" x2="34" y2="30"
        stroke="#C8A45D" strokeWidth="0.35" vectorEffect="non-scaling-stroke" opacity="0.2"
      />
    </svg>
  )
}
