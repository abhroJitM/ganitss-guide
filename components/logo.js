export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path fill="#1E1E1E" d="M0 0H48V48H0z"></path>
      <circle cx="24" cy="24" r="24" fill="#000"></circle>
      <path fill="url(#paint0_angular_0_1)" d="M10 10H38V38H10z"></path>
      <path fill="#000" d="M17 17H20V38H17z"></path>
      <path
        fill="#000"
        d="M9 10.414H11V22.414H9z"
        transform="rotate(-45 9 10.414)"
      ></path>
      <path fill="#000" d="M18 17H30V20H18z"></path>
      <path fill="#000" d="M28 17H31V38H28z"></path>
      <path
        fill="#000"
        d="M30.414 18.899H32.414V30.899H30.414z"
        transform="rotate(-135 30.414 18.9)"
      ></path>
      <defs>
        <radialGradient
          id="paint0_angular_0_1"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(55.62 -8.735 28.235) scale(11.5109 12.23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.531" stopColor="#E29DE3"></stop>
          <stop offset="1" stopColor="#89CEC2"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

