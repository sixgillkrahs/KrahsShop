import { Card, Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { MenuItem } from "../../interface/index";
import { useNavigate } from "react-router-dom";

const { Content, Footer, Header, Sider } = Layout;

const items: MenuItem[] = [
  {
    label: "Home",
    type: "group",
    children: [
      {
        key: 1,
        label: "Dashboard",
        path: "home",
        icon: "",
      },
    ],
  },
  {
    label: "Management",
    type: "group",
    children: [
      {
        key: 2,
        label: "Product",
        icon: "",
        path: "product",
      },
      {
        key: 3,
        label: "Manufacturer",
        icon: "",
        path: "manufacturer",
      },
      {
        key: 4,
        label: "Category",
        icon: "",
      },
      {
        key: 5,
        label: "Tags",
        icon: "",
      },
      {
        key: 6,
        label: "Employee",
        icon: "",
      },
    ],
  },
  {
    label: "Setting",
    key: 9,
    children: [
      {
        key: 10,
        label: "Profile",
        icon: "",
      },
      {
        key: 11,
        label: "Log out",
        icon: "",
      },
    ],
  },
];

const _Layout = () => {
  const navigate = useNavigate();

  const handlerOnClick = (e: EventListener): void => {
    let check = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].path == undefined) {
        for (let j = 0; j < items[i].children?.length; j++) {
          if (items[i].children[j].key == e.key) {
            navigate(items[i].children[j].path);
            check = 1;
            break;
          }
        }
      }
      if (check == 1) {
        break;
      }
    }
  };

  return (
    <>
      <Layout className="h-screen">
        <Sider>
          <div className="bg-white h-full">
            <div className=" w-full flex items-center justify-center">
              <img src={logo} alt="" className="w-36" />
            </div>
            <Menu
              items={items}
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={handlerOnClick}
            />
          </div>
        </Sider>
        <Layout>
          <Header className="bg-white shadow-inner h-20"></Header>
          <Content>
            <Card className="m-4">
              <Outlet />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default _Layout;
