const Test = () => {
  return (
    <svg
      width={432}
      height={150}
      viewBox="0 0 430 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="highlighted-card-border-side"
    >
      <g filter="url(#highlighted-card-filter_0)">
        <path
          d="M429.314 20.044L429.314 2.47362L217.189 125.052C216.493 125.454 215.635 125.45 214.943 125.042L4.35855 0.978772C2.87338 0.103801 0.999817 1.17456 0.999817 2.8983V20.0969C0.999817 20.8957 1.42746 21.6333 2.12067 22.0303L211.615 141.983C214.369 143.56 217.754 143.554 220.501 141.966L428.201 21.9731C428.89 21.5751 429.314 20.8398 429.314 20.044Z"
          fill="url(#highlighted-card-gradient_0)"
          fillOpacity="0.9"
        />
        <path
          d="M429.314 20.044L429.314 2.47362L217.189 125.052C216.493 125.454 215.635 125.45 214.943 125.042L4.35855 0.978772C2.87338 0.103801 0.999817 1.17456 0.999817 2.8983V20.0969C0.999817 20.8957 1.42746 21.6333 2.12067 22.0303L211.615 141.983C214.369 143.56 217.754 143.554 220.501 141.966L428.201 21.9731C428.89 21.5751 429.314 20.8398 429.314 20.044Z"
          stroke="white"
          strokeWidth="0.556972"
        />
      </g>
      <defs>
        <filter
          id="highlighted-card-filter_0"
          x="-1.50718"
          y="-1.8397"
          width="433.329"
          height="147.508"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.11394" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4013_10881"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4013_10881"
            result="shape"
          />
        </filter>
        <linearGradient
          id="highlighted-card-gradient_0"
          x1="429.314"
          y1="21.5877"
          x2="0.999805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#141280" />
          <stop offset="0.21875" stopColor="#FFFCFE" />
          <stop offset="0.375" stopColor="#7B3DC9" />
          <stop offset="0.71875" stopColor="white" />
          <stop offset={1} stopColor="#3D43C9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Test;
