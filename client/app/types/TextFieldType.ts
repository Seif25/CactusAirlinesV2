interface TextFieldType {
  label?: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default TextFieldType;
