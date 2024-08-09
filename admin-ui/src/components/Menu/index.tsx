import React from "react";
import { Menu as AMenu, MenuProps } from "antd";
import { MenuItemGroupProps } from "antd/es/menu";
import { MenuItemProps, SubMenuProps } from "rc-menu";
import { MenuDividerProps } from "antd/lib/menu";


const Menu: React.FC<MenuProps> = (props) => {
  return <AMenu {...props} />;
};

const SubMenu: React.FC<SubMenuProps> = (props) => {
  return <AMenu.SubMenu {...props} />;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <AMenu.Item {...props} />;
};

const MenuItemGroup: React.FC<MenuItemGroupProps> = (props) => {
  return <AMenu.ItemGroup {...props} />;
};

const MenuDivider: React.FC<MenuDividerProps> = (props) => {
  return <AMenu.Divider {...props} />;
};

export { Menu, SubMenu, MenuItem, MenuItemGroup, MenuDivider };