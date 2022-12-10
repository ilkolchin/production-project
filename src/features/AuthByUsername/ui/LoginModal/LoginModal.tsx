import { LoginForm } from '../LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
