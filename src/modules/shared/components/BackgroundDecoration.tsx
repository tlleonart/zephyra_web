export const BackgroundDecoration = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bg-pattern"
            x="0"
            y="0"
            width="1920"
            height="1080"
            patternUnits="userSpaceOnUse"
          >
            {/* Línea curva 1 */}
            <path
              d="M-100,300 C200,250 400,450 700,400 C1000,350 1300,500 1600,450 C1900,400 2100,300 2400,350"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="3"
              strokeOpacity="0.2"
            />

            {/* Línea curva 2 */}
            <path
              d="M-100,600 C200,550 500,700 800,650 C1100,600 1400,750 1700,700 C2000,650 2200,550 2500,600"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="3"
              strokeOpacity="0.15"
            />

            {/* Línea curva 3 */}
            <path
              d="M-200,900 C100,850 400,1000 700,950 C1000,900 1300,1050 1600,1000 C1900,950 2100,850 2400,900"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="4"
              strokeOpacity="0.12"
            />

            {/* Línea curva 4 */}
            <path
              d="M-150,150 C150,100 450,250 750,200 C1050,150 1350,300 1650,250 C1950,200 2150,100 2450,150"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="2.5"
              strokeOpacity="0.18"
            />

            {/* Círculos decorativos */}
            <circle cx="300" cy="200" r="8" fill="#5CBFBF" fillOpacity="0.15" />
            <circle
              cx="1200"
              cy="400"
              r="12"
              fill="#5CBFBF"
              fillOpacity="0.15"
            />
            <circle
              cx="800"
              cy="800"
              r="10"
              fill="#5CBFBF"
              fillOpacity="0.15"
            />
            <circle
              cx="1600"
              cy="600"
              r="15"
              fill="#5CBFBF"
              fillOpacity="0.15"
            />
            <circle cx="400" cy="700" r="7" fill="#5CBFBF" fillOpacity="0.15" />

            {/* Líneas curvas adicionales */}
            <path
              d="M200,100 C300,150 400,50 500,100 C600,150 700,50 800,100"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="2"
              strokeOpacity="0.15"
            />

            <path
              d="M1200,800 C1300,850 1400,750 1500,800 C1600,850 1700,750 1800,800"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="2"
              strokeOpacity="0.15"
            />

            {/* Líneas adicionales para mayor visibilidad */}
            <path
              d="M0,400 C100,450 200,350 300,400 C400,450 500,350 600,400 C700,450 800,350 900,400"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="2.5"
              strokeOpacity="0.2"
            />

            <path
              d="M1000,200 C1100,250 1200,150 1300,200 C1400,250 1500,150 1600,200"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="2.5"
              strokeOpacity="0.2"
            />

            <path
              d="M100,1000 C200,950 300,1050 400,1000 C500,950 600,1050 700,1000"
              fill="none"
              stroke="#5CBFBF"
              strokeWidth="3"
              strokeOpacity="0.18"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-pattern)" />
      </svg>
    </div>
  );
};
