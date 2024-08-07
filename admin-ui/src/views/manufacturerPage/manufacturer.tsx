import {
  Button,
  Popconfirm,
  Skeleton,
  Space,
  Table,
  notification,
  Input,
} from "antd";
import { getall } from "../../common/api/manufacturer";
import { useEffect, useState } from "react";
import ModalAdd from "./modal";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { data } from "../../interface/manufacturer/index";
import { deleTe } from "../../common/api/manufacturer";
import { NotificationType } from '../../_share/message/index'

const { Column } = Table;


const { Search } = Input;

const ManufacturerView = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    code: "",
    country: "",
    visibility: true,
    isActive: true,
  });
  const openNotificationWithIcon = (
    type: NotificationType,
    message: string
  ) => {
    api[type]({
      message: message,
    });
  };

  const getAlls = () => {
    getall().then((res) => {
      setManufacturers(res);
      setLoading(false);
    });
  };

  const addHandler = () => {
    setData({
      name: "",
      code: "",
      country: "",
      visibility: true,
      isActive: true,
    });
    setVisible(!visible);
  };

  const editHandler = (data: data) => {
    setData(data);
    setVisible(!visible);
  };

  const deleteHandler = (id: string) => {
    deleTe(id).then(() => {
      getAlls();
      openNotificationWithIcon("success", "You Deleted Successfully");
    });
  };

  useEffect(() => {
    getAlls();
  }, []);

  return (
    <>
      <div className="container">
        {contextHolder}
        <Space
          direction="horizontal"
          size="middle"
          style={{ display: "flex", justifyContent: "space-between" }}
          className="mb-5"
        >
          <Button onClick={addHandler}>Add New </Button>
          <Search />
        </Space>
        <Table dataSource={manufacturers} rowKey={"id"} loading={loading}>
          <Column
            title={"#"}
            render={(_, __, index) => <>{index + 1}</>}
            key={"id"}
          />
          <Column title={"Name"} dataIndex={"name"} key={"name"} />
          <Column title={"Code"} dataIndex={"code"} key={"code"} />
          <Column title={"Country"} dataIndex={"country"} key={"country"} />
          <Column
            title={"Action"}
            key={"action"}
            render={(_, record: data) => (
              <>
                <Button key={"view"} icon={<EyeOutlined />} />
                <Button
                  key={"edit"}
                  onClick={() => editHandler(record)}
                  icon={<EditOutlined />}
                />
                <Popconfirm
                  title="Delete the manufacturer"
                  description="Are you sure to delete this manufacturer?"
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  onConfirm={() => deleteHandler(record?.id ?? "")}
                >
                  <Button key={"delete"} icon={<DeleteOutlined />} />
                </Popconfirm>
              </>
            )}
          />
        </Table>
      </div>
      {visible ? (
        <ModalAdd
          visible={visible}
          onCancel={(visible: boolean) => setVisible(!visible)}
          data={data}
          getall={() => getAlls()}
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

export default ManufacturerView;
