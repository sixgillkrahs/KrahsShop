import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { NotificationType } from "../../_share/message/index";
import {
  AutoComplete,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Switch,
} from "antd";
import React from "react";
import options from "../../_share/icon/icon";
import { data } from "../../interface/category/index";
import { save, update } from "../../common/api/category";

interface Props {
  visible: boolean;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  data: data;
  getAll: () => void;
  messageApi: (type: NotificationType, message: string) => void;
}

const { Item, useForm } = Form;
const { TextArea } = Input;

const ModalComponent: React.FC<Props> = ({
  visible,
  onCancel,
  data,
  getAll,
  messageApi,
}) => {
  const [form] = useForm();
  const onOke = () => {
    form.submit();
    if (data.id == null) {
      onSave({
        ...form.getFieldsValue(),
        parentId: data.parentId,
      });
    } else {
      onEdit(
        {
          ...form.getFieldsValue(),
          parentId: data.parentId,
        },
        data.id
      );
    }
  };

  const onSave = (saveData: data) => {
    save(saveData).then(() => {
      onCancel(visible);
      getAll();
      messageApi("success", "You added successfully");
    });
  };

  const onEdit = (saveData: data, id: string) => {
    console.log(saveData);
    update(saveData, id).then(() => {
      onCancel(visible);
      getAll();
      messageApi("success", "You edited successfully");
    });
  };

  return (
    <>
      <Modal
        open={visible}
        onCancel={onCancel}
        title={data.id == null ? "Add new Category" : "Edit Category"}
        onOk={onOke}
      >
        <Card>
          <Form form={form} initialValues={data}>
            <Space>
              <Item name={"name"} label={"Name"}>
                <Input />
              </Item>
              <Item name={"icon"} label={"Icon"}>
                <AutoComplete
                  options={options}
                  style={{ width: 160 }}
                  placeholder="You can search icon"
                  popupMatchSelectWidth={200}
                ></AutoComplete>
              </Item>
            </Space>
            <Space className="flex justify-between">
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
              <Item name={"sort"} label={"Sort"}>
                <InputNumber min={1} />
              </Item>
            </Space>
            <Space>
              <Item name={"metaTitle"} label={"Meta Desciption"}>
                <TextArea
                  rows={4}
                  maxLength={100}
                  showCount
                  style={{ width: 320, resize: "none" }}
                />
              </Item>
            </Space>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default ModalComponent;
