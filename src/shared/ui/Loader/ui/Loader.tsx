import { classNames } from 'shared/lib/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {

  return (
    <div className={classNames(cls['lds-roller'], {}, [className])}>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};

export default Loader;