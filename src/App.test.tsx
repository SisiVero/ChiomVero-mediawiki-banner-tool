// import { describe, it, expect, vi } from 'vitest';
// import { render, screen, fireEvent } from '@testing-library/react';
// import App  from './App';
// describe('App', () => {
//   it('renders banner and control panel', () => {
//     render(<App />);
//     //checks if banner heading exists
//     expect(screen.getByText('The Beauty of Hiking in Nature')).toBeInTheDocument();
//     //checks if control panel exists
//     expect(screen.getByText('Banner Controls')).toBeInTheDocument();
//   });
//   it('updates banner heading when input changes', () => {
//     render(<App />);
//     const input = screen.getByLabelText('Banner Heading');
//     fireEvent.change(input, {
//       target: {
//         value: 'New Heading'
//       }
//     });
//     expect(screen.getByText('New Heading')).toBeInTheDocument();
//   });
//   it('cycles through images when navigation buttons are clicked', () => {
//     render(<App />);
//     const initialImageCount = screen.getByText('Image 1 of 3');
//     expect(initialImageCount).toBeInTheDocument();
//     const nextButton = screen.getByLabelText('Next image');
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Image 2 of 3')).toBeInTheDocument();
//   });
// });