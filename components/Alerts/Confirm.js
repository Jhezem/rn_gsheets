import React, {useState, useRef} from 'react';
import {Center, AlertDialog, Button} from 'native-base';

export const useAlert = initial => {
  const [isOpen, setIsOpen] = useState(initial || false);

  const toggle = () => setIsOpen(!isOpen);

  return [toggle, isOpen];
};

export default function Confirm({
  isOpen,
  heading,
  toggle,
  description,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
}) {
  const cancelRef = useRef(null);
  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={toggle}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{heading}</AlertDialog.Header>
          <AlertDialog.Body>{description}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => {
                  if (onCancel && typeof onCancel === 'function') onCancel();
                  toggle();
                }}
                ref={cancelRef}>
                {cancelText}
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  if (onConfirm && typeof onConfirm === 'function') onConfirm();
                  toggle();
                }}>
                {confirmText}
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}
