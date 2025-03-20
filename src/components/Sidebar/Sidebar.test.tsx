import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

vi.mock('@components/SidebarStepItem', () => ({
  SidebarStepItem: vi.fn(() => <div>Mocked SidebarStepItem</div>),
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props:any) => <img {...props} width="100" height="100" />,
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render without crashing', () => {
    const { container } = render(<Sidebar />);
    expect(container).toBeInTheDocument();
  });
});