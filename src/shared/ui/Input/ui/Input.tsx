import { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export enum PlaceholderType {
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  placeholderType?: PlaceholderType;
  readonly?: boolean;
  widthMax?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    placeholderType = PlaceholderType.OUTSIDE,
    readonly,
    widthMax,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.widthMax]: widthMax
  };

  switch (placeholderType) {
    case PlaceholderType.OUTSIDE:
      return (
        <div data-testid="CustomInput" className={classNames(cls.InputWrapper, mods, [className])}>
          <span className={cls.placeholder}>{placeholder}</span>
          <input
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            readOnly={readonly}
            {...otherProps}
          />
        </div>
      );
      break;

    case PlaceholderType.INSIDE:
      return (
        <div data-testid="CustomInput" className={classNames(cls.InputWrapper, mods, [className])}>
          <input
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            readOnly={readonly}
            placeholder={placeholder}
            {...otherProps}
          />
        </div>
      );

    default:
      return null;
  }
});

export default Input;
