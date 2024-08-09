import { BreadcrumbItemProps, BreadcrumbProps } from "antd";
import { Breadcrumb as ABreadcrumb } from "antd";
import React from "react";

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return <ABreadcrumb {...props} />;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  return <ABreadcrumb.Item {...props} />;
};

const BreadcrumbSeparator: React.FC<{ children?: React.ReactNode }> = (
  props
) => {
  return <ABreadcrumb.Separator {...props} />;
};

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator };
