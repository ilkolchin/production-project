import { memo, useCallback } from 'react';
import Copy from 'shared/assets/icons/upload.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from '../../Button';
import { Icon, IconSize } from '../../Icon';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <Icon Svg={Copy} size={IconSize.L} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
