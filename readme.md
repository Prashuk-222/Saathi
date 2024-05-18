# Saathi

Welcome to **Saathi** - your personal assistant for daily tasks and queries. Saathi is a web application designed to help you manage your daily activities and answer your questions efficiently. Built using React for the front-end and Django for the back-end, Saathi offers a seamless and user-friendly experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Query Handling**: Ask any question and get relevant answers.
- **Task Management**: Add, update, and delete your daily tasks.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Instant updates for queries and tasks.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Django
- **Database**: SQLite (default), but can be configured to use other databases
- **API**: Django REST Framework for handling API requests

## Installation

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/saathi.git
   cd saathi


2. Set up a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use  `venv\Scripts\activate
    ```


3. Install backend dependencies:

    ```bash
    pip install -r requirements.txt
    ```
    
    
4. Run database migrations:

    ```bash
    python manage.py migrate
    ```

Start the Django server:

bash
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:

bash
cd frontend
Install frontend dependencies:

bash
npm install  # or yarn install
Start the React development server:

bash
npm start  # or yarn start
Usage
Open your browser and go to http://localhost:3000 to access the frontend.
Register a new user or log in with your credentials.
Use the interface to ask questions and manage your daily tasks.
Contributing
Contributions are welcome! To contribute to Saathi, please follow these steps:

## Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
Please make sure your code follows the project's coding standards and include relevant tests.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
If you have any questions, feel free to reach out:

Email: yourname@example.com
GitHub: yourusername
Thank you for using Saathi! We hope it makes your daily tasks and queries easier to manage.