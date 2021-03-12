import { renderHook, act } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('Should return an object with isOpen equals "false" and itemToDelete equals empty object', () => {
    // Arrange
    const emptyItemToDelete: Lookup = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(emptyItemToDelete);
  });
  it('Should return an object with isOpen equals "true" and itemToDelete equals filled item', () => {
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });
  it('Should return an object with isOpen equals "false" and itemToDelete equals empty item', () => {
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
});
