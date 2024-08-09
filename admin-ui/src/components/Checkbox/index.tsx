import React from "react";
import { Checkbox as ACheckbox } from "antd";
import type { CheckboxProps } from "antd";
import type { CheckboxGroupProps } from "antd/lib/checkbox";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <ACheckbox {...props} />;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  return <ACheckbox.Group {...props} />;
};

export { Checkbox, CheckboxGroup };
