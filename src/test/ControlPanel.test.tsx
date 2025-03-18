import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ControlPanel } from '../components/ControlPanel';

describe('ControlPanel', () => {
  beforeAll(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  const mockSettings = {
    backgroundColor: '#1e3a8a',
    textColor: '#ffffff',
    heading: 'Test Heading',
    description: "",
    imageIndex: 0,
    images: ['https://example.com/image.jpg']
  };
  const mockProps = {
    settings: mockSettings,
    updateSettings: vi.fn(),
    onAddImage: vi.fn(),
    onRemoveImage: vi.fn()
  };

  it('renders all controls', () => {
    render(<ControlPanel {...mockProps} />);
    expect(screen.getByLabelText('Banner Heading')).toBeInTheDocument();
    expect(screen.getByLabelText('Background Color')).toBeInTheDocument();
    expect(screen.getByLabelText('Text Color')).toBeInTheDocument();
    expect(screen.getByText('Upload from device')).toBeInTheDocument();
  });

  it('handles heading text change', () => {
    render(<ControlPanel {...mockProps} />);
    const input = screen.getByLabelText('Banner Heading');
    fireEvent.change(input, { target: { value: 'New Heading' } });
    expect(mockProps.updateSettings).toHaveBeenCalledWith({ heading: 'New Heading' });
  });

  it('handles color changes', () => {
    render(<ControlPanel {...mockProps} />);
    const bgColorInput = screen.getByLabelText('Background Color');
    fireEvent.change(bgColorInput, { target: { value: '#000000' } });
    expect(mockProps.updateSettings).toHaveBeenCalledWith({ backgroundColor: '#000000' });
  });

  it('handles file upload', async () => {
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      result: 'data:image/png;base64,dummycontent',
      onload: vi.fn()
    };

    vi.spyOn(window, 'FileReader').mockImplementation(() => mockFileReader as unknown as FileReader);

    render(<ControlPanel {...mockProps} />);

    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
    const input = screen.getByLabelText('Upload from device');

    Object.defineProperty(input, 'files', { value: [file] });
    fireEvent.change(input);

    mockFileReader.onload({ target: { result: mockFileReader.result } } as ProgressEvent<FileReader>);

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(mockProps.onAddImage).toHaveBeenCalledWith(mockFileReader.result);
  });

  it('validates image URL input', () => {
    render(<ControlPanel {...mockProps} />);
    const urlInput = screen.getByPlaceholderText('Enter image URL');
    const addButton = screen.getByRole('button', { name: '' }); // PlusIcon button

    fireEvent.change(urlInput, { target: { value: 'invalid-url' } });
    fireEvent.click(addButton);
    // expect(mockProps.onAddImage).not.toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith('Please enter a valid image URL');

    fireEvent.change(urlInput, { target: { value: 'https://example.com/image.jpg' } });
    fireEvent.click(addButton);
    expect(mockProps.onAddImage).toHaveBeenCalledWith('https://example.com/image.jpg');
  });
});

