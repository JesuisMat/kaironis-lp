// SVG assets for Kaironis landing page

export const LogoIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#8585F6"/>
    <circle cx="12.5" cy="12.5" r="9.5" fill="white"/>
  </svg>
);

export const SocialIcon = () => (
  <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39.5" cy="39.5" r="39.5" fill="#8585F6" fillOpacity="0.2"/>
    <path d="M39.5 20C28.5 20 19.5 29 19.5 40C19.5 51 28.5 60 39.5 60C50.5 60 59.5 51 59.5 40C59.5 29 50.5 20 39.5 20ZM39.5 28C43.5 28 46.5 31 46.5 35C46.5 39 43.5 42 39.5 42C35.5 42 32.5 39 32.5 35C32.5 31 35.5 28 39.5 28ZM39.5 56C34 56 29 53.5 25.5 49.5C26 45 34 42.5 39.5 42.5C45 42.5 53 45 53.5 49.5C50 53.5 45 56 39.5 56Z" fill="#8585F6"/>
  </svg>
);

export const PedagogiqueIcon = () => (
  <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39.5" cy="39.5" r="39.5" fill="#8585F6" fillOpacity="0.2"/>
    <path d="M39.5 21L23 30V36C23 46 30 55.5 39.5 58C49 55.5 56 46 56 36V30L39.5 21ZM39.5 38.9H52C51.2 46 46.5 52.5 39.5 54.9V39H27V31.5L39.5 24.3V38.9Z" fill="#8585F6"/>
  </svg>
);

export const PolitiqueIcon = () => (
  <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39.5" cy="39.5" r="39.5" fill="#8585F6" fillOpacity="0.2"/>
    <path d="M52 23H27C24.8 23 23 24.8 23 27V52C23 54.2 24.8 56 27 56H52C54.2 56 56 54.2 56 52V27C56 24.8 54.2 23 52 23ZM35 48H29V32H35V48ZM43 48H37V27H43V48ZM51 48H45V37H51V48Z" fill="#8585F6"/>
  </svg>
);

export const CheckIcon = () => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5.22L5.5 9.72L13 1.72" stroke="#8585F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LineDecorator = ({ width = "426" }) => (
  <svg width={width} height="1" viewBox={`0 0 ${width} 1`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="0.5" x2={width} y2="0.5" stroke="#8585F6"/>
  </svg>
);
