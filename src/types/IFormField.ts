export interface IFormInputFieldProps {
  name: string,
  type?: string,
  value?: any,
  placeholder: string,
  label: string,
  rest?: any,
  validate?: any
  defaultValue?: any,
  className?: string,
}

export interface IErrorMessage {
  name: string;
}