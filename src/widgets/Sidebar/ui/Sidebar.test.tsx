import { fireEvent, screen } from '@testing-library/react';
import { componentRenderWithoutStore } from 'shared/config/tests/componentRenderWithoutStore';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar Component', () => {
  test('render', () => {
    componentRenderWithoutStore(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRenderWithoutStore(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
