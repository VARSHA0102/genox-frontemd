# Frontend Project Documentation

## Overview

This project is a frontend application built using React and TypeScript. It is designed to provide a modern user interface for interacting with the backend services. The application is structured to facilitate easy development and maintenance.

## Project Structure

```
frontend/
├── package.json          # NPM configuration file for managing dependencies and scripts
├── tsconfig.json         # TypeScript configuration file
├── vite.config.ts        # Vite configuration for development and build settings
├── index.html            # Main HTML file serving as the entry point
└── src/                  # Source files for the frontend application
    ├── main.tsx          # Entry point for the React application
    ├── App.tsx           # Main application component
    ├── index.css         # Stylesheet for the application
    ├── env.production.example # Example environment configuration for production
    ├── components/       # Reusable React components
    │   ├── AITool.tsx
    │   ├── BlogCard.tsx
    │   ├── ContactForm.tsx
    │   ├── FeatureShowcase.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   └── Navigation.tsx
    ├── hooks/            # Custom React hooks
    │   ├── use-mobile.tsx
    │   ├── use-scroll-restoration.tsx
    │   ├── use-theme.tsx
    │   └── use-toast.tsx
    ├── lib/              # Utility files
    │   ├── queryClient.ts
    │   └── utils.ts
    └── pages/            # Page components for routing
        ├── Home.tsx
        ├── About.tsx
        ├── Tools.tsx
        ├── Blog.tsx
        └── (other pages)
```

## Getting Started

1. **Installation**: Navigate to the `frontend` directory and install the dependencies using npm:

   ```
   npm install
   ```

2. **Running the Application**: Start the development server with the following command:

   ```
   npm run dev
   ```

3. **Building for Production**: To create a production build, run:

   ```
   npm run build
   ```

## Development

- The application is built using React, and TypeScript is used for type safety.
- Vite is used as the build tool for fast development and optimized production builds.
- Components are organized in a modular fashion to promote reusability and maintainability.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.