import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FileInput } from './FileInput';

describe('FileInput Component', () => {
  const handleFileChange = vi.fn();

  test('should render without crashing', () => {
    render(<FileInput fileName="" handleFileChange={handleFileChange} />);
    expect(screen.getByText('Choose File')).toBeInTheDocument();
    expect(screen.getByText('Choose file')).toBeInTheDocument();
  });

  test('should call handleFileChange on file input change', () => {
    render(<FileInput fileName="" handleFileChange={handleFileChange} />);
    const fileInput = screen.getByLabelText('Choose file');
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(handleFileChange).toHaveBeenCalledTimes(1);
  });

  test('should display the file name', () => {
    const fileName = 'example.png';
    render(<FileInput fileName={fileName} handleFileChange={handleFileChange} />);
    expect(screen.getByText(fileName)).toBeInTheDocument();
  });
});