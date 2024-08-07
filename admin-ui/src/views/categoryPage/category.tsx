import { Button, notification, Popconfirm, Space, Table } from "antd";
import { getAll } from "../../common/api/category";
import { useEffect, useState } from "react";
import { DataType } from "../../interface/category/index";
import { NotificationType } from "../../_share/message/index";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import ModalComponent from "./modal";
import { deleTe } from "../../common/api/category";

const { Column } = Table;

const CategoryPage = () => {
  const [categories, setCategories] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({});
  const [api, contextHolder] = notification.useNotification();
  const getCategories = async () => {
    try {
      const res = await getAll();
      setCategories(res);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string
  ) => {
    api[type]({
      message: message,
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const completeNode = (node: DataType, list: DataType[]) => {
    node.children = list
      .filter((x) => x["parentId"] == node.data.id)
      .map((x) => {
        const childNode = {
          data: x,
          children: [],
        };
        completeNode(childNode, list);
        return childNode;
      });
  };

  const convertListToTree = (list: DataType[]) => {
    const rootNode = {
      data: {
        id: null,
      },
      children: [],
    };
    completeNode(rootNode, list);
    return rootNode;
  };

  const categoryTree = convertListToTree(categories);

  const deleteHandler = (id: string) => {
    deleTe(id).then(() => {
      getCategories();
      openNotificationWithIcon("success", "You Deleted Successfully");
    });
  };

  const editHandler = (record: DataType) => {
    setCategory({
      ...record,
    });
    setVisible(true);
  };

  const addHandler = (parentId: string) => {
    setCategory({
      name: "",
      metaTitle: "",
      visibility: true,
      isActive: true,
      parentId: parentId,
      sort: 1,
    });
    setVisible(true);
  };

  return (
    <>
      {contextHolder}
      <div className="container">
        <Space
          direction="horizontal"
          size="middle"
          style={{ display: "flex", justifyContent: "space-between" }}
          className="mb-5"
        >
          <Button onClick={() => addHandler("")}>Add New </Button>
          <Search />
        </Space>
        <Table
          dataSource={categoryTree.children}
          loading={loading}
          rowKey={(record) => record.data.id}
        >
          <Column title={"Name"} dataIndex={["data", "name"]} key={"name"} />
          <Column title={"Icon"} dataIndex={["data", "icon"]} key={"icon"} />
          <Column
            title={"Slug"}
            dataIndex={["data", "metaTitle"]}
            key={"slug"}
          />
          <Column
            title={"Action"}
            dataIndex={"#"}
            key={"action"}
            render={(_, record: data) => (
              <>
                <Button
                  key={"view"}
                  onClick={() => addHandler(record.data.id ?? "")}
                  icon={<PlusCircleOutlined />}
                />
                <Button
                  key={"edit"}
                  onClick={() => editHandler(record.data)}
                  icon={<EditOutlined />}
                />
                <Popconfirm
                  title="Delete the category"
                  description="Are you sure to delete this category?"
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  onConfirm={() => deleteHandler(record.data.id ?? "")}
                >
                  <Button key={"delete"} icon={<DeleteOutlined />} />
                </Popconfirm>
              </>
            )}
          />
        </Table>
      </div>
      {visible ? (
        <ModalComponent
          visible={visible}
          onCancel={(e: React.MouseEvent<HTMLButtonElement>) => {
            setVisible(!visible);
            console.log(e);
          }}
          data={category}
          getAll={() => getCategories()}
          messageApi={(type: NotificationType, message: string) =>
            openNotificationWithIcon(type, message)
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryPage;
