import * as React from 'react';
import {
  ConfirmationDialogComponent,
  LabelProps,
  Props,
} from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Confirmation dialog component specs', () => {
  it('Should not show dialog when isOpen is false', () => {
    // Arrange
    const labelProps: LabelProps = {
      acceptButton: 'accept test',
      closeButton: 'close test',
    };

    const props: Props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test',
      labels: labelProps,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.queryByAltText('test');

    // Assert
    expect(titleElement).toBeNull();
  });
});
