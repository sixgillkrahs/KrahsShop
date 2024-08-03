import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Card, Form, Input, Modal, Space, Switch } from "antd";
import React, { memo } from "react";
import { save, update } from "../../common/api/manufacturer";
import { data } from "../../interface/manufacturer/index";

type NotificationType = "success" | "info" | "warning" | "error";

interface ModalAddProps {
  visible: boolean;
  onCancel: (visible: boolean) => void;
  data: data;
  getall: () => void;
  messageApi: (type: NotificationType, message: string) => void;
}

const { Item, useForm } = Form;

const ModalAdd: React.FC<ModalAddProps> = ({
  visible,
  onCancel,
  data,
  getall,
  messageApi,
}) => {
  const [form] = useForm();

  const onSubmit = () => {
    form.submit();
    if (data.id == null) {
      onSave();
    } else {
      onEdit();
    }
  };

  const onSave = () => {
    save(form.getFieldsValue())
      .then(() => {
        onCancel(visible);
        getall();
        messageApi("success", "You added successfully");
      })
      .catch((res) => {
        console.log(res);
        onCancel(visible);
        getall();
        messageApi("error", "Error System");
      });
  };

  const onEdit = () => {
    update(data?.id ?? "", form.getFieldsValue())
      .then(() => {
        onCancel(visible);
        getall();
        messageApi("success", "You edited successfully");
      })
      .catch((res) => {
        console.log(res);
        onCancel(visible);
        getall();
        messageApi("error", "Error System");
      });
  };

  return (
    <>
      <Modal
        open={visible}
        onCancel={onCancel}
        title={data.id == null ? "Add new Manufacturer" : "Edit Manufacturer"}
        onOk={onSubmit}
      >
        <Card>
          <Form form={form} initialValues={data} autoComplete="off">
            <Space>
              <Item
                label={"Name"}
                name="name"
                rules={[{ required: true, min: 2 }]}
              >
                <Input />
              </Item>
              <Item
                label={"Country"}
                name="country"
                rules={[{ required: true, min: 2 }]}
              >
                <Input />
              </Item>
            </Space>
            <Space>
              <Item
                label={"Code"}
                name="code"
                rules={[{ required: true, min: 2 }]}
              >
                <Input className="w-36" />
              </Item>
              <Item label={"Visibility"} name="visibility">
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Item>
              <Item label={"Active"} name="isActive">
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Item>
            </Space>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default memo(ModalAdd);
