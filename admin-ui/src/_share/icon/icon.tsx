import { AppleOutlined, AppstoreOutlined, DropboxOutlined, GiftOutlined, UserOutlined, WindowsOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: "right" }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, icon: ReactNode) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        gap: "10px",
        // justifyContent: "space-between",
      }}
    >
      <span>{icon}</span>
      {title}
    </div>
  ),
});

const options = [
  {
    label: renderTitle("Brand and Logos"),
    options: [
      renderItem("Window", <WindowsOutlined />),
      renderItem("Drop Box", <DropboxOutlined />),
      renderItem("Apple", <AppleOutlined />),
      // renderItem("Drop Box", <DropboxOutlined />),
      // renderItem("Drop Box", <DropboxOutlined />),
    ],
  },
  {
    label: renderTitle("Application Icons"),
    options: [
      renderItem("App store", <AppstoreOutlined />),
      renderItem("Gift", <GiftOutlined />),
    ],
  },
  {
    label: renderTitle("Articles"),
    options: [renderItem("AntDesign design language", <UserOutlined />)],
  },
];


export default options