# Osdag-on-Cloud: Web App Development

**Osdag-on-Cloud** is a cloud-based adaptation of the Osdag desktop application. It enables users to perform structural steel connection design in a browser-based environment. The project uses Django for the backend and React for the frontend, supporting modular development and integration of multiple connection types.

## Project Overview

This repository is part of the **Screening Task for Web App Development of Osdag**. The primary objective is to deliver a responsive, user-friendly web application that mirrors the functionalities of the Osdag desktop application for structural steel design.

## Features Implemented

### Backend
- Developed using Django and Django REST Framework.
- Modular API structure for handling various connection modules.
- Configured static and media file serving during development.
- Django admin panel accessible via `/admin/`.

### Frontend
- Built using React.
- Dynamic user interface that fetches and displays data from the backend.
- Responsive design compatible with different screen sizes.

## Current Progress

### Backend
- Django project configured with centralized URL routing under `/api/`.
- Created endpoints for connection modules.
- Implemented static and media file handling for development use.

### Frontend
- React project initialized and connected with backend APIs.
- UI components created for rendering different connection modules.
- Responsive design implemented using modern CSS practices.

### Database
- Schema designed for storing connection module data.
- Populated with sample data for development and testing.

### Modules Implemented
- Beam-to-beam splices (End Plate)
- Beam-to-column connections (End Plate)
- Column-to-column splices (Cover Plate – Bolted and Welded)

## Installation and Setup

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn
- PostgreSQL (or another supported relational database)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gowthamthibhu/fossee-osdag.git
   cd fossee-osdag/backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Update database credentials in `settings.py`.

5. Apply migrations:
   ```bash
   python manage.py migrate
   ```

6. Django Admin:
 ```bash
python manage.py createsuperuser
```
Username: Choose a username for the superuser.

Email Address: Provide an email address (optional, can be left blank).

Password: Enter a secure password and confirm it when prompted.

Open your web browser and navigate to the Django admin login page:

http://127.0.0.1:8000/admin/

7. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Project Structure

### Backend
- `config/urls.py`: Centralized API routing.
- `/admin/`: Django admin panel for managing database records.
- Static and media files served during development.

### Frontend
- `src/components`: React components for rendering connection modules.
- Integrated with backend APIs for dynamic content rendering.

## Challenges Faced
- Setting up seamless integration between React and Django REST APIs.
- Designing a UI that mirrors the Osdag desktop application.
- Managing development environments across backend and frontend stacks.

## References
- Django Documentation
- Django REST Framework
- React Documentation
- Osdag Desktop Application

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---


