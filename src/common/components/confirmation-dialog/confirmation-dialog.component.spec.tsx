import * as React from 'react';
import {
  ConfirmationDialogComponent,
  LabelProps,
  Props,
} from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Confirmation dialog component', () => {
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
  it('Should show dialog with props when isOpen is true', () => {
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

    expect(buttonAceptElement).toBeInTheDocument();
    expect(buttonCloseElement).toBeInTheDocument();
  });
  it('Should call onAccept when user click on buttons', () => {
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

    userEvent.click(buttonAceptElement);

    // Assert
    expect(buttonAceptElement).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
  });
  it('Should call onClose when user click on buttons', () => {
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

    const buttonCloseElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    userEvent.click(buttonCloseElement);

    // Assert
    expect(buttonCloseElement).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalled();
  });
});
