// Airport mobile app screens — original design inspired by user's references
// Russian copy, blue/indigo palette, iOS-style cards with soft shadows.

const C = {
  bg: '#F4F5FA',
  card: '#FFFFFF',
  ink: '#0F1B3D',
  ink2: '#5B6588',
  ink3: '#9AA1B8',
  line: '#ECEEF6',
  brand: '#3B47C8',         // deep indigo
  brand2: '#5C6BE0',
  brandSoft: '#EEF0FB',
  brandInk: '#2A2F7A',
  accent: '#F5B544',         // gold accent (compass)
  good: '#1FB67A',
  goodSoft: '#E1F6EC',
  warn: '#F08A2C',
  warnSoft: '#FFEFD9',
  iconBg: '#EEF0FB',
};

// ─── Tiny line icons (1.6px stroke, rounded) ──────────────────
const Icon = ({ d, size = 22, color = C.brand, fill = 'none', stroke = 1.7, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const IconHome     = (p) => <Icon {...p} d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5"/>;
const IconGrid     = (p) => <Icon {...p}><rect x="4" y="4" width="6.5" height="6.5" rx="1.4"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4"/></Icon>;
const IconCompass  = (p) => <Icon {...p}><circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5.5-5.5 2 2-5.5z"/></Icon>;
const IconChat     = (p) => <Icon {...p} d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4 3.5v-3.5h-.5A1.5 1.5 0 0 1 4 15.5z"/>;
const IconUser     = (p) => <Icon {...p}><circle cx="12" cy="8" r="3.6"/><path d="M5 20c1.2-3.4 4-5 7-5s5.8 1.6 7 5"/></Icon>;
const IconBell     = (p) => <Icon {...p} d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2H4.5zM10 19a2 2 0 0 0 4 0"/>;
const IconArrow    = (p) => <Icon {...p} d="M9 6l6 6-6 6"/>;
const IconPlane    = (p) => <Icon {...p} d="M2 13l8-1.5L13 4l2 .5-1 7 7 1.5v2l-7 .5-2 6h-2l1-6.5-4 .5L5 17H3z" fill="currentColor" stroke="none"/>;
const IconBolt     = (p) => <Icon {...p} d="M13 3 5 14h6l-1 7 8-11h-6z" fill="currentColor" stroke="none"/>;
const IconCrown    = (p) => <Icon {...p} d="M4 17h16M4 17 3 7l5 4 4-7 4 7 5-4-1 10"/>;
const IconCar      = (p) => <Icon {...p} d="M4 16v-3l2.5-5h11L20 13v3M4 16h16M4 16v2h2v-2M18 16v2h2v-2M7 13h10"/>;
const IconLounge   = (p) => <Icon {...p} d="M4 18h16M6 18v-3a6 6 0 0 1 12 0v3M9 9V7a3 3 0 0 1 6 0v2"/>;
const IconBed      = (p) => <Icon {...p} d="M3 18V8m0 5h18v5M21 13v-3a2 2 0 0 0-2-2h-7v5M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>;
const IconBag      = (p) => <Icon {...p}><rect x="5" y="8" width="14" height="12" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2M9 12v4M15 12v4"/></Icon>;
const IconMap      = (p) => <Icon {...p} d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20zM9 4v13.5M15 6.5V20"/>;
const IconPhone    = (p) => <Icon {...p} d="M5.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 3.5 6.5a2 2 0 0 1 2-2z"/>;
const IconBack     = (p) => <Icon {...p} d="M15 6l-6 6 6 6"/>;
const IconMore     = (p) => <Icon {...p}><circle cx="6" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="18" cy="12" r="1.4" fill="currentColor"/></Icon>;
const IconShare    = (p) => <Icon {...p}><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="m8 11 8-4M8 13l8 4"/></Icon>;
const IconPin      = (p) => <Icon {...p} d="M9 4h6l-1 5 3 3-2 2-3-1v6l-1.5 1.5L9 19v-6l-3 1-2-2 3-3z"/>;
const IconSun      = (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></Icon>;
const IconGlobe    = (p) => <Icon {...p}><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 2.5 14 0 17M12 3.5C9.5 6 9.5 18 12 20.5"/></Icon>;
const IconID       = (p) => <Icon {...p}><rect x="4" y="4" width="16" height="16" rx="2.5"/><circle cx="12" cy="10.5" r="2.4"/><path d="M7.5 17c1-2 3-3 4.5-3s3.5 1 4.5 3"/></Icon>;
const IconTicket   = (p) => <Icon {...p} d="M3 9V7h18v2a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4zM12 7v12"/>;

// Let's Trip icons
const IconTakeoff  = (p) => <Icon {...p} d="M3 18h18M3 14l16-5 1 2-12 5-3-1zM7 14l-2 2-1.5-.5L5 13z"/>;
const IconLanding  = (p) => <Icon {...p} d="M3 18h18M21 14 4 9l.5-2 13 3 2.5 2zM5.5 8 4 6.5 5 5.5l2 .5z"/>;
const IconHouse    = (p) => <Icon {...p} d="M4 11 12 5l8 6v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" fill="currentColor" stroke="none"/>;
const IconAirplane = (p) => <Icon {...p} d="M21 14l-7-1.5L9 21l-2-.5 1.5-7L3 12V10l5.5 1L13 4l2 1-2 7 8-1z" fill="currentColor" stroke="none"/>;
const IconHotelBed = (p) => <Icon {...p} d="M3 18V8m0 5h18v5M21 13v-3a2 2 0 0 0-2-2h-7v5M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" stroke="none"/>;
const IconSim      = (p) => <Icon {...p}><path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" fill="currentColor" stroke="none"/><circle cx="12" cy="13" r="2.5" fill="#fff"/></Icon>;
const IconFlag     = (p) => <Icon {...p} d="M5 3v18M5 4h12l-2 4 2 4H5" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>;
const IconCal      = (p) => <Icon {...p}><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></Icon>;
const IconPerson   = (p) => <Icon {...p} fill="currentColor" stroke="none" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1.2-3.4 4-5 8-5s6.8 1.6 8 5z"/>;

// ─── Figma SVG icons (gradient blue, exact from designs) ──────
const FigGrad = ({ id, x1=0, y1=0, x2=24, y2=0 }) => (
  <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
    <stop stopColor="#41668B"/><stop offset="1" stopColor="#A5BDD5"/>
  </linearGradient>
);

const FigHotel = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20.25 10.814C19.7772 10.6065 19.2664 10.4995 18.75 10.5H5.25C4.25576 10.5011 3.30255 10.8965 2.59952 11.5995C1.89649 12.3026 1.50106 13.2558 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00129 19.0259 3.04122 18.9313 3.11127 18.8613C3.18131 18.7912 3.27595 18.7513 3.375 18.75H20.625C20.7241 18.7513 20.8187 18.7912 20.8887 18.8613C20.9588 18.9313 20.9987 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8072 21.8866 12.197C21.487 11.5868 20.9183 11.1062 20.25 10.814Z" fill="url(#fg_hotel_a)"/>
    <path d="M17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51885 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.7499 9.77914 3.75661 9.80791 3.76959 9.834C3.78258 9.86009 3.80149 9.88278 3.8248 9.90027C3.84811 9.91775 3.87519 9.92955 3.90388 9.93471C3.93256 9.93987 3.96205 9.93826 3.99 9.93C4.399 9.81 4.823 9.75 5.25 9.75H5.448C5.49427 9.75032 5.53904 9.73356 5.57373 9.70293C5.60841 9.6723 5.63059 9.62996 5.636 9.584C5.67681 9.21749 5.85121 8.87886 6.12587 8.63278C6.40054 8.38671 6.75623 8.25044 7.125 8.25H9.75C10.1189 8.25019 10.4749 8.38635 10.7498 8.63245C11.0246 8.87855 11.1992 9.21732 11.24 9.584C11.2454 9.62996 11.2676 9.6723 11.3023 9.70293C11.337 9.73356 11.3817 9.75032 11.428 9.75H12.575C12.6212 9.75029 12.6658 9.7335 12.7003 9.70285C12.7349 9.6722 12.7568 9.62987 12.762 9.584C12.8028 9.21766 12.977 8.87917 13.2515 8.63312C13.526 8.38707 13.8814 8.25068 14.25 8.25H16.875C17.2439 8.25019 17.5999 8.38635 17.8748 8.63245C18.1496 8.87855 18.3242 9.21732 18.365 9.584C18.3704 9.62996 18.3926 9.6723 18.4273 9.70293C18.462 9.73356 18.5067 9.75032 18.553 9.75H18.75C19.177 9.75 19.601 9.81 20.01 9.93C20.0379 9.93804 20.0674 9.93949 20.096 9.93424C20.1246 9.92899 20.1515 9.91718 20.1748 9.89973C20.1981 9.88229 20.217 9.85969 20.23 9.83371C20.2431 9.80773 20.2499 9.77907 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="url(#fg_hotel_b)"/>
    <defs><FigGrad id="fg_hotel_a"/><FigGrad id="fg_hotel_b"/></defs>
  </svg>
);

const FigTours = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.34388 3.71877C6.21098 2.43283 8.40417 1.7021 10.6694 1.61121C12.9347 1.52032 15.1794 2.07299 17.1435 3.20521C19.1077 4.33744 20.7109 6.00289 21.7675 8.0087C22.8241 10.0145 23.2909 12.2786 23.1139 14.5388C23.108 14.6541 23.0785 14.7834 23.0722 14.8043C22.5513 15.7514 18.3542 14.2627 13.477 11.5369L10.9179 16.0004H8.5974L11.7554 10.5387C7.00747 7.68184 3.68538 4.78276 4.19388 3.87877C4.23475 3.81756 4.28543 3.7635 4.34388 3.71877ZM13.5039 9.52877C14.9432 10.3718 16.4289 11.133 17.9539 11.8088C18.8239 8.50877 18.4839 5.29877 16.5739 4.19877C14.6639 3.09877 11.7139 4.40877 9.29388 6.80877C10.6485 7.78865 12.0538 8.69658 13.5039 9.52877ZM5 12.9984L8 16.9984H17C17.5304 16.9984 18.0391 17.2092 18.4142 17.5842C18.7893 17.9593 19 18.468 19 18.9984V21.9984H17L15 19.9984H6L4 21.9984H2L4 18.6284L0 12.9984H5Z" fill="url(#fg_tours)"/>
    <defs><FigGrad id="fg_tours"/></defs>
  </svg>
);

const FigVillas = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4.79961 20.3998V11.9748L3.19961 13.1998L2.09961 11.7498L4.79961 9.6998V6.5998H6.59961V8.3248L11.9996 4.1998L21.8996 11.7498L20.7996 13.1998L19.1996 11.9748V20.3998H12.8996V14.9998H11.0996V20.3998H4.79961ZM4.79961 5.3998C4.79961 4.5998 5.04961 3.9498 5.54961 3.4498C6.04961 2.9498 6.69961 2.6998 7.49961 2.6998C7.78294 2.6998 8.00378 2.62064 8.16211 2.4623C8.32044 2.30397 8.39961 2.08314 8.39961 1.7998H10.1996C10.1996 2.5998 9.94961 3.2498 9.44961 3.7498C8.94961 4.2498 8.29961 4.4998 7.49961 4.4998C7.21628 4.4998 6.99544 4.57897 6.83711 4.7373C6.67878 4.89564 6.59961 5.11647 6.59961 5.3998H4.79961Z" fill="url(#fg_villas)"/>
    <defs><FigGrad id="fg_villas"/></defs>
  </svg>
);

const FigFlight = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3.414 13.7801L2 15.1941L6.949 17.3151L9.071 22.2651L10.485 20.8511L9.778 17.3151L13.091 14.0021L16.701 21.7061L18.04 20.3671L16.85 10.2441L19.678 7.41514C19.869 7.23065 20.0214 7.00996 20.1262 6.76595C20.231 6.52194 20.2862 6.2595 20.2885 5.99394C20.2908 5.72838 20.2402 5.46502 20.1396 5.21923C20.0391 4.97344 19.8906 4.75013 19.7028 4.56235C19.515 4.37456 19.2917 4.22606 19.0459 4.1255C18.8001 4.02493 18.5368 3.97433 18.2712 3.97664C18.0056 3.97895 17.7432 4.03412 17.4992 4.13894C17.2552 4.24375 17.0345 4.39612 16.85 4.58714L13.947 7.49014L3.824 6.30014L2.559 7.56414L10.203 11.2341L6.95 14.4871L3.414 13.7801Z" fill="url(#fg_flight)"/>
    <defs><FigGrad id="fg_flight"/></defs>
  </svg>
);

const FigEsim = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.707 2.879C9.26948 2.31635 10.0324 2.00017 10.828 2H17C17.7957 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H6.998C6.60413 22 6.21412 21.9224 5.85025 21.7716C5.48639 21.6208 5.1558 21.3998 4.87739 21.1212C4.59897 20.8426 4.37818 20.5119 4.22764 20.1479C4.07709 19.7839 3.99974 19.3939 4 19V8.828C4.00044 8.03276 4.3166 7.27023 4.879 6.708L8.707 2.879ZM14 18C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12H10C9.46957 12 8.96086 12.2107 8.58579 12.5858C8.21071 12.9609 8 13.4696 8 14V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H14Z" fill="url(#fg_esim)"/>
    <defs><FigGrad id="fg_esim"/></defs>
  </svg>
);

const FigExcursions = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C3.19891 2.25 3.38968 2.32902 3.53033 2.46967C3.67098 2.61032 3.75 2.80109 3.75 3V3.54L5.588 3.08C7.8459 2.51546 10.2313 2.77723 12.313 3.818L12.421 3.872C14.1472 4.7352 16.1213 4.96592 18 4.524L21.11 3.792C21.2266 3.76464 21.3481 3.76563 21.4643 3.79487C21.5805 3.82411 21.688 3.88076 21.7778 3.96008C21.8676 4.03939 21.9371 4.13906 21.9804 4.25074C22.0238 4.36243 22.0398 4.48288 22.027 4.602C21.6549 8.03771 21.6565 11.5037 22.032 14.939C22.052 15.1211 22.0047 15.3042 21.8989 15.4538C21.7932 15.6034 21.6363 15.7091 21.458 15.751L18.344 16.484C16.1236 17.0066 13.7903 16.7341 11.75 15.714L11.642 15.66C9.88071 14.7793 7.86247 14.5576 5.952 15.035L3.75 15.585V21C3.75 21.1989 3.67098 21.3897 3.53033 21.5303C3.38968 21.671 3.19891 21.75 3 21.75C2.80109 21.75 2.61032 21.671 2.46967 21.5303C2.32902 21.3897 2.25 21.1989 2.25 21V3C2.25 2.90151 2.2694 2.80398 2.30709 2.71299C2.34478 2.62199 2.40003 2.53931 2.46967 2.46967C2.53931 2.40003 2.62199 2.34478 2.71299 2.30709C2.80398 2.2694 2.90151 2.25 3 2.25Z" fill="url(#fg_excur)"/>
    <defs><FigGrad id="fg_excur"/></defs>
  </svg>
);

// Trip-screen exact icons from Figma
const FigTakeoff = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <g opacity="0.72">
      <path d="M6.202 17.9998C5.049 17.9998 3.898 17.6468 2.924 16.9538L0.849 15.4778C0.401 15.1598 0.099 14.6658 0.021 14.1248C-0.053 13.6158 0.075 13.1208 0.382 12.7288C0.9 12.0668 1.771 11.8138 2.551 12.0988L5.798 13.2908L20.453 6.22978C21.705 5.65078 23.19 6.19978 23.768 7.44978C24.346 8.69778 23.806 10.1948 22.565 10.7878L8.616 17.4548C7.851 17.8198 7.027 17.9998 6.202 17.9998ZM24 22.9998C24 22.4468 23.552 21.9998 23 21.9998H1C0.448 21.9998 0 22.4468 0 22.9998C0 23.5528 0.448 23.9998 1 23.9998H23C23.552 23.9998 24 23.5528 24 22.9998ZM8.614 9.71478L14.033 7.10378L8.184 3.49178C7.45 2.94678 6.477 2.84678 5.642 3.23178L4.861 3.59878C4.403 3.81378 4.087 4.24178 4.015 4.74278C3.943 5.24478 4.126 5.74378 4.505 6.07978L8.613 9.71578L8.614 9.71478Z" fill="url(#fg_takeoff)"/>
    </g>
    <defs><FigGrad id="fg_takeoff"/></defs>
  </svg>
);

const FigLanding = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <g opacity="0.72">
      <path d="M24 24H0V22H24V24ZM21.797 17.573C22.348 16.313 21.775 14.841 20.519 14.285L6.931 7.441L5.669 4.212C5.483 3.737 5.124 3.364 4.658 3.162C4.031 2.887 3.323 2.964 2.771 3.37C2.216 3.776 1.929 4.425 2.002 5.108L2.631 10.998L20.786 19.879L21.796 17.573H21.797ZM16.352 9.959L15.377 3.32C15.298 2.408 14.728 1.613 13.887 1.245L11.001 0V7.263L16.352 9.959Z" fill="url(#fg_landing)"/>
    </g>
    <defs><FigGrad id="fg_landing"/></defs>
  </svg>
);

const FigCalendar = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <g opacity="0.72">
      <path d="M0 14.25C0.00119089 15.2442 0.396661 16.1973 1.09966 16.9003C1.80267 17.6033 2.7558 17.9988 3.75 18H14.25C15.2442 17.9988 16.1973 17.6033 16.9003 16.9003C17.6033 16.1973 17.9988 15.2442 18 14.25V7.5H0V14.25ZM12.75 10.875C12.9725 10.875 13.19 10.941 13.375 11.0646C13.56 11.1882 13.7042 11.3639 13.7894 11.5695C13.8745 11.775 13.8968 12.0012 13.8534 12.2195C13.81 12.4377 13.7028 12.6382 13.5455 12.7955C13.3882 12.9528 13.1877 13.06 12.9695 13.1034C12.7512 13.1468 12.525 13.1245 12.3195 13.0394C12.1139 12.9542 11.9382 12.81 11.8146 12.625C11.691 12.44 11.625 12.2225 11.625 12C11.625 11.7016 11.7435 11.4155 11.9545 11.2045C12.1655 10.9935 12.4516 10.875 12.75 10.875ZM9 10.875C9.2225 10.875 9.44001 10.941 9.62502 11.0646C9.81002 11.1882 9.95422 11.3639 10.0394 11.5695C10.1245 11.775 10.1468 12.0012 10.1034 12.2195C10.06 12.4377 9.95283 12.6382 9.7955 12.7955C9.63816 12.9528 9.43771 13.06 9.21948 13.1034C9.00125 13.1468 8.77505 13.1245 8.56948 13.0394C8.36391 12.9542 8.18821 12.81 8.0646 12.625C7.94098 12.44 7.875 12.2225 7.875 12C7.875 11.7016 7.99353 11.4155 8.2045 11.2045C8.41548 10.9935 8.70163 10.875 9 10.875ZM5.25 10.875C5.4725 10.875 5.69001 10.941 5.87502 11.0646C6.06002 11.1882 6.20422 11.3639 6.28936 11.5695C6.37451 11.775 6.39679 12.0012 6.35338 12.2195C6.30998 12.4377 6.20283 12.6382 6.0455 12.7955C5.88816 12.9528 5.68771 13.06 5.46948 13.1034C5.25125 13.1468 5.02505 13.1245 4.81948 13.0394C4.61391 12.9542 4.43821 12.81 4.3146 12.625C4.19098 12.44 4.125 12.2225 4.125 12C4.125 11.7016 4.24353 11.4155 4.4545 11.2045C4.66548 10.9935 4.95163 10.875 5.25 10.875Z" fill="url(#fg_cal_a)"/>
      <path d="M14.25 1.5H13.5V0.75C13.5 0.551088 13.421 0.360322 13.2803 0.21967C13.1397 0.0790176 12.9489 0 12.75 0C12.5511 0 12.3603 0.0790176 12.2197 0.21967C12.079 0.360322 12 0.551088 12 0.75V1.5H6V0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3.75C2.7558 1.50119 1.80267 1.89666 1.09966 2.59966C0.396661 3.30267 0.00119089 4.2558 0 5.25L0 6H18V5.25C17.9988 4.2558 17.6033 3.30267 16.9003 2.59966C16.1973 1.89666 15.2442 1.50119 14.25 1.5Z" fill="url(#fg_cal_b)"/>
    </g>
    <defs><FigGrad id="fg_cal_a" x2={18}/><FigGrad id="fg_cal_b" x2={18}/></defs>
  </svg>
);

const FigPersonAdult = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <g opacity="0.72">
      <path d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5C13.5 2.01472 11.4853 0 9 0C6.51472 0 4.5 2.01472 4.5 4.5C4.5 6.98528 6.51472 9 9 9Z" fill="url(#fg_per_a)"/>
      <path d="M9 10.5C5.27379 10.5041 2.25415 13.5238 2.25 17.25C2.25 17.6642 2.58578 18 2.99999 18H15C15.4142 18 15.75 17.6642 15.75 17.25C15.7458 13.5238 12.7262 10.5041 9 10.5Z" fill="url(#fg_per_b)"/>
    </g>
    <defs><FigGrad id="fg_per_a" x2={18}/><FigGrad id="fg_per_b" x2={18}/></defs>
  </svg>
);

const FigAirportTaxi = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <g opacity="0.5"><path d="M0.560087 13.2362C0.560087 12.7489 0.95513 12.3539 1.44244 12.3539H15.5601C16.0474 12.3539 16.4424 12.7489 16.4424 13.2362C16.4424 13.7235 16.0474 14.1186 15.5601 14.1186H1.44244C0.95513 14.1186 0.560087 13.7235 0.560087 13.2362ZM16.8916 3.99533C16.7725 3.63789 16.5164 3.34235 16.1795 3.17374C15.8426 3.00512 15.4525 2.97724 15.0951 3.09621L11.4747 4.30383C11.2635 4.37426 11.0346 4.37004 10.8262 4.29189L4.46258 1.90553C4.22468 1.81632 3.96037 1.83019 3.73311 1.94382C3.10558 2.25758 3.05113 3.1322 3.63489 3.52138L6.2261 5.24885C6.84672 5.66259 6.78883 6.59243 6.12169 6.926L4.52394 7.72488C4.25045 7.86162 3.92855 7.86162 3.65506 7.72488L1.02758 6.41114C0.748397 6.27154 0.411216 6.32626 0.190504 6.54697C-0.0926909 6.83017 -0.0926909 7.28932 0.190504 7.57251L2.76484 10.1469C3.03421 10.4162 3.43615 10.5033 3.79283 10.3695L16.0427 5.77592C16.3871 5.64663 16.668 5.38887 16.8263 5.05682C16.9846 4.72477 17.008 4.34428 16.8916 3.99533Z" fill="url(#fg_taxi_a)"/></g>
    <path d="M22.4638 15.9415C22.3261 14.4074 22.1009 14.1085 22.0159 13.9959C21.8207 13.7367 21.508 13.5666 21.1767 13.3884C21.1581 13.3785 21.1419 13.3644 21.1296 13.3472C21.1173 13.33 21.1091 13.3102 21.1058 13.2893C21.1024 13.2684 21.1039 13.2471 21.1102 13.2269C21.1164 13.2067 21.1273 13.1882 21.1419 13.1729C21.1996 13.1145 21.2448 13.045 21.2748 12.9685C21.3047 12.892 21.3188 12.8103 21.3161 12.7282C21.3135 12.6462 21.2942 12.5655 21.2593 12.4911C21.2245 12.4168 21.1749 12.3503 21.1136 12.2957C20.9985 12.1915 20.8484 12.1346 20.6932 12.1361H20.1011C20.0756 12.1363 20.0502 12.1379 20.0249 12.141C20.0076 12.1335 19.9898 12.1276 19.9715 12.1232C19.6207 11.382 19.1404 10.3663 18.1449 9.87137C16.6683 9.1367 13.9483 9.09863 13.4169 9.09863C12.8848 9.09863 10.1648 9.1367 8.69059 9.86975C7.69429 10.3655 7.21477 11.3804 6.86404 12.1216L6.8608 12.128C6.84338 12.1305 6.82627 12.1349 6.80977 12.141C6.78451 12.1379 6.75908 12.1363 6.73363 12.1361H6.1399C5.98506 12.1349 5.83539 12.1917 5.72049 12.2955C5.60559 12.3993 5.53384 12.5425 5.51944 12.6967C5.51264 12.7835 5.52468 12.8708 5.55473 12.9526C5.58479 13.0344 5.63216 13.1087 5.69359 13.1705C5.70819 13.1858 5.71905 13.2043 5.72532 13.2245C5.73159 13.2446 5.7331 13.266 5.72973 13.2869C5.72635 13.3078 5.71819 13.3276 5.70588 13.3448C5.69356 13.3619 5.67744 13.3761 5.65876 13.386C5.32747 13.565 5.01319 13.7343 4.8196 13.9935C4.73455 14.1069 4.50937 14.4049 4.37248 15.9391C4.29634 16.8025 4.285 17.6968 4.34494 18.2719C4.46968 19.4683 4.70377 20.1916 4.71349 20.2207C4.74945 20.3301 4.81575 20.427 4.90466 20.5001C4.99358 20.5733 5.10144 20.6196 5.21569 20.6338V20.6411C5.21569 20.8023 5.27969 20.9568 5.39362 21.0707C5.50755 21.1846 5.66207 21.2486 5.82319 21.2486H7.94863C8.10975 21.2486 8.26427 21.1846 8.3782 21.0707C8.49213 20.9568 8.55613 20.8023 8.55613 20.6411C8.88337 20.6411 9.11098 20.5828 9.35155 20.5196C9.69992 20.4265 10.0558 20.3642 10.4151 20.3333C11.4128 20.24 12.4141 20.1909 13.4161 20.1859C14.0933 20.1859 15.2953 20.224 16.4561 20.335C16.8173 20.3649 17.1745 20.4273 17.5236 20.5213C17.7545 20.5812 17.974 20.6363 18.2769 20.6419C18.2769 20.8031 18.3409 20.9576 18.4549 21.0715C18.5688 21.1854 18.7233 21.2494 18.8844 21.2494H21.0107C21.1718 21.2494 21.3263 21.1854 21.4403 21.0715C21.5542 20.9576 21.6182 20.8031 21.6182 20.6419V20.6371C21.7324 20.6229 21.8403 20.5765 21.9292 20.5034C22.0181 20.4302 22.0844 20.3334 22.1204 20.224C22.1309 20.194 22.365 19.4707 22.4897 18.2751C22.5497 17.7 22.5383 16.8074 22.4622 15.9423L22.4638 15.9415ZM7.96078 12.6416C8.26453 11.996 8.61202 11.2654 9.23086 10.9576C10.1243 10.5121 11.9768 10.312 13.4161 10.312C14.8547 10.312 16.7072 10.5113 17.6014 10.9576C18.2194 11.2654 18.5653 11.9968 18.8707 12.6416L18.9087 12.7242C18.9307 12.7711 18.9402 12.8229 18.9366 12.8745C18.9329 12.9262 18.9162 12.9761 18.8879 13.0195C18.8596 13.0628 18.8207 13.0983 18.7749 13.1224C18.729 13.1466 18.6778 13.1587 18.626 13.1575C17.3649 13.1235 14.7065 13.0142 13.4161 13.0142C12.125 13.0142 9.46738 13.126 8.20378 13.16C8.15185 13.1615 8.1004 13.1497 8.05435 13.1256C8.0083 13.1016 7.96919 13.0661 7.94075 13.0226C7.9123 12.9792 7.89549 12.9291 7.89191 12.8773C7.88832 12.8255 7.89809 12.7736 7.92028 12.7266C7.93405 12.6983 7.94863 12.6699 7.96078 12.6416ZM8.41438 15.6653C7.76071 15.7439 7.1038 15.7828 6.44608 15.7811C6.04351 15.7811 5.62798 15.6677 5.55103 15.3089C5.49838 15.0675 5.50405 14.9323 5.5324 14.7962C5.5567 14.6803 5.59396 14.5961 5.7835 14.5661C6.2776 14.49 6.55381 14.5856 7.36138 14.8237C7.8976 14.9809 8.28478 15.1915 8.50429 15.3575C8.61445 15.4393 8.55694 15.6532 8.41438 15.6653ZM16.8197 18.7781C16.32 18.8348 15.3204 18.8146 13.4275 18.8146C11.5345 18.8146 10.5358 18.8356 10.0352 18.7781C9.52003 18.7214 8.86231 18.2338 9.31186 17.7988C9.60994 17.5129 10.3073 17.2991 11.2356 17.1784C12.1639 17.0577 12.5567 16.9961 13.4234 16.9961C14.2901 16.9961 14.6433 17.0342 15.6112 17.1792C16.5792 17.3234 17.3114 17.5405 17.5358 17.7997C17.9448 18.2646 17.3349 18.7182 16.8197 18.7806V18.7781ZM21.2804 15.3081C21.2051 15.6685 20.7871 15.7803 20.3862 15.7803C19.7155 15.7803 19.0456 15.7423 18.3798 15.6645C18.264 15.6532 18.2097 15.4498 18.3272 15.3567C18.5442 15.1866 18.9347 14.9809 19.4693 14.8229C20.2776 14.5848 20.7442 14.49 21.1443 14.5694C21.2415 14.5888 21.2934 14.6933 21.299 14.7589C21.3261 14.9419 21.3198 15.1274 21.2804 15.3081Z" fill="url(#fg_taxi_b)"/>
    <defs><FigGrad id="fg_taxi_a"/><FigGrad id="fg_taxi_b"/></defs>
  </svg>
);

const FigTransfer = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M1.76607 16.4026H2.82166C2.78106 16.1868 2.74723 15.9637 2.74723 15.7263C2.74723 14.1796 3.89755 12.9638 5.34559 12.9638C6.80038 12.9638 7.94395 14.1796 7.94395 15.7263C7.94395 15.9637 7.91687 16.1868 7.86952 16.4026H16.4901C16.4495 16.1868 16.4157 15.9637 16.4157 15.7263C16.4157 14.1796 17.566 12.9638 19.0141 12.9638C20.4689 12.9638 21.6124 14.1796 21.6124 15.7263C21.6124 15.9637 21.5854 16.1868 21.538 16.4026H22.4312C23.4056 16.4026 24.001 15.7479 24.001 14.6832V11.7912C24.001 10.7841 23.7168 9.92797 22.4582 9.51072L21.0644 9.05749C20.1847 7.94242 18.6487 6.35254 15.8541 6.35254H14.2639C11.4761 6.35254 10.3664 6.6403 8.70181 7.74818L5.97491 9.56827L2.97052 9.95674C1.10295 10.2013 0 11.3452 0 13.0574V14.4818C0 15.7048 0.642824 16.4026 1.76607 16.4026ZM5.34559 17.6471C6.36056 17.6471 7.15901 16.7983 7.15901 15.7263C7.15901 14.6544 6.35381 13.7984 5.34559 13.7984C4.34414 13.7984 3.53892 14.6544 3.53892 15.7263C3.53892 16.7911 4.34414 17.6471 5.34559 17.6471ZM19.0141 17.6471C20.0223 17.6471 20.8275 16.7911 20.8275 15.7263C20.8275 14.6544 20.0223 13.7984 19.0141 13.7984C18.0194 13.7984 17.2074 14.6617 17.2074 15.7263C17.2074 16.7911 18.0126 17.6471 19.0141 17.6471Z" fill="url(#fg_xfer)"/>
    <defs><FigGrad id="fg_xfer"/></defs>
  </svg>
);

// ─── Layout helpers ───────────────────────────────────────────
const Frame = ({ children, bg = C.bg }) => (
  <div style={{
    minHeight: '100vh', background: bg, color: C.ink,
    fontFamily: '-apple-system, "SF Pro Display", "Inter", system-ui, sans-serif',
    display: 'flex', flexDirection: 'column',
    fontSize: 15,
    paddingTop: 'env(safe-area-inset-top, 0px)',
    paddingBottom: 80, // clears fixed tab bar
    boxSizing: 'border-box',
  }}>{children}</div>
);

const Scroll = ({ children, pad = '0 20px' }) => (
  <div style={{ flex: 1, padding: pad, paddingBottom: 24 }}>{children}</div>
);

const TabBar = ({ active = 'home' }) => {
  const tabs = [
    { id: 'home',    label: 'Главный',    Icon: IconHome },
    { id: 'serv',    label: 'Услуги',     Icon: IconGrid },
    { id: 'trip',    label: "Let's Trip", Icon: IconCompass },
    { id: 'support', label: 'Поддержка',  Icon: IconChat },
    { id: 'profile', label: 'Профиль',    Icon: IconUser },
  ];
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50,
      maxWidth: 460, margin: '0 auto',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        padding: '10px 8px calc(10px + env(safe-area-inset-bottom, 0px))',
        background: '#fff',
        borderTop: `1px solid ${C.line}`,
        boxShadow: '0 -4px 16px rgba(15,27,61,0.04)',
      }}>
        {tabs.map(t => {
          const on = t.id === active;
          const href = ({home:'#/', serv:'#/services', trip:'#/trip', support:'#/support', profile:'#/profile'})[t.id];
          return (
            <a key={t.id} href={href} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              color: on ? C.brand : C.ink3, minWidth: 56,
              textDecoration: 'none',
            }}>
              <div style={{
                width: 40, height: 28, borderRadius: 8,
                background: on ? C.brandSoft : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <t.Icon size={22} color={on ? C.brand : C.ink3} stroke={on ? 2 : 1.7}/>
              </div>
              <span style={{ fontSize: 11, fontWeight: on ? 600 : 500 }}>{t.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const PageHeader = ({ title }) => (
  <div style={{ padding: '8px 20px 18px', textAlign: 'center' }}>
    <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: -0.4 }}>{title}</h1>
  </div>
);

const SoftIcon = ({ children, size = 48, tint = C.brandSoft }) => (
  <div style={{
    width: size, height: size, borderRadius: 14,
    background: 'linear-gradient(155deg, #FFFFFF 0%, #EEF1FB 50%, #DDE3F4 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 2px rgba(59,71,200,0.06), 0 2px 6px rgba(59,71,200,0.10), 0 0 0 1px rgba(59,71,200,0.04)',
  }}>{children}</div>
);

const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{
    background: C.card, borderRadius: 22, padding: 18,
    boxShadow: '0 1px 2px rgba(15,27,61,0.03), 0 12px 32px rgba(15,27,61,0.07), 0 28px 64px rgba(15,27,61,0.05)',
    ...style,
  }}>{children}</div>
);

const ServiceRow = ({ icon, title, sub, badge }) => (
  <Card style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 18px' }}>
    <SoftIcon>{icon}</SoftIcon>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 17, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{title}</div>
      <div style={{ fontSize: 13.5, color: C.ink2, lineHeight: 1.4,
        overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box',
        WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{sub}</div>
    </div>
    {badge ?? <IconArrow size={18} color={C.ink3}/>}
  </Card>
);

// ─── Brand mark (original — not a real airline logo) ──────────
const BrandMark = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: C.brand }}>UZBEKISTAN</span>
      <span style={{ fontSize: 22, fontWeight: 800, color: C.brand, letterSpacing: -0.5 }}>Airports</span>
    </div>
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="13" fill="none" stroke={C.accent} strokeWidth="2"/>
      <path d="M16 6 18 14 26 16 18 18 16 26 14 18 6 16 14 14z" fill={C.accent}/>
      <circle cx="16" cy="16" r="2" fill="#fff"/>
    </svg>
  </div>
);

// ─── Flight ticket card (gradient indigo) ─────────────────────
const FlightCard = ({ compact = false }) => (
  <div style={{
    borderRadius: 'var(--radius-card, 22px)', padding: '20px 22px 22px',
    background: 'var(--card-bg, radial-gradient(circle at 50% 50%, #101A50 0%, #5D70CB 100%))',
    color: '#fff', position: 'relative', overflow: 'hidden',
    boxShadow: 'var(--card-shadow, 0 10px 28px rgba(35,44,110,0.35))',
  }}>
    {/* Top row: ВЫЛЕТ — dashed line + plane — ПРИЛЁТ */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <span style={{ fontSize: 11, letterSpacing: 1.5, fontWeight: 600, opacity: 0.85 }}>ВЫЛЕТ</span>
      <div style={{ display: 'flex', alignItems: 'center', minWidth: 110 }}>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(255,255,255,0.55)' }}/>
        <span style={{ margin: '0 6px', fontSize: 13, lineHeight: 1 }}>✈</span>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(255,255,255,0.55)' }}/>
      </div>
      <span style={{ fontSize: 11, letterSpacing: 1.5, fontWeight: 600, opacity: 0.85, textAlign: 'right' }}>ПРИЛЁТ</span>
    </div>

    {/* Codes row with centered flight pill */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 10 }}>
      <span style={{ fontSize: 46, fontWeight: 800, letterSpacing: -1, lineHeight: 1 }}>TAS</span>
      <div style={{
        background: '#0B1340', color: '#fff',
        fontSize: 12, fontWeight: 700, padding: '5px 11px 5px 5px',
        borderRadius: 999, display: 'flex', alignItems: 'center', gap: 7,
        boxShadow: '0 2px 6px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)',
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: 999,
          background: 'var(--logo-image, #FFD93B)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#1A1A1A', fontSize: 9.5, fontWeight: 900, letterSpacing: 0.3,
          overflow: 'hidden',
          boxShadow: '0 0 0 1.5px rgba(255,255,255,0.15)',
        }}><span style={{ opacity: 'var(--logo-fallback-show, 1)' }}>HY</span></span>
        HY-1587
      </div>
      <span style={{ fontSize: 46, fontWeight: 800, letterSpacing: -1, lineHeight: 1, textAlign: 'right' }}>DXB</span>
    </div>

    {/* Times */}
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 500, opacity: 0.95, marginTop: 10, marginBottom: 16 }}>
      <span>02:15 AM</span><span>08:15 AM</span>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, letterSpacing: 1, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: '#fff' }}/> ПОСАДКА
      </span>
      <span>ГЕЙТ B12</span>
    </div>
  </div>
);

// ─── Status bar (light) ───────────────────────────────────────
// Frame's IOSDevice already provides one; we just spell the title bar inside.

// ═════════════════════════════════════════════════════════════
// SCREEN 1 — HOME
// ═════════════════════════════════════════════════════════════
function ScreenHome() {
  return (
    <Frame>
      <div style={{ padding: '6px 20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <BrandMark/>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: C.brandSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconUser size={20} color={C.brand}/>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(15,27,61,0.08)' }}>
            <IconBell size={20} color={C.brand}/>
          </div>
        </div>
      </div>

      <Scroll>
        {/* Login banner */}
        <div style={{ background: '#E8ECFB', borderRadius: 16, padding: 14, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <SoftIcon size={40} tint="#fff"><IconUser size={20} color={C.brand}/></SoftIcon>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: C.brand, fontSize: 15 }}>Войти в приложение</div>
            <div style={{ fontSize: 12, color: C.ink2, lineHeight: 1.35 }}>Чтобы видеть свои рейсы и багаж на любом устройстве</div>
          </div>
          <IconArrow size={18} color={C.brand}/>
        </div>

        <a href="#/flight" style={{ display: 'block', marginBottom: 14, textDecoration: 'none', color: 'inherit' }}>
          <FlightCard/>
        </a>

        {/* Stats + boarding pass */}
        <Card style={{ padding: 0, marginBottom: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '14px 4px', borderBottom: `1px solid ${C.line}` }}>
            {[
              { l: 'БАГАЖ',  v: '23 кг' },
              { l: 'МЕСТО',  v: '12A' },
              { l: 'МИЛИ',   v: '1 250' },
              { l: 'В ПУТИ', v: '6ч 00м' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 4px', borderRight: i < 3 ? `1px solid ${C.line}` : 'none' }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, color: C.ink3, marginBottom: 4 }}>{s.l}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.ink }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px' }}>
            <IconTicket size={20} color={C.ink2}/>
            <span style={{ flex: 1, fontWeight: 600, color: C.ink, fontSize: 14 }}>Открыть посадочный талон</span>
            <IconArrow size={18} color={C.ink3}/>
          </div>
        </Card>

        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Активные услуги</div>
        <Card style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <SoftIcon><IconBolt size={22} color={C.brand}/></SoftIcon>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Fast Track</div>
            <div style={{ fontSize: 12, color: C.ink2 }}>Priority Lane</div>
          </div>
          <div style={{ background: C.brandSoft, color: C.brand, fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 999 }}>Активна</div>
        </Card>
      </Scroll>

      <TabBar active="home"/>
    </Frame>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 2 — SERVICES
// ═════════════════════════════════════════════════════════════
function ScreenServices() {
  const services = [
    { icon: <IconBolt size={22} color={C.brand}/>,    title: 'Fast Track',        sub: 'Priority Lane' },
    { icon: <IconCrown size={22} color={C.brand}/>,   title: 'Concierge',         sub: 'Персональное сопровождение, помощь с багажом и…' },
    { icon: <IconCar size={22} color={C.brand}/>,     title: 'Airport Taxi',      sub: 'Заказ официального такси с фиксированной ценой до любого…' },
    { icon: <IconLounge size={22} color={C.brand}/>,  title: 'CIP Lounge',        sub: 'Business and First class access' },
    { icon: <IconBed size={22} color={C.brand}/>,     title: 'Airport Hotel',     sub: 'Капсулы, номера и душ прямо в терминале — для ожидания,…' },
    { icon: <IconBag size={22} color={C.brand}/>,     title: 'Хранение багажа',   sub: 'Безопасное хранение в аэропорту. Видеонаблюдение 24/7, страховка…' },
  ];
  return (
    <Frame>
      <PageHeader title="Услуги аэропорта"/>
      <Scroll>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {services.map((s, i) => <ServiceRow key={i} {...s}/>)}
        </div>
      </Scroll>
      <TabBar active="serv"/>
    </Frame>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 3 — SUPPORT
// ═════════════════════════════════════════════════════════════
function ScreenSupport() {
  return (
    <Frame>
      <PageHeader title="Поддержка"/>
      <Scroll>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ServiceRow icon={<IconMap size={22} color={C.brand}/>}   title="Карта аэропорта" sub="Терминалы, гейты, стойки и услуги — все на одной карте"/>
          <ServiceRow
            icon={<IconChat size={22} color={C.brand}/>}
            title="Написать в чат"
            sub="Оператор отвечает в среднем за 2 минуты, круглосуточно"
            badge={
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: C.goodSoft, color: C.good, fontSize: 10.5, fontWeight: 700, padding: '4px 9px', borderRadius: 999, letterSpacing: 0.6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: C.good }}/> ONLINE
              </div>
            }
          />
          <ServiceRow icon={<IconPhone size={22} color={C.brand}/>} title="Позвонить через приложение" sub="Бесплатный звонок оператору поддержки прямо из приложения"/>
        </div>
      </Scroll>
      <TabBar active="support"/>
    </Frame>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 4 — PROFILE
// ═════════════════════════════════════════════════════════════
function ScreenProfile() {
  return (
    <Frame>
      <PageHeader title="Профиль"/>
      <Scroll>
        <Card style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: C.brandSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconUser size={28} color={C.brand}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700 }}>Guest</div>
            <div style={{ fontSize: 13, color: C.ink2, marginTop: 2 }}>+998 ** *** ** **</div>
            <div style={{ fontSize: 13, color: C.brand, fontWeight: 600, marginTop: 4 }}>Добавить фото</div>
          </div>
        </Card>

        <SectionLabel>АККАУНТ</SectionLabel>
        <Card style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
          <SoftIcon size={48}><IconID size={24} color={C.brand}/></SoftIcon>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Идентификация</span>
              <span style={{ background: C.brandSoft, color: C.brand, fontSize: 10.5, fontWeight: 700, padding: '3px 8px', borderRadius: 6 }}>MyID</span>
            </div>
            <div style={{ fontSize: 12.5, color: C.ink2, lineHeight: 1.4, marginBottom: 6 }}>Подтвердите личность через MyID — национальный сервис идентификации Узбекистана</div>
            <div style={{ fontSize: 11.5, color: C.warn, fontWeight: 600 }}>Только для резидентов Республики Узбекистан</div>
          </div>
          <div style={{ alignSelf: 'flex-start' }}>
            <span style={{ background: C.warnSoft, color: C.warn, fontSize: 10.5, fontWeight: 700, padding: '5px 9px', borderRadius: 8, letterSpacing: 0.6, display: 'inline-block', textAlign: 'center', lineHeight: 1.2 }}>НЕ<br/>ПРОЙДЕНА</span>
          </div>
        </Card>

        <SectionLabel>НАСТРОЙКИ</SectionLabel>
        <Card style={{ padding: 0 }}>
          <SettingRow icon={<IconGlobe size={20} color={C.brand}/>} label="Язык" value="Русский"/>
          <SettingRow icon={<IconSun size={20} color={C.brand}/>}   label="Тема" value="Светлая" divider/>
          <SettingRow icon={<IconBell size={20} color={C.brand}/>}  label="Уведомления" value={<Toggle on/>} divider/>
        </Card>
      </Scroll>
      <TabBar active="profile"/>
    </Frame>
  );
}

const SectionLabel = ({ children }) => (
  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: C.ink3, padding: '0 4px 8px' }}>{children}</div>
);

const SettingRow = ({ icon, label, value, divider }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderTop: divider ? `1px solid ${C.line}` : 'none' }}>
    <SoftIcon size={36}>{icon}</SoftIcon>
    <span style={{ flex: 1, fontWeight: 600, fontSize: 15 }}>{label}</span>
    {typeof value === 'string'
      ? <span style={{ color: C.ink2, fontSize: 14 }}>{value}</span>
      : value}
  </div>
);

const Toggle = ({ on }) => (
  <div style={{
    width: 44, height: 26, borderRadius: 999, background: on ? C.brand : '#D6DAEA',
    position: 'relative', transition: 'background .2s',
  }}>
    <div style={{
      position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20,
      borderRadius: 999, background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    }}/>
  </div>
);

// ═════════════════════════════════════════════════════════════
// SCREEN — LET'S TRIP
// ═════════════════════════════════════════════════════════════
const TEAL = '#1FBFC9';
const TEAL2 = '#2DD4DC';
const TRIP_INK = '#0F2A4A';

function TripCategory({ icon, label, active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0, width: 64 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 999,
        background: active ? `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)` : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: active
          ? '0 6px 16px rgba(31,191,201,0.35), inset 0 1px 0 rgba(255,255,255,0.4)'
          : '0 2px 8px rgba(15,42,74,0.08)',
        color: active ? '#fff' : '#41668B',
      }}>
        {icon}
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: TRIP_INK }}>{label}</span>
    </div>
  );
}

function TripChip({ icon, children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#F1F4FA', color: TRIP_INK,
      padding: '8px 14px', borderRadius: 999,
      fontSize: 14, fontWeight: 600,
    }}>
      <span style={{ color: TRIP_INK, opacity: 0.7 }}>{icon}</span>
      {children}
    </div>
  );
}

// ─── Intent-first Let's Trip ──────────────────────────────────
// Three big intent cards on entry. Each opens its own pane with a
// small, focused set of services — never the whole list at once.
const INTENTS = [
  {
    id: 'travel',
    title: 'Sayohat qilmoqchiman',
    sub: 'Tour, parvoz, otel, eSIM',
    grad: 'linear-gradient(135deg, #1FBFC9 0%, #128591 100%)',
    cats: ['tours', 'flight', 'hotels', 'esim'],
  },
  {
    id: 'airport',
    title: 'Aeroportga ketyapman',
    sub: 'Taksi, transfer',
    grad: 'linear-gradient(135deg, #4F7DC9 0%, #2C4F8F 100%)',
    cats: ['taxi', 'xfer'],
  },
  {
    id: 'leisure',
    title: 'Dam olish, sayr',
    sub: 'Excursions, villas',
    grad: 'linear-gradient(135deg, #F0A968 0%, #C76A38 100%)',
    cats: ['excur', 'villas'],
  },
];

const CAT_DEF = {
  excur:  { label: 'Excursions',   icon: <FigExcursions size={26}/> },
  taxi:   { label: 'Airport taxi', icon: <FigAirportTaxi size={26}/> },
  tours:  { label: 'Tours',        icon: <FigTours size={26}/> },
  hotels: { label: 'Hotels',       icon: <FigHotel size={26}/> },
  flight: { label: 'Flight',       icon: <FigFlight size={26}/> },
  villas: { label: 'Villas',       icon: <FigVillas size={26}/> },
  esim:   { label: 'eSIM',         icon: <FigEsim size={26}/> },
  xfer:   { label: 'Transfer',     icon: <FigTransfer size={26}/> },
};

function ScreenTrip() {
  const [intent, setIntent] = React.useState(null); // null = picker, else intent.id
  const [activeCat, setActiveCat] = React.useState(null);

  const current = intent ? INTENTS.find(i => i.id === intent) : null;

  React.useEffect(() => {
    if (current && !activeCat) setActiveCat(current.cats[0]);
  }, [intent]);

  // Jump straight into Flight inside the "travel" intent — used by the
  // top-of-screen quick search widget so users skip the intent step.
  const openFlight = () => {
    setIntent('travel');
    setActiveCat('flight');
  };

  return (
    <Frame>
      {/* Sticky top bar */}
      <div style={{
        padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12,
        position: 'sticky', top: 0, zIndex: 10,
        background: C.bg,
      }}>
        {intent ? (
          <button
            onClick={() => { setIntent(null); setActiveCat(null); }}
            aria-label="Back"
            style={{
              width: 40, height: 40, borderRadius: 999, border: 'none',
              background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(15,42,74,0.08)', cursor: 'pointer', flexShrink: 0,
            }}>
            <IconBack size={20} color={TRIP_INK}/>
          </button>
        ) : (
          <img src="assets/lets-trip-logo.png" alt="Let's Trip" style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0 }}/>
        )}
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: -0.4, color: TRIP_INK, flex: 1, textAlign: intent ? 'left' : 'left' }}>
          {intent ? current.title : "Let's Trip"}
        </h1>
      </div>

      {!intent ? (
        <IntentPicker onPick={(id) => setIntent(id)} onFlight={openFlight}/>
      ) : (
        <IntentPane intent={current} activeCat={activeCat} setActiveCat={setActiveCat}/>
      )}

      <TabBar active="trip"/>
    </Frame>
  );
}

function IntentPicker({ onPick, onFlight }) {
  return (
    <div style={{
      padding: '4px 20px 24px',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      {/* Existing flight card lifted from DefaultTripView so users can launch
          a flight search without entering the "Sayohat" intent first. */}
      <Card style={{ padding: 0, borderRadius: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px 16px' }}>
          <FigTakeoff size={26}/>
          <div style={{ fontSize: 18, fontWeight: 700, color: TRIP_INK }}>Tashkent</div>
        </div>
        <div style={{ height: 1, background: '#ECEEF6', marginLeft: 60, marginRight: 20 }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px 20px' }}>
          <FigLanding size={26}/>
          <div style={{ fontSize: 18, fontWeight: 700, color: TRIP_INK }}>Egypt</div>
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px', flexWrap: 'wrap' }}>
          <TripChip icon={<FigCalendar size={16}/>}>May 12 · 7 nights</TripChip>
          <TripChip icon={<FigPersonAdult size={16}/>}>2 adults</TripChip>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <button
            onClick={onFlight}
            style={{
              width: '100%', padding: '14px',
              border: 'none', borderRadius: 999,
              background: `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)`,
              color: '#fff', fontSize: 16, fontWeight: 700,
              boxShadow: '0 8px 20px rgba(31,191,201,0.35), inset 0 1px 0 rgba(255,255,255,0.35)',
              cursor: 'pointer',
            }}>Search</button>
        </div>
      </Card>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '6px 4px 0',
      }}>
        <div style={{ height: 1, background: '#E0E4F0', flex: 1 }}/>
        <div style={{ fontSize: 12, color: '#9AA1B8', fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>
          Yoki
        </div>
        <div style={{ height: 1, background: '#E0E4F0', flex: 1 }}/>
      </div>

      <div style={{ fontSize: 15, color: '#5C6B86', fontWeight: 500, padding: '0 4px 4px' }}>
        Bugun nima qilmoqchisiz?
      </div>
      {INTENTS.map(it => (
        <button key={it.id}
          onClick={() => onPick(it.id)}
          style={{
            border: 'none', cursor: 'pointer',
            background: it.grad,
            color: '#fff',
            borderRadius: 28,
            padding: '24px 24px',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6,
            boxShadow: '0 12px 28px rgba(15,42,74,0.18), inset 0 1px 0 rgba(255,255,255,0.25)',
            textAlign: 'left',
            position: 'relative', overflow: 'hidden',
          }}>
          {/* Decorative icon stack in the corner */}
          <div style={{
            position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)',
            display: 'flex', gap: 8, opacity: 0.85,
          }}>
            <IntentIconStack id={it.id}/>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>{it.title}</div>
          <div style={{ fontSize: 13, fontWeight: 500, opacity: 0.85 }}>{it.sub}</div>
        </button>
      ))}
    </div>
  );
}

function IntentIconStack({ id }) {
  // Soft white-tinted decorative icon for each intent card
  const wrap = { width: 56, height: 56, borderRadius: 18, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' };
  let glyph;
  if (id === 'travel') glyph = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"/>
    </svg>
  );
  else if (id === 'airport') glyph = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/>
      <rect x="3" y="11" width="18" height="6" rx="2"/>
      <circle cx="7" cy="17" r="1.5" fill="#fff"/>
      <circle cx="17" cy="17" r="1.5" fill="#fff"/>
    </svg>
  );
  else glyph = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3"/>
      <path d="M3 18s2-3 9-3 9 3 9 3"/>
      <path d="M12 9v6"/>
    </svg>
  );
  return <div style={wrap}>{glyph}</div>;
}

function IntentPane({ intent, activeCat, setActiveCat }) {
  // Local sub-tabs: only this intent's categories (max 4) — no horizontal scroll, no overflow
  const cats = intent.cats.map(id => ({ id, ...CAT_DEF[id] }));
  return (
    <>
      {/* Compact in-intent tab strip — fits without scrolling (2-4 items) */}
      <div style={{
        display: 'flex', gap: 10, padding: '4px 20px 18px',
        flexShrink: 0,
      }}>
        {cats.map(c => {
          const on = c.id === activeCat;
          return (
            <button key={c.id}
              onClick={() => setActiveCat(c.id)}
              style={{
                flex: 1, minWidth: 0,
                border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              }}>
              <div style={{
                width: 56, height: 56, borderRadius: 999,
                background: on ? `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)` : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: on
                  ? '0 6px 16px rgba(31,191,201,0.35), inset 0 1px 0 rgba(255,255,255,0.4)'
                  : '0 2px 8px rgba(15,42,74,0.08)',
                color: on ? '#fff' : '#41668B',
                transition: 'all 0.18s ease',
              }}>
                <span style={{
                  display: 'inline-flex',
                  filter: on ? 'brightness(0) invert(1)' : 'none',
                }}>{c.icon}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: TRIP_INK, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{c.label}</span>
            </button>
          );
        })}
      </div>

      <div style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
        {activeCat === 'excur' ? <ExcursionsView/> : <DefaultTripView/>}
      </div>
    </>
  );
}

// Default trip search view (Tashkent → Egypt + chips + All hotel + Search)
function DefaultTripView() {
  return (
    <>
      <Card style={{ padding: 0, borderRadius: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px 16px' }}>
          <FigTakeoff size={26}/>
          <div style={{ fontSize: 18, fontWeight: 700, color: TRIP_INK }}>Tashkent</div>
        </div>
        <div style={{ height: 1, background: '#ECEEF6', marginLeft: 60, marginRight: 20 }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px 20px' }}>
          <FigLanding size={26}/>
          <div style={{ fontSize: 18, fontWeight: 700, color: TRIP_INK }}>Egypt</div>
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '0 20px 20px', flexWrap: 'wrap' }}>
          <TripChip icon={<FigCalendar size={16}/>}>May 12 · 7 nights</TripChip>
          <TripChip icon={<FigPersonAdult size={16}/>}>2 adults</TripChip>
        </div>
      </Card>

      <Card style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', borderRadius: 32 }}>
        <span style={{ display: 'inline-flex', opacity: 0.72 }}><FigHotel size={26}/></span>
        <div style={{ fontSize: 18, fontWeight: 700, color: TRIP_INK }}>All hotel</div>
      </Card>

      <div style={{ flex: 1 }}/>

      <button style={{
        width: 'calc(100% - 40px)', alignSelf: 'center', padding: '18px',
        border: 'none', borderRadius: 999,
        background: `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)`,
        color: '#fff', fontSize: 17, fontWeight: 700,
        boxShadow: '0 10px 24px rgba(31,191,201,0.4), inset 0 1px 0 rgba(255,255,255,0.35)',
        cursor: 'pointer',
        marginBottom: 8,
      }}>Search</button>
    </>
  );
}

// Excursions view: country picker on top, excursion cards below
const EXCURSIONS = [
  { id: 'pyr',  name: 'Pyramids of Giza',     loc: 'Cairo, Egypt',    retail: 89,  premium: 64,
    img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80&auto=format&fit=crop' },
  { id: 'red',  name: 'Red Sea Diving Tour',  loc: 'Hurghada, Egypt', retail: 145, premium: 99,
    img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&q=80&auto=format&fit=crop' },
  { id: 'lux',  name: 'Luxor Temple Walk',    loc: 'Luxor, Egypt',    retail: 72,  premium: 49,
    img: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80&auto=format&fit=crop' },
  { id: 'nile', name: 'Nile Sunset Cruise',   loc: 'Aswan, Egypt',    retail: 110, premium: 78,
    img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80&auto=format&fit=crop' },
];

function ExcursionsView() {
  const [country, setCountry] = React.useState('Egypt');
  const cardsRef = React.useRef(null);
  const [innerScrolled, setInnerScrolled] = React.useState(false);

  React.useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const onScroll = () => setInnerScrolled(el.scrollTop > 4);
    el.addEventListener('scroll', onScroll, { passive: true });

    // Page-first scroll: while the page can still scroll down, redirect wheel
    // and touch deltas to window — categories collapse first, then inner scrolls.
    const onWheel = (ev) => {
      const dy = ev.deltaY;
      const docEl = document.documentElement;
      const maxPageScroll = docEl.scrollHeight - window.innerHeight;
      const pageY = window.scrollY;
      if (dy > 0 && pageY < maxPageScroll - 1) {
        // scrolling down but page not yet at bottom of cat-collapse — let page eat it
        ev.preventDefault();
        window.scrollBy({ top: dy, behavior: 'auto' });
      } else if (dy < 0 && el.scrollTop <= 0 && pageY > 0) {
        ev.preventDefault();
        window.scrollBy({ top: dy, behavior: 'auto' });
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    let touchY = null;
    const onTouchStart = (e) => { touchY = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      if (touchY == null) return;
      const cy = e.touches[0].clientY;
      const dy = touchY - cy; // positive = swipe up = scroll down
      const docEl = document.documentElement;
      const maxPageScroll = docEl.scrollHeight - window.innerHeight;
      const pageY = window.scrollY;
      if (dy > 0 && pageY < maxPageScroll - 1) {
        e.preventDefault();
        window.scrollBy({ top: dy, behavior: 'auto' });
        touchY = cy;
      } else if (dy < 0 && el.scrollTop <= 0 && pageY > 0) {
        e.preventDefault();
        window.scrollBy({ top: dy, behavior: 'auto' });
        touchY = cy;
      } else {
        touchY = cy;
      }
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 32,
      position: 'sticky',
      top: 68,
      height: 'calc(100vh - 68px - 80px)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Pinned country picker inside the white card */}
      <div style={{
        padding: 10,
        background: innerScrolled ? '#fff' : 'transparent',
        flexShrink: 0,
        boxShadow: innerScrolled ? '0 6px 16px rgba(15,42,74,0.08)' : 'none',
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '14px 16px',
          borderRadius: 22,
          background: 'linear-gradient(180deg, #EEF2F8 0%, #E4EAF3 100%)',
          border: '1px solid rgba(15,42,74,0.05)',
        }}>
          <span style={{ display: 'inline-flex', color: '#41668B', opacity: 0.78 }}>
            <IconGlobe size={22} color="currentColor" stroke={2}/>
          </span>
          <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: TRIP_INK }}>{country}</div>
          <span style={{ display: 'inline-flex', transform: 'rotate(90deg)' }}>
            <Icon size={16} color="#41668B" stroke={2.4} d="M9 6l6 6-6 6"/>
          </span>
        </div>
      </div>

      {/* Inner-scrolled cards */}
      <div ref={cardsRef} style={{
        flex: 1,
        overflowY: 'auto',
        padding: '0 10px 14px',
        display: 'flex', flexDirection: 'column', gap: 12,
        WebkitOverflowScrolling: 'touch',
      }}>
        {EXCURSIONS.map(e => (
          <div key={e.id} style={{
            background: '#fff',
            borderRadius: 22,
            boxShadow: '0 8px 22px rgba(15,42,74,0.12), 0 2px 6px rgba(15,42,74,0.06)',
            border: '1px solid rgba(15,42,74,0.05)',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <ExcursionCard {...e}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExcursionCard({ name, loc, retail, premium, img }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      padding: 12,
    }}>
      {/* 2.5:1 image */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: '#E8EEF5',
        aspectRatio: '2.5 / 1',
        borderRadius: 14,
      }}>
        <img src={img} alt={name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }}/>
      </div>

      <div style={{ padding: '10px 4px 2px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 10 }}>
        {/* Left: name + loc */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: TRIP_INK, lineHeight: 1.2 }}>{name}</div>
          <div style={{ fontSize: 11.5, color: '#6B7894', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
            <Icon size={11} color="#6B7894" stroke={2}>
              <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </Icon>
            {loc}
          </div>
        </div>

        {/* Right: prices stacked, right-aligned */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <div style={{ fontSize: 11.5, color: '#6B7894', fontWeight: 600 }}>
            from <span style={{ color: TRIP_INK }}>${retail}</span>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #FFE9A8 0%, #E8B852 45%, #B8862A 100%)',
            borderRadius: 999,
            padding: '4px 10px',
            display: 'inline-flex', alignItems: 'center', gap: 5,
            boxShadow: '0 3px 8px rgba(184,134,42,0.32), inset 0 1px 0 rgba(255,255,255,0.5)',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#5A3A0A" stroke="none" style={{ flexShrink: 0 }}>
              <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 21 12 16.51 5.79 21l2.39-7.15L2 9.36h7.61L12 2z"/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#3A2606', whiteSpace: 'nowrap', letterSpacing: -0.1 }}>
              Premium price: from ${premium}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// SCREEN 5 — FLIGHT DETAIL
// ═════════════════════════════════════════════════════════════
function ScreenFlight() {
  return (
    <Frame>
      <div style={{ padding: '6px 20px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="#/" style={{ width: 40, height: 40, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(15,27,61,0.06)', textDecoration: 'none' }}>
          <IconBack size={20} color={C.ink}/>
        </a>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 700 }}>Рейс HY-1587</div>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(15,27,61,0.06)' }}>
          <IconMore size={20} color={C.ink}/>
        </div>
      </div>

      <Scroll>
        {/* Detail flight card (no logo bubble — duration centered) */}
        <div style={{
          borderRadius: 22, padding: 22, marginBottom: 14,
          background: `linear-gradient(135deg, ${C.brand2} 0%, ${C.brand} 60%, ${C.brandInk} 100%)`,
          color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 10px 28px rgba(59,71,200,0.35)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: 1.5, fontWeight: 600, opacity: 0.85 }}>
            <span>ВЫЛЕТ</span><span>ПРИЛЁТ</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '4px 0' }}>
            <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>TAS</span>
            <div style={{ flex: 1, padding: '0 14px', textAlign: 'center' }}>
              <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 4 }}>6h 00m</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(255,255,255,0.5)' }}/>
                <span style={{ margin: '0 6px', fontSize: 14 }}>✈</span>
                <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(255,255,255,0.5)' }}/>
              </div>
            </div>
            <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>DXB</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 500, opacity: 0.95, marginBottom: 16 }}>
            <span>02:15</span><span>08:15</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, letterSpacing: 1, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#fff' }}/> ПОСАДКА
            </span>
            <span>ГЕЙТ B12</span>
          </div>
        </div>

        <Card style={{ marginBottom: 12, padding: '16px 18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 14, columnGap: 12 }}>
            <DetailField label="Терминал" value="T2"/>
            <DetailField label="Самолёт" value="Boeing 787-8"/>
            <DetailField label="Регистрация" value="23:30 → 01:30"/>
            <DetailField label="Лента выдачи" value="DXB · Belt 7"/>
          </div>
        </Card>

        <Card style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <SoftIcon><IconSun size={22} color={C.brand}/></SoftIcon>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: C.ink2 }}>Погода в Dubai</div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>+34°C · Ясно</div>
          </div>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <ActionCard icon={<IconPin size={22} color={C.ink}/>} label={<>Убрать с<br/>главного экрана</>}/>
          <ActionCard icon={<IconShare size={22} color={C.ink}/>} label="Поделиться"/>
        </div>
      </Scroll>
    </Frame>
  );
}

const DetailField = ({ label, value }) => (
  <div>
    <div style={{ fontSize: 12, color: C.ink2, marginBottom: 3 }}>{label}</div>
    <div style={{ fontSize: 16, fontWeight: 700, color: C.ink }}>{value}</div>
  </div>
);

const ActionCard = ({ icon, label }) => (
  <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '18px 12px', textAlign: 'center', minHeight: 92 }}>
    {icon}
    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.25 }}>{label}</div>
  </Card>
);

// ─── Export to window for app file ────────────────────────────
Object.assign(window, {
  ScreenHome, ScreenServices, ScreenSupport, ScreenProfile, ScreenFlight, ScreenTrip,
});
