export interface IFormInputFieldProps {
  name: string;
  type?: string;
  value?: any;
  placeholder: string;
  label?: string;
  rest?: any;
  validate?: any;
  defaultValue?: any;
  className?: string;
  icon?: string;
  required?: boolean;
  pattern?: any;
  infoMessage?: string;
}

export interface IErrorMessage {
  name: string;
}

export interface ISearchInputFieldProps {
  name?: string;
  type?: string;
  value?: any;
  placeholder: string;
  rest?: any;
  validate?: any;
  defaultValue?: any;
  className?: string;
  icon?: string;
}

export interface ITextAreaInputFieldProps {
  name: string;
  type?: string;
  value?: string;
  placeholder: string;
  label?: string;
  validate?: any;
  defaultValue?: string;
  className?: string;
  rows?: number;
  cols?: number;
}
