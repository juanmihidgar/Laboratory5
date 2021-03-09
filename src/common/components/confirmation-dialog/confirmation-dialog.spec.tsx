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
      acceptButton: 'accept button',
      closeButton: 'close button',
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
  it('Should show dialog with props', () => {
    // Arrange
    const labelProps: LabelProps = {
      acceptButton: 'accept button',
      closeButton: 'close button',
    };

    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test',
      labels: labelProps,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const titleElement = screen.getByText('test');
    const labelClose = screen.getByText(props.labels.closeButton);
    const labelAccep = screen.getByText(props.labels.acceptButton);

    const buttonAceptElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    const buttonCloseElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(labelClose).toBeInTheDocument();
    expect(labelAccep).toBeInTheDocument();

    expect(buttonAceptElement).toBeTruthy();
    expect(buttonCloseElement).toBeTruthy();
  });
  it('Should call onAccept and onClose when when user click on buttons', () => {
    // Arrange
    const labelProps: LabelProps = {
      acceptButton: 'accept button',
      closeButton: 'close button',
    };

    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test',
      labels: labelProps,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonAceptElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    const buttonCloseElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    userEvent.click(buttonAceptElement);
    userEvent.click(buttonCloseElement);

    // Assert
    expect(buttonAceptElement).toBeTruthy();
    expect(buttonCloseElement).toBeTruthy();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
