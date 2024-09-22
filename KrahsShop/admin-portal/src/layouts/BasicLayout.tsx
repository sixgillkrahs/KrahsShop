import React, { useState, useEffect, useRef } from "react";
import { Layout, ConfigProvider, Select } from "antd";
import ProLayout, { MenuDataItem } from "@ant-design/pro-layout";
import { createIntl, useIntl } from "react-intl";
import viVN from "antd/lib/locale/vi_VN";
import enUS from "antd/lib/locale/en_US";
import { createBrowserHistory } from "history";
import * as allIcons from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { menuList } from "../utils";

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const history = createBrowserHistory();

interface CustomIconProps {
  value?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ value }) => {
  return <span>{value || "Custom"}</span>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item: MenuDataItem) => {
    const MenuIcon = allIcons[item.icon as keyof typeof allIcons] ||
      allIcons.CrownOutlined || <CustomIcon value="Tùy Chỉnh" />;

    return {
      ...item,
      icon: <MenuIcon />,
      children: item.children ? menuDataRender(item.children) : undefined,
    } as MenuDataItem;
  });

const BasicLayout: React.FC = () => {
  const { formatMessage } = createIntl({ ...useIntl(), onError: () => {} });
  const location = useLocation();
  const menuDataRef = useRef<MenuDataItem[]>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // Lấy ngôn ngữ từ localStorage hoặc mặc định
  const storedLocale = localStorage.getItem("locale") || "vi-VN";
  const [locale, setLocale] = useState<string>(storedLocale);

  const locales: Record<string, any> = {
    "vi-VN": viVN,
    "en-US": enUS,
  };

  const currentLocale = locales[locale];
  const isReload = locale !== (localStorage.getItem("locale") || "vi-VN");

  useEffect(() => {
    // Reload page when the language has changed in other tabs
    if (isReload) {
      window.location.reload();
    }

    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  }, [location.pathname]); // Run effect on pathname change

  const handleCollapse = (collapsing: boolean) => {
    setCollapsed(collapsing);
    console.log("Menu is collapsed:", collapsing);
  };

  const handleLanguageChange = (value: string) => {
    setLocale(value);
    localStorage.setItem("locale", value); // Lưu ngôn ngữ vào localStorage
  };

  return (
    <ConfigProvider locale={currentLocale}>
      <ProLayout
        title={"Krahs"}
        formatMessage={formatMessage}
        onCollapse={handleCollapse}
        onMenuHeaderClick={() => history.push("/")}
        breadcrumbRender={(routers: any[] = []) => [
          {
            path: "/",
            breadcrumbName: formatMessage({
              id: "menu.home",
            }),
          },
          ...routers.map((route) => ({
            ...route,
            path: route?.component ? route?.path : "",
          })),
        ]}
        menuDataRender={() => menuDataRender(menuList)}
        menuItemRender={(menuItemProps: any, defaultDom: any) => {
          if (
            menuItemProps.isUrl ||
            !menuItemProps.path ||
            location.pathname === menuItemProps.path
          ) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        itemRender={(route: any, params: any, routes: any[], paths: any) => {
          if (
            routes.indexOf(route) < routes.length - 1 &&
            route?.path.length > 0
          ) {
            return <Link to={`/${paths}`}>{route.breadcrumbName}</Link>;
          }
          return <span>{route.breadcrumbName}</span>;
        }}
      >
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="logo" />
            <Select
              defaultValue={locale}
              style={{ width: 120 }}
              onChange={handleLanguageChange}
            >
              <Option value="vi-VN">Tiếng Việt</Option>
              <Option value="en-US">English</Option>
            </Select>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©{new Date().getFullYear()} Bản Quyền Thuộc Về Cửa Hàng
          </Footer>
        </Layout>
      </ProLayout>
    </ConfigProvider>
  );
};

export default BasicLayout;
