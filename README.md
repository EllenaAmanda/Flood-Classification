# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## How to run this React web App locally

This repository contains a React application that allows users to upload images and potentially perform some form of analysis or processing on them.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone the Repository**: 
   Open your terminal and clone the repository using the following command:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies**: 
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**: 
   If your application requires any environment variables (like API keys), create a `.env` file in the root directory and add them as needed.

5. **Run the Application**: 
   Start the development server using:
   ```bash
   npm run dev
   ```

6. **Access the Application**: 
   Click on the link that's provided in your terminal.

### Overview of Code and Features

- **Insert.jsx**: This component is responsible for rendering the image upload interface. It provides feedback to users about whether an image has been uploaded or not.

- **App.jsx**: This is the main component that manages state and handles image uploads. Key functionalities include:
  - Managing state for labels, loading status, and uploaded image URL.
  - Handling file uploads to Cloudinary, which stores images in the cloud and returns a secure URL for access.
  - Displaying predicted labels once an image is processed.

### Features

- **Image Uploading**: Users can upload images, which are then sent to Cloudinary for storage.

