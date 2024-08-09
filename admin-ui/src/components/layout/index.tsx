import React from "react";
import { Layout as ALayout } from "antd";
import type { LayoutProps, SiderProps } from "antd";
import type {
  Content as ContentType,
  Header as HeaderType,
  Footer as FooterType,
} from "antd/lib/layout/layout";

const Layout: React.FC<LayoutProps> = (props) => {
  return <ALayout {...props} />;
};

const LayoutSider: React.FC<SiderProps> = (props) => {
  return <ALayout.Sider {...props} />;
};

const LayoutHeader: React.FC<typeof HeaderType> = (props) => {
  return <ALayout.Header {...props} />;
};
const LayoutContent: React.FC<typeof ContentType> = (props) => {
  return <ALayout.Content {...props} />;
};

const LayoutFooter: React.FC<typeof FooterType> = (props) => {
  return <ALayout.Footer {...props} />;
};

export { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter };
