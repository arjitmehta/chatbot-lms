# ChatBot LMS

This is a React-based chatbot application designed as a Learning Management System (LMS) buddy.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) and npm (Node Package Manager) installed on your system.

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    # If this project is in a Git repository, clone it first.
    # git clone <repository-url>
    # cd chatbot-lms
    ```

2.  **Install dependencies:**

    Navigate to the project directory and install the necessary packages. This project uses `npm`.

    ```bash
    npm install
    ```

    **Key Dependencies:**
    *   `react`, `react-dom`, `react-scripts`: Core React libraries for building the UI.
    *   `react-router-dom`: For handling routing within the application.
    *   `lucide-react`: For icons used in the UI.
    *   `tailwindcss`, `autoprefixer`, `postcss`: For styling the application with Tailwind CSS.

    _For a complete list of dependencies, refer to `package.json`._

### Running the Project

After installing the dependencies, you can start the development server:

```bash
npm start
```

This will open the application in your browser, usually at `http://localhost:3000`.

## Project Structure

*   `src/App.js`: The main application component, where the ChatBot component is rendered.
*   `src/chatFlow.js`: Contains the conversational flow logic and messages for the chatbot.
*   `src/index.css`: Tailwind CSS input file.
*   `src/main.css`: Output file for compiled Tailwind CSS.

## Features

*   Interactive chatbot interface.
*   Pre-defined conversational paths for learning and exploration.
*   Dynamic option display based on chat flow.
*   "Click to continue" functionality for controlled progression.
*   Navigation to different sections of the LMS (simulated).

## Customization

*   **Chat Flow:** Modify the `chatFlow` array in `src/chatFlow.js` to change the chatbot's dialogue and options.
*   **Styling:** Adjust the Tailwind CSS classes in `src/App.js` or `src/index.css` to customize the look and feel.
