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

// ─── Trip search results ──────────────────────────────────────
// Bundled results page: top tabs switch between service categories
// (Flight / Hotel / eSIM / Excursion) for the picked destination.
// Each tab shows a tight set of category-specific filter chips and
// a list of result cards. Designed compact so it fits the same card
// language as the rest of Let's Trip.
const RESULT_TABS = [
  { id: 'flight', label: 'Flight',     icon: <FigFlight size={20}/>     },
  { id: 'hotel',  label: 'Hotel',      icon: <FigHotel size={20}/>      },
  { id: 'esim',   label: 'eSIM',       icon: <FigEsim size={20}/>       },
  { id: 'excur',  label: 'Ekskursiya', icon: <FigExcursions size={20}/> },
];

const RESULT_FILTERS = {
  flight: ['Eng arzon', 'Tezkor', 'To\'g\'ridan', 'Ertalab', 'Kechqurun'],
  hotel:  ['5★', '4★', 'Markaz', 'Pulli ovqat', 'Basseyn'],
  esim:   ['7 kun', '15 kun', '30 kun', 'Limitlanmagan'],
  excur:  ['Yarim kun', 'To\'liq kun', 'Guruh', 'Shaxsiy'],
};

const SAMPLE_RESULTS = {
  flight: [
    { title: 'Uzbekistan Airways', sub: 'TAS → DXB · 4s 20m · to\'g\'ridan', price: '$289', tag: 'Eng arzon' },
    { title: 'FlyDubai',           sub: 'TAS → DXB · 4s 30m · to\'g\'ridan', price: '$315' },
    { title: 'Qatar Airways',      sub: 'TAS → DXB · 9s 15m · 1 transfer',  price: '$398' },
  ],
  hotel: [
    { title: 'Atlantis The Palm',  sub: '5★ · Palm Jumeirah · 8.9',         price: '$420 / kecha', tag: 'Mashhur' },
    { title: 'Rove Downtown',      sub: '4★ · Downtown · 8.4',              price: '$140 / kecha' },
    { title: 'Citymax Bur Dubai',  sub: '3★ · Bur Dubai · 8.1',             price: '$78 / kecha' },
  ],
  esim: [
    { title: 'UAE 7 kun',  sub: '5 GB · 4G/5G · darhol faollashadi', price: '$12' },
    { title: 'UAE 15 kun', sub: '15 GB · 4G/5G',                     price: '$22', tag: 'Tavsiya' },
    { title: 'UAE 30 kun', sub: '30 GB · 4G/5G',                     price: '$36' },
  ],
  excur: [
    { title: 'Burj Khalifa kirish',     sub: '124-148 qavat · 1.5 soat',       price: '$58' },
    { title: 'Cho\'l safari',           sub: '6 soat · transfer + kechki ovqat', price: '$72', tag: 'Mashhur' },
    { title: 'Dubai Marina kruizi',     sub: '2 soat · ovqat bilan',           price: '$45' },
  ],
};

function TripResultsView({ params, onBack }) {
  // Hide services that don't make sense for one-way trips: hotel needs a
  // checkout date, multi-day tours need a return. eSIM and excursions are
  // duration-agnostic so they always show.
  const oneWay = !!params.oneWay;
  const visibleTabs = oneWay
    ? RESULT_TABS.filter(t => t.id !== 'hotel')
    : RESULT_TABS;
  const [tab, setTab] = React.useState('flight');
  const [filter, setFilter] = React.useState(null);
  const filters = RESULT_FILTERS[tab];
  const items = SAMPLE_RESULTS[tab];

  const dest = (params.to || 'Dubai').trim() || 'Dubai';
  const origin = (params.from || 'Tashkent').trim() || 'Tashkent';

  const fmtD = (d) => d ? d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : null;
  const dateLabel = oneWay
    ? (fmtD(params.departDate) ? `${fmtD(params.departDate)} · faqat ketish` : 'Faqat ketish')
    : (params.departDate && params.returnDate ? `${fmtD(params.departDate)} — ${fmtD(params.returnDate)}` : '');

  return (
    <Frame>
      {/* Sticky header */}
      <div style={{
        padding: '16px 20px 12px', display: 'flex', alignItems: 'center', gap: 12,
        position: 'sticky', top: 0, zIndex: 10, background: C.bg,
      }}>
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            width: 40, height: 40, borderRadius: 999, border: 'none',
            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(15,42,74,0.08)', cursor: 'pointer', flexShrink: 0,
          }}>
          <IconBack size={20} color={TRIP_INK}/>
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9AA1B8', textTransform: 'uppercase', letterSpacing: 0.4 }}>
            {origin} → {dest}
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, color: TRIP_INK, letterSpacing: -0.2 }}>
            {dateLabel || 'Qidiruv natijasi'}
          </div>
        </div>
      </div>

      {/* Service tabs */}
      <div style={{
        display: 'flex', gap: 6, padding: '0 16px 14px', overflowX: 'auto',
      }}>
        {visibleTabs.map(t => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setFilter(null); }}
              style={{
                flex: '1 0 auto',
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 14px', borderRadius: 999,
                border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                background: on
                  ? `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)`
                  : '#fff',
                color: on ? '#fff' : TRIP_INK,
                fontSize: 13, fontWeight: 700,
                boxShadow: on
                  ? '0 6px 14px rgba(31,191,201,0.30), inset 0 1px 0 rgba(255,255,255,0.35)'
                  : '0 2px 6px rgba(15,42,74,0.06)',
              }}>
              <span style={{ display: 'inline-flex', filter: on ? 'brightness(0) invert(1)' : 'none' }}>
                {t.icon}
              </span>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Category-aware filter chips */}
      <div style={{
        display: 'flex', gap: 6, padding: '0 16px 14px', overflowX: 'auto',
      }}>
        {filters.map(f => {
          const on = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(on ? null : f)}
              style={{
                flex: '0 0 auto',
                padding: '7px 14px', borderRadius: 999,
                border: on ? `1.5px solid ${TEAL}` : '1px solid #ECEEF6',
                background: on ? 'rgba(31,191,201,0.10)' : '#fff',
                color: on ? TEAL : '#5C6B86',
                fontSize: 12, fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}>
              {f}
            </button>
          );
        })}
      </div>

      {/* Result cards */}
      <div style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, idx) => (
          <Card key={idx} style={{ padding: 16, borderRadius: 22 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: 'rgba(31,191,201,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {RESULT_TABS.find(t => t.id === tab).icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: TRIP_INK }}>{it.title}</div>
                  {it.tag && (
                    <span style={{ fontSize: 10, fontWeight: 800, color: TEAL, padding: '3px 8px', borderRadius: 999, background: 'rgba(31,191,201,0.12)', textTransform: 'uppercase', letterSpacing: 0.3 }}>
                      {it.tag}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: '#5C6B86', marginTop: 3, lineHeight: 1.4 }}>{it.sub}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: TRIP_INK }}>{it.price}</div>
                <button style={{
                  marginTop: 6,
                  padding: '6px 14px', borderRadius: 999,
                  border: 'none', cursor: 'pointer',
                  background: `linear-gradient(180deg, ${TEAL2} 0%, ${TEAL} 100%)`,
                  color: '#fff', fontSize: 12, fontWeight: 700,
                  boxShadow: '0 4px 10px rgba(31,191,201,0.30)',
                }}>Tanlash</button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <TabBar active="trip"/>
    </Frame>
  );
}

// ─── Trip screen data ─────────────────────────────────────────
const POPULAR_DESTS = [
  { id: 'dubai',    city: 'Dubai',     country: 'BAA',      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&auto=format&fit=crop' },
  { id: 'istanbul', city: 'Istanbul',  country: 'Turkiya',  img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&q=80&auto=format&fit=crop' },
  { id: 'bangkok',  city: 'Bangkok',   country: 'Tailand',  img: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400&q=80&auto=format&fit=crop' },
  { id: 'paris',    city: 'Paris',     country: 'Fransiya', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80&auto=format&fit=crop' },
  { id: 'bali',     city: 'Bali',      country: 'Indoneziya', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80&auto=format&fit=crop' },
];

const RECENT_SEARCHES = [
  { from: 'Toshkent', to: 'Dubai',    date: '12 May · 7 kun', service: 'Flight' },
  { from: 'Toshkent', to: 'Istanbul', date: '20 May · 5 kun', service: 'Tour'   },
  { from: 'Toshkent', to: 'Bali',     date: '1 Iyun · 10 kun', service: 'Hotel' },
];

const TRIP_CATS_NEW = [
  { id: 'travel',    label: 'Sayohat',    services: ['tours','flight','hotels'] },
  { id: 'rest',      label: 'Qo\'shimcha', services: ['excur','villas','esim'] },
  { id: 'transport', label: 'Transport',  services: ['taxi','xfer'] },
];
const ALL_SERVICES = ['tours','flight','hotels','esim','excur','villas','taxi','xfer'];

// Which services need a "From" field
const NEEDS_FROM = new Set(['flight','taxi','xfer']);
// Which services use duration instead of date range
const USES_DURATION = new Set(['esim']);
// Label overrides for destination field
const DEST_LABEL = {
  tours: 'Qaysi mamlakatga?', flight: 'Qayerga?', hotels: 'Qaysi shaharga?',
  esim: 'Qaysi mamlakat?', excur: 'Qaysi shaharga?', villas: 'Qaysi viloyatga?',
  taxi: 'Qayerga?', xfer: 'Qayerga?',
};
const FROM_LABEL = { flight: 'Qayerdan?', taxi: 'Qaysi aeroportdan?', xfer: 'Qayerdan?' };


// ═════════════════════════════════════════════════════════════
// SCREEN — LET'S TRIP
// ═════════════════════════════════════════════════════════════
const TRIP_RESULTS = {
  turlar: [
    { img:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600', title:'Antaliya, Turkiya', sub:'7 kecha · Ultra All Inclusive', regular:"7 920 000 so'm", premium:"7 200 000 so'm" },
    { img:'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600', title:'Istanbul, Turkiya', sub:'5 kecha · 2 kishi', regular:"5 610 000 so'm", premium:"5 100 000 so'm" },
    { img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600', title:'Jumeirah Beach, Dubai', sub:'5 kecha · Premium', regular:"10 780 000 so'm", premium:"9 800 000 so'm" },
    { img:'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600', title:'Downtown Dubai', sub:'5 kecha · 2 kishi', regular:"12 320 000 so'm", premium:"11 200 000 so'm" },
    { img:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600', title:'Paris, Fransiya', sub:'6 kecha · 2 kishi', regular:"14 300 000 so'm", premium:"13 000 000 so'm" },
    { img:'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600', title:'Bali, Indoneziya', sub:'10 kecha · All Inclusive', regular:"11 000 000 so'm", premium:"10 000 000 so'm" },
  ],
  excur: [
    { img:'https://images.unsplash.com/photo-1547555999-14e818e09e33?w=600', title:'Xiva safari', sub:'1 kun · Guruh bilan', regular:"495 000 so'm", premium:"450 000 so'm" },
    { img:'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600', title:'Eski Buxoro', sub:'1 kun · Gid bilan', regular:"418 000 so'm", premium:"380 000 so'm" },
    { img:'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600', title:'Samarqand', sub:'1 kun · Premium tur', regular:"572 000 so'm", premium:"520 000 so'm" },
    { img:'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600', title:'Istanbul', sub:'1 kun · Ekskursiya', regular:"660 000 so'm", premium:"600 000 so'm" },
    { img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600', title:'Dubai', sub:'1 kun · Premium gid', regular:"880 000 so'm", premium:"800 000 so'm" },
    { img:'https://images.unsplash.com/photo-1613044490851-0aa86cd5e65f?w=600', title:'Tashkent City', sub:'Yarim kun · Shahar turi', regular:"275 000 so'm", premium:"250 000 so'm" },
  ],
  esim: [
    { img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', title:'Yevropa · 7 kun', sub:'34 davlat · Cheksiz 5G', regular:"165 000 so'm", premium:"150 000 so'm" },
    { img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', title:'Osiyo · 14 kun', sub:'20 davlat · 10 GB', regular:"198 000 so'm", premium:"180 000 so'm" },
    { img:'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=600', title:'Global · 30 kun', sub:'150+ davlat · 20 GB', regular:"440 000 so'm", premium:"400 000 so'm" },
    { img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600', title:'BAA & Turkiya · 7 kun', sub:'2 davlat · Cheksiz', regular:"121 000 so'm", premium:"110 000 so'm" },
  ],
  hotel: [
    { img:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600', title:'5★ Atlantis, The Palm', sub:'Crescent Road, The Palm, Dubai', rating:9.3, reviews:'5,820', regular:"40 304 000 so'm", premium:"38 477 000 so'm" },
    { img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600', title:'5★ Hyatt Regency Tashkent', sub:"Navoiy ko'chasi, Toshkent", rating:8.9, reviews:'2,140', regular:"2 640 000 so'm", premium:"2 400 000 so'm" },
    { img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600', title:'5★ Hilton Tashkent City', sub:"Shahar markazi, Toshkent", rating:9.1, reviews:'3,205', regular:"2 310 000 so'm", premium:"2 100 000 so'm" },
    { img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600', title:'5★ Rixos Premium Antalya', sub:'Konyaaltı sohili, Antaliya', rating:9.4, reviews:'7,910', regular:"8 800 000 so'm", premium:"8 000 000 so'm" },
  ],
  aviabilet: [
    { airline:'Uzbekistan Airways', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Uzbekistan_Airways_logo.svg/200px-Uzbekistan_Airways_logo.svg.png', tag:'Eng arzon', from:'TAS', to:'DXB', dep:'07:15', arr:'11:00', depDate:'8 May, Ju', arrDate:'8 May, Ju', dur:'4s 45m', stops:'to\'g\'ri', baggage:false, retDep:'12:30', retArr:'17:30', retDur:'4s', retDate:'20 May, Ch', regular:"9 480 000 so'm", premium:"8 619 000 so'm" },
    { airline:'Emirates', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png', tag:'Premium', from:'TAS', to:'DXB', dep:'04:05', arr:'07:50', depDate:'8 May, Ju', arrDate:'8 May, Ju', dur:'3s 45m', stops:'to\'g\'ri', baggage:true, retDep:'21:30', retArr:'01:25', retDur:'3s 55m', retDate:'20 May, Ch', regular:"14 300 000 so'm", premium:"13 000 000 so'm" },
    { airline:'Fly Dubai', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flydubai_logo.svg/200px-Flydubai_logo.svg.png', tag:'Kechki', from:'TAS', to:'DXB', dep:'08:05', arr:'21:50', depDate:'8 May, Ju', arrDate:'8 May, Ju', dur:'14s 45m', stops:'1 transit', baggage:false, retDep:'13:00', retArr:'09:35', retDur:'15s', retDate:'20 May, Ch', regular:"7 920 000 so'm", premium:"7 200 000 so'm" },
    { airline:'Air India', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Air_India_Logo.svg/200px-Air_India_Logo.svg.png', tag:'Tejamkor', from:'TAS', to:'DXB', dep:'15:20', arr:'06:30', depDate:'8 May, Ju', arrDate:'9 May, Sh', dur:'12s 10m', stops:'1 transit', baggage:true, retDep:'07:50', retArr:'20:40', retDur:'10s 50m', retDate:'20 May, Ch', regular:"6 600 000 so'm", premium:"6 000 000 so'm" },
  ],
  rentcar: [
    { img:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600', title:'Toyota Camry', sub:'Sedan · Avtomatik · 5 kishi', regular:"495 000 so'm", premium:"450 000 so'm" },
    { img:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600', title:'Mercedes-Benz E-Class', sub:'Biznes · Avtomatik · 5 kishi', regular:"1 045 000 so'm", premium:"950 000 so'm" },
    { img:'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=600', title:'Hyundai Sonata', sub:'Sedan · Avtomatik · 5 kishi', regular:"385 000 so'm", premium:"350 000 so'm" },
    { img:'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600', title:'BMW X5', sub:'Krossover · 7 kishi · 4WD', regular:"1 540 000 so'm", premium:"1 400 000 so'm" },
  ],
};

function useSheetViewport() {
  const [vvh, setVvh] = React.useState(typeof window !== 'undefined' ? (window.visualViewport?.height || window.innerHeight) : 800);
  const [kbOffset, setKbOffset] = React.useState(0);
  React.useEffect(() => {
    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    if (!vv) return;
    const handler = () => { setVvh(vv.height); setKbOffset(Math.max(0, window.innerHeight - vv.height)); };
    vv.addEventListener('resize', handler);
    vv.addEventListener('scroll', handler);
    return () => { vv.removeEventListener('resize', handler); vv.removeEventListener('scroll', handler); };
  }, []);
  return { sheetH: Math.round(vvh * 0.88), sheetXform: kbOffset > 0 ? `translateY(-${kbOffset}px)` : 'none' };
}

function ScreenTrip() {
  const [open, setOpen] = React.useState({});
  const [page, setPage] = React.useState(null);
  const [sheet, setSheet] = React.useState(null); // 'all'
  const [hintShown, setHintShown] = React.useState(true);
  const [esimCountry, setEsimCountry] = React.useState(null);
  const [esimTab, setEsimTab] = React.useState('standard');
  const [esimSelected, setEsimSelected] = React.useState(null);
  const [flightDetail, setFlightDetail] = React.useState(null);
  const [tourDetail, setTourDetail] = React.useState(null);
  const [tourGallery, setTourGallery] = React.useState(0);
  const [tourNights, setTourNights] = React.useState(7);
  const [tourRoom, setTourRoom] = React.useState(0);
  const [tourRoomDetail, setTourRoomDetail] = React.useState(null);
  const [tourSelDay, setTourSelDay] = React.useState(17);
  const [tourMonthOffset, setTourMonthOffset] = React.useState(0);
  const [tourExpanded, setTourExpanded] = React.useState(false);
  const [tourRoomImg, setTourRoomImg] = React.useState({0:0,1:0});
  const tourSwipeX = React.useRef(0);
  React.useEffect(() => {
    if (page && hintShown) {
      const t = setTimeout(() => setHintShown(false), 5000);
      return () => clearTimeout(t);
    }
  }, [page, hintShown]);
  const [preSheet, setPreSheet] = React.useState(null);
  const [tripQuery, setTripQuery] = React.useState({});
  const [topScrolled, setTopScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setTopScrolled(window.scrollY > 4);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const [route, setRoute] = React.useState({ from:'Toshkent', to:'Dubai' });
  const [dates, setDates] = React.useState({ start:'15 May', end:'20 May', nights:5 });
  const [guests, setGuests] = React.useState({ adults:2, children:0 });
  const toggle = (key) => setOpen(o => ({ ...o, [key]: !o[key] }));

  const T = '#0099A8';
  const TBG = '#E0F2F3';
  const SH = '0 1px 2px rgba(15,27,61,0.03), 0 12px 32px rgba(15,27,61,0.07), 0 28px 64px rgba(15,27,61,0.05)';
  const card = { background:'#fff', borderRadius:24, boxShadow:SH, border:'1px solid rgba(0,153,168,0.10)', overflow:'hidden', marginBottom:16 };
  const rowStyle = { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 20px', cursor:'pointer' };
  const iBox = { width:46, height:46, borderRadius:'50%', background:T, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:'0 6px 16px rgba(0,153,168,0.35), 0 2px 6px rgba(0,153,168,0.20), inset 0 1px 0 rgba(255,255,255,0.25)' };
  const iWrap = { display:'flex', filter:'brightness(0) invert(1)' };
  const mkBtn = (mt=16) => ({ width:'100%', background:T, color:'#fff', border:'none', borderRadius:20, padding:'13px 0', fontSize:14, fontWeight:600, cursor:'pointer', marginTop:mt, boxShadow:'0 6px 16px rgba(0,153,168,0.35),0 2px 6px rgba(0,153,168,0.20),inset 0 1px 0 rgba(255,255,255,0.25)' });
  const mc = { background:TBG, padding:'8px 10px', borderRadius:14, border:'1px solid rgba(0,153,168,0.15)' };

  const Chevron = ({on}) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.2" strokeLinecap="round" style={{transform:on?'rotate(180deg)':'none',transition:'0.25s'}}>
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
  const Ico = ({d}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>;
  const Head = ({icon,label,desc,k}) => (
    <div onClick={()=>toggle(k)} style={rowStyle}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={iBox}><span style={iWrap}>{icon}</span></div>
        <div>
          <div style={{fontSize:15,fontWeight:700,color:'#0A1F21',lineHeight:1.2}}>{label}</div>
          {desc && <div style={{fontSize:11,color:'#7A9EA2',marginTop:1,fontWeight:400}}>{desc}</div>}
        </div>
      </div>
      <Chevron on={open[k]}/>
    </div>
  );
  const Slide = ({img,badge,title,sub,prices}) => (
    <div style={{flexShrink:0,width:'85%',scrollSnapAlign:'center'}}>
      <div style={{width:'100%',aspectRatio:'16/9',borderRadius:16,overflow:'hidden',position:'relative',marginBottom:10,border:'1px solid rgba(0,153,168,0.12)'}}>
        <img src={img} alt={title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
        {badge && <div style={{position:'absolute',top:8,left:8,background:T,color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999}}>{badge}</div>}
      </div>
      <div style={{padding:'0 4px 8px'}}>
        <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginBottom:2}}>{title}</div>
        {sub && <div style={{fontSize:11,color:'#5C7577',marginBottom:8}}>{sub}</div>}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
          {prices.map((p,i)=><div key={i} style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.label}</div><div style={{fontSize:11,fontWeight:700,color:T}}>{p.price}</div></div>)}
        </div>
      </div>
    </div>
  );

  const planeIco = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>;
  const compassIco = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/></svg>;
  const globeIco = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18M3 12h18"/></svg>;

  const PAGE_LABELS = { turlar:'Turlar', excur:'Ekskursiyalar', esim:'eSIM', hotel:'Mehmonxonalar', aviabilet:'Aviabiletlar' };
  const FILTERS = { turlar:['Arzon narx','Ovqat','Yulduz','Narx'], excur:['Arzon narx','Davlat','Davomiylik'], esim:['Arzon narx','Hudud','GB'], hotel:['Saralash','Yulduz','Bekor qilish bepul'], aviabilet:['Bagaj','To\'g\'ri reyslar'], rentcar:['Arzon narx','Klass','Avtomatik'] };

  /* ── Bottom Sheet ── */
  /* ── Unified Bottom Sheet ── */
  const BottomSheet = () => {
    const { sheetH, sheetXform } = useSheetViewport();
    const [fromVal, setFromVal] = React.useState(route.from);
    const [toVal, setToVal] = React.useState(route.to);
    const [nightsVal, setNightsVal] = React.useState(dates.nights);
    const [adultsVal, setAdultsVal] = React.useState(guests.adults);
    const [childVal, setChildVal] = React.useState(guests.children);
    if (!sheet || sheet !== 'all') return null;
    const close = () => setSheet(null);
    const inp = { width:'100%', padding:'13px 16px', border:'1.5px solid #E8EAF3', borderRadius:14, fontSize:14, color:'#0A1F21', outline:'none', boxSizing:'border-box', background:'#F4F5FA' };
    const sec = { fontSize:12, fontWeight:700, color:'#9AA1B8', textTransform:'uppercase', letterSpacing:0.8, marginBottom:8, marginTop:20, display:'block' };
    const cnt = (val, set, min=0) => (
      <div style={{display:'flex',alignItems:'center',gap:0,border:'1.5px solid #E8EAF3',borderRadius:12,overflow:'hidden'}}>
        <button onClick={()=>set(v=>Math.max(min,v-1))} style={{width:44,height:44,border:'none',background:'none',fontSize:22,color:T,cursor:'pointer',lineHeight:1}}>−</button>
        <span style={{fontSize:16,fontWeight:700,color:'#0A1F21',width:32,textAlign:'center'}}>{val}</span>
        <button onClick={()=>set(v=>v+1)} style={{width:44,height:44,border:'none',background:'none',fontSize:22,color:T,cursor:'pointer',lineHeight:1}}>+</button>
      </div>
    );
    const save = () => {
      setRoute({ from:fromVal, to:toVal });
      setDates(d=>({ ...d, nights:nightsVal }));
      setGuests({ adults:adultsVal, children:childVal });
      close();
    };
    return (
      <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:100,display:'flex',alignItems:'flex-end'}} onClick={close}>
        <div style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 20px 36px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()}>
          <div style={{width:40,height:4,borderRadius:999,background:'#DDE0EB',margin:'14px auto 4px'}}/>
          <div style={{fontSize:18,fontWeight:800,color:'#0A1F21',marginTop:16,marginBottom:4}}>Qidiruvni sozlash</div>

          {/* Route — grouped card like screenshot */}
          <div style={{background:'#F4F5FA',borderRadius:18,overflow:'hidden',marginBottom:12,marginTop:20,position:'relative'}}>
            <div style={{display:'flex',alignItems:'center',padding:'14px 16px'}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:T,flexShrink:0,marginRight:12}}/>
              <input value={fromVal} onChange={e=>setFromVal(e.target.value)} placeholder="Qayerdan" style={{flex:1,border:'none',background:'none',fontSize:15,fontWeight:600,color:'#0A1F21',outline:'none'}}/>
            </div>
            <div style={{height:1,background:'#E8EAF3',marginLeft:36}}/>
            <div style={{display:'flex',alignItems:'center',padding:'14px 16px'}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#DDE0EB',flexShrink:0,marginRight:12}}/>
              <input value={toVal} onChange={e=>setToVal(e.target.value)} placeholder="Qayerga" style={{flex:1,border:'none',background:'none',fontSize:15,fontWeight:600,color:'#0A1F21',outline:'none'}}/>
            </div>
            {/* Swap button */}
            <button onClick={()=>{const t=fromVal;setFromVal(toVal);setToVal(t);}} style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',width:34,height:34,borderRadius:999,background:'#fff',border:'1.5px solid #E8EAF3',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.3" strokeLinecap="round"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
            </button>
          </div>

          {/* Dates + Guests row */}
          <div style={{display:'flex',gap:10,marginBottom:12}}>
            {/* Dates */}
            <div style={{flex:1,background:'#F4F5FA',borderRadius:16,padding:'13px 14px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{dates.start} · {nightsVal} kecha</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            {/* Guests */}
            <div style={{flex:1,background:'#F4F5FA',borderRadius:16,padding:'13px 14px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{adultsVal + childVal} kishi</div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>

          {/* Guests counters */}
          <div style={{background:'#F4F5FA',borderRadius:16,overflow:'hidden',marginBottom:4}}>
            {[{label:'Kattalar',sub:'12+',val:adultsVal,set:setAdultsVal,min:1},{label:'Bolalar',sub:'2–11',val:childVal,set:setChildVal,min:0}].map((g,i,arr)=>(
              <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 16px',borderBottom:i<arr.length-1?'1px solid #E8EAF3':'none'}}>
                <span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{g.label} <span style={{fontSize:11,color:'#9AA1B8',fontWeight:400}}>{g.sub}</span></span>
                {cnt(g.val,g.set,g.min)}
              </div>
            ))}
          </div>

          <button onClick={save} style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:18,padding:'15px 0',fontSize:15,fontWeight:700,cursor:'pointer',marginTop:8}}>Qidirish</button>
        </div>
      </div>
    );
  };

  /* ── Pre-Search Bottom Sheet (compact) ── */
  const PreSheet = () => {
    const { sheetH, sheetXform } = useSheetViewport();
    const [taxiTab, setTaxiTab] = React.useState('pickup');
    const [fromVal, setFromVal] = React.useState('');
    const [toVal, setToVal] = React.useState('');
    const [dateStart, setDateStart] = React.useState('');
    const [dateEnd, setDateEnd] = React.useState('');
    const [nights, setNights] = React.useState(7);
    const [adults, setAdults] = React.useState(2);
    const [children, setChildren] = React.useState(0);
    const [infants, setInfants] = React.useState(0);
    const [hotels, setHotels] = React.useState([]);
    const [flightClass, setFlightClass] = React.useState('econom');
    const [country, setCountry] = React.useState('');
    const [passengerCount, setPassengerCount] = React.useState(1);
    const [pickupTime, setPickupTime] = React.useState('');
    const [pickupLoc, setPickupLoc] = React.useState('Shahar');
    const [rentFrom, setRentFrom] = React.useState('');
    const [rentTo, setRentTo] = React.useState('');
    const [rentPickupLoc, setRentPickupLoc] = React.useState('');
    if (!preSheet) return null;
    const close = () => setPreSheet(null);

    // Compact unified row inside a card
    const cardWrap = { background:'#F7F8FB', borderRadius:16, padding:'0 14px', marginBottom:10 };
    const row = (i, last) => ({ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'11px 0', borderBottom: last ? 'none' : '1px solid #E8EAF3', minHeight:22 });
    const lab = { fontSize:12, color:'#7A8190', fontWeight:600, flexShrink:0, marginRight:12 };
    const valIn = { flex:1, border:'none', background:'none', fontSize:14, fontWeight:600, color:'#0A1F21', outline:'none', textAlign:'right', fontFamily:'inherit', minWidth:0 };
    const cnt = (val, set, min=0) => (
      <div style={{display:'flex',alignItems:'center',gap:0}}>
        <button onClick={()=>set(v=>Math.max(min,v-1))} style={{width:28,height:28,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',lineHeight:1,padding:0}}>−</button>
        <span style={{fontSize:15,fontWeight:700,color:'#0A1F21',width:28,textAlign:'center'}}>{val}</span>
        <button onClick={()=>set(v=>v+1)} style={{width:28,height:28,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',lineHeight:1,padding:0}}>+</button>
      </div>
    );

    // Route card with two tappable rows + swap (opens city picker)
    const routeCard = (fLabel='Qayerdan', tLabel='Qayerga') => (
      <div style={{background:'#F7F8FB',borderRadius:16,padding:'4px 14px',marginBottom:10,position:'relative'}}>
        <div onClick={()=>setNested('route-from')} style={{display:'flex',alignItems:'center',padding:'12px 0',borderBottom:'1px solid #E8EAF3',cursor:'pointer'}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:T,marginRight:10}}/>
          <span style={{flex:1,fontSize:14,fontWeight:600,color:fromVal?'#0A1F21':'#9AA1B8',paddingRight:40,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{fromVal||fLabel}</span>
        </div>
        <div onClick={()=>setNested('route-to')} style={{display:'flex',alignItems:'center',padding:'12px 0',cursor:'pointer'}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:'#DDE0EB',marginRight:10}}/>
          <span style={{flex:1,fontSize:14,fontWeight:600,color:toVal?'#0A1F21':'#9AA1B8',paddingRight:40,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{toVal||tLabel}</span>
        </div>
        <button onClick={(e)=>{e.stopPropagation();const t=fromVal;setFromVal(toVal);setToVal(t);}} style={{position:'absolute',right:10,top:'50%',transform:'translateY(-50%)',width:30,height:30,borderRadius:'50%',background:'#fff',border:'1.5px solid #E8EAF3',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.4" strokeLinecap="round"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>
        </button>
      </div>
    );

    // Compact 2-col split row (used for date+nights, datetime, etc)
    const splitCard = (a, b) => (
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:10}}>
        <div style={{background:'#F7F8FB',borderRadius:14,padding:'10px 14px'}}>
          <div style={lab}>{a.label}</div>
          <input value={a.val} onChange={e=>a.set(e.target.value)} placeholder={a.ph} style={{width:'100%',border:'none',background:'none',fontSize:14,fontWeight:700,color:'#0A1F21',outline:'none',fontFamily:'inherit',marginTop:2}}/>
        </div>
        <div style={{background:'#F7F8FB',borderRadius:14,padding:'10px 14px'}}>
          <div style={lab}>{b.label}</div>
          <input value={b.val} onChange={e=>b.set(e.target.value)} placeholder={b.ph} style={{width:'100%',border:'none',background:'none',fontSize:14,fontWeight:700,color:'#0A1F21',outline:'none',fontFamily:'inherit',marginTop:2}}/>
        </div>
      </div>
    );

    // Single inline input row in a card
    const singleCard = (label, val, set, ph, readOnly=false) => (
      <div style={{...cardWrap, padding:'10px 14px'}}>
        <div style={lab}>{label}</div>
        <input value={val} onChange={set?(e=>set(e.target.value)):undefined} readOnly={readOnly} placeholder={ph} style={{width:'100%',border:'none',background:'none',fontSize:14,fontWeight:700,color: readOnly?T:'#0A1F21',outline:'none',fontFamily:'inherit',marginTop:2}}/>
      </div>
    );

    // Guests block (compact, all in one card)
    const guestsCard = (showInfants=true) => (
      <div style={cardWrap}>
        <div style={row(0)}>
          <div><div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>Kattalar</div><div style={{fontSize:11,color:'#9AA1B8'}}>12+</div></div>
          {cnt(adults,setAdults,1)}
        </div>
        <div style={row(1, !showInfants)}>
          <div><div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>Bolalar</div><div style={{fontSize:11,color:'#9AA1B8'}}>2–11</div></div>
          {cnt(children,setChildren,0)}
        </div>
        {showInfants && (
          <div style={row(2, true)}>
            <div><div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>Chaqaloq</div><div style={{fontSize:11,color:'#9AA1B8'}}>0–2</div></div>
            {cnt(infants,setInfants,0)}
          </div>
        )}
      </div>
    );

    const chipPill = (sel, label, onClick) => (
      <button onClick={onClick} style={{padding:'7px 14px',borderRadius:999,border:'1.5px solid',borderColor:sel?T:'#E8EAF3',background:sel?T:'#fff',color:sel?'#fff':'#5C7577',fontSize:12,fontWeight:600,cursor:'pointer'}}>{label}</button>
    );

    const [nested, setNested] = React.useState(null);
    const [search, setSearch] = React.useState('');
    const [hotelSearch, setHotelSearch] = React.useState('');

    const submit = () => {
      setTripQuery({ from:fromVal, to:toVal, dateStart, dateEnd, nights, adults, children, infants, hotels:[...hotels], flightClass, country, rentFrom, rentTo, rentLoc:rentPickupLoc });
      setPage(preSheet);
      setPreSheet(null);
    };
    const titles = { turlar:"Tur qidirish", excur:"Davlat tanlang", esim:"Davlat tanlang", hotel:"Mehmonxona", aviabilet:"Aviabilet", rentcar:"Avtomobil ijarasi" };

    // ── Clickable display card (used for hotel multiselect, dates) ──
    const tapCard = (label, value, ph, onClick) => (
      <div onClick={onClick} style={{...cardWrap, padding:'10px 14px', cursor:'pointer'}}>
        <div style={lab}>{label}</div>
        <div style={{fontSize:14,fontWeight:700,color: value?'#0A1F21':'#9AA1B8',marginTop:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{value||ph}</div>
      </div>
    );
    const tapSplit = (a, b) => (
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:10}}>
        <div onClick={a.onClick} style={{background:'#F7F8FB',borderRadius:14,padding:'10px 14px',cursor:'pointer'}}>
          <div style={lab}>{a.label}</div>
          <div style={{fontSize:14,fontWeight:700,color:a.val?'#0A1F21':'#9AA1B8',marginTop:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{a.val||a.ph}</div>
        </div>
        <div onClick={b.onClick} style={{background:'#F7F8FB',borderRadius:14,padding:'10px 14px',cursor:'pointer'}}>
          <div style={lab}>{b.label}</div>
          <div style={{fontSize:14,fontWeight:700,color:b.val?'#0A1F21':'#9AA1B8',marginTop:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{b.val||b.ph}</div>
        </div>
      </div>
    );

    // ── Country lists ──
    const ESIM_POPULAR = ['Misr','Tailand','Turkiya','BAA','Vietnam'];
    const ESIM_ALL = ['Albaniya','Avstraliya','Avstriya','Belgiya','Filippin','Fransiya','Germaniya','Hindiston','Indoneziya','Italiya','Janubiy Koreya','Kanada','Malayziya','Misr','Niderlandiya','Polsha','Portugaliya','Singapur','Ispaniya','Shveytsariya','Tailand','Turkiya','BAA','Vietnam','AQSh','Buyuk Britaniya','Yaponiya','Xitoy'];
    const EXCUR_LIST = ["O'zbekiston",'Turkiya','Birlashgan Arab Amirliklari','Misr','Vietnam','Tailand'];
    const FLAGS = {
      "O'zbekiston":'🇺🇿', 'Turkiya':'🇹🇷', 'Birlashgan Arab Amirliklari':'🇦🇪', 'BAA':'🇦🇪',
      'Misr':'🇪🇬', 'Vietnam':'🇻🇳', 'Tailand':'🇹🇭', 'Albaniya':'🇦🇱', 'Avstraliya':'🇦🇺',
      'Avstriya':'🇦🇹', 'Belgiya':'🇧🇪', 'Filippin':'🇵🇭', 'Fransiya':'🇫🇷', 'Germaniya':'🇩🇪',
      'Hindiston':'🇮🇳', 'Indoneziya':'🇮🇩', 'Italiya':'🇮🇹', 'Janubiy Koreya':'🇰🇷',
      'Kanada':'🇨🇦', 'Malayziya':'🇲🇾', 'Niderlandiya':'🇳🇱', 'Polsha':'🇵🇱',
      'Portugaliya':'🇵🇹', 'Singapur':'🇸🇬', 'Ispaniya':'🇪🇸', 'Shveytsariya':'🇨🇭',
      'AQSh':'🇺🇸', 'Buyuk Britaniya':'🇬🇧', 'Yaponiya':'🇯🇵', 'Xitoy':'🇨🇳'
    };
    const flagOf = (name) => FLAGS[name] || '🏳️';
    const HOTEL_LIST = ['Hilton Tashkent','Hyatt Regency','Ramada','Wyndham','Radisson Blu','Lotte City','Movenpick','Marriott','Sheraton','InterContinental','Burj Al Arab','Atlantis Palm','Jumeirah Beach','Address Downtown','Four Seasons'];

    // ── Countries with their main cities (route, rentcar, hotel-country pickers) ──
    const COUNTRY_CITY = [
      {flag:'🇺🇿', country:'Uzbekistan', cities:['Tashkent','Samarkand','Bukhara','Khiva','Namangan']},
      {flag:'🇦🇲', country:'Armenia',    cities:['Yerevan','Gyumri']},
      {flag:'🇦🇹', country:'Austria',    cities:['Vienna','Salzburg','Innsbruck']},
      {flag:'🇦🇿', country:'Azerbaijan', cities:['Baku','Ganja']},
      {flag:'🇧🇭', country:'Bahrain',    cities:['Manama']},
      {flag:'🇨🇿', country:'Czechia',    cities:['Prague','Brno']},
      {flag:'🇪🇬', country:'Egypt',      cities:['Cairo','Alexandria','Hurghada','Sharm El Sheikh']},
      {flag:'🇫🇷', country:'France',     cities:['Paris','Nice','Marseille']},
      {flag:'🇩🇪', country:'Germany',    cities:['Berlin','Munich','Frankfurt']},
      {flag:'🇮🇳', country:'India',      cities:['Delhi','Mumbai','Goa']},
      {flag:'🇮🇩', country:'Indonesia',  cities:['Jakarta','Bali','Surabaya']},
      {flag:'🇮🇹', country:'Italy',      cities:['Rome','Milan','Venice']},
      {flag:'🇯🇵', country:'Japan',      cities:['Tokyo','Osaka','Kyoto']},
      {flag:'🇰🇷', country:'Korea',      cities:['Seoul','Busan']},
      {flag:'🇲🇾', country:'Malaysia',   cities:['Kuala Lumpur','Penang']},
      {flag:'🇷🇺', country:'Russia',     cities:['Moscow','Saint Petersburg']},
      {flag:'🇪🇸', country:'Spain',      cities:['Madrid','Barcelona','Valencia']},
      {flag:'🇹🇭', country:'Thailand',   cities:['Bangkok','Phuket','Pattaya']},
      {flag:'🇹🇷', country:'Türkiye',    cities:['Istanbul','Antalya','Ankara','Bodrum']},
      {flag:'🇦🇪', country:'UAE',        cities:['Dubai','Abu Dhabi','Sharjah']},
      {flag:'🇺🇸', country:'USA',        cities:['New York','Los Angeles','Miami']},
      {flag:'🇻🇳', country:'Vietnam',    cities:['Hanoi','Ho Chi Minh','Da Nang']},
    ];

    // ── Reusable scroll-fade sheet shell with country/city picker ──
    const CityCountryPicker = ({onPick, mode='city'}) => {
      // mode: 'city' → returns "City, Country"; 'country' → returns "Country"
      const [s, setS] = React.useState('');
      const [scrolled, setScrolled] = React.useState(false);
      const q = s.toLowerCase().trim();
      const filtered = q ? COUNTRY_CITY.map(g => ({
        ...g,
        match: g.country.toLowerCase().includes(q),
        cities: g.cities.filter(c => c.toLowerCase().includes(q) || g.country.toLowerCase().includes(q))
      })).filter(g => g.match || g.cities.length>0) : COUNTRY_CITY;
      return (
        <div onScroll={e=>setScrolled(e.currentTarget.scrollTop > 4)} style={{margin:'-14px -18px 0',padding:'0 18px',maxHeight:'76vh',overflowY:'auto'}}>
          <div style={{position:'sticky',top:0,padding:'12px 0',background: scrolled ? '#fff' : 'transparent',transition:'background 0.18s', boxShadow: scrolled ? '0 4px 14px rgba(10,31,33,0.06)' : 'none', marginLeft:-18, marginRight:-18, paddingLeft:18, paddingRight:18, zIndex:5}}>
            <div style={{display:'flex',alignItems:'center',background:scrolled?'#F4F5FA':'#F7F8FB',borderRadius:14,padding:'10px 14px',transition:'background 0.18s'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input value={s} onChange={e=>setS(e.target.value)} placeholder="Davlat yoki shahar..." style={{flex:1,border:'none',background:'none',outline:'none',marginLeft:10,fontSize:14,fontFamily:'inherit',color:'#0A1F21'}}/>
            </div>
          </div>
          <div style={{paddingBottom:24}}>
            {q ? (
              // FLAT search results
              (() => {
                const flat = mode==='country'
                  ? COUNTRY_CITY.filter(g => g.country.toLowerCase().includes(q)).map(g=>({flag:g.flag,primary:g.country,secondary:''}))
                  : COUNTRY_CITY.flatMap(g =>
                      g.cities
                        .filter(c => c.toLowerCase().includes(q) || g.country.toLowerCase().includes(q))
                        .map(c => ({flag:g.flag,primary:c,secondary:g.country,country:g.country}))
                    );
                if (flat.length===0) return <div style={{padding:'30px 0',textAlign:'center',color:'#9AA1B8',fontSize:13}}>Topilmadi</div>;
                return flat.map((r,i)=>(
                  <div key={i} onClick={()=>onPick(mode==='country'?r.primary:`${r.primary}, ${r.country}`)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 4px',cursor:'pointer',borderBottom:i<flat.length-1?'1px solid #F0F2F5':'none'}}>
                    <div style={{display:'flex',alignItems:'center',gap:12}}>
                      <span style={{fontSize:22,lineHeight:1}}>{r.flag}</span>
                      <div>
                        <div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{r.primary}</div>
                        {r.secondary && <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>{r.secondary}</div>}
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
                  </div>
                ));
              })()
            ) : (
              // GROUPED list
              COUNTRY_CITY.map(g => (
                <div key={g.country} style={{marginBottom:6}}>
                  <div onClick={mode==='country'?()=>onPick(g.country):undefined} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 4px',cursor:mode==='country'?'pointer':'default',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center',gap:10}}>
                      <span style={{fontSize:22,lineHeight:1}}>{g.flag}</span>
                      <span style={{fontSize:13,fontWeight:700,color:'#0A1F21',letterSpacing:0.2}}>{g.country}</span>
                    </div>
                    {mode==='country' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>}
                  </div>
                  {mode==='city' && g.cities.map(city => (
                    <div key={city} onClick={()=>onPick(`${city}, ${g.country}`)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 4px 10px 36px',cursor:'pointer',borderBottom:'1px solid #F0F2F5'}}>
                      <span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{city}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      );
    };

    // ── Country / hotel search-list helper ──
    const SearchList = ({items, onPick, placeholder='Qidiruv...', selected=[], multi=false, withFlags=false}) => {
      const [s, setS] = React.useState('');
      const filtered = items.filter(i => (typeof i==='string'?i:i.name).toLowerCase().includes(s.toLowerCase()));
      return (
        <>
          <div style={{position:'sticky',top:0,background:'#fff',padding:'4px 0 12px',marginTop:-2,zIndex:5}}>
            <div style={{display:'flex',alignItems:'center',background:'#F7F8FB',borderRadius:14,padding:'10px 14px'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input value={s} onChange={e=>setS(e.target.value)} placeholder={placeholder} style={{flex:1,border:'none',background:'none',outline:'none',marginLeft:10,fontSize:14,fontFamily:'inherit',color:'#0A1F21'}}/>
            </div>
          </div>
          <div style={{maxHeight:'52vh',overflowY:'auto',margin:'0 -4px'}}>
            {filtered.map((it, i) => {
              const name = typeof it==='string'?it:it.name;
              const isSel = selected.includes(name);
              return (
                <div key={i} onClick={()=>onPick(name)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 10px',cursor:'pointer',borderBottom:i<filtered.length-1?'1px solid #F0F2F5':'none'}}>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    {withFlags && <span style={{fontSize:22,lineHeight:1}}>{flagOf(name)}</span>}
                    <span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{name}</span>
                  </div>
                  {multi ? (
                    <div style={{width:22,height:22,borderRadius:6,border:'2px solid',borderColor:isSel?T:'#DDE0EB',background:isSel?T:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      {isSel && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>}
                    </div>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
                  )}
                </div>
              );
            })}
            {filtered.length===0 && <div style={{padding:'20px 10px',textAlign:'center',color:'#9AA1B8',fontSize:13}}>Topilmadi</div>}
          </div>
        </>
      );
    };

    // ── Calendar grid ──
    const monthsUz = ['yanv','fevr','mart','apr','may','iyun','iyul','avg','sent','okt','noya','dek'];
    const monthsFull = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];
    const fmtDate = (d) => `${d.getDate()}-${monthsUz[d.getMonth()]}, ${d.getFullYear()}`;
    const Calendar = ({picked, setPicked}) => {
      const today = new Date(); today.setHours(0,0,0,0);
      const [view, setView] = React.useState(() => ({y: today.getFullYear(), m: today.getMonth()}));
      const first = new Date(view.y, view.m, 1);
      const last = new Date(view.y, view.m+1, 0);
      const startDow = (first.getDay()+6)%7; // Mon=0
      const cells = [];
      for (let i=0; i<startDow; i++) cells.push(null);
      for (let d=1; d<=last.getDate(); d++) cells.push(new Date(view.y, view.m, d));
      const navBtn = { width:32, height:32, borderRadius:'50%', border:'1.5px solid #E8EAF3', background:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', padding:0, color:'#0A1F21', fontSize:18, fontWeight:600 };
      return (
        <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <button onClick={()=>setView(v=>v.m===0?{y:v.y-1,m:11}:{y:v.y,m:v.m-1})} style={navBtn}>‹</button>
            <div style={{fontSize:15,fontWeight:700,color:'#0A1F21'}}>{monthsFull[view.m]} {view.y}</div>
            <button onClick={()=>setView(v=>v.m===11?{y:v.y+1,m:0}:{y:v.y,m:v.m+1})} style={navBtn}>›</button>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4,marginBottom:6}}>
            {['Du','Se','Cho','Pa','Ju','Sh','Ya'].map(d=><div key={d} style={{textAlign:'center',fontSize:11,fontWeight:700,color:'#9AA1B8',padding:'4px 0'}}>{d}</div>)}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:4}}>
            {cells.map((d,i) => {
              if (!d) return <div key={i}/>;
              const past = d < today;
              const sel = picked && d.toDateString()===picked.toDateString();
              const isToday = d.toDateString()===today.toDateString();
              return (
                <button key={i} disabled={past} onClick={()=>setPicked(d)} style={{aspectRatio:'1',border:isToday&&!sel?'1.5px solid '+T:'none',borderRadius:10,background:sel?T:'transparent',color:sel?'#fff':(past?'#DDE0EB':'#0A1F21'),fontSize:13,fontWeight:sel?700:500,cursor:past?'default':'pointer',padding:0}}>{d.getDate()}</button>
              );
            })}
          </div>
        </div>
      );
    };
    const DatePicker = ({onPick, withTime=false, withNights=false}) => {
      const [time, setTime] = React.useState('10:00');
      const [picked, setPicked] = React.useState(null);
      const [n, setN] = React.useState(7);
      return (
        <div>
          <Calendar picked={picked} setPicked={setPicked}/>
          {withTime && (
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',background:'#F7F8FB',borderRadius:14,marginTop:14}}>
              <span style={{fontSize:13,fontWeight:600,color:'#0A1F21'}}>Soat</span>
              <input value={time} onChange={e=>setTime(e.target.value)} placeholder="10:00" style={{border:'none',background:'#fff',padding:'8px 12px',borderRadius:10,fontSize:14,fontWeight:700,color:'#0A1F21',width:80,textAlign:'center',outline:'none',fontFamily:'inherit'}}/>
            </div>
          )}
          {withNights && (
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',background:'#F7F8FB',borderRadius:14,marginTop:14}}>
              <div><div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>Necha kun dam olib kelishi</div><div style={{fontSize:11,color:'#9AA1B8',marginTop:2}}>{n} kun</div></div>
              <div style={{display:'flex',alignItems:'center',gap:0}}>
                <button onClick={()=>setN(v=>Math.max(1,v-1))} style={{width:30,height:30,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',padding:0}}>−</button>
                <span style={{fontSize:15,fontWeight:700,width:32,textAlign:'center'}}>{n}</span>
                <button onClick={()=>setN(v=>v+1)} style={{width:30,height:30,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',padding:0}}>+</button>
              </div>
            </div>
          )}
          <button disabled={!picked} onClick={()=>{
            const v = withTime ? `${fmtDate(picked)} · ${time}` : fmtDate(picked);
            onPick(withNights ? {date:v, nights:n} : v);
          }} style={{width:'100%',background:picked?T:'#DDE0EB',color:'#fff',border:'none',borderRadius:16,padding:'13px 0',fontSize:14,fontWeight:700,cursor:picked?'pointer':'default',marginTop:14,boxShadow:picked?'0 6px 16px rgba(0,153,168,0.30)':'none'}}>Tanlash</button>
        </div>
      );
    };

    // ── eSIM: full bottom-sheet country picker (Global / Popular / All) ──
    const ESimSheet = ({onPick}) => {
      const { sheetH, sheetXform } = useSheetViewport();
      const [s, setS] = React.useState('');
      const [scrolled, setScrolled] = React.useState(false);
      const filt = (arr) => arr.filter(c => c.toLowerCase().includes(s.toLowerCase()));
      return (
        <div onScroll={e=>setScrolled(e.currentTarget.scrollTop>4)} style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 18px 24px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()}>
          <div style={{width:36,height:4,borderRadius:999,background:'#DDE0EB',margin:'10px auto 0'}}/>
          <div style={{fontSize:17,fontWeight:800,color:'#0A1F21',margin:'12px 0 10px'}}>Davlat tanlang</div>
          <div style={{position:'sticky',top:0,padding:'10px 0 12px',marginLeft:-18,marginRight:-18,paddingLeft:18,paddingRight:18,background:scrolled?'#fff':'transparent',transition:'background 0.18s',boxShadow:scrolled?'0 4px 14px rgba(10,31,33,0.06)':'none',zIndex:5}}>
            <div style={{display:'flex',alignItems:'center',background:scrolled?'#F4F5FA':'#F7F8FB',borderRadius:14,padding:'10px 14px',transition:'background 0.18s'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input value={s} onChange={e=>setS(e.target.value)} placeholder="Davlatni qidirish..." style={{flex:1,border:'none',background:'none',outline:'none',marginLeft:10,fontSize:14,fontFamily:'inherit',color:'#0A1F21'}}/>
            </div>
          </div>
          {!s && (
            <div onClick={()=>onPick('Global')} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px',background:'linear-gradient(135deg, #007684, #0099A8)',borderRadius:14,marginBottom:14,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.25)'}}>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:'#fff'}}>🌍 Global</div>
                <div style={{fontSize:11,color:'rgba(255,255,255,0.85)'}}>150+ davlatda ishlaydi</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
            </div>
          )}
          {!s && <div style={{fontSize:11,fontWeight:700,color:'#9AA1B8',textTransform:'uppercase',letterSpacing:0.6,marginBottom:6}}>Mashhur davlatlar</div>}
          {filt(s?ESIM_ALL:ESIM_POPULAR).map((c) => (
            <div key={c} onClick={()=>onPick(c)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 4px',cursor:'pointer',borderBottom:'1px solid #F0F2F5'}}>
              <div style={{display:'flex',alignItems:'center',gap:12}}><span style={{fontSize:22,lineHeight:1}}>{flagOf(c)}</span><span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{c}</span></div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
            </div>
          ))}
          {!s && (
            <>
              <div style={{fontSize:11,fontWeight:700,color:'#9AA1B8',textTransform:'uppercase',letterSpacing:0.6,marginTop:14,marginBottom:6}}>Barcha davlatlar</div>
              {ESIM_ALL.filter(c=>!ESIM_POPULAR.includes(c)).map(c => (
                <div key={c} onClick={()=>onPick(c)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 4px',cursor:'pointer',borderBottom:'1px solid #F0F2F5'}}>
                  <div style={{display:'flex',alignItems:'center',gap:12}}><span style={{fontSize:22,lineHeight:1}}>{flagOf(c)}</span><span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{c}</span></div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
                </div>
              ))}
            </>
          )}
        </div>
      );
    };
    if (preSheet === 'esim') {
      const onPick = (name) => { setTripQuery({country:name}); setEsimCountry(name); setPage('esim'); setPreSheet(null); };
      return (
        <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:200,display:'flex',alignItems:'flex-end'}} onClick={close}>
          <ESimSheet onPick={onPick}/>
        </div>
      );
    }

    // ── Excursion: flat country list ──
    if (preSheet === 'excur') {
      const onPick = (name) => { setTripQuery({country:name}); setPage('excur'); setPreSheet(null); };
      return (
        <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:200,display:'flex',alignItems:'flex-end'}} onClick={close}>
          <div style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 18px 24px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()}>
            <div style={{width:36,height:4,borderRadius:999,background:'#DDE0EB',margin:'10px auto 0'}}/>
            <div style={{fontSize:17,fontWeight:800,color:'#0A1F21',margin:'12px 0 10px'}}>Davlat tanlang</div>
            <SearchList items={EXCUR_LIST} onPick={onPick} placeholder="Davlatni qidirish..." withFlags/>
          </div>
        </div>
      );
    }

    // ── Nested sheets (date picker / hotel multi-select) ──
    const renderNested = () => {
      if (nested === 'tour-date') return <DatePicker withNights onPick={v=>{setDateStart(v.date);setNights(v.nights);setNested(null);}}/>;
      if (nested === 'date-start') return <DatePicker onPick={v=>{setDateStart(v);setNested(null);}}/>;
      if (nested === 'date-end')   return <DatePicker onPick={v=>{setDateEnd(v);setNested(null);}}/>;
      if (nested === 'rent-from')  return <DatePicker withTime onPick={v=>{setRentFrom(v);setNested(null);}}/>;
      if (nested === 'rent-to')    return <DatePicker withTime onPick={v=>{setRentTo(v);setNested(null);}}/>;
      if (nested === 'route-from') return <CityCountryPicker onPick={v=>{setFromVal(v);setNested(null);}}/>;
      if (nested === 'route-to')   return <CityCountryPicker onPick={v=>{setToVal(v);setNested(null);}}/>;
      if (nested === 'rent-loc')   return <CityCountryPicker onPick={v=>{setRentPickupLoc(v);setNested(null);}}/>;
      if (nested === 'hotel-country') return <CityCountryPicker mode="country" onPick={v=>{setCountry(v);setNested(null);}}/>;
      if (nested === 'hotels') return (
        <div>
          <SearchList items={HOTEL_LIST} multi selected={hotels} placeholder="Hotelni qidirish..."
            onPick={(name)=>setHotels(v=>v.includes(name)?v.filter(x=>x!==name):[...v,name])}/>
          {hotels.length > 0 && <div style={{position:'sticky',bottom:0,marginLeft:-18,marginRight:-18,paddingLeft:18,paddingRight:18,paddingTop:12,paddingBottom:6,background:'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 30%)'}}><button onClick={()=>setNested(null)} style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:16,padding:'13px 0',fontSize:14,fontWeight:700,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.30)'}}>Tanlash ({hotels.length})</button></div>}
        </div>
      );
      return null;
    };

    const renderFields = () => {
      if (preSheet === 'turlar') return (
        <>
          {routeCard()}
          {tapCard('QACHON · NECHA KUN', dateStart?`${dateStart} · ${nights} kun`:'', 'Sana va davomiylikni tanlang', ()=>setNested('tour-date'))}
          {guestsCard(true)}
          {tapCard('HOTEL TANLASH', hotels.length?`${hotels.length} ta hotel tanlandi`:'', 'Hotelni tanlang (bir nechta mumkin)', ()=>setNested('hotels'))}
        </>
      );
      if (preSheet === 'aviabilet') return (
        <>
          {routeCard()}
          {tapSplit(
            {label:'KETISH', val:dateStart, ph:'Sana', onClick:()=>setNested('date-start')},
            {label:'QAYTISH', val:dateEnd, ph:'Sana', onClick:()=>setNested('date-end')}
          )}
          {guestsCard(true)}
          <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:4}}>
            {[{v:'econom',l:'Econom'},{v:'business',l:'Business'},{v:'premium',l:'Premium Economy'}].map(o=>
              chipPill(flightClass===o.v, o.l, ()=>setFlightClass(o.v))
            )}
          </div>
        </>
      );
      if (preSheet === 'hotel') return (
        <>
          {tapCard('SHAHAR', fromVal, 'Davlat va shaharni tanlang', ()=>setNested('route-from'))}
          {tapSplit(
            {label:'QACHONDAN', val:dateStart, ph:'Sana', onClick:()=>setNested('date-start')},
            {label:'QACHONGACHA', val:dateEnd, ph:'Sana', onClick:()=>setNested('date-end')}
          )}
          {tapCard('MIJOZ DAVLATI', country, 'Davlatni tanlang', ()=>setNested('hotel-country'))}
          {guestsCard(false)}
        </>
      );
      if (preSheet === 'rentcar') return (
        <>
          {tapCard('OLIB KETISH MANZILI', rentPickupLoc, 'Davlat va shaharni tanlang', ()=>setNested('rent-loc'))}
          {tapSplit(
            {label:'QACHONDAN', val:rentFrom, ph:'8-may, 2026 · 10:00', onClick:()=>setNested('rent-from')},
            {label:'QACHONGACHA', val:rentTo, ph:'10-may, 2026 · 18:00', onClick:()=>setNested('rent-to')}
          )}
        </>
      );
      return null;
    };

    return (
      <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:200,display:'flex',alignItems:'flex-end'}} onClick={close}>
        <div style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 18px 28px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()}>
          <div style={{width:36,height:4,borderRadius:999,background:'#DDE0EB',margin:'10px auto 0'}}/>
          <div style={{display:'flex',alignItems:'center',gap:10,margin:'14px 0 12px'}}>
            {nested && <button onClick={()=>setNested(null)} style={{width:30,height:30,borderRadius:'50%',background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',padding:0}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg></button>}
            <div style={{fontSize:17,fontWeight:800,color:'#0A1F21'}}>{nested?({hotels:'Hotel tanlash','tour-date':'Sana va davomiylik','route-from':'Qayerdan','route-to':'Qayerga','rent-loc':'Davlat va shahar','hotel-country':'Davlat tanlang'}[nested]||'Sana tanlang'):(titles[preSheet]||'Qidirish')}</div>
          </div>
          {nested ? renderNested() : <>
            {renderFields()}
            <div style={{position:'sticky',bottom:0,marginLeft:-18,marginRight:-18,paddingLeft:18,paddingRight:18,paddingTop:12,paddingBottom:6,background:'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 30%)',marginTop:8}}><button onClick={submit} style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:16,padding:'13px 0',fontSize:14,fontWeight:700,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.30)'}}>Qidirish</button></div>
          </>}
        </div>
      </div>
    );
  };

  // ── Inline Taxi form (in accordion body) ──
  const TaxiForm = () => {
    const [tab, setTab] = React.useState('pickup');
    const [pax, setPax] = React.useState(1);
    const cell = { background:'#F7F8FB', borderRadius:14, padding:'10px 14px', marginBottom:8, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between' };
    const labS = { fontSize:11, color:'#7A8190', fontWeight:600, textTransform:'uppercase', letterSpacing:0.4 };
    const chevron = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>;
    const airport = <div style={{fontSize:14,fontWeight:700,color:T,marginTop:2}}>Toshkent Xalqaro Aeroporti</div>;
    return (
      <div style={{padding:'0 20px 20px'}}>
        <div style={{display:'flex',background:'#F0F2F8',borderRadius:12,padding:4,marginBottom:12}}>
          <button onClick={()=>setTab('pickup')} style={{flex:1,padding:'8px 0',fontSize:11,fontWeight:700,background:tab==='pickup'?'#fff':'none',borderRadius:10,border:'none',color:tab==='pickup'?T:'#9AA1B8',boxShadow:tab==='pickup'?'0 1px 4px rgba(0,0,0,0.08)':'none',cursor:'pointer'}}>Airport Pickup</button>
          <button onClick={()=>setTab('dropoff')} style={{flex:1,padding:'8px 0',fontSize:11,fontWeight:700,background:tab==='dropoff'?'#fff':'none',borderRadius:10,border:'none',color:tab==='dropoff'?T:'#9AA1B8',boxShadow:tab==='dropoff'?'0 1px 4px rgba(0,0,0,0.08)':'none',cursor:'pointer'}}>Airport Drop-off</button>
        </div>
        {tab==='pickup' ? <>
          <div style={{...cell, cursor:'default'}}><div><div style={labS}>QAYERDAN</div>{airport}</div></div>
          <div style={cell} onClick={()=>setTaxiFromSheet('to')}><div><div style={labS}>QAYERGA</div><div style={{fontSize:14,fontWeight:700,color:taxiToVal?'#0A1F21':'#C0C5D4',marginTop:2}}>{taxiToVal||'Manzilni tanlang'}</div></div>{chevron}</div>
        </> : <>
          <div style={cell} onClick={()=>setTaxiFromSheet('from')}><div><div style={labS}>QAYERDAN</div><div style={{fontSize:14,fontWeight:700,color:taxiFromVal?'#0A1F21':'#C0C5D4',marginTop:2}}>{taxiFromVal||'Manzilni tanlang'}</div></div>{chevron}</div>
          <div style={{...cell, cursor:'default'}}><div><div style={labS}>QAYERGA</div>{airport}</div></div>
        </>}
        <div style={{background:'#F7F8FB',borderRadius:14,padding:'10px 14px',marginBottom:8,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>Yo'lovchilar</span>
          <div style={{display:'flex',alignItems:'center',gap:0}}>
            <button onClick={()=>setPax(v=>Math.max(1,v-1))} style={{width:28,height:28,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',padding:0}}>−</button>
            <span style={{fontSize:15,fontWeight:700,width:28,textAlign:'center'}}>{pax}</span>
            <button onClick={()=>setPax(v=>v+1)} style={{width:28,height:28,border:'1.5px solid #E8EAF3',background:'#fff',borderRadius:'50%',fontSize:16,color:T,cursor:'pointer',padding:0}}>+</button>
          </div>
        </div>
        <button style={mkBtn(8)}>Taksi buyurtma qilish</button>
      </div>
    );
  };

  // ── Taxi location states ──
  const [taxiFromSheet, setTaxiFromSheet] = React.useState(null); // null | 'from' | 'to'
  const [taxiFromVal, setTaxiFromVal] = React.useState('');
  const [taxiToVal, setTaxiToVal] = React.useState('');
  const [taxiMapPage, setTaxiMapPage] = React.useState(null);
  const [taxiMapAddr, setTaxiMapAddr] = React.useState("Toshkent Xalqaro Aeroporti");

  // ── Transfer: from-picker bottom sheet ──
  const [xferFromSheet, setXferFromSheet] = React.useState(null); // null | 'from' | 'to'
  const [xferFrom, setXferFrom] = React.useState('');
  const [xferTo, setXferTo] = React.useState('');
  const [xferMapPage, setXferMapPage] = React.useState(null); // null | 'from' | 'to'
  const [xferSearchPage, setXferSearchPage] = React.useState(false);
  const [xferPickupDate, setXferPickupDate] = React.useState('');
  const [xferCarType, setXferCarType] = React.useState('');
  const [xferMapAddr, setXferMapAddr] = React.useState("Chilonzor ko'chasi 5, Toshkent");

  // Taxi map page (full screen)
  if (taxiMapPage) {
    const taxiTarget = taxiMapPage;
    return (
      <Frame>
        <div style={{position:'relative',height:'100vh',overflow:'hidden'}}>
          <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=69.18%2C41.27%2C69.32%2C41.34&amp;layer=mapnik" style={{position:'absolute',inset:0,width:'100%',height:'100%',border:'none'}}/>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-100%)',display:'flex',flexDirection:'column',alignItems:'center',pointerEvents:'none',zIndex:5}}>
            <div style={{filter:'drop-shadow(0 6px 16px rgba(0,153,168,0.45))'}}>
              <div style={{width:48,height:48,background:T,borderRadius:'50% 50% 50% 4px',transform:'rotate(-45deg)',display:'flex',alignItems:'center',justifyContent:'center',border:'3px solid #fff'}}>
                <div style={{transform:'rotate(45deg)',width:14,height:14,background:'#fff',borderRadius:'50%'}}/>
              </div>
            </div>
            <div style={{width:10,height:6,background:'rgba(0,0,0,0.18)',borderRadius:'50%',marginTop:3,filter:'blur(3px)'}}/>
          </div>
          <div style={{position:'fixed',top:18,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,zIndex:10,padding:'0 18px'}}>
            <button onClick={()=>setTaxiMapPage(null)} style={{width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 10px rgba(10,31,33,0.15)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.4" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
          </div>
          {/* Locate me */}
          <button onClick={()=>setTaxiMapAddr('Mening joriy manzilim')} style={{position:'absolute',right:18,bottom:220,zIndex:6,width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 10px rgba(10,31,33,0.15)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>
          </button>
          <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,zIndex:10,background:'#fff',borderRadius:'24px 24px 0 0',padding:'16px 20px 36px',boxShadow:'0 -8px 30px rgba(0,0,0,0.12)'}}>
            <div style={{width:36,height:4,background:'#DDE0EB',borderRadius:999,margin:'0 auto 14px'}}/>
            <div style={{display:'flex',alignItems:'center',gap:10,background:'#F4F5FA',borderRadius:14,padding:'12px 14px',marginBottom:14}}>
              <svg style={{flexShrink:0}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{taxiMapAddr}</div>
                <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>Pinni suring va manzilni belgilang</div>
              </div>
            </div>
            <button onClick={()=>{if(taxiTarget==='from')setTaxiFromVal(taxiMapAddr);else setTaxiToVal(taxiMapAddr);setTaxiMapPage(null);}} style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:20,padding:'14px 0',fontSize:15,fontWeight:700,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.35),0 2px 6px rgba(0,153,168,0.20),inset 0 1px 0 rgba(255,255,255,0.25)'}}>Tanlash</button>
          </div>
        </div>
      </Frame>
    );
  }

  // Flight detail page
  if (flightDetail) {
    const it = flightDetail;
    return (
      <Frame>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 18px 14px',background:'#F4F5FA'}}>
          <button onClick={()=>setFlightDetail(null)} style={{width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px rgba(10,31,33,0.06)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.4" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{fontSize:17,fontWeight:800,color:'#0A1F21'}}>Reys tafsiloti</div>
          <div style={{width:46}}/>
        </div>
        <div style={{flex:1,overflowY:'auto',padding:'8px 16px 120px'}}>
          {/* Airline */}
          <div style={{background:'#fff',borderRadius:18,padding:16,marginBottom:12,display:'flex',alignItems:'center',gap:12,boxShadow:'0 2px 12px rgba(10,31,33,0.05)'}}>
            <div style={{width:48,height:48,borderRadius:'50%',background:'#FCD34D',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontSize:18,fontWeight:900,color:'#0A1F21'}}>{it.airline.slice(0,1)}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:700,color:'#0A1F21'}}>{it.airline}</div>
              <div style={{fontSize:12,color:'#9AA1B8',marginTop:2}}>{it.tag}</div>
            </div>
          </div>
          {/* Onward */}
          <div style={{background:'#fff',borderRadius:18,padding:16,marginBottom:12,boxShadow:'0 2px 12px rgba(10,31,33,0.05)'}}>
            <div style={{fontSize:11,color:'#9AA1B8',fontWeight:700,textTransform:'uppercase',letterSpacing:0.6,marginBottom:10}}>Borish · {it.depDate}</div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div>
                <div style={{fontSize:24,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.dep}</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginTop:6}}>{it.from}</div>
              </div>
              <div style={{flex:1,textAlign:'center'}}>
                <div style={{fontSize:11,color:'#9AA1B8'}}>{it.dur}</div>
                <div style={{height:1,background:'#E8EAF3',margin:'8px 0',position:'relative'}}><div style={{position:'absolute',left:'50%',top:-7,transform:'translateX(-50%)',background:'#fff',padding:'0 4px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg></div></div>
                <div style={{fontSize:11,color:'#9AA1B8'}}>{it.stops}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:24,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.arr}</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginTop:6}}>{it.to}</div>
              </div>
            </div>
          </div>
          {/* Return */}
          {it.retDep && <div style={{background:'#fff',borderRadius:18,padding:16,marginBottom:12,boxShadow:'0 2px 12px rgba(10,31,33,0.05)'}}>
            <div style={{fontSize:11,color:'#9AA1B8',fontWeight:700,textTransform:'uppercase',letterSpacing:0.6,marginBottom:10}}>Qaytish · {it.retDate}</div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div>
                <div style={{fontSize:24,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.retDep}</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginTop:6}}>{it.to}</div>
              </div>
              <div style={{flex:1,textAlign:'center'}}>
                <div style={{fontSize:11,color:'#9AA1B8'}}>{it.retDur}</div>
                <div style={{height:1,background:'#E8EAF3',margin:'8px 0',position:'relative'}}><div style={{position:'absolute',left:'50%',top:-7,transform:'translateX(-50%)',background:'#fff',padding:'0 4px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg></div></div>
                <div style={{fontSize:11,color:'#9AA1B8'}}>{it.stops}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:24,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.retArr}</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginTop:6}}>{it.from}</div>
              </div>
            </div>
          </div>}
          {/* Info */}
          <div style={{background:'#fff',borderRadius:18,padding:16,marginBottom:12,boxShadow:'0 2px 12px rgba(10,31,33,0.05)'}}>
            <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginBottom:10}}>Reys haqida</div>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={it.baggage?T:'#9AA1B8'} strokeWidth="2"><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7h14v14H5z"/></svg>
              <span style={{fontSize:13,color:'#0A1F21'}}>{it.baggage?'Bagaj kiritilgan (23 kg)':"Bagajsiz"}</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8M8 14h5"/></svg>
              <span style={{fontSize:13,color:'#0A1F21'}}>Qo'l yuki 7 kg gacha</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span style={{fontSize:13,color:'#0A1F21'}}>Bekor qilish: pulli</span>
            </div>
          </div>
          {/* Price */}
          <div style={{background:'#fff',borderRadius:18,padding:16,marginBottom:12,boxShadow:'0 2px 12px rgba(10,31,33,0.05)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
              <span style={{fontSize:13,color:'#5C7577'}}>Oddiy narx</span>
              <span style={{fontSize:18,fontWeight:800,color:'#0A1F21'}}>{fmtPrice(it.regular)}</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',borderRadius:14,padding:'10px 14px',boxShadow:'0 2px 8px rgba(217,119,6,0.25)'}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                <span style={{fontSize:12,fontWeight:700,color:'#fff'}}>Premium narx</span>
              </div>
              <span style={{fontSize:16,fontWeight:800,color:'#fff'}}>{fmtPrice(it.premium)}</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:6,marginTop:10}}>
              <div style={{width:18,height:18,borderRadius:'50%',background:'#FCD34D',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:9,fontWeight:900,color:'#92400E'}}>C</span>
              </div>
              <span style={{fontSize:12,color:'#5C7577'}}>{Math.floor(parseInt(it.premium.replace(/\D/g,''))/10000)} Coins bonus</span>
            </div>
          </div>
        </div>
        {/* Sticky CTA */}
        <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,padding:'12px 20px 28px',background:'linear-gradient(to bottom,rgba(244,245,250,0) 0%,#F4F5FA 30%)'}}>
          <button style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:20,padding:'14px 0',fontSize:15,fontWeight:700,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.35),0 2px 6px rgba(0,153,168,0.20),inset 0 1px 0 rgba(255,255,255,0.25)'}}>Band qilish</button>
        </div>
      </Frame>
    );
  }

  // Tour room detail sub-page
  if (tourRoomDetail) {
    const r = tourRoomDetail;
    const fmtS = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ') + ' so\'m';
    return (
      <Frame>
        <div style={{display:'flex',alignItems:'center',gap:14,padding:'16px 16px 14px',background:'#fff',borderBottom:'1px solid #F0F2F8'}}>
          <button onClick={()=>setTourRoomDetail(null)} style={{width:40,height:40,borderRadius:'50%',background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.4" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{fontSize:16,fontWeight:800,color:'#0A1F21'}}>{r.type}</div>
        </div>
        <div style={{flex:1,overflowY:'auto',paddingBottom:30}}>
          <img src={(r.photos&&r.photos[0])||'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700'} alt={r.type} style={{width:'100%',height:220,objectFit:'cover',display:'block'}}/>
          <div style={{padding:'16px'}}>
            <div style={{fontSize:13,color:'#5C7577',lineHeight:1.65,marginBottom:18}}>24 kv.m. xona, queen-size krovat, {r.type.toLowerCase()}, balkon va konditsioner bilan. Maksimal mehmon soni — 2 kishi.</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:18}}>
              {[{label:'Maydon',val:'24 kv.m.'},{label:'Krovat',val:'Queen-size'},{label:'Ko\'rinish',val:r.type.split(' ').slice(0,-1).join(' ')},{label:'Maks.',val:'2 kishi'}].map((f,i)=>(
                <div key={i} style={{background:'#F4F5FA',borderRadius:14,padding:'10px 12px'}}>
                  <div style={{fontSize:10,color:'#9AA1B8',fontWeight:600,textTransform:'uppercase',letterSpacing:0.4}}>{f.label}</div>
                  <div style={{fontSize:14,fontWeight:700,color:'#0A1F21',marginTop:3}}>{f.val}</div>
                </div>
              ))}
            </div>
            <div style={{fontSize:13,fontWeight:800,color:'#0A1F21',marginBottom:10}}>Qulayliklar</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:7,marginBottom:18}}>
              {['Konditsioner','Bepul Wi-Fi','Balkon','TV','Mini-bar','Seyf','Soch quritgich','Sovuq/qaynoq suv'].map(a=>(
                <div key={a} style={{background:TBG,borderRadius:999,padding:'5px 11px'}}>
                  <span style={{fontSize:12,fontWeight:600,color:T}}>{a}</span>
                </div>
              ))}
            </div>
            <div style={{background:'#F0FDF4',borderRadius:14,padding:'12px 14px',border:'1px solid #BBF7D0',marginBottom:18}}>
              <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:3}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                <span style={{fontSize:13,fontWeight:700,color:'#166534'}}>Bepul bekor qilish — 48 soat ichida</span>
              </div>
              <div style={{fontSize:11,color:'#15803D',marginLeft:21}}>Keyin to'liq summa qaytarilmaydi</div>
            </div>
            <button onClick={()=>setTourRoomDetail(null)} style={{width:'100%',background:T,border:'none',borderRadius:18,padding:'14px 0',fontSize:15,fontWeight:700,color:'#fff',cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.35),0 2px 6px rgba(0,153,168,0.20),inset 0 1px 0 rgba(255,255,255,0.25)'}}>Band qilish — {fmtS(r.price)}</button>
          </div>
        </div>
      </Frame>
    );
  }

  // Tour detail page
  if (tourDetail) {
    const td = tourDetail;
    const city = (td.title||'').split(',')[0];
    const country = (td.title||'').split(',')[1]?.trim()||'';
    const premPrice = parseInt((td.premium||td.regular||'').replace(/\D/g,''));
    const regPrice  = parseInt((td.regular||'').replace(/\D/g,''));
    const coins = Math.floor(premPrice/10000);
    const installment = Math.floor(premPrice/6);
    const fmtS = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ') + ' so\'m';

    const GALLERY = [
      td.img,
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700',
    ];

    const swipeStart = e => { tourSwipeX.current = e.touches[0].clientX; };
    const swipeEnd   = e => {
      const diff = tourSwipeX.current - e.changedTouches[0].clientX;
      if (diff > 50) setTourGallery(g => Math.min(g+1, GALLERY.length-1));
      if (diff < -50) setTourGallery(g => Math.max(g-1, 0));
    };

    const NIGHT_OPTIONS = [{n:2,price:'$650'},{n:3,price:'$695'},{n:4,price:'$720'},{n:5,price:'$860'},{n:14,price:'$1 640'}];
    const baseDay = Math.max(14, Math.min(tourSelDay, 24));
    const dayStart = Math.max(14, baseDay-2);
    const CHART_HEIGHTS = [32,38,52,72,44,36];
    const CHART_PRICES  = [1420,1380,1520,1640,1490,1410];
    const CHART_BARS = Array.from({length:6},(_,k)=>({
      day: dayStart+k,
      dow: ['Du','Se','Ch','Pa','Ju','Sh','Ya'][(dayStart+k-1)%7],
      h: CHART_HEIGHTS[k], price: CHART_PRICES[k]
    }));
    const selBar = CHART_BARS.find(b=>b.day===tourSelDay)||CHART_BARS[3];

    const ROOMS = [
      {type:'Basseynga ko\'rinishi',meal:'Nonushta kiritilgan',guests:'2 kattalar',dates:'22-29 sentyabr',nights:7,airline:'Fly Emirates',price:regPrice,prem:premPrice,photos:[
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700',
      ]},
      {type:'Dengizga ko\'rinishi',meal:'Ultra All Inclusive',guests:'2 kattalar',dates:'22-29 sentyabr',nights:7,airline:'Fly Emirates',price:Math.round(regPrice*1.12),prem:Math.round(premPrice*1.1),photos:[
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=700',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700',
      ]},
    ];

    const cardStyle = {background:'#fff',borderRadius:20,margin:'16px 16px 0',boxShadow:'0 2px 10px rgba(10,31,33,0.05)',overflow:'hidden'};
    const secLabel = {fontSize:11,fontWeight:700,color:'#9AA1B8',textTransform:'uppercase',letterSpacing:0.8,marginBottom:12};

    return (
      <Frame>
        <div style={{flex:1,overflowY:'auto',paddingBottom:30}}>

          {/* ── 1. CAROUSEL ── */}
          <div style={{margin:'16px 16px 0',borderRadius:20,overflow:'hidden',position:'relative',background:'#000'}}>
            <img
              src={GALLERY[tourGallery]} alt=""
              style={{width:'100%',height:260,objectFit:'cover',display:'block',userSelect:'none'}}
              onTouchStart={swipeStart} onTouchEnd={swipeEnd}
            />
            {/* gradient */}
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,0,0,0.38) 0%,transparent 38%,transparent 55%,rgba(0,0,0,0.52) 100%)',pointerEvents:'none'}}/>
            {/* top bar */}
            <div style={{position:'absolute',top:0,left:0,right:0,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 14px 0'}}>
              <button onClick={()=>setTourDetail(null)} style={{width:36,height:36,borderRadius:'50%',background:'rgba(0,0,0,0.3)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.2)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
              </button>
              <div style={{background:'rgba(239,68,68,0.92)',borderRadius:999,padding:'4px 11px',display:'flex',alignItems:'center',gap:5}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
                <span style={{fontSize:11,fontWeight:800,color:'#fff'}}>HIT SAVDO!</span>
              </div>
              <button style={{width:36,height:36,borderRadius:'50%',background:'rgba(0,0,0,0.3)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.2)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
              </button>
            </div>
            {/* left/right arrows */}
            {tourGallery > 0 && (
              <button onClick={()=>setTourGallery(g=>g-1)} style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',width:32,height:32,borderRadius:'50%',background:'rgba(0,0,0,0.35)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
              </button>
            )}
            {tourGallery < GALLERY.length-1 && (
              <button onClick={()=>setTourGallery(g=>g+1)} style={{position:'absolute',right:10,top:'50%',transform:'translateY(-50%)',width:32,height:32,borderRadius:'50%',background:'rgba(0,0,0,0.35)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            )}
            {/* bottom: dots + counter */}
            <div style={{position:'absolute',bottom:12,left:14,right:14,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{display:'flex',gap:4}}>
                {GALLERY.map((_,i)=>(
                  <div key={i} onClick={()=>setTourGallery(i)} style={{width:i===tourGallery?16:5,height:5,borderRadius:999,background:i===tourGallery?'#fff':'rgba(255,255,255,0.5)',transition:'width 0.22s',cursor:'pointer'}}/>
                ))}
              </div>
              <div style={{background:'rgba(0,0,0,0.45)',borderRadius:999,padding:'3px 9px',fontSize:11,fontWeight:700,color:'#fff'}}>{tourGallery+1} / {GALLERY.length}</div>
            </div>
          </div>

          {/* ── 2. HOTEL INFO CARD ── */}
          <div style={{...cardStyle,padding:'16px 16px 14px'}}>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,marginBottom:10}}>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}>
                  <span style={{fontSize:19,fontWeight:900,color:'#0A1F21'}}>{city}</span>
                  <div style={{display:'flex',gap:1.5}}>{[0,1,2,3,4].map(s=><svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#FBBF24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:5,fontSize:12,color:'#5C7577'}}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
                  <span>{country}</span>
                  <span style={{color:'#DDE0EB'}}>·</span>
                  <span style={{color:T,fontWeight:600,cursor:'pointer',textDecoration:'underline',textUnderlineOffset:2}}>Xaritada ko'rsatish</span>
                </div>
              </div>
              <div style={{textAlign:'center',flexShrink:0}}>
                <div style={{background:'linear-gradient(135deg,#22C55E,#16A34A)',borderRadius:10,padding:'4px 10px',boxShadow:'0 2px 8px rgba(34,197,94,0.35)'}}>
                  <span style={{fontSize:14,fontWeight:900,color:'#fff'}}>4.8</span>
                </div>
                <div style={{fontSize:10,color:'#9AA1B8',marginTop:3}}>15 sharh</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:12}}>
              <div style={{width:6,height:6,borderRadius:'50%',background:'#22C55E',flexShrink:0}}/>
              <span style={{fontSize:12,color:'#5C7577'}}>150 martadan ko'p band qilingan</span>
            </div>
            <div style={{height:1,background:'#F0F2F8',marginBottom:12}}/>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {[
                {label:'Viza kerak emas',bg:'#dcfce7',tc:'#166534'},
                {label:'Bepul Wi-Fi',bg:'#dbeafe',tc:'#1e40af'},
                {label:'1-liniya',bg:'#fef3c7',tc:'#92400e'},
                {label:'All Inclusive',bg:'#cffafe',tc:T},
                {label:'Dengiz yaqinida',bg:'#e0f2fe',tc:'#0369a1'},
              ].map(tg=>(
                <div key={tg.label} style={{background:tg.bg,borderRadius:999,padding:'4px 10px'}}>
                  <span style={{fontSize:11,fontWeight:700,color:tg.tc}}>{tg.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 3. NIMALAR O'Z ICHIGA OLADI ── */}
          <div style={{...cardStyle,padding:'16px 16px 14px'}}>
            <div style={secLabel}>Nimalar o'z ichiga oladi</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
              {[
                {label:'Yashash', val:'8 kecha', accent:'#0099A8', bg:'#E0F7F8', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099A8" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>},
                {label:'Parvoz', val:'Kiritilgan', accent:'#3B82F6', bg:'#DBEAFE', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>},
                {label:'Transfer', val:'Bepul', accent:'#EC4899', bg:'#FCE7F3', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>},
                {label:'Med. sug\'urta', val:'Kiritilgan', accent:'#10B981', bg:'#D1FAE5', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>},
                {label:'eSIM', val:'Bepul', accent:'#F59E0B', bg:'#FEF3C7', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1" fill="#F59E0B"/></svg>},
                {label:'Sug\'urta', val:'Kiritilgan', accent:'#8B5CF6', bg:'#EDE9FE', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>},
              ].map((item,i)=>(
                <div key={i} style={{position:'relative',background:'#FAFAFA',borderRadius:14,padding:'10px 12px',overflow:'hidden',display:'flex',alignItems:'center',gap:10,border:'1px solid #F0F2F8'}}>
                  <div style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:item.accent,borderRadius:'14px 0 0 14px'}}/>
                  <div style={{width:34,height:34,borderRadius:10,background:item.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    {item.icon}
                  </div>
                  <div style={{minWidth:0}}>
                    <div style={{fontSize:12,fontWeight:800,color:'#0A1F21',lineHeight:1.2}}>{item.label}</div>
                    <div style={{fontSize:11,color:'#5C7577',marginTop:1}}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. MEHMONXONA HAQIDA ── */}
          <div style={{...cardStyle,padding:'16px'}}>
            <div style={secLabel}>Mehmonxona haqida</div>
            <div style={{fontSize:13,color:'#3A4A55',lineHeight:1.7,overflow:'hidden',maxHeight:tourExpanded?'none':72,transition:'max-height 0.3s'}}>
              <strong style={{color:'#0A1F21'}}>{city} Hotel 5★</strong> — Standard Queen Room (24 kv.m.), queen-size krovat, gidromassaj vanna, maksimal mehmon soni: 2 kishi.{' '}
              Mehmonxonada quyidagilar mavjud: katta ochiq basseyn va shaxsiy plyaj, fitness markazi, spa va wellness xizmati.{' '}
              Restoranlar o'rta dengiz, osiyo, mahalliy va Yevropa taomlarini taklif qiladi.{' '}
              Markazgacha 5 daqiqa yurish, plyajga to'g'ridan-to'g'ri chiqish, bepul Wi-Fi butun hududda.{' '}
              Bolalar uchun: bolalar basseyni, animatsiya dasturi va mini-klub. Sport: tennis kortlari, suv sporti, gid bilan ekskursiyalar.
            </div>
            <button onClick={()=>setTourExpanded(x=>!x)} style={{background:'none',border:'none',padding:'8px 0 0',cursor:'pointer',fontSize:13,fontWeight:700,color:T,display:'flex',alignItems:'center',gap:5}}>
              {tourExpanded?'Kamroq ko\'rsatish':'Ko\'proq o\'qish'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5" strokeLinecap="round" style={{transform:tourExpanded?'rotate(180deg)':'none',transition:'transform 0.2s'}}><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>

          {/* ── 5. NARX GRAFIGI BLOCK (all-in-one card) ── */}
          <div style={{...cardStyle,padding:'16px'}}>
            <div style={secLabel}>Narx grafigi</div>
            {/* month nav */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'#F7F8FB',borderRadius:12,padding:'8px 12px',marginBottom:14}}>
              <button onClick={()=>setTourMonthOffset(m=>m-1)} style={{background:'none',border:'none',cursor:'pointer',padding:4,display:'flex'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
              </button>
              <span style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{['Sentyabr','Oktyabr','Noyabr','Dekabr'][((tourMonthOffset%4)+4)%4]} 2026</span>
              <button onClick={()=>setTourMonthOffset(m=>m+1)} style={{background:'none',border:'none',cursor:'pointer',padding:4,display:'flex'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
            {/* chart with tooltip above active bar */}
            <div style={{position:'relative',marginBottom:6}}>
              <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',height:80,gap:6}}>
                {CHART_BARS.map((b,i)=>{
                  const active = b.day===tourSelDay;
                  return (
                    <div key={i} onClick={()=>setTourSelDay(b.day)} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',cursor:'pointer',height:'100%',position:'relative'}}>
                      {active && (
                        <div style={{position:'absolute',bottom:b.h+6,left:'50%',transform:'translateX(-50%)',background:T,color:'#fff',borderRadius:8,padding:'3px 7px',fontSize:10,fontWeight:700,whiteSpace:'nowrap',boxShadow:'0 2px 8px rgba(0,153,168,0.4)',zIndex:2}}>
                          ${b.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
                          <div style={{position:'absolute',bottom:-5,left:'50%',transform:'translateX(-50%)',width:0,height:0,borderLeft:'5px solid transparent',borderRight:'5px solid transparent',borderTop:`5px solid ${T}`}}/>
                        </div>
                      )}
                      <div style={{width:'100%',height:b.h,background:active?T:'#E8EBF5',borderRadius:'6px 6px 3px 3px',transition:'background 0.15s',boxShadow:active?'0 3px 10px rgba(0,153,168,0.3)':'none'}}/>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',gap:6,marginBottom:14}}>
              {CHART_BARS.map((b,i)=>{
                const active = b.day===tourSelDay;
                return (
                  <div key={i} onClick={()=>setTourSelDay(b.day)} style={{flex:1,textAlign:'center',cursor:'pointer'}}>
                    <div style={{fontSize:12,fontWeight:active?800:500,color:active?T:'#5C7577'}}>{b.day}</div>
                    <div style={{fontSize:10,color:'#C0C5D8'}}>{b.dow}</div>
                  </div>
                );
              })}
            </div>
            {/* mavjud kechalar */}
            <div style={{height:1,background:'#F0F2F8',marginBottom:12}}/>
            <div style={{fontSize:11,color:'#9AA1B8',fontWeight:600,textTransform:'uppercase',letterSpacing:0.5,marginBottom:8}}>Mavjud kechalar</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:14}}>
              {NIGHT_OPTIONS.map(o=>(
                <button key={o.n} onClick={()=>setTourNights(o.n)} style={{background:tourNights===o.n?T:'#F4F5FA',border:`1.5px solid ${tourNights===o.n?T:'transparent'}`,borderRadius:10,padding:'5px 10px',cursor:'pointer',transition:'all 0.15s'}}>
                  <span style={{fontSize:12,fontWeight:700,color:tourNights===o.n?'#fff':'#0A1F21'}}>{o.n} kecha</span>
                  <span style={{fontSize:11,color:tourNights===o.n?'rgba(255,255,255,0.8)':'#9AA1B8'}}> — {o.price}</span>
                </button>
              ))}
            </div>
            {/* sanalar + mehmonlar */}
            <div style={{height:1,background:'#F0F2F8',marginBottom:10}}/>
            <div style={{display:'flex',gap:8}}>
              <div style={{flex:1,background:'#F7F8FB',borderRadius:12,padding:'10px 12px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}}>
                <div>
                  <div style={{fontSize:10,color:'#9AA1B8',fontWeight:600,letterSpacing:0.3}}>SANALAR</div>
                  <div style={{fontSize:12,fontWeight:700,color:'#0A1F21',marginTop:2}}>25 sent — 3 okt</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <div style={{flex:1,background:'#F7F8FB',borderRadius:12,padding:'10px 12px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}}>
                <div>
                  <div style={{fontSize:10,color:'#9AA1B8',fontWeight:600,letterSpacing:0.3}}>MEHMONLAR</div>
                  <div style={{fontSize:12,fontWeight:700,color:'#0A1F21',marginTop:2}}>2 kattalar</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
            </div>
          </div>

          {/* ── 6. WARNING ── */}
          <div style={{margin:'16px 16px 0',background:'#FFFBEB',borderRadius:14,padding:'12px 14px',border:'1px solid #FDE68A',display:'flex',gap:10}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" style={{flexShrink:0,marginTop:1}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <p style={{margin:0,fontSize:12,color:'#92400E',lineHeight:1.55}}>Tur sanasi yaqinlashishi bilan narxlar o'zgarishi mumkin. Xarid qilishdan oldin menejer bilan tasdiqlashni tavsiya qilamiz.</p>
          </div>

          {/* ── 7. MENEJER BILAN BOG'LANISH ── */}
          <div style={{...cardStyle,padding:'14px 16px',display:'flex',alignItems:'center',gap:14,cursor:'pointer'}}>
            <div style={{position:'relative',flexShrink:0}}>
              <div style={{width:46,height:46,borderRadius:'50%',background:'linear-gradient(135deg,#0099A8,#006A74)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div style={{position:'absolute',bottom:0,right:0,width:12,height:12,borderRadius:'50%',background:'#22C55E',border:'2px solid #fff'}}/>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:14,fontWeight:800,color:'#0A1F21'}}>Menejer bilan bog'lanish</div>
              <div style={{fontSize:12,color:'#5C7577',marginTop:2}}>Hozir onlayn · ~1 daqiqada javob</div>
            </div>
            <div style={{width:36,height:36,borderRadius:'50%',background:TBG,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>

          {/* ── 8. XONA TANLASH ── */}
          <div style={{margin:'16px 16px 0'}}>
            <div style={{fontSize:15,fontWeight:800,color:'#0A1F21',marginBottom:10}}>Xona tanlang</div>
            <div style={{display:'flex',gap:8,marginBottom:12,overflowX:'auto',scrollbarWidth:'none'}}>
              {['Saralash','Ovqatlanish','Aviakompaniya'].map((f,i)=>(
                <div key={i} style={{display:'inline-flex',alignItems:'center',gap:4,background:'#fff',border:'1px solid #E8EAF3',borderRadius:999,padding:'6px 12px',flexShrink:0,cursor:'pointer',boxShadow:'0 1px 4px rgba(10,31,33,0.04)'}}>
                  <span style={{fontSize:12,fontWeight:600,color:'#3A4A55'}}>{f}</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              ))}
            </div>
            {ROOMS.map((r,i)=>{
              const imgIdx = tourRoomImg[i]||0;
              return (
              <div key={i} style={{background:'#fff',borderRadius:18,marginBottom:10,boxShadow:'0 2px 12px rgba(10,31,33,0.06)',overflow:'hidden'}}>
                {/* room photo carousel */}
                <div style={{position:'relative',height:160,overflow:'hidden',background:'#000'}}>
                  <img src={r.photos[imgIdx]} alt={r.type} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 45%,rgba(0,0,0,0.6) 100%)'}}/>
                  {/* prev arrow */}
                  {imgIdx>0 && (
                    <button onClick={()=>setTourRoomImg(o=>({...o,[i]:imgIdx-1}))} style={{position:'absolute',left:8,top:'50%',transform:'translateY(-50%)',width:28,height:28,borderRadius:'50%',background:'rgba(0,0,0,0.4)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
                    </button>
                  )}
                  {/* next arrow */}
                  {imgIdx<r.photos.length-1 && (
                    <button onClick={()=>setTourRoomImg(o=>({...o,[i]:imgIdx+1}))} style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',width:28,height:28,borderRadius:'50%',background:'rgba(0,0,0,0.4)',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  )}
                  {/* counter */}
                  <div style={{position:'absolute',top:10,right:10,background:'rgba(0,0,0,0.5)',borderRadius:999,padding:'3px 8px',fontSize:11,fontWeight:700,color:'#fff'}}>{imgIdx+1} / {r.photos.length}</div>
                  {/* dots + title */}
                  <div style={{position:'absolute',bottom:10,left:12,right:12,display:'flex',alignItems:'flex-end',justifyContent:'space-between'}}>
                    <div style={{fontSize:14,fontWeight:800,color:'#fff'}}>{r.type}</div>
                    <div style={{display:'flex',gap:4}}>
                      {r.photos.map((_,k)=>(
                        <div key={k} onClick={()=>setTourRoomImg(o=>({...o,[i]:k}))} style={{width:k===imgIdx?14:5,height:5,borderRadius:999,background:k===imgIdx?'#fff':'rgba(255,255,255,0.6)',transition:'width 0.2s',cursor:'pointer'}}/>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{padding:'12px 14px'}}>
                  {[
                    {icon:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, text:`${r.dates} · ${r.nights} kecha`},
                    {icon:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>, text:r.meal},
                    {icon:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, text:r.guests},
                    {icon:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>, text:r.airline},
                  ].map((row,j)=>(
                    <div key={j} style={{display:'flex',alignItems:'center',gap:7,marginBottom:5}}>
                      {row.icon}
                      <span style={{fontSize:12,color:'#5C7577'}}>{row.text}</span>
                    </div>
                  ))}
                  <div style={{borderTop:'1px solid #F0F2F8',marginTop:10,paddingTop:10}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:5}}>
                      <span style={{fontSize:12,color:'#5C7577'}}>Narx (1 kishi)</span>
                      <span style={{fontSize:16,fontWeight:900,color:'#0A1F21'}}>{fmtS(r.price)}</span>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:5,justifyContent:'flex-end',marginBottom:6}}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                      <span style={{fontSize:11,color:T,fontWeight:600}}>Muddatli: {fmtS(installment)}/oy</span>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:5,marginBottom:5}}>
                      <div style={{display:'inline-flex',alignItems:'center',gap:5,background:'linear-gradient(135deg,#FBBF24,#D97706)',borderRadius:999,padding:'5px 11px',boxShadow:'0 5px 14px rgba(217,119,6,0.45),0 2px 5px rgba(217,119,6,0.30),inset 0 1px 0 rgba(255,255,255,0.30)'}}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                        <span style={{fontSize:11,fontWeight:700,color:'#fff'}}>Premium: {fmtS(r.prem)}</span>
                      </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:10,justifyContent:'flex-end'}}>
                      <div style={{width:14,height:14,borderRadius:'50%',background:'linear-gradient(135deg,#FBBF24,#D97706)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <span style={{fontSize:7,fontWeight:900,color:'#fff'}}>C</span>
                      </div>
                      <span style={{fontSize:11,color:'#5C7577'}}>+{coins} Coins bonus</span>
                    </div>
                    <div style={{display:'flex',gap:8}}>
                      <button onClick={()=>setTourRoomDetail(r)} style={{flex:1,background:'#fff',border:`1.5px solid ${T}`,borderRadius:12,padding:'10px 0',fontSize:13,fontWeight:700,color:T,cursor:'pointer'}}>Tafsilotlar</button>
                      <button style={{flex:2,background:T,border:'none',borderRadius:12,padding:'10px 0',fontSize:13,fontWeight:700,color:'#fff',cursor:'pointer',boxShadow:'0 4px 12px rgba(0,153,168,0.28)'}}>Band qilish</button>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </Frame>
    );
  }



  // Transfer map page (full screen)
  if (xferMapPage) {
    const mapTarget = xferMapPage;
    return (
      <Frame>
        <div style={{position:'relative',height:'100vh',overflow:'hidden'}}>
          <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=69.18%2C41.27%2C69.32%2C41.34&amp;layer=mapnik" style={{position:'absolute',inset:0,width:'100%',height:'100%',border:'none'}}/>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-100%)',display:'flex',flexDirection:'column',alignItems:'center',pointerEvents:'none',zIndex:5}}>
            <div style={{filter:'drop-shadow(0 6px 16px rgba(0,153,168,0.45))'}}>
              <div style={{width:48,height:48,background:T,borderRadius:'50% 50% 50% 4px',transform:'rotate(-45deg)',display:'flex',alignItems:'center',justifyContent:'center',border:'3px solid #fff'}}>
                <div style={{transform:'rotate(45deg)',width:14,height:14,background:'#fff',borderRadius:'50%'}}/>
              </div>
            </div>
            <div style={{width:10,height:6,background:'rgba(0,0,0,0.18)',borderRadius:'50%',marginTop:3,filter:'blur(3px)'}}/>
          </div>
          <div style={{position:'fixed',top:18,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,zIndex:10,padding:'0 18px'}}>
            <button onClick={()=>setXferMapPage(null)} style={{width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 10px rgba(10,31,33,0.15)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.4" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
          </div>
          <button onClick={()=>setXferMapAddr('Mening joriy manzilim')} style={{position:'absolute',right:18,bottom:220,zIndex:6,width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 10px rgba(10,31,33,0.15)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/></svg>
          </button>
          {/* Fixed bottom panel */}
          <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,zIndex:10,background:'#fff',borderRadius:'24px 24px 0 0',padding:'16px 20px 36px',boxShadow:'0 -8px 30px rgba(0,0,0,0.12)'}}>
            <div style={{width:36,height:4,background:'#DDE0EB',borderRadius:999,margin:'0 auto 14px'}}/>
            <div style={{display:'flex',alignItems:'center',gap:10,background:'#F4F5FA',borderRadius:14,padding:'12px 14px',marginBottom:14}}>
              <svg style={{flexShrink:0}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{xferMapAddr}</div>
                <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>Pinni suring va manzilni belgilang</div>
              </div>
            </div>
            <button onClick={()=>{if(mapTarget==='from')setXferFrom(xferMapAddr);else setXferTo(xferMapAddr);setXferMapPage(null);}} style={{width:'100%',background:T,color:'#fff',border:'none',borderRadius:20,padding:'14px 0',fontSize:15,fontWeight:700,cursor:'pointer',boxShadow:'0 6px 16px rgba(0,153,168,0.35),0 2px 6px rgba(0,153,168,0.20),inset 0 1px 0 rgba(255,255,255,0.25)'}}>Tanlash</button>
          </div>
        </div>
      </Frame>
    );
  }

  // Transfer search/result page
  if (xferSearchPage) {
    const CAR_TYPES = [
      {id:'comfort',  label:'Qulaylik',  sub:'4 kishi · Kia, Toyota',   icon:'🚗'},
      {id:'business', label:'Biznes',    sub:'4 kishi · BMW, Mercedes', icon:'🚙'},
      {id:'minivan',  label:'Miniven',   sub:'7 kishi · Mercedes Vito', icon:'🚐'},
      {id:'premium',  label:'Premium',   sub:'4 kishi · S-Class, 7',    icon:'✨'},
      {id:'suv',      label:'SUV',       sub:'5 kishi · Land Cruiser',  icon:'🚘'},
    ];
    return (
      <Frame>
        {/* Top bar */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'54px 20px 12px',background:'#fff',borderBottom:'1px solid #F0F2F5'}}>
          <button onClick={()=>setXferSearchPage(false)} style={{width:36,height:36,borderRadius:'50%',background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{fontSize:17,fontWeight:800,color:'#0A1F21'}}>Avtomobil qidirish</div>
          <button style={{width:36,height:36,borderRadius:'50%',background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
        <Scroll style={{padding:'16px 20px 120px'}}>
          {/* Route summary */}
          <div style={{background:'#F4F5FA',borderRadius:16,padding:'14px 16px',marginBottom:16,display:'flex',alignItems:'center',gap:10}}>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{xferFrom||'Qayerdan'}</div>
              <div style={{width:1,height:16,background:'#DDE0EB',margin:'4px 0 4px 6px'}}/>
              <div style={{fontSize:13,fontWeight:700,color:T}}>{xferTo||'Qayerga'}</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
          </div>
          {/* Pickup date/time */}
          <div style={{marginBottom:8}}>
            <div style={{fontSize:12,color:'#9AA1B8',fontWeight:600,marginBottom:6,textTransform:'uppercase',letterSpacing:0.4}}>OLISH SANASI VA VAQTI</div>
            <div style={{background:'#fff',border:'1.5px solid #F0F2F5',borderRadius:16,padding:'13px 16px',display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}} onClick={()=>{const d=prompt('Sana va vaqtni kiriting (masalan: 15 May, 10:30)');if(d)setXferPickupDate(d);}}>
              <span style={{fontSize:14,fontWeight:xferPickupDate?700:400,color:xferPickupDate?'#0A1F21':'#9AA1B8'}}>{xferPickupDate||'15 May 2026, 10:30'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
          </div>
          {/* Car type */}
          <div style={{marginBottom:16}}>
            <div style={{fontSize:12,color:'#9AA1B8',fontWeight:600,marginBottom:10,textTransform:'uppercase',letterSpacing:0.4}}>TRANSPORT TURINI TANLANG</div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {CAR_TYPES.map(ct=>(
                <div key={ct.id} onClick={()=>setXferCarType(ct.id)} style={{display:'flex',alignItems:'center',gap:14,background:'#fff',border:`1.5px solid ${xferCarType===ct.id?T:'#F0F2F5'}`,borderRadius:16,padding:'13px 16px',cursor:'pointer',transition:'border-color 0.15s'}}>
                  <span style={{fontSize:24,lineHeight:1}}>{ct.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>{ct.label}</div>
                    <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>{ct.sub}</div>
                  </div>
                  <div style={{width:20,height:20,borderRadius:'50%',border:`2px solid ${xferCarType===ct.id?T:'#DDE0EB'}`,background:xferCarType===ct.id?T:'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    {xferCarType===ct.id && <div style={{width:8,height:8,background:'#fff',borderRadius:'50%'}}/>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Scroll>
        {/* Sticky CTA */}
        <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,padding:'12px 20px 28px',background:'linear-gradient(to bottom,rgba(244,245,250,0) 0%,#F4F5FA 30%)'}}>
          <button style={{width:'100%',background:xferCarType?T:'#DDE0EB',color:xferCarType?'#fff':'#9AA1B8',border:'none',borderRadius:16,padding:'14px 0',fontSize:15,fontWeight:700,cursor:xferCarType?'pointer':'default',boxShadow:xferCarType?'0 6px 16px rgba(0,153,168,0.30)':'none',transition:'all 0.2s'}}>Yuborish</button>
        </div>
      </Frame>
    );
  }

  // ── Inline Transfer form ──
  const TransferForm = () => {
    const cell = { background:'#F7F8FB', borderRadius:14, padding:'10px 14px', marginBottom:8 };
    const labS = { fontSize:11, color:'#7A8190', fontWeight:600, textTransform:'uppercase', letterSpacing:0.4 };
    return (
      <div style={{padding:'0 20px 20px'}}>
        <div onClick={()=>setXferFromSheet('from')} style={{...cell, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div>
            <div style={labS}>QAYERDAN</div>
            <div style={{fontSize:14,fontWeight:700,color:xferFrom?'#0A1F21':'#C0C5D4',marginTop:2}}>{xferFrom||'Manzilni tanlang'}</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
        </div>
        <div onClick={()=>setXferFromSheet('to')} style={{...cell, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div>
            <div style={labS}>QAYERGA</div>
            <div style={{fontSize:14,fontWeight:700,color:xferTo?'#0A1F21':'#C0C5D4',marginTop:2}}>{xferTo||'Manzilni tanlang'}</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
        </div>
        <button onClick={()=>setXferSearchPage(true)} style={mkBtn(4)}>Avtomobilni qidirish</button>
      </div>
    );
  };

  // Transfer from-picker sheet
  const XferFromSheet = () => {
    const { sheetH, sheetXform } = useSheetViewport();
    const [s, setS] = React.useState('');
    const [scrolled, setScrolled] = React.useState(false);
    const inputRef = React.useRef(null);
    React.useEffect(() => { setTimeout(() => inputRef.current?.focus(), 200); }, []);
    const q = s.toLowerCase().trim();
    const LOCATIONS = [
      {type:'plane', name:'Toshkent Xalqaro Aeroporti', sub:'Airport · TAS'},
      {type:'plane', name:'Samarqand Xalqaro Aeroporti', sub:'Airport · SKD'},
      {type:'hotel', name:'Hyatt Regency Toshkent', sub:'Mehmonxona · Chilonzor'},
      {type:'hotel', name:'Hilton Toshkent City', sub:'Mehmonxona · Yunusobod'},
      {type:'hotel', name:'Wyndham Tashkent', sub:'Mehmonxona · Yunusobod'},
      {type:'pin', name:'Chilonzor', sub:'Toshkent tumani'},
      {type:'pin', name:'Yunusobod', sub:'Toshkent tumani'},
      {type:'pin', name:"Mirzo Ulug'bek", sub:'Toshkent tumani'},
      {type:'pin', name:'Sergeli', sub:'Toshkent tumani'},
      {type:'pin', name:'Yakkasaroy', sub:'Toshkent tumani'},
      {type:'pin', name:'Shayxontoxur', sub:'Toshkent tumani'},
      {type:'pin', name:'Olmazor', sub:'Toshkent tumani'},
      {type:'city', name:'Samarqand', sub:'Shahar'},
      {type:'city', name:'Buxoro', sub:'Shahar'},
      {type:'city', name:'Xiva', sub:'Shahar'},
      {type:'city', name:'Namangan', sub:'Shahar'},
      {type:'city', name:'Andijon', sub:'Shahar'},
      {type:'city', name:"Farg'ona", sub:'Shahar'},
      {type:'city', name:'Nukus', sub:'Shahar'},
    ];
    const LocIcon = ({type}) => {
      const s = {width:18,height:18,flexShrink:0};
      if (type==='plane') return <svg {...s} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/></svg>;
      if (type==='hotel') return <svg {...s} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V8l9-6 9 6v14"/><path d="M9 22V12h6v10"/><rect x="11" y="8" width="2" height="2"/></svg>;
      if (type==='city') return <svg {...s} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V10l7-7 7 7v12"/><path d="M9 22v-6h6v6"/><path d="M14 5v17"/></svg>;
      return <svg {...s} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>;
    };
    const filtered = q ? LOCATIONS.filter(l=>l.name.toLowerCase().includes(q)||(l.sub||'').toLowerCase().includes(q)) : LOCATIONS.slice(0,8);
    return (
      <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:300,display:'flex',alignItems:'flex-end'}} onClick={()=>setXferFromSheet(null)}>
        <div style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 18px 24px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()} onScroll={e=>setScrolled(e.currentTarget.scrollTop>4)}>
          <div style={{width:36,height:4,borderRadius:999,background:'#DDE0EB',margin:'10px auto 0'}}/>
          {/* Sticky header: title + search input + map button */}
          <div style={{position:'sticky',top:0,background:scrolled?'#fff':'transparent',transition:'background 0.18s',boxShadow:scrolled?'0 4px 14px rgba(10,31,33,0.06)':'none',marginLeft:-18,marginRight:-18,paddingLeft:18,paddingRight:18,paddingBottom:12,paddingTop:12,zIndex:5}}>
            <div style={{fontSize:17,fontWeight:800,color:'#0A1F21',marginBottom:10}}>{xferFromSheet==='to'?'Qayerga':'Qayerdan'}</div>
            <div style={{display:'flex',alignItems:'center',background:'#F4F5FA',borderRadius:14,padding:'10px 14px',marginBottom:10}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input ref={inputRef} value={s} onChange={e=>setS(e.target.value)} placeholder="Shahar, aeroport yoki manzil..." style={{flex:1,border:'none',background:'none',outline:'none',marginLeft:10,fontSize:14,fontFamily:'inherit',color:'#0A1F21'}}/>
              {s && <button onClick={()=>setS('')} style={{border:'none',background:'none',padding:0,cursor:'pointer',color:'#9AA1B8',fontSize:16,lineHeight:1}}>×</button>}
            </div>
            {/* Map button — always visible in sticky header */}
            <button onClick={()=>{const t=xferFromSheet;setXferFromSheet(null);setXferMapPage(t);}} style={{display:'inline-flex',alignItems:'center',gap:8,background:'none',border:'none',padding:'8px 4px',cursor:'pointer'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
              <span style={{fontSize:14,fontWeight:600,color:T}}>Xaritadan belgilash</span>
            </button>
          </div>
          {/* Results list */}
          <div style={{marginTop:4}}>
            {filtered.map((loc,i)=>(
              <div key={i} onClick={()=>{const v=loc.name;if(xferFromSheet==='to')setXferTo(v);else setXferFrom(v);setXferFromSheet(null);}} style={{display:'flex',alignItems:'center',gap:12,padding:'11px 4px',cursor:'pointer',borderBottom:i<filtered.length-1?'1px solid #F0F2F5':'none'}}>
                <div style={{width:38,height:38,borderRadius:12,background:'#EDF7F8',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><LocIcon type={loc.type}/></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{loc.name}</div>
                  <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>{loc.sub}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Taxi location picker sheet (mirrors XferFromSheet but for taxi)
  const TaxiLocSheet = () => {
    const { sheetH, sheetXform } = useSheetViewport();
    const [s, setS] = React.useState('');
    const [scrolled, setScrolled] = React.useState(false);
    const inputRef = React.useRef(null);
    React.useEffect(() => { setTimeout(() => inputRef.current?.focus(), 200); }, []);
    const q = s.toLowerCase().trim();
    const LOCATIONS = [
      {type:'plane', name:'Toshkent Xalqaro Aeroporti', sub:'Airport · TAS'},
      {type:'plane', name:'Samarqand Xalqaro Aeroporti', sub:'Airport · SKD'},
      {type:'hotel', name:'Hyatt Regency Toshkent', sub:'Mehmonxona · Chilonzor'},
      {type:'hotel', name:'Hilton Toshkent City', sub:'Mehmonxona · Yunusobod'},
      {type:'pin', name:'Chilonzor', sub:'Toshkent tumani'},
      {type:'pin', name:'Yunusobod', sub:'Toshkent tumani'},
      {type:'pin', name:"Mirzo Ulug'bek", sub:'Toshkent tumani'},
      {type:'pin', name:'Sergeli', sub:'Toshkent tumani'},
      {type:'pin', name:'Yakkasaroy', sub:'Toshkent tumani'},
      {type:'city', name:'Samarqand', sub:'Shahar'},
      {type:'city', name:'Buxoro', sub:'Shahar'},
      {type:'city', name:'Namangan', sub:'Shahar'},
      {type:'city', name:'Andijon', sub:'Shahar'},
    ];
    const LocIcon = ({type}) => {
      const sv = {width:18,height:18,flexShrink:0};
      if (type==='plane') return <svg {...sv} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z"/></svg>;
      if (type==='hotel') return <svg {...sv} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V8l9-6 9 6v14"/><path d="M9 22V12h6v10"/><rect x="11" y="8" width="2" height="2"/></svg>;
      if (type==='city') return <svg {...sv} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V10l7-7 7 7v12"/><path d="M9 22v-6h6v6"/><path d="M14 5v17"/></svg>;
      return <svg {...sv} viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>;
    };
    const filtered = q ? LOCATIONS.filter(l=>l.name.toLowerCase().includes(q)||(l.sub||'').toLowerCase().includes(q)) : LOCATIONS.slice(0,8);
    return (
      <div style={{position:'fixed',inset:0,background:'rgba(10,31,33,0.5)',zIndex:300,display:'flex',alignItems:'flex-end'}} onClick={()=>setTaxiFromSheet(null)}>
        <div style={{width:'100%',maxWidth:460,margin:'0 auto',background:'#fff',borderRadius:'24px 24px 0 0',padding:'0 18px 24px',boxShadow:'0 -8px 40px rgba(0,0,0,0.2)',maxHeight:sheetH,overflowY:'auto',transform:sheetXform,transition:'transform 0.18s'}} onClick={e=>e.stopPropagation()} onScroll={e=>setScrolled(e.currentTarget.scrollTop>4)}>
          <div style={{width:36,height:4,borderRadius:999,background:'#DDE0EB',margin:'10px auto 0'}}/>
          <div style={{position:'sticky',top:0,background:scrolled?'#fff':'transparent',transition:'background 0.18s',boxShadow:scrolled?'0 4px 14px rgba(10,31,33,0.06)':'none',marginLeft:-18,marginRight:-18,paddingLeft:18,paddingRight:18,paddingBottom:12,paddingTop:12,zIndex:5}}>
            <div style={{fontSize:17,fontWeight:800,color:'#0A1F21',marginBottom:10}}>{taxiFromSheet==='to'?'Qayerga':'Qayerdan'}</div>
            <div style={{display:'flex',alignItems:'center',background:'#F4F5FA',borderRadius:14,padding:'10px 14px',marginBottom:10}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input ref={inputRef} value={s} onChange={e=>setS(e.target.value)} placeholder="Shahar, aeroport yoki manzil..." style={{flex:1,border:'none',background:'none',outline:'none',marginLeft:10,fontSize:14,fontFamily:'inherit',color:'#0A1F21'}}/>
              {s && <button onClick={()=>setS('')} style={{border:'none',background:'none',padding:0,cursor:'pointer',color:'#9AA1B8',fontSize:16,lineHeight:1}}>×</button>}
            </div>
            <button onClick={()=>{const t=taxiFromSheet;setTaxiFromSheet(null);setTaxiMapPage(t);}} style={{display:'inline-flex',alignItems:'center',gap:8,background:'none',border:'none',padding:'8px 4px',cursor:'pointer'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2" strokeLinecap="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
              <span style={{fontSize:14,fontWeight:600,color:T}}>Xaritadan belgilash</span>
            </button>
          </div>
          <div style={{marginTop:4}}>
            {filtered.map((loc,i)=>(
              <div key={i} onClick={()=>{const v=loc.name;if(taxiFromSheet==='to')setTaxiToVal(v);else setTaxiFromVal(v);setTaxiFromSheet(null);}} style={{display:'flex',alignItems:'center',gap:12,padding:'11px 4px',cursor:'pointer',borderBottom:i<filtered.length-1?'1px solid #F0F2F5':'none'}}>
                <div style={{width:38,height:38,borderRadius:12,background:'#EDF7F8',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><LocIcon type={loc.type}/></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,color:'#0A1F21'}}>{loc.name}</div>
                  <div style={{fontSize:11,color:'#9AA1B8',marginTop:1}}>{loc.sub}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.4" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const fmtPrice = (s) => {
    const n = parseInt(String(s).replace(/\D/g,''),10);
    if (!n) return s;
    if (n >= 1_000_000) {
      const v = n/1_000_000;
      return (v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)) + " mln so'm";
    }
    if (n >= 1000) return (n/1000).toFixed(0) + " ming so'm";
    return s;
  };

  /* ── eSIM country detail ── */
  const ESIM_COUNTRY_FLAGS = {
    'United States':'🇺🇸','United Arab Emirates':'🇦🇪','Türkiye':'🇹🇷','United Kingdom':'🇬🇧',
    'Germany':'🇩🇪','France':'🇫🇷','Japan':'🇯🇵','Korea':'🇰🇷','China':'🇨🇳',
    'Thailand':'🇹🇭','Singapore':'🇸🇬','Global (150+ davlat)':'🌍','Global':'🌍',
    "O'zbekiston":'🇺🇿','Turkiya':'🇹🇷','Birlashgan Arab Amirliklari':'🇦🇪','BAA':'🇦🇪',
    'Misr':'🇪🇬','Vietnam':'🇻🇳','Tailand':'🇹🇭','Albaniya':'🇦🇱','Avstraliya':'🇦🇺',
    'Avstriya':'🇦🇹','Belgiya':'🇧🇪','Filippin':'🇵🇭','Fransiya':'🇫🇷','Germaniya':'🇩🇪',
    'Hindiston':'🇮🇳','Indoneziya':'🇮🇩','Italiya':'🇮🇹','Janubiy Koreya':'🇰🇷',
    'Kanada':'🇨🇦','Malayziya':'🇲🇾','Niderlandiya':'🇳🇱','Polsha':'🇵🇱',
    'Portugaliya':'🇵🇹','Singapur':'🇸🇬','Ispaniya':'🇪🇸','Shveytsariya':'🇨🇭',
    'AQSh':'🇺🇸','Buyuk Britaniya':'🇬🇧','Yaponiya':'🇯🇵','Xitoy':'🇨🇳','Egypt':'🇪🇬'
  };
  const ESIM_PLANS = {
    standard: [
      { gb:'1 GB', days:'7 kun', regular:'220 ming', premium:'198 ming' },
      { gb:'2 GB', days:'15 kun', regular:'275 ming', premium:'253 ming' },
      { gb:'10 GB', days:'15 kun', regular:'550 ming', premium:'517 ming' },
      { gb:'20 GB', days:'15 kun', regular:'858 ming', premium:'803 ming' },
      { gb:'3 GB', days:'30 kun', regular:'286 ming', premium:'264 ming' },
      { gb:'5 GB', days:'30 kun', regular:'363 ming', premium:'341 ming' },
      { gb:'10 GB', days:'30 kun', regular:'517 ming', premium:'484 ming' },
    ],
    unlimited: [
      { gb:'Cheksiz', days:'7 kun', regular:'880 ming', premium:'792 ming' },
      { gb:'Cheksiz', days:'15 kun', regular:'1.4 mln', premium:'1.3 mln' },
      { gb:'Cheksiz', days:'30 kun', regular:'2.2 mln', premium:'2.0 mln' },
    ]
  };

  /* ── eSIM country list (no esimCountry selected) ── */
  if (page === 'esim' && !esimCountry) {
    const ALL_COUNTRIES = [
      {flag:'🇪🇬',name:'Egypt'},{flag:'🇹🇭',name:'Thailand'},{flag:'🇹🇷',name:'Türkiye'},
      {flag:'🇦🇪',name:'United Arab Emirates'},{flag:'🇻🇳',name:'Vietnam'},
      {flag:'🇺🇸',name:'United States'},{flag:'🇬🇧',name:'United Kingdom'},
      {flag:'🇩🇪',name:'Germany'},{flag:'🇫🇷',name:'France'},{flag:'🇯🇵',name:'Japan'},
      {flag:'🇰🇷',name:'Korea'},{flag:'🇨🇳',name:'China'},{flag:'🇸🇬',name:'Singapore'},
      {flag:'🇮🇹',name:'Italy'},{flag:'🇪🇸',name:'Spain'},{flag:'🇨🇭',name:'Switzerland'},
      {flag:'🇳🇱',name:'Netherlands'},{flag:'🇸🇦',name:'Saudi Arabia'},{flag:'🇮🇳',name:'India'},
      {flag:'🇵🇰',name:'Pakistan'},{flag:'🇰🇿',name:'Kazakhstan'},{flag:'🇰🇬',name:'Kyrgyzstan'},
      {flag:'🇷🇺',name:'Russia'},{flag:'🇨🇦',name:'Canada'},{flag:'🇲🇾',name:'Malaysia'},
      {flag:'🇮🇩',name:'Indonesia'},{flag:'🇦🇿',name:'Azerbaijan'},{flag:'🇬🇪',name:'Georgia'},
    ];
    const POPULAR = ['Egypt','Thailand','Türkiye','United Arab Emirates','Vietnam'];
    const popularItems = POPULAR.map(n => ALL_COUNTRIES.find(c=>c.name===n)).filter(Boolean);
    const sortedAll = [...ALL_COUNTRIES].sort((a,b)=>a.name.localeCompare(b.name));

    const Row = (c, idx) => (
      <button key={c.name+idx} onClick={()=>setEsimCountry(c.name)} style={{width:'100%',background:'#fff',borderRadius:18,marginBottom:10,boxShadow:'0 2px 12px rgba(10,31,33,0.06)',border:'1px solid rgba(0,153,168,0.06)',padding:'14px 16px',display:'flex',alignItems:'center',gap:14,cursor:'pointer',textAlign:'left'}}>
        <div style={{width:46,height:46,borderRadius:14,background:TBG,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{c.flag}</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>{c.name}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    );
    const sectionHeader = (label) => (
      <div style={{fontSize:11,fontWeight:700,color:'#9AA1B8',textTransform:'uppercase',letterSpacing:1.2,padding:'14px 4px 8px'}}>{label}</div>
    );

    return (
      <Frame>
        {/* Sticky top: back + search */}
        <div style={{display:'flex',alignItems:'center',gap:10,padding:'18px 16px 20px',background:'#F4F5FA',position:'sticky',top:0,zIndex:20}}>
          <button onClick={()=>{setPage(null);setEsimCountry(null);}} style={{width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px rgba(10,31,33,0.06)',flexShrink:0}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div style={{flex:1,position:'relative',display:'flex',alignItems:'center'}}>
            <svg style={{position:'absolute',left:14,pointerEvents:'none'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            <input placeholder="Qidiruv" style={{width:'100%',padding:'12px 16px 12px 40px',border:'none',borderRadius:14,fontSize:14,color:'#0A1F21',background:'#fff',outline:'none',boxSizing:'border-box',boxShadow:'0 2px 8px rgba(10,31,33,0.05)'}}/>
          </div>
        </div>

        <Scroll style={{background:'#F4F5FA',padding:'0 16px 16px'}}>
          {/* Global */}
          {Row({flag:'🌍',name:'Global'}, 'g')}

          {/* Popular */}
          {sectionHeader('Popular country')}
          {popularItems.map((c,i)=>Row(c, 'p'+i))}

          {/* All */}
          {sectionHeader('All country')}
          {sortedAll.map((c,i)=>Row(c, 'a'+i))}
        </Scroll>
        <TabBar active="trip"/>
      </Frame>
    );
  }

  if (page === 'esim' && esimCountry) {
    const plans = ESIM_PLANS[esimTab] || [];
    return (
      <Frame>
        {/* Sticky top: only back + currency */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 16px 20px',background:'#F4F5FA',position:'sticky',top:0,zIndex:20,marginBottom:0}}>
          <button onClick={()=>{setPage(null);setEsimCountry(null);setEsimSelected(null);}} style={{width:46,height:46,borderRadius:'50%',background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px rgba(10,31,33,0.06)'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button style={{display:'flex',alignItems:'center',gap:5,padding:'11px 18px',borderRadius:999,background:'#fff',border:'1px solid #E8EAF3',cursor:'pointer',boxShadow:'0 2px 8px rgba(10,31,33,0.06)'}}>
            <span style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>UZS</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>

        <Scroll style={{background:'#F4F5FA',padding:'0 16px 16px'}}>
          {/* eSIM card style hero — brand teal gradient */}
          <div style={{position:'relative',background:`linear-gradient(135deg, #00B4C5 0%, ${T} 50%, #007D89 100%)`,borderRadius:20,padding:'18px 20px',marginBottom:18,color:'#fff',overflow:'hidden',boxShadow:'0 12px 28px rgba(0,153,168,0.32), inset 0 1px 0 rgba(255,255,255,0.22)'}}>
            <div style={{position:'absolute',top:-30,right:-30,width:120,height:120,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.14)'}}/>
            <div style={{position:'absolute',top:-50,right:-50,width:160,height:160,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.10)'}}/>
            <div style={{position:'absolute',bottom:-40,left:-20,width:100,height:100,borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14,position:'relative'}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{width:32,height:24,borderRadius:5,background:'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',position:'relative',boxShadow:'0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'}}>
                  <div style={{position:'absolute',inset:3,border:'1px solid rgba(146,80,14,0.4)',borderRadius:3,display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr',gap:1}}>
                    <div style={{borderRight:'1px solid rgba(146,80,14,0.4)',borderBottom:'1px solid rgba(146,80,14,0.4)'}}/>
                    <div style={{borderBottom:'1px solid rgba(146,80,14,0.4)'}}/>
                    <div style={{borderRight:'1px solid rgba(146,80,14,0.4)'}}/>
                    <div/>
                  </div>
                </div>
                <span style={{fontSize:11,fontWeight:700,letterSpacing:1.5,opacity:0.9}}>eSIM</span>
              </div>
              <div style={{display:'flex',alignItems:'flex-end',gap:2}}>
                {[7,11,15,19].map((h,i)=>(<div key={i} style={{width:3,height:h,borderRadius:1,background:'rgba(255,255,255,0.9)'}}/>))}
              </div>
            </div>

            <div style={{display:'flex',alignItems:'center',gap:14,position:'relative'}}>
              <div style={{width:58,height:58,borderRadius:'50%',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:32,boxShadow:'0 4px 12px rgba(0,0,0,0.20), inset 0 0 0 2px rgba(255,255,255,0.4)',flexShrink:0}}>
                {ESIM_COUNTRY_FLAGS[esimCountry] || '🌍'}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:22,fontWeight:800,letterSpacing:-0.4,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{esimCountry}</div>
                <div style={{fontSize:12,fontWeight:500,opacity:0.85,marginTop:2}}>Sayohatda doim aloqada</div>
              </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginTop:14,paddingTop:12,borderTop:'1px dashed rgba(255,255,255,0.22)',position:'relative'}}>
              <div>
                <div style={{fontSize:9,fontWeight:600,letterSpacing:1,opacity:0.7,textTransform:'uppercase'}}>Provider</div>
                <div style={{fontSize:13,fontWeight:700,letterSpacing:0.3}}>Let's Trip · Global</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:9,fontWeight:600,letterSpacing:1,opacity:0.7,textTransform:'uppercase'}}>5G ready</div>
                <div style={{fontSize:13,fontWeight:700}}>⚡ Tezkor</div>
              </div>
            </div>
          </div>

          {/* Tabs — above plans */}
          <div style={{display:'flex',background:'#ECEEF6',borderRadius:14,padding:4,marginBottom:14}}>
            {[{k:'standard',l:'Standard'},{k:'unlimited',l:'Cheksiz'}].map(t=>(
              <button key={t.k} onClick={()=>setEsimTab(t.k)} style={{flex:1,padding:'10px 0',fontSize:13,fontWeight:700,background:esimTab===t.k?'#fff':'none',borderRadius:11,border:'none',color:esimTab===t.k?'#0A1F21':'#9AA1B8',boxShadow:esimTab===t.k?'0 2px 6px rgba(10,31,33,0.08)':'none',cursor:'pointer',transition:'all 0.15s'}}>{t.l}</button>
            ))}
          </div>

          {plans.map((p,i)=>{
            const sel = esimSelected===i;
            return (
              <button key={i} onClick={()=>setEsimSelected(i)} style={{width:'100%',display:'flex',alignItems:'center',gap:10,background:'#fff',borderRadius:18,padding:'14px 16px',marginBottom:10,border:`1.5px solid ${sel?T:'rgba(0,153,168,0.08)'}`,boxShadow:sel?'0 4px 16px rgba(0,153,168,0.18)':'0 2px 8px rgba(10,31,33,0.05)',cursor:'pointer',textAlign:'left',transition:'all 0.15s'}}>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:18,fontWeight:800,color:'#0A1F21'}}>{p.gb}</div>
                  <div style={{fontSize:12,color:'#9AA1B8',marginTop:2}}>{p.days}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
                  <div style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>{p.regular} so'm</div>
                  <div style={{display:'flex',alignItems:'center',gap:6}}>
                    <div style={{display:'inline-flex',alignItems:'center',gap:4,background:'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',borderRadius:999,padding:'4px 10px',boxShadow:'0 2px 6px rgba(217,119,6,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'}}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                      <span style={{fontSize:11,fontWeight:800,color:'#fff'}}>{p.premium} so'm</span>
                    </div>
                    <span style={{width:24,height:24,borderRadius:999,background:'#F4F5FA',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#9AA1B8',fontSize:12,fontWeight:700}}>···</span>
                  </div>
                </div>
                <div style={{width:22,height:22,borderRadius:'50%',border:`2px solid ${sel?T:'#DDE0EB'}`,background:sel?T:'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginLeft:4}}>
                  {sel && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>}
                </div>
              </button>
            );
          })}
        </Scroll>
        {/* Continue CTA — truly fixed, no background */}
        {esimSelected !== null && (
          <div style={{position:'fixed',bottom:78,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:460,padding:'0 16px',zIndex:30,pointerEvents:'none',boxSizing:'border-box'}}>
            <button style={{width:'100%',pointerEvents:'auto',background:T,color:'#fff',border:'none',borderRadius:18,padding:'15px 0',fontSize:15,fontWeight:700,cursor:'pointer',boxShadow:'0 10px 28px rgba(0,153,168,0.45), 0 4px 12px rgba(0,153,168,0.25), inset 0 1px 0 rgba(255,255,255,0.22)'}}>
              Davom etish
            </button>
          </div>
        )}
        <TabBar active="trip"/>
      </Frame>
    );
  }

  if (page) {
    const items = TRIP_RESULTS[page] || [];
    return (
      <Frame>
        {/* Sticky header */}
        <div style={{background:'#fff',position:'sticky',top:0,zIndex:20,borderBottom:'1px solid #F0F2F8',marginBottom:20}}>
          {/* Row 1: back | center (tappable) | UZS */}
          <div style={{display:'flex',alignItems:'center',padding:'14px 16px 10px',gap:8}}>
            <button onClick={()=>{ if(page==='esim' && esimCountry){ setEsimCountry(null); } else { setPage(null); setEsimCountry(null); } }} style={{background:'none',border:'none',cursor:'pointer',padding:'4px 6px',flexShrink:0,display:'flex',alignItems:'center'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            {/* Whole center is one tap target — pill background + edit icon to signal tappability */}
            <button onClick={()=>setPreSheet(page==='esim'?'esim':page)} style={{flex:1,background:TBG,border:'none',cursor:'pointer',padding:'8px 14px',textAlign:'center',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',gap:10,position:'relative'}}>
              <div>
                {(() => {
                  const q = tripQuery || {};
                  const ppl = (q.adults||0) + (q.children||0) + (q.infants||0);
                  const top = (t) => <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:6,fontSize:15,fontWeight:700,color:'#0A1F21',lineHeight:1.2}}>{t}</div>;
                  const sub = (t) => <div style={{fontSize:11,color:T,fontWeight:600,marginTop:2}}>{t}</div>;
                  if (page === 'turlar') return <>{top(<>{q.from || 'Qayerdan'} — {q.to || 'Qayerga'}</>)}{sub(<>{q.dateStart || 'Sana'} · {q.nights||0} kun · {ppl||1} kishi{q.hotels && q.hotels.length ? ` · ${q.hotels.length} hotel` : ''}</>)}</>;
                  if (page === 'aviabilet') return <>{top(<>{q.from || 'Qayerdan'} — {q.to || 'Qayerga'}</>)}{sub(<>{q.dateStart || 'Ketish'}{q.dateEnd?` – ${q.dateEnd}`:''} · {ppl||1} kishi · {{econom:'Econom',business:'Business',premium:'Premium'}[q.flightClass]||'Econom'}</>)}</>;
                  if (page === 'hotel') return <>{top(q.from || 'Shahar')}{sub(<>{q.dateStart || 'Sana'}{q.dateEnd?`–${q.dateEnd}`:''} · {ppl||1} kishi</>)}</>;
                  if (page === 'excur') return <>{top(<>{q.country?(ESIM_COUNTRY_FLAGS[q.country]||'')+' ':''}{q.country || 'Davlat tanlang'}</>)}{sub('Ekskursiya')}</>;
                  if (page === 'esim') return <>{top(<>{q.country?(ESIM_COUNTRY_FLAGS[q.country]||'')+' ':''}{q.country || esimCountry || 'Davlat'}</>)}{sub('eSIM')}</>;
                  if (page === 'rentcar') return <>{top(q.rentLoc || 'Manzil')}{sub(<>{q.rentFrom || 'Boshlanish'}{q.rentTo?` → ${q.rentTo}`:''}</>)}</>;
                  return null;
                })()}
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,opacity:0.85}}>
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </button>
            <button style={{display:'flex',alignItems:'center',gap:2,background:'none',border:'none',cursor:'pointer',padding:'4px 6px',flexShrink:0}}>
              <span style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>UZS</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
          {/* Row 2: Search (hidden on aviabilet) */}
          {page!=='aviabilet' && (
            <div style={{padding:'0 16px 10px',position:'relative',display:'flex',alignItems:'center'}}>
              <svg style={{position:'absolute',left:28,pointerEvents:'none'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
              <input placeholder={({turlar:'Tur qidirish...',excur:'Ekskursiya...',esim:'Davlat qidirish...',hotel:'Mehmonxona qidirish...',rentcar:'Avtomobil yoki davlat...'})[page]||'Qidirish...'} style={{width:'100%',padding:'11px 16px 11px 40px',border:'none',borderRadius:14,fontSize:14,color:'#0A1F21',background:'#F4F5FA',outline:'none',boxSizing:'border-box'}}/>
            </div>
          )}
          {/* Aviabilet — airline chips + time grid */}
          {page==='aviabilet' && (
            <>
              <div style={{display:'flex',gap:7,overflowX:'auto',padding:'0 16px 10px',WebkitOverflowScrolling:'touch'}}>
                {[{n:'Air India',c:'#FBBF24'},{n:'Emirates',c:'#DC2626'},{n:'Fly Dubai',c:'#1E40AF'},{n:'Uzbekistan Airways',c:'#16A34A'}].map((a,i)=>(
                  <button key={i} style={{flexShrink:0,display:'flex',alignItems:'center',gap:6,padding:'6px 12px 6px 6px',borderRadius:999,border:'1.5px solid #E8EAF3',background:'#fff',fontSize:12,fontWeight:600,color:'#0A1F21',cursor:'pointer',whiteSpace:'nowrap'}}>
                    <span style={{width:20,height:20,borderRadius:'50%',background:a.c,display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:10,fontWeight:800}}>{a.n.slice(0,1)}</span>
                    {a.n}
                  </button>
                ))}
              </div>
              {/* Time grid */}
              <div style={{padding:'0 16px 10px'}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:6}}>
                  <span style={{fontSize:13,fontWeight:700,color:'#0A1F21',width:60,flexShrink:0}}>Borish</span>
                  <div style={{display:'flex',gap:5,overflowX:'auto',WebkitOverflowScrolling:'touch'}}>
                    {['07:15','04:05','15:20','17:45','08:05','01:25','08:15'].map((t,i)=>(
                      <button key={i} style={{flexShrink:0,padding:'5px 10px',borderRadius:8,border:'1.5px solid #E8EAF3',background:'#fff',fontSize:12,fontWeight:600,color:'#0A1F21',cursor:'pointer'}}>{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:6}}>
                  <span style={{fontSize:13,fontWeight:700,color:'#0A1F21',width:60,flexShrink:0}}>Qaytish</span>
                  <div style={{display:'flex',gap:5,overflowX:'auto',WebkitOverflowScrolling:'touch'}}>
                    {['13:10','12:30','07:50','13:00','21:30','09:35','20:40'].map((t,i)=>(
                      <button key={i} style={{flexShrink:0,padding:'5px 10px',borderRadius:8,border:'1.5px solid #E8EAF3',background:'#fff',fontSize:12,fontWeight:600,color:'#0A1F21',cursor:'pointer'}}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Row 3: Filters */}
          <div style={{display:'flex',gap:7,overflowX:'auto',padding:'0 16px 12px',WebkitOverflowScrolling:'touch'}}>
            <div style={{flexShrink:0,width:36,height:34,borderRadius:10,border:'1.5px solid #E8EAF3',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>
            </div>
            {(FILTERS[page]||[]).map((f,i)=>(
              <button key={i} style={{flexShrink:0,display:'flex',alignItems:'center',gap:4,padding:'7px 13px',borderRadius:999,border:'1.5px solid #E8EAF3',background:'#fff',fontSize:12,fontWeight:600,color:'#0A1F21',cursor:'pointer',whiteSpace:'nowrap'}}>
                {f}<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            ))}
          </div>
        </div>

        <Scroll style={{background:'#F4F5FA',padding:16}}>
          {/* AVIABILET — flight-style cards */}
          {page === 'aviabilet' && items.map((it,i) => (
            <div key={i} onClick={()=>setFlightDetail(it)} style={{background:'#fff',borderRadius:20,marginBottom:14,boxShadow:'0 2px 12px rgba(10,31,33,0.07)',border:'1px solid rgba(0,153,168,0.07)',overflow:'hidden',cursor:'pointer'}}>
              {/* Tag */}
              <div style={{padding:'14px 16px 0'}}>
                <span style={{display:'inline-block',background:T,color:'#fff',fontSize:11,fontWeight:700,padding:'4px 12px',borderRadius:999}}>{it.tag}</span>
              </div>
              {/* Onward */}
              <div style={{padding:'12px 16px 14px'}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                  <div style={{width:26,height:26,borderRadius:'50%',background:'#FCD34D',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,overflow:'hidden'}}>
                    <span style={{fontSize:11,fontWeight:900,color:'#0A1F21'}}>{it.airline.slice(0,1)}</span>
                  </div>
                  <span style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{it.airline}</span>
                </div>
                <div style={{fontSize:11,color:'#9AA1B8',marginBottom:6}}>Borish</div>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{textAlign:'left'}}>
                    <div style={{fontSize:22,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.dep}</div>
                  </div>
                  <div style={{flex:1,position:'relative',padding:'0 4px'}}>
                    <div style={{textAlign:'center',fontSize:10,color:'#9AA1B8',marginBottom:2}}>Yo'l vaqti: {it.dur}</div>
                    <div style={{display:'flex',alignItems:'center'}}>
                      <div style={{width:8,height:8,borderRadius:'50%',background:T,flexShrink:0}}/>
                      <div style={{flex:1,height:1,background:'#E8EAF3'}}/>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
                      <div style={{flex:1,height:1,background:'#E8EAF3'}}/>
                      <div style={{width:8,height:8,borderRadius:'50%',background:'#F08A2C',flexShrink:0}}/>
                    </div>
                    <div style={{textAlign:'center',fontSize:10,color:'#9AA1B8',marginTop:2}}>{it.stops}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontSize:22,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.arr}</div>
                  </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:6}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{it.from}</div>
                    <div style={{fontSize:10,color:'#9AA1B8'}}>{it.depDate}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{it.to}</div>
                    <div style={{fontSize:10,color:'#9AA1B8'}}>{it.arrDate}</div>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:6,marginTop:10}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={it.baggage?T:'#9AA1B8'} strokeWidth="2"><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 7h14v14H5z"/></svg>
                  <span style={{fontSize:11,color:it.baggage?'#0A1F21':'#9AA1B8'}}>{it.baggage?'Bagaj kiritilgan':"Bagajsiz"}</span>
                </div>
              </div>
              {/* Dashed divider */}
              <div style={{borderTop:'1.5px dashed #E8EAF3',margin:'0 16px',position:'relative'}}>
                <div style={{position:'absolute',left:-22,top:-9,width:18,height:18,borderRadius:'50%',background:'#F4F5FA'}}/>
                <div style={{position:'absolute',right:-22,top:-9,width:18,height:18,borderRadius:'50%',background:'#F4F5FA'}}/>
              </div>
              {/* Return */}
              <div style={{padding:'14px 16px'}}>
                <div style={{fontSize:11,color:'#9AA1B8',marginBottom:6}}>Qaytish</div>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{textAlign:'left'}}>
                    <div style={{fontSize:22,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.retDep}</div>
                  </div>
                  <div style={{flex:1,position:'relative',padding:'0 4px'}}>
                    <div style={{textAlign:'center',fontSize:10,color:'#9AA1B8',marginBottom:2}}>Yo'l vaqti: {it.retDur}</div>
                    <div style={{display:'flex',alignItems:'center'}}>
                      <div style={{width:8,height:8,borderRadius:'50%',background:T,flexShrink:0}}/>
                      <div style={{flex:1,height:1,background:'#E8EAF3'}}/>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
                      <div style={{flex:1,height:1,background:'#E8EAF3'}}/>
                      <div style={{width:8,height:8,borderRadius:'50%',background:'#F08A2C',flexShrink:0}}/>
                    </div>
                    <div style={{textAlign:'center',fontSize:10,color:'#9AA1B8',marginTop:2}}>{it.stops}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontSize:22,fontWeight:800,color:'#0A1F21',lineHeight:1}}>{it.retArr}</div>
                  </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:6}}>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{it.to}</div>
                    <div style={{fontSize:10,color:'#9AA1B8'}}>{it.retDate}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <div style={{fontSize:13,fontWeight:700,color:'#0A1F21'}}>{it.from}</div>
                    <div style={{fontSize:10,color:'#9AA1B8'}}>{it.retDate}</div>
                  </div>
                </div>
              </div>
              {/* Price footer */}
              <div style={{borderTop:'1px solid #F0F2F8',padding:'12px 16px',display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
                <div style={{fontSize:16,fontWeight:800,color:'#0A1F21'}}>{fmtPrice(it.regular)}</div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div style={{display:'inline-flex',alignItems:'center',gap:7,background:'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',borderRadius:999,padding:'6px 12px',boxShadow:'0 2px 8px rgba(217,119,6,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                    <span style={{fontSize:11,fontWeight:600,color:'#fff'}}>Premium: </span>
                    <span style={{fontSize:12,fontWeight:800,color:'#fff'}}>{fmtPrice(it.premium)}</span>
                  </div>
                  <button style={{width:28,height:28,borderRadius:999,background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:'#9AA1B8',fontSize:14,fontWeight:700,padding:0,flexShrink:0}}>···</button>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:6}}>
                  <div style={{width:16,height:16,borderRadius:'50%',background:'#FCD34D',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <span style={{fontSize:8,fontWeight:900,color:'#92400E'}}>C</span>
                  </div>
                  <span style={{fontSize:11,color:'#5C7577'}}>{Math.floor(parseInt(it.premium.replace(/\D/g,''))/10000)} Coins bonus</span>
                </div>
              </div>
            </div>
          ))}

          {/* eSIM — country grid (when no country selected) */}
          {page==='esim' && !esimCountry && [
            {flag:'🇺🇸',name:'United States',plans:8,from:'2.4 mln'},
            {flag:'🇦🇪',name:'United Arab Emirates',plans:6,from:'880 ming'},
            {flag:'🇹🇷',name:'Türkiye',plans:7,from:'770 ming'},
            {flag:'🇬🇧',name:'United Kingdom',plans:5,from:'1.8 mln'},
            {flag:'🇩🇪',name:'Germany',plans:6,from:'1.9 mln'},
            {flag:'🇫🇷',name:'France',plans:5,from:'1.9 mln'},
            {flag:'🇯🇵',name:'Japan',plans:4,from:'2.1 mln'},
            {flag:'🇰🇷',name:'Korea',plans:5,from:'1.7 mln'},
            {flag:'🇨🇳',name:'China',plans:4,from:'1.5 mln'},
            {flag:'🇹🇭',name:'Thailand',plans:6,from:'990 ming'},
            {flag:'🇸🇬',name:'Singapore',plans:4,from:'1.6 mln'},
            {flag:'🌍',name:'Global (150+ davlat)',plans:3,from:'4.4 mln'},
          ].map((c,i)=>(
            <button key={i} onClick={()=>setEsimCountry(c.name)} style={{width:'100%',background:'#fff',borderRadius:18,marginBottom:10,boxShadow:'0 2px 12px rgba(10,31,33,0.06)',border:'1px solid rgba(0,153,168,0.06)',padding:'14px 16px',display:'flex',alignItems:'center',gap:14,cursor:'pointer',textAlign:'left'}}>
              <div style={{width:46,height:46,borderRadius:14,background:TBG,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,flexShrink:0}}>{c.flag}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:700,color:'#0A1F21',marginBottom:2}}>{c.name}</div>
                <div style={{fontSize:11,color:'#9AA1B8'}}>{c.plans} reja · dan {c.from} so'm</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA1B8" strokeWidth="2.2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          ))}

          {/* eSIM — plans for selected country */}
          {page==='esim' && esimCountry && items.map((it,i)=>(
            <div key={i} style={{background:'#fff',borderRadius:20,overflow:'hidden',marginBottom:14,boxShadow:'0 2px 12px rgba(10,31,33,0.07)',border:'1px solid rgba(0,153,168,0.07)'}}>
              <div style={{width:'100%',height:200,overflow:'hidden',position:'relative'}}>
                <img src={it.img} alt={it.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              </div>
              <div style={{padding:'14px 16px 14px'}}>
                <div style={{fontSize:15,fontWeight:700,color:'#0A1F21',lineHeight:1.3}}>{esimCountry} · {it.title.split(' · ')[1] || it.title}</div>
                <div style={{fontSize:12,color:'#9AA1B8',marginTop:3}}>{it.sub}</div>
                <div style={{height:1,background:'#F0F2F8',margin:'12px 0'}}/>
                <div style={{textAlign:'right',marginBottom:10}}>
                  <span style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>dan {fmtPrice(it.regular)}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:8}}>
                  <div style={{display:'inline-flex',alignItems:'center',gap:7,background:'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',borderRadius:999,padding:'7px 14px',boxShadow:'0 2px 8px rgba(217,119,6,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                    <span style={{fontSize:12,fontWeight:600,color:'#fff'}}>Premium narx: </span>
                    <span style={{fontSize:13,fontWeight:800,color:'#fff'}}>dan {fmtPrice(it.premium)}</span>
                  </div>
                  <button style={{width:30,height:30,borderRadius:999,background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:'#9AA1B8',fontSize:16,fontWeight:700,padding:0,flexShrink:0}}>···</button>
                </div>
              </div>
            </div>
          ))}

          {/* OTHERS (turlar/excur/hotel/rentcar) — generic card with photo */}
          {page !== 'aviabilet' && page !== 'esim' && items.map((it,i)=>(
            <div key={i} onClick={page==='turlar'?()=>setTourDetail(it):undefined} style={{background:'#fff',borderRadius:20,overflow:'hidden',marginBottom:14,boxShadow:'0 2px 12px rgba(10,31,33,0.07)',border:'1px solid rgba(0,153,168,0.07)',cursor:page==='turlar'?'pointer':'default'}}>
              {/* Photo with dot indicator (hotel) */}
              <div style={{width:'100%',height:200,overflow:'hidden',position:'relative'}}>
                <img src={it.img} alt={it.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                {page==='hotel' && (
                  <div style={{position:'absolute',bottom:10,left:'50%',transform:'translateX(-50%)',display:'flex',gap:5}}>
                    {[0,1,2,3].map(d=>(<div key={d} style={{width:6,height:6,borderRadius:'50%',background:d===0?'#fff':'rgba(255,255,255,0.5)'}}/>))}
                  </div>
                )}
              </div>
              <div style={{padding:'14px 16px 14px'}}>
                <div style={{fontSize:15,fontWeight:700,color:'#0A1F21',lineHeight:1.3}}>{it.title}</div>
                <div style={{fontSize:12,color:'#9AA1B8',marginTop:3}}>{it.sub}</div>
                {/* Hotel rating badge */}
                {page==='hotel' && it.rating && (
                  <div style={{display:'flex',alignItems:'center',gap:8,marginTop:10}}>
                    <div style={{background:'#22C55E',borderRadius:8,padding:'3px 8px',display:'inline-flex'}}>
                      <span style={{fontSize:11,fontWeight:800,color:'#fff'}}>{it.rating}</span>
                    </div>
                    <span style={{fontSize:12,color:'#5C7577'}}>{it.reviews} sharh</span>
                  </div>
                )}
                <div style={{height:1,background:'#F0F2F8',margin:'12px 0'}}/>
                <div style={{textAlign:'right',marginBottom:10}}>
                  <span style={{fontSize:14,fontWeight:700,color:'#0A1F21'}}>dan {fmtPrice(it.regular)}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:8}}>
                  <div style={{display:'inline-flex',alignItems:'center',gap:7,background:'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)',borderRadius:999,padding:'7px 14px',boxShadow:'0 2px 8px rgba(217,119,6,0.25), inset 0 1px 0 rgba(255,255,255,0.3)'}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M3 7l3.5 9h11L21 7l-5 4-4-7-4 7-5-4z"/></svg>
                    <span style={{fontSize:12,fontWeight:600,color:'#fff'}}>Premium narx: </span>
                    <span style={{fontSize:13,fontWeight:800,color:'#fff'}}>dan {fmtPrice(it.premium)}</span>
                  </div>
                  <button style={{width:30,height:30,borderRadius:999,background:'#F4F5FA',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:'#9AA1B8',fontSize:16,fontWeight:700,padding:0,flexShrink:0}}>···</button>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:8,marginTop:10}}>
                  <div style={{width:18,height:18,borderRadius:'50%',background:'#FCD34D',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,boxShadow:'inset 0 -1px 0 rgba(0,0,0,0.1)'}}>
                    <span style={{fontSize:9,fontWeight:900,color:'#92400E'}}>C</span>
                  </div>
                  <span style={{fontSize:12,color:'#5C7577'}}>{Math.floor(parseInt(it.premium.replace(/\D/g,''))/10000)} Coins — band qilganingiz uchun bonus</span>
                </div>
              </div>
            </div>
          ))}
        </Scroll>
        <TabBar active="trip"/>
        <BottomSheet/>
        <PreSheet/>
      </Frame>
    );
  }

  return (
    <Frame>
      <div style={{padding:'24px 20px 20px',display:'flex',alignItems:'center',justifyContent:'center',background:topScrolled?C.bg:'transparent',position:'sticky',top:0,zIndex:10,transition:'background 0.18s',boxShadow:topScrolled?'0 4px 14px rgba(10,31,33,0.06)':'none'}}>
        <h1 style={{margin:0,fontSize:24,fontWeight:800,color:'#0A1F21',letterSpacing:-0.5}}>Let's Trip</h1>
      </div>
      <Scroll>
        {/* Turlar */}
        <div style={card}>
          <Head icon={<FigTours size={26}/>} label="Turlar" desc="Dunyoning istalgan nuqtasiga tur paketlari" k="turlar"/>
          {open.turlar && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <Slide img="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600" badge="Turkiya" title="Turkiya: 5 100 000 so'mdan" sub="7 kecha · 2 kishi · Ultra All Inclusive" prices={[{label:'Antaliya',price:"7.2 mln so'm"},{label:'Istanbul',price:"5.1 mln so'm"},{label:'Bodrum',price:"8.4 mln so'm"},{label:'Izmir',price:"6.2 mln so'm"}]}/>
              <Slide img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600" badge="Dubai" title="Dubai: 6 800 000 so'mdan" sub="5 kecha · Premium mehmonxonalar" prices={[{label:'Jumeirah Beach',price:"9.8 mln so'm"},{label:'Marina View',price:"7.5 mln so'm"},{label:'Downtown',price:"11.2 mln so'm"},{label:'Palm Island',price:"15.4 mln so'm"}]}/>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('turlar')} style={mkBtn()}>Barcha turlarni ko'rish</button></div>
          </div>}
        </div>

        {/* Ekskursiya */}
        <div style={card}>
          <Head icon={<FigExcursions size={26}/>} label="Ekskursiya" desc="Qiziqarli ziyoratlar va shahar sayohatlari" k="excur"/>
          {open.excur && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <Slide img="https://images.unsplash.com/photo-1547555999-14e818e09e33?w=600" badge="O'zbekiston" title="Tarixiy shaharlar bo'ylab" sub="Eng mashhur yo'nalishlar" prices={[{label:"Xiva safari",price:"450 000 so'm"},{label:'Eski Buxoro',price:"380 000 so'm"},{label:'Samarqand',price:"520 000 so'm"},{label:'Tashkent City',price:"250 000 so'm"}]}/>
              <Slide img="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600" badge="Xalqaro" title="Xorijiy shaharlar" sub="Istanbul, Dubai va boshqalar" prices={[{label:'Istanbul',price:"600 000 so'm"},{label:'Dubai',price:"800 000 so'm"},{label:'Bangkok',price:"550 000 so'm"},{label:'Bali',price:"720 000 so'm"}]}/>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('excur')} style={mkBtn()}>Barcha ekskursiyalarni ko'rish</button></div>
          </div>}
        </div>

        {/* eSIM */}
        <div style={card}>
          <Head icon={<FigEsim size={26}/>} label="eSIM" desc="150+ davlatda uzluksiz internet aloqasi" k="esim"/>
          {open.esim && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <div style={{flexShrink:0,width:'85%',scrollSnapAlign:'center'}}>
                <div style={{background:'#EDF7F8',borderRadius:16,padding:16,position:'relative',overflow:'hidden',border:'1px solid rgba(0,153,168,0.15)'}}>
                  <div style={{position:'absolute',top:8,right:8,opacity:0.08}}><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg></div>
                  <div style={{display:'flex',gap:8,marginBottom:12}}><span style={{background:'#1D4ED8',color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999}}>YEVROPA</span><span style={{background:TBG,color:T,fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999,border:'1px solid rgba(0,153,168,0.2)'}}>34 Davlat</span></div>
                  <div style={{fontSize:16,fontWeight:700,color:'#0A1F21',marginBottom:4}}>Cheksiz</div>
                  <div style={{fontSize:11,color:'#5C7577',marginBottom:12}}>Cheksiz internet + 5G tezlik</div>
                  <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:15,fontWeight:700,color:'#0A1F21'}}>7 kun</span><span style={{fontSize:15,fontWeight:700,color:T}}>150 000 so'm</span></div>
                </div>
              </div>
              <div style={{flexShrink:0,width:'85%',scrollSnapAlign:'center'}}>
                <div style={{background:'#EDF7F8',borderRadius:16,padding:16,position:'relative',overflow:'hidden',border:'1px solid rgba(0,153,168,0.15)'}}>
                  <div style={{position:'absolute',top:8,right:8,opacity:0.08}}><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0A1F21" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg></div>
                  <div style={{display:'flex',gap:8,marginBottom:12}}><span style={{background:'#7C3AED',color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999}}>GLOBAL</span><span style={{background:TBG,color:T,fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999,border:'1px solid rgba(0,153,168,0.2)'}}>150+ Davlat</span></div>
                  <div style={{fontSize:16,fontWeight:700,color:'#0A1F21',marginBottom:4}}>20 GB</div>
                  <div style={{fontSize:11,color:'#5C7577',marginBottom:12}}>4G/5G · Dunyoning har yerida</div>
                  <div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:15,fontWeight:700,color:'#0A1F21'}}>30 kun</span><span style={{fontSize:15,fontWeight:700,color:T}}>400 000 so'm</span></div>
                </div>
              </div>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('esim')} style={mkBtn()}>Barcha eSIMlarni ko'rish</button></div>
          </div>}
        </div>

        {/* Mehmonxona */}
        <div style={card}>
          <Head icon={<FigHotel size={26}/>} label="Mehmonxona" desc="Har qanday byudjetga mos mehmonxonalar" k="hotel"/>
          {open.hotel && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <Slide img="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" badge="Toshkent" title="Toshkent mehmonxonalari" sub="Premium dam olish maskanlari" prices={[{label:'Hyatt Regency',price:"2.4 mln so'm"},{label:'Hilton Tashkent',price:"2.1 mln so'm"},{label:'Wyndham',price:"1.8 mln so'm"},{label:'Ramada',price:"1.5 mln so'm"}]}/>
              <Slide img="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" badge="Dubai" title="Dubai mehmonxonalari" sub="Dengiz yoqasidagi 5★ oteller" prices={[{label:'Jumeirah Beach',price:"9.8 mln so'm"},{label:'Atlantis Palm',price:"14.2 mln so'm"},{label:'Burj Al Arab',price:"38 mln so'm"},{label:'Address DT',price:"11.5 mln so'm"}]}/>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('hotel')} style={mkBtn()}>Barcha mehmonxonalarni ko'rish</button></div>
          </div>}
        </div>

        {/* Aviabilet */}
        <div style={card}>
          <Head icon={<FigFlight size={26}/>} label="Aviabilet" desc="Arzon aviabiletlar, qulay yo'nalishlar" k="aviabilet"/>
          {open.aviabilet && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <Slide img="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600" badge="Dubai" title="Dubai" sub="Mashhur yo'nalishlar" prices={[{label:'TAS → DXB',price:"3.4 mln so'm"},{label:'DXB → TAS',price:"3.1 mln so'm"},{label:"To'g'ri reys",price:'5 soat'},{label:'Biznes klass',price:"9.8 mln so'm"}]}/>
              <Slide img="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600" badge="Istanbul" title="Istanbul" sub="Mashhur yo'nalishlar" prices={[{label:'TAS → IST',price:"2.5 mln so'm"},{label:'IST → TAS',price:"2.3 mln so'm"},{label:"To'g'ri reys",price:'4 soat'},{label:'Biznes klass',price:"7.2 mln so'm"}]}/>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('aviabilet')} style={mkBtn()}>Barcha aviabiletlarni ko'rish</button></div>
          </div>}
        </div>

        {/* Airport taxi */}
        <div style={card}>
          <Head icon={<FigAirportTaxi size={26}/>} label="Airport taxi" desc="Aeroportdan va aeroportga tez yetkazish" k="taxi"/>
          {open.taxi && <TaxiForm/>}
        </div>

        {/* Transfer */}
        <div style={card}>
          <Head icon={<FigTransfer size={26}/>} label="Transfer" desc="Shaharlararo qulay transfer xizmati" k="transfer"/>
          {open.transfer && <TransferForm/>}
        </div>

        {/* Rent Car */}
        <div style={card}>
          <Head icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width="26" height="26"><path fill="#79808a" d="M28.96 16.18c-.21-2.36-.56-2.82-.69-3-.3-.4-.78-.66-1.3-.94a.2.2 0 0 1-.05-.33.93.93 0 0 0-.04-1.35 1 1 0 0 0-.65-.25h-.91l-.12.01-.08-.03c-.55-1.14-1.29-2.7-2.82-3.47-2.28-1.14-6.48-1.2-7.3-1.2s-5.02.06-7.3 1.2c-1.53.76-2.27 2.33-2.81 3.47v.01l-.09.02H3.77a.95.95 0 0 0-.96.86 1 1 0 0 0 .27.73.2.2 0 0 1 .02.27l-.07.06c-.51.28-1 .54-1.3.94-.13.17-.48.63-.69 3a21 21 0 0 0-.04 3.6c.2 1.85.55 2.96.57 3a.9.9 0 0 0 .77.65.94.94 0 0 0 .94.95h3.28a.94.94 0 0 0 .94-.94c.5 0 .86-.1 1.23-.19a10 10 0 0 1 1.64-.29 53 53 0 0 1 4.63-.23c1.04 0 2.9.06 4.7.23q.83.07 1.64.3c.35.08.7.17 1.16.18a.94.94 0 0 0 .94.94h3.28a.94.94 0 0 0 .94-.94.9.9 0 0 0 .77-.65c.02-.04.38-1.16.57-3 .1-.9.08-2.27-.04-3.6M6.58 11.1c.47-1 1-2.12 1.96-2.6 1.38-.68 4.24-1 6.46-1s5.08.31 6.46 1c.95.48 1.49 1.6 1.96 2.6l.06.13a.47.47 0 0 1-.44.67c-1.95-.05-6.05-.22-8.04-.22-2 0-6.1.17-8.04.22a.47.47 0 0 1-.44-.67zm.7 4.67q-1.5.18-3.04.18c-.62 0-1.26-.18-1.38-.73a2 2 0 0 1-.03-.8c.04-.17.1-.3.4-.35.75-.12 1.18.03 2.43.4.82.24 1.42.57 1.76.82.17.13.08.46-.14.48m12.97 4.8c-.77.09-2.31.06-5.23.06s-4.47.03-5.24-.06c-.8-.08-1.8-.84-1.11-1.5.46-.45 1.53-.78 2.96-.97 1.44-.18 2.04-.28 3.38-.28s1.88.06 3.38.29 2.62.55 2.97.95c.63.72-.31 1.42-1.1 1.52m6.89-5.35c-.12.55-.77.73-1.38.73q-1.56 0-3.1-.18c-.18-.02-.26-.33-.08-.48a6 6 0 0 1 1.76-.82c1.25-.37 1.97-.52 2.59-.4.15.04.23.2.23.3q.07.42-.02.85"/></svg>} label="Rent a Car" desc="Ixtiyoriy mamlakatda avtomobil ijarasi" k="rentcar"/>
          {open.rentcar && <div style={{paddingBottom:20}}>
            <div style={{display:'flex',gap:16,overflowX:'auto',scrollSnapType:'x mandatory',padding:'0 20px'}}>
              <div style={{flexShrink:0,width:'85%',scrollSnapAlign:'center'}}>
                <div style={{width:'100%',aspectRatio:'16/9',borderRadius:16,overflow:'hidden',position:'relative',marginBottom:10,border:'1px solid rgba(0,153,168,0.12)'}}>
                  <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700" alt="Uzbekistan" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                  <div style={{position:'absolute',top:8,left:8,background:T,color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999}}>🇺🇿 Mahalliy</div>
                </div>
                <div style={{padding:'0 4px 8px'}}>
                  <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginBottom:2}}>Uzbekistan</div>
                  <div style={{fontSize:11,color:'#5C7577',marginBottom:8}}>Toshkent · Samarqand · Buxoro</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Sedan</div><div style={{fontSize:11,fontWeight:700,color:T}}>450 000 so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Krossover</div><div style={{fontSize:11,fontWeight:700,color:T}}>700 000 so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Biznes</div><div style={{fontSize:11,fontWeight:700,color:T}}>950 000 so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Premium</div><div style={{fontSize:11,fontWeight:700,color:T}}>1.5 mln so'm</div></div>
                  </div>
                </div>
              </div>
              <div style={{flexShrink:0,width:'85%',scrollSnapAlign:'center'}}>
                <div style={{width:'100%',aspectRatio:'16/9',borderRadius:16,overflow:'hidden',position:'relative',marginBottom:10,border:'1px solid rgba(0,153,168,0.12)'}}>
                  <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700" alt="UAE" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                  <div style={{position:'absolute',top:8,left:8,background:'#F08A2C',color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:999}}>🇦🇪 Xalqaro</div>
                </div>
                <div style={{padding:'0 4px 8px'}}>
                  <div style={{fontSize:13,fontWeight:700,color:'#0A1F21',marginBottom:2}}>United Arab Emirates</div>
                  <div style={{fontSize:11,color:'#5C7577',marginBottom:8}}>Dubai · Abu Dhabi · Sharjah</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Sedan</div><div style={{fontSize:11,fontWeight:700,color:T}}>1.2 mln so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Krossover</div><div style={{fontSize:11,fontWeight:700,color:T}}>1.8 mln so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Biznes</div><div style={{fontSize:11,fontWeight:700,color:T}}>2.4 mln so'm</div></div>
                    <div style={mc}><div style={{fontSize:10,color:'#5C7577',marginBottom:2}}>Sport</div><div style={{fontSize:11,fontWeight:700,color:T}}>4.5 mln so'm</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{padding:'0 20px'}}><button onClick={()=>setPreSheet('rentcar')} style={mkBtn()}>Barcha avtomobillarni ko'rish</button></div>
          </div>}
        </div>

        {/* Mashhur yo'nalishlar */}
        <div style={{fontSize:20,fontWeight:700,color:'#0A1F21',margin:'8px 0 12px',letterSpacing:-0.3}}>Mashhur yo'nalishlar</div>
        <div style={{background:'#fff',borderRadius:16,padding:16,boxShadow:SH,border:'1px solid rgba(0,153,168,0.10)',marginBottom:16,display:'flex',alignItems:'flex-start',gap:12}}>
          <div style={{width:8,height:8,borderRadius:'50%',background:T,marginTop:6,flexShrink:0}}/>
          <div>
            <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:1,fontWeight:600,color:'#5C7577',marginBottom:4}}>O'zbekistondan</div>
            <div style={{fontSize:16,fontWeight:600,color:'#0A1F21',marginBottom:2}}>Samarqand — Rim</div>
            <div style={{fontSize:13,color:'#5C7577',marginBottom:4}}>2 soat 40 daqiqa</div>
            <div style={{fontSize:12,fontWeight:700,color:T}}>3 450 000 so'm dan</div>
          </div>
        </div>

        {/* Promo */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:24,height:180}}>
          <div style={{background:TBG,borderRadius:20,padding:16,display:'flex',flexDirection:'column',justifyContent:'space-between',border:'1px solid rgba(0,153,168,0.15)',boxShadow:SH}}>
            <div><div style={{fontSize:15,fontWeight:700,color:T,marginBottom:8,lineHeight:1.3}}>Global eSIM xizmati</div><div style={{fontSize:11,color:'#5C7577',lineHeight:1.5}}>Dunyoning 150+ davlatida aloqada bo'ling.</div></div>
            <div style={{display:'flex',alignItems:'center',gap:4,color:T,fontWeight:700,fontSize:13}}>Batafsil <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T} strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
          <div style={{borderRadius:20,overflow:'hidden',position:'relative',border:'1px solid rgba(0,153,168,0.10)',boxShadow:SH}}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt="eSIM" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,0,0.35), transparent)'}}/>
          </div>
        </div>
      </Scroll>
      <TabBar active="trip"/>
      <BottomSheet/>
      <PreSheet/>
      {xferFromSheet && <XferFromSheet/>}
      {taxiFromSheet && <TaxiLocSheet/>}
    </Frame>
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
