# 💼 Career Craft

**Career Craft** is a MERN-based Resume Analyzer and Portfolio Generator web application. It empowers users to evaluate their resumes through an ATS (Applicant Tracking System) score and build stunning portfolio websites from predefined templates using just their data.

## 🚀 Features

- ✅ Upload your resume (PDF) and get an ATS score with improvement suggestions.
- ✅ Analyze resumes using AI (Gemini API Integration).
- ✅ Generate modern, responsive portfolios based on your provided details.
- ✅ Multiple portfolio templates (light, dark, gender-based themes).
- ✅ Easy to use and beginner-friendly interface.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Gemini API
- **Others**: Multer (for file uploads), PDF parsing libraries, GSAP (for animations)

---

## ⚙️ Getting Started

Follow these steps to run **Career Craft** on your local machine.

### 1. Clone the repository

### 2. Setup the Server

```
cd backend
npm install
```

### Create a .env file in the server folder and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

### Then, run the backend server:

```
npm start
```

### Setup the Client
```
cd frontend
npm install
npm start
```
