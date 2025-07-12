import React from "react";
import MKStar from './Images/MK-Star.png';
import MKStar61Black from './Images/MK-Star61_black.jpg';
import MKStar61White from './Images/MK-Star61_white.jpg';
import MKStar75Black from './Images/MK-Star75_black.jpg';
import MKStar75White from './Images/MK-Star75_white.jpg';
import fantasyWhite from './Images/fantasy-white.png'
import fantasyBlack from './Images/Fantasy-black.png';
import V80 from './Images/mouse-V80.png';

import MKStarImages from './Images/MKstar_folder/MK-star-images.js';
import FantasyBImages from "./Images/FantasyB_folder/FantasyB.jsx";
import FantasyWImages from "./Images/FantasyW_folder/FantasyW.jsx";
import MKstar61BImages from "./Images/MKstar61B_folder/MKstar61B.jsx";
import MKstar75BImages from "./Images/MKstar75B_folder/MKstar75B.jsx";
import MKstar75WImages from "./Images/MKstar75W_folder/MKstar75W.jsx";
import V80Images from "./Images/V80_folder/V80.jsx";
import MKstar61W from "./Images/MKstar61W_folder/MKstar61W.js";


let items = [
  {
    id: 1,
    name: "MK Star",
    price: 59.99,
    image: MKStar,
    features: ["80% mechanical keyboard with 61 keys",
      "Ergonomic design with OEM profile and 2-level support feet",
      "ABS double-shot keycaps with frosting panel",
      "Cool single color backlight with different lighting modes & brightness",
      "Supports N-key rollover",
      "Supports FN combination function keys"
    ],

    specification: ["number of keys: 61",
      "lighting: single color",
      "weight: 880g (1.94 lbs)",
      "Connected type: wired",
      "Interface: USB",
      "Wired cable length: approx. 1.8m (5.9 ft)",
    ],
    showImages: MKStarImages,
    isOrdered: false
  },





  {
    id: 2,
    name: "MK Star 61",
    price: 29.99,
    image: MKStar61Black,
    features: [
      "60% mechanical keyboard with 61 keys",
      "Ergonomic design with OEM profile",
      "ABS double-shot keycaps",
      "Support all keys hot swap (3-pin plate-mounted) N-key rollover",
      "Detachable USB A-C connecting cable",
      "Single color lightning with different lighting modesand brightness",
      "Supports FN combination function keys"
    ],
    specification: [
      "number of keys: 61",
      "lighting: single color",
      "weight: 515g (1.13 lbs)",
      "Size: 290 x 100 x 30mm (11.4 x 3.9 x 1.6 in)",
      "Connected type: wired",
      "Interface: USB",
      "Wired cable length: approx. 1.5m (4.9 ft)",
    ],
    showImages: MKstar61BImages,
    isOrdered: false
  },





  {
    id: 3,
    name: "MK Star 61",
    price: 199.99,
    image: MKStar61White,
    features: [
      "60% mechanical keyboard with 61 keys",
      "Ergonomic design with OEM profile",
      "ABS double-shot keycaps",
      "Support all keys hot swap (3-pin plate-mounted) N-key rollover",
      "Detachable USB A-C connecting cable",
      "Single color lightning with different lighting modesand brightness",
      "Supports FN combination function keys"
    ],
    specification: [
      "number of keys: 61",
      "lighting: single color",
      "weight: 515g (1.13 lbs)",
      "Size: 290 x 100 x 30mm (11.4 x 3.9 x 1.6 in)",
      "Connected type: wired",
      "Interface: USB",
      "Wired cable length: approx. 1.5m (4.9 ft)",
    ],
    showImages: MKstar61W,
    isOrdered: false
  },





  {
    id: 4,
    name: "MK Star 75",
    price: 24.99,
    image: MKStar75Black,
    features: [
      "75% compat mechanical keyboard with 83 keys",
      "Ergonomic design with OEM profile and 2-level support feet",
      "ABS double-shot keycaps",
      "Blue blacklight with different lighting modes and brightness",
      "Detachable USB A-C connecting cable",
      "2-in-1 mult-functional knob to control volume and backlight",
      "Silent typing with sound absorbing layer",
      "Supports N-key rollover and FN combination function keys",
    ],
    specification: [
      "number of keys: 83",
      "lighting: blue",
      "weight: 606+5g (1.34 lbs)",
      "Size: 335 x 141 x 39mm (13.2 x 5.6 x 1.5 in)",
      "Connected type: wired",
      "Interface: USB",
      "Wired cable length: approx. 1.5m (4.9 ft)",
    ],
    showImages: MKstar75BImages,
    isOrdered: false
  },





  {
    id: 8,
    name: "MK Star 75",
    price: 39.99,
    image: MKStar75White,
    features: [
      "75% compat mechanical keyboard with 83 keys",
      "Ergonomic design with OEM profile and 2-level support feet",
      "ABS double-shot keycaps",
      "Blue blacklight with different lighting modes and brightness",
      "Detachable USB A-C connecting cable",
      "2-in-1 mult-functional knob to control volume and backlight",
      "Silent typing with sound absorbing layer",
      "Supports N-key rollover and FN combination function keys",
    ],
    specification: [
      "number of keys: 83",
      "lighting: blue",
      "weight: 606+5g (1.34 lbs)",
      "Size: 335 x 141 x 39mm (13.2 x 5.6 x 1.5 in)",
      "Connected type: wired",
      "Interface: USB",
      "Wired cable length: approx. 1.5m (4.9 ft)",
    ],
    showImages: MKstar75WImages,
    isOrdered: false
  },





  {
    id: 5,
    name: "Fantasy microphone",
    price: 49.99,
    image: fantasyWhite,
    features: [
      "Wired USB Microphone",
      "RGB lighitning",
      "One-tap mute",
      "Omnidirectional Sound Pickup",
      "3.5mm Headphone Jack",
      "professional USB 2.0 Audio Chip",
      "Automatic noise reduction",
    ],
    specification: [
      "Connected type: wired USB",
      "Speaker frequency response: 20Hz-20KHz",
      "Microphone frequency range: 100Hz - 16KHz",
      "Microphone sensitivity: -38dB",
      "Microphone directivity: Omnidirectional",
      "Microphone output impedance: 800Ω - 2.2KΩ",
      "Rated current: 80mA",
      "Working voltage:DC 5V ± 5%",
      "Product size: 200 x 87 x 205mm (4.7 x 4.7 x 9.8 in)",
      "Product weight: 293g (0.65 lbs)",
    ],
    showImages: FantasyWImages,
    isOrdered: false
  },
  {
    id: 6,
    name: "Fantasy microphone",
    price: 39.99,
    image: fantasyBlack,
    features: [
      "Wired USB Microphone",
      "RGB lighitning",
      "One-tap mute",
      "Omnidirectional Sound Pickup",
      "3.5mm Headphone Jack",
      "professional USB 2.0 Audio Chip",
      "Automatic noise reduction",
    ],
    specification: [
      "Connected type: wired USB",
      "Speaker frequency response: 20Hz-20KHz",
      "Microphone frequency range: 100Hz - 16KHz",
      "Microphone sensitivity: -38dB",
      "Microphone directivity: Omnidirectional",
      "Microphone output impedance: 800Ω - 2.2KΩ",
      "Rated current: 80mA",
      "Working voltage:DC 5V ± 5%",
      "Product size: 200 x 87 x 205mm (4.7 x 4.7 x 9.8 in)",
      "Product weight: 293g (0.65 lbs)",
    ],
    showImages: FantasyBImages,
    isOrdered: false
  },
  {
    id: 7,
    name: "V-80 Mouse",
    price: 14.99,
    image: V80,
    features: [
      "Wirless gaming mouse",
      "Dual mode connection (2.4G/BT5.0)",
      "Ergonomic design",
      "Three-level"
    ],
    specification: [
      "Connection type: 2.4G/BT5.0",
      "Sensor type: Optical",
      "DPI: 800/1200/1600",
      "Number of buttons: 6",
      "Battery capacity: 500mAh",
      "Charging time: 2 hours",
      "Product size: 130 x 70 x 40mm (5.1 x 2.8 x 1.6 in)",
      "Product weight: 100g (0.22 lbs)",
    ],
    showImages: V80Images,
    isOrdered: false
  }
];

export default items;