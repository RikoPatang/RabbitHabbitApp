# RabbitHabbitApp

A comprehensive habit tracking application designed to help users build and maintain positive habits through gamification and social accountability.

## Overview

RabbitHabbitApp is a full-stack web application that enables users to:

- Track daily habits and build streaks
- Set personalized goals and milestones
- Visualize progress with interactive dashboards
- Connect with friends for motivation and accountability
- Earn rewards and achievements for consistency

## Repository Structure

```
RabbitHabbitApp/
├── docs/          # Documentation and project planning materials
├── frontend/      # Client-side application code
├── backend/       # Server-side API and business logic
└── assets/        # Static resources (images, icons, media)
```

## Development Stack

### Frontend
- Modern JavaScript framework (React/Vue/Angular)
- Responsive UI design
- State management
- API integration

### Backend
- RESTful API architecture
- Database integration
- Authentication & authorization
- Business logic layer

### Infrastructure
- Version control with Git
- CI/CD pipeline
- Cloud deployment
- Containerization support

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RikoPatang/RabbitHabbitApp.git
   cd RabbitHabbitApp
   ```

2. Install dependencies:
   ```bash
   # Frontend dependencies
   cd frontend && npm install
   
   # Backend dependencies
   cd ../backend && npm install
   ```

3. Set up database connection
4. Configure environment variables (see `.env.example` files)
5. Start development servers:
   ```bash
   # Frontend
   cd frontend && npm start
   
   # Backend (in separate terminal)
   cd backend && npm start
   ```

## Frontend Components

### HomeScreen.js

**Location:** `/frontend/HomeScreen.js`

The HomeScreen component serves as the main interface for the RabbitHabbit app, providing users with an engaging and motivational UI to track their habits.

**Features:**
- **Habit Loop Tracking**: Interactive list of daily habits with checkbox toggles
- **Streak Counter**: Visual display of current streak with fire emoji indicator
- **Motivational Messages**: Dynamic encouragement based on streak progress
- **Progress Summary**: Real-time count of completed habits

**Usage:**

```javascript
import HomeScreen from './frontend/HomeScreen';

// Use in your React Native app
function App() {
  return <HomeScreen />;
}
```

**Component Structure:**
- Header with RabbitHabbit branding and tagline
- Streak counter with animated fire icon
- Motivational message box that updates based on progress
- Scrollable habit list with completion tracking
- Progress summary footer

**Customization:**
The component uses React hooks (`useState`) for state management and includes a pre-styled design with a purple/green color scheme. Modify the `styles` object to customize colors, spacing, and layout.

**State Management:**
- `streak`: Tracks consecutive days of habit completion
- `habits`: Array of habit objects with id, name, and completion status

## Features Roadmap

- [ ] User authentication and profile management
- [ ] Habit creation and customization
- [ ] Daily check-in system
- [ ] Streak tracking and statistics
- [ ] Social features and friend connections
- [ ] Gamification with points and badges
- [ ] Data visualization and analytics
- [ ] Mobile responsive design
- [ ] Push notifications
- [ ] Export and backup functionality

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please open an issue or contact the development team.

---

**Built with ❤️ for better habits**
