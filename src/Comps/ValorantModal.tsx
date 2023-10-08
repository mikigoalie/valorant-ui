import { Modal } from '@mantine/core';
import classes from './ValorantModal.module.css';

interface Props {
  isOpened: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function ValorantModal({ isOpened, closeModal, children, title}: Props) {
  return (
    <Modal
    closeOnClickOutside={false}
      opened={isOpened}
      onClose={closeModal}
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 10,
      }}
      classNames={{
        content: classes.content,
        header: classes.header,
        close: classes.close
      }}
      title={title}
      centered
    >
      {children}
    </Modal>
  );
}