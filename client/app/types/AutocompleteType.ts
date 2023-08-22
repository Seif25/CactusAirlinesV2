import { Dispatch, SetStateAction } from "react";

interface AutocompleteType {
    label?: string;
    id: string;
    placeholder: string;
    defaultValue?: string;
    value?: string;
    setValue?: Dispatch<SetStateAction<string>>;
    options: string[];
    disabled?: boolean;
  }
  
  export default AutocompleteType;