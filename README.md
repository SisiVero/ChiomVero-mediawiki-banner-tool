# Dynamic Banner Editor A React-based banner editor that allows users to create and customize responsive banners with real-time preview. Built with React, TypeScript, and Tailwind CSS. ## 🌟 Features - **Real-time Banner Preview** - See changes instantly as you edit - Responsive design that works on all screen sizes - **Text Customization** - Edit banner heading - Customize description text - Change text colors - **Background Customization** - Set background colors - Add/remove background images - Adjust image opacity - **Image Management** - Upload images from local device - Add images via URL - Navigate through multiple images - Remove images as needed ## 🚀 Getting Started ### Prerequisites - Node.js (v14 or higher) - npm or yarn ### Installation 1. Clone the repository:
git clone [https://github.com/SisiVero/ChiomVero-mediawiki-banner-tool.git] cd dynamic-banner-editor
Install dependencies:
npm install # or yarn install
Start the development server:
npm run dev # or yarn dev
🎯 Usage
Basic Customization
Use the control panel to modify banner text, colors, and images
All changes are reflected in real-time
Working with Images
Upload images from your device using the "Upload from device" button
Add images via URL by pasting a valid image URL
Remove images by clicking the trash icon
Navigate between images using the arrow buttons
Text and Color Settings
Modify heading and description text using the text inputs
Use the color pickers to change background and text colors
Preview changes instantly in the banner above

 Testing
The project includes comprehensive tests using Vitest and React Testing Library. Run the tests:

npm test # or yarn test
Run tests with coverage:

npm test -- --coverage # or yarn test --coverage
📁 Project Structure
├── src/ │ ├── components/ │ │ ├── Banner.tsx │ │ ├── ControlPanel.tsx │ │ └── tests/ │ ├── config/ │ │ └── bannerDefaults.ts │ ├── App.tsx │ └── index.tsx ├── package.json └── README.md

🛠 Technologies Used
React - UI Framework
TypeScript - Type Safety
Tailwind CSS - Styling
Vitest - Testing Framework
React Testing Library - Component Testing
Lucide React - Icons
✨ Key Features in Detail
Banner Component
Responsive design
Dynamic image handling
Configurable text and colors
Smooth transitions
Control Panel
Intuitive user interface
Real-time updates
Form validation
File upload support
Image URL validation
🤝 Contributing
Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Commit your changes: git commit -m 'Add amazing feature'
Push to the branch: git push origin feature/amazing-feature
Open a Pull Request
📝 Development Notes
The banner supports removal of all images to use solid background colors
All components are tested with unit tests
The project follows React best practices and modern coding standards
TypeScript is used throughout for type safety
🔧 Configuration
The default banner settings can be modified in config/bannerDefaults.ts:

Updated
📜 License
This project is licensed under the MIT License - see the LICENSE file for details

Acknowledgments
Unsplash for demo images
Lucide for icons
Tailwind CSS for styling
This README provides:

Clear instructions for getting started
Comprehensive feature documentation
Testing and contribution guidelines
Project structure overview
Detailed usage instructions
Configuration options
Technology stack information Users can easily understand how to install, use, and contribute to the project.