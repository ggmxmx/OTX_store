import React from "react";
import gamingKeyboardImg from './gaming-keyboard.jpg';
let items = [
  {
    id: 1,
    name: "Gaming Keyboard",
    price: 59.99,
    image: gamingKeyboardImg,
    isOrdered: false
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://via.placeholder.com/150?text=Wireless+Mouse",
    isOrdered: false
  },
  {
    id: 3,
    name: "HD Monitor",
    price: 199.99,
    image: "https://via.placeholder.com/150?text=HD+Monitor",
    isOrdered: false
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 24.99,
    image: "https://via.placeholder.com/150?text=USB-C+Hub",
    isOrdered: false
  },
  {
    id: 5,
    name: "Bluetooth Headset",
    price: 49.99,
    image: "https://via.placeholder.com/150?text=Bluetooth+Headset",
    isOrdered: false
  },
  {
    id: 6,
    name: "Webcam 1080p",
    price: 39.99,
    image: "https://via.placeholder.com/150?text=Webcam+1080p",
    isOrdered: false
  },
  {
    id: 7,
    name: "Mechanical Mousepad",
    price: 14.99,
    image: "https://via.placeholder.com/150?text=Mousepad",
    isOrdered: false
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 34.99,
    image: "https://via.placeholder.com/150?text=Laptop+Stand",
    isOrdered: false
  },
  {
    id: 9,
    name: "External SSD 1TB",
    price: 119.99,
    image: "https://via.placeholder.com/150?text=External+SSD",
    isOrdered: false
  },
  {
    id: 10,
    name: "Smartphone Holder",
    price: 12.99,
    image: "https://via.placeholder.com/150?text=Phone+Holder",
    isOrdered: false
  }
];

export default items;