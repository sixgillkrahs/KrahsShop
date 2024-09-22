import { MenuDataItem } from "@ant-design/pro-layout";
// import {  useTranslate } from "./language";

// const translate = useTranslate();

const menuList : MenuDataItem[] = [
  {
    path: "/",
    // name: translate('menu.home'),
    // name:"Trang chur",
    icon: "HomeOutlined", 
  },
  {
    path: "/a",
    name: "Sản Phẩm",
    icon: "AppstoreOutlined",
    children: [
      {
        path: "/products/new",
        name: "Thêm Sản Phẩm",  
        icon: "PlusOutlined",
      },
      {
        path: "/products/list",
        name: "Danh Sách Sản Phẩm",
        icon: "OrderedListOutlined",
      },
    ],
  },
];

export default menuList;