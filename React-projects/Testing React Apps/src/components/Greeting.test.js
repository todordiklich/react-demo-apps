import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as text', () => {
    //Arrange
    render(<Greeting />);

    //Act - in this case is empty

    //Assert
    const greetingElement = screen.getByText('Hello World!', { exact: true });
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act - in this case is empty

    //Assert
    const outputElement = screen.getByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "changed" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('changed', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
