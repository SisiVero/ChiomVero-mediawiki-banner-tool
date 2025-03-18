import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Banner } from '../components/Banner';

describe('Banner', () => {
  const defaultSettings = {
    backgroundColor: '#1e3a8a',
    textColor: '#ffffff',
    heading: 'Test Heading',
    description:"",
    imageIndex: 0,
    images: ['https://example.com/image.jpg']
  };
  it('renders with provided settings', () => {
    render(<Banner settings={defaultSettings} />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByAltText('Nature landscape')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
  it('applies correct styles', () => {
    render(<Banner settings={defaultSettings} />);
    const banner = screen.getByRole('heading');
    expect(banner).toHaveStyle({
      color: '#ffffff'
    });
    const container = banner.parentElement?.parentElement;
    expect(container).toHaveStyle({
      backgroundColor: '#1e3a8a'
    });
  });
  // it('renders description text', () => {
  //   render(<Banner settings={defaultSettings} />);
  //   expect(screen.getByText(/There's something magical/)).toBeInTheDocument();
  // });
});