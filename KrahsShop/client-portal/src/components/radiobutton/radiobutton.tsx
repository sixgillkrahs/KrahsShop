import "./radiobutton.css";

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioButton = ({ name, value, label, checked, onChange }: RadioButtonProps) => {
  return (
    <div>
      <label className="radio-button">
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
        <span className="radio"></span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
