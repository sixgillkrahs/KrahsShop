import { InputNumberProps, InputProps } from "antd";
import { InputNumber as ANumber, Input as AInput } from "antd";
import {
  GroupProps,
  PasswordProps,
  SearchProps,
  TextAreaProps,
} from "antd/es/input";

const Input: React.FC<InputProps> = (props) => {
  return <AInput {...props} />;
};

const InputNumber: React.FC<InputNumberProps> = (props) => {
  return <ANumber {...props} />;
};

const InputGroup: React.FC<GroupProps> = (props) => {
  return <AInput.Group {...props} />;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  return <AInput.TextArea {...props} />;
};

const InputTextArea: React.FC<TextAreaProps> = (props) => {
  return <AInput.TextArea {...props} />;
};

const Search: React.FC<SearchProps> = (props) => {
  return <AInput.Search {...props} />;
};

const InputSearch: React.FC<SearchProps> = (props) => {
  return <AInput.Search {...props} />;
};

const Password: React.FC<PasswordProps> = (props) => {
  return <AInput.Password {...props} />;
};

const InputPassword: React.FC<PasswordProps> = (props) => {
  return <AInput.Password {...props} />;
};

export {
  Input,
  InputNumber,
  InputGroup,
  TextArea,
  InputTextArea,
  Search,
  InputSearch,
  Password,
  InputPassword,
};
