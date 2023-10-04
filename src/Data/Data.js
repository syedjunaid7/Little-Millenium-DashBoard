import { MdAddchart } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsFillChatLeftFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useEffect } from "react";

// Sidebar Data
export const SidebarData = [
  {
    icon: MdOutlineSpaceDashboard,
    heading: "Dashboard",
    to: "/",
  },
  {
    icon: MdAddchart,
    heading: "Add Product",
    to: "/product",
  },
  {
    icon: MdOutlineManageAccounts,
    heading: "Account",
    to: "/account",
  },
  {
    icon: BsFillChatLeftFill,
    heading: "Report Bug",
    to: "/bug",
  },
];

export const card = [

]

export const tableData = [
  {
    name: "Waseem Raza",
    marks: 1185,
    percentage: "98%",
    year: 2022,
  },
  {
    name: "Zube Fatima",
    marks: 1195,
    percentage: "99.5%",
    year: 2021,
  },
  {
    name: "Anupam Sriv.",
    marks: 1196,
    percentage: "99.6%",
    year: 2020,
  },
  {
    name: "Ariz Haider",
    marks: 1187,
    percentage: "98.2%",
    year: 2019,
  },
  {
    name: "Abhay Sachan",
    marks: 1185,
    percentage: "98%",
    year: 2018,
  },
];
