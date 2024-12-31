export interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    id: string;
  }
  
  export interface ButtonProps {
    text: string;
    onPress: () => void;
    variant?: 'primary' | 'link';
  }