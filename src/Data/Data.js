import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilBookReader,
    UilRupeeSign,
    
  } from "@iconscout/react-unicons";
  
 

  import {MdAddchart} from 'react-icons/md';
  import {MdOutlineManageAccounts} from "react-icons/md"
  import {BsFillChatLeftFill} from "react-icons/bs"
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: MdAddchart,
      heading: "Add Product",
    },
    {
      icon: MdOutlineManageAccounts,
      heading: "Account",
    },
    {
      icon: BsFillChatLeftFill,
      heading: 'Report Bug'
    },
  ];
  
  // Cards Data
  export const cardsData = [
    {
      title: "Students",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "102",
      png: UilBookReader,
      series: [
      {
        name: "Students",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    },
    {
      title: "Teachers",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "70",
      png: UilUsersAlt,
      series: [
      {
        name: "Teachers",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    },
    {
      title: "Revenue",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 50,
      value: "45,270",
      png: UilRupeeSign,
      series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];

  export const tableData = [
    {
      name : "Waseem Raza",
      marks : 1185,
      percentage : '98%',
      year : 2022
    },    {
      name : "Zube Fatima",
      marks : 1195,
      percentage : '99.5%',
      year : 2021
    },    {
      name : "Anupam Sriv.",
      marks : 1196,
      percentage : '99.6%',
      year : 2020
    },    {
      name : "Ariz Haider",
      marks : 1187,
      percentage : '98.2%',
      year : 2019
    },    {
      name : "Abhay Sachan",
      marks : 1185,
      percentage : '98%',
      year : 2018
    },
  ]