import React from "react";
import { Dropdown as ADropdown } from "antd";
import type { DropdownProps } from "antd";
import type { DropdownButtonProps } from "antd/lib/dropdown";

const Dropdown: React.FC<DropdownProps> = (props) => {
  return <ADropdown {...props} />;
};

const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
  return <ADropdown.Button {...props} />;
};

export { Dropdown, DropdownButton };
