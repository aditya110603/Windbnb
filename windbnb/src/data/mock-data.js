import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1605531321045-59731b348442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1591089101324-2280d9260000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1628918098760-471c0fad230c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1566837412036-3ff17e51e783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
    ],
    location: 'Munnar, India',
    days: '20-27 Sep',
    price: '₹ 6,881 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1622040256403-313e14cad531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1622615293871-d2ef4ef695ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1657532696786-ab96666dd893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1575263330299-73b1f27e0110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      },
    ],
    location: 'Nilgiris, India',
    days: '25-30 Sep',
    price: '₹ 8,798 night',
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1609083910942-dac5cb5972e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1633931698758-f59cdaf042a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1600161617462-8fb8eeeb6ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2758&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1621581461372-16d552677d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
    ],
    location: 'Kodaikanal, India',
    days: '10-15 Oct',
    price: '₹ 3,499 night',
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1576398928108-623654089906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1648320750202-ca131bae7aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2213&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1621226010907-09600b25edb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1632895348603-f63b80245a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Kotagiri, India',
    days: '12-18 Oct',
    price: '₹ 4,575 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1657651516650-0f09a9d41a17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1614509743927-21952837214b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1589999296622-5dd73a58cf2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Canacona, India',
    days: '18-24 Sep',
    price: '₹ 4,435 night',
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1582549023823-b5984434f8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1597480893986-aae4ed662a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1576161237644-ab5811df08d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1573011708674-8e127b99e490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80',
      },
    ],
    location: 'Puducherry, India',
    days: '18-23 Sep',
    price: '₹ 4,675 night',
    isNew: false,
    rating: 4.7,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1542370512244-4a99a9ab9e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2804&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1532370184535-22cec5ca8480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'TH, Thailand',
    days: '16-21 Sep',
    price: '₹9,850 night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1575231902142-29aaec0bd547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
    ],
    location: 'MV, Maldives',
    days: '17-22 Oct',
    price: '₹ 74,345 night',
    isNew: false,
    rating: 4.9,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1514351606796-9d81063e482d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
    ],
    location: 'Bali, Indonesia',
    days: '16-22 Sep',
    price: '₹ 19,450 night',
    isNew: false,
    rating: 4.5,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1583152574514-355eb2bdc67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519101739220-83f6a14852ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1623288221258-73cd427a97a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
    ],
    location: 'El Nido, Philippines',
    days: '17-22 Sep',
    price: '₹ 9,499 night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1645020456013-c4e693da0bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1645426580767-0d01133b067e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1610963196817-7d1415647029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1482351403047-56c184e23fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Rovaniemi, Finland',
    days: '25-30 Sep',
    price: '₹ 10,400 night',
    isNew: false,
    rating: 4.4,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519758747502-84b7b18a6160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1605701845009-fe235d54c237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1513507051-c277fe70c8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Svolvær, Norway',
    days: '14-19 Oct',
    price: '₹ 14,450 night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1578411930448-c153c8776cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1576124566721-6496f8c53365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1613231365704-22aa7ad7cffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80',
      },
    ],
    location: 'Florida, US',
    days: '24 Sep - 1 Oct',
    price: '₹ 1,00,450 night',
    isNew: false,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1542396817-804fa5be8ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1501455580650-44332b313407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1518797292290-1bc6e24a545a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'New York, US',
    days: '1-8 Oct',
    price: '₹55,500 night',
    isNew: true,
    rating: 4.8,
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1557258394-3400685c6fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1469286663112-f58a16c6f075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1557258580-39831fef1593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Skykomish, Washington, US',
    days: '27 Nov - 2 Dec',
    price: '₹ 25,371 night',
    isNew: true,
    rating: 4.88,
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1605492476924-0e35838341cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1611788957917-99720ae66349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1597777933704-61bde8bd8e02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1614666893546-b8334e9f924b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
    ],
    location: 'Joshua Tree, California, US',
    days: '10-17 Oct',
    price: '₹ 1,25,450 night',
    isNew: false,
    rating: 4.9,
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1504218727796-db522606b16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Grimentz, Switzerland',
    days: '12-19 Oct',
    price: '₹27.899 night',
    isNew: false,
    rating: 4.7,
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    location: 'Venice, Italy',
    days: '24-29 Oct',
    price: '₹16,549 night',
    isNew: true,
    rating: 4.5,
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1591375198043-606387f65389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1587188011339-043293778ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1577788922620-a85ef7281842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      },
    ],
    location: 'Madrid, Spain',
    days: '10-17 Oct',
    price: '₹ 43,249 night',
    isNew: false,
    rating: 4.7,
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1470470558828-e00ad9dbbc13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80',
      },
    ],
    location: 'Paris, France',
    days: '5-10 Dec',
    price: '₹ 27,499 night',
    isNew: false,
    rating: 4.5,
  },
];
