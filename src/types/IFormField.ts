export interface IFormInputFieldProps {
  name: string,
  type?: string,
  value?: any,
  placeholder: string,
  label?: string,
  rest?: any,
  validate?: any
  defaultValue?: any,
  className?: string,
  icon?: string;
}

export interface IErrorMessage {
  name: string;
}

export interface ISearchInputFieldProps {
  name?: string,
  type?: string,
  value?: any,
  placeholder: string,
  rest?: any,
  validate?: any
  defaultValue?: any,
  className?: string,
  icon?: string;
}
