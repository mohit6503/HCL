📘 Healthcare Portal — MERN Application

A full-stack healthcare monitoring platform where patients can track daily wellness goals, and doctors can monitor assigned patients, view logs, and provide notes.

🚀 Features
👨‍⚕️ Doctor Portal

View assigned patients
See patient wellness logs (steps, sleep, water)
See patient compliance (goal met / missed)
Add notes for patients
All patient data sorted by latest updates

🧑‍💼 Patient Portal

Log daily wellness goals (steps, water, sleep)
Mark goals as MET or MISSED
View doctor notes
Personalized dashboards
Reminders + health tips
Edit personal profile

🔐 Authentication & Authorization

Role-based system: PATIENT and DOCTOR
JWT authentication
Protected API routes
Auto doctor assignment during patient registration

backend/
│
├── Models/
│   ├── User.js
│   ├── Patient_Profile.js
│   ├── Daily_log.js
│   ├── Patient_Notes.js
│
├── Controller/
│   ├── authController.js
│   ├── doctorController.js
│   ├── patientController.js
│   ├── dashboardController.js
│
├── Routes/
│   ├── authRoutes.js
│   ├── patientRoutes.js
│   ├── doctorRoutes.js
│   ├── dashboardRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── .env
├── server.js
└── package.json


frontend/
│
├── src/
│   ├── api/
│   │   └── api.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── component/
│   │   ├── Layout/
│   │   │   ├── Sidebar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── dashboard/
│   │   │   ├── GoalTrackerForm.jsx
│   │   │   ├── PatientList.jsx
│   │   │   ├── HealthTipCard.jsx
│   │   │   └── ReminderList.jsx
│   ├── routes/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── ProviderDashboard.jsx
│   │   ├── ProfilePage.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
