import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { Modal } from './Modal';

describe('Modal', () => {
  test('should render', () => {
    componentRender(<Modal></Modal>);

    expect(screen.getByTestId('Modal')).toBeInTheDocument();
  });

  // test('should render', () => {
  //   componentRender(
  //     <Modal>
  //       <Button>Test</Button>
  //     </Modal>
  //   );

  //   const toggleBtn = screen.getByText('Test');
  //   fireEvent.click(toggleBtn);

  //   expect(screen.getByTestId('Modal')).toBeInTheDocument();
  // });

  // test('should toggle class when opened ', () => {
  //   const setIsOpening = jest.fn();
  //   componentRender(<Modal onclick={setIsOpening}></Modal>);

  //   const handleClick = jest.spyOn(React, 'useState');
  //   handleClick.mockImplementation((isOpening) => [isOpening, setIsOpening]);

  //   expect(screen.getByTestId('Modal')).toBeInTheDocument();
  //   expect(screen.getByTestId('Modal')).toHaveClass('opened');
  // });
});
