import { Button, Popconfirm, Skeleton, Table, notification } from "antd";
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

const { Column } = Table;

type NotificationType = "success" | "info" | "warning" | "error";

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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        {contextHolder}
        <div className="py-5">
          <Button onClick={addHandler}>Add New </Button>
        </div>
        <Table dataSource={manufacturers} rowKey={"id"}>
          <Column
            title={"#"}
            render={(_, __, index) =>
              loading ? <Skeleton.Button active /> : <>{index + 1}</>
            }
            key={"id"}
          />
          <Column
            title={"Name"}
            dataIndex={"name"}
            render={(value) =>
              loading ? <Skeleton.Button active /> : <>{value}</>
            }
            key={"name"}
          />
          <Column
            title={"Code"}
            dataIndex={"code"}
            render={(value) =>
              loading ? <Skeleton.Button active /> : <>{value}</>
            }
            key={"code"}
          />
          <Column
            title={"Country"}
            dataIndex={"country"}
            render={(value) =>
              loading ? <Skeleton.Button active /> : <>{value}</>
            }
            key={"country"}
          />
          <Column
            title={"Action"}
            key={"action"}
            render={(_, record: data) =>
              loading ? (
                <Skeleton.Button active />
              ) : (
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
              )
            }
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
