# 🏗️ GGU LMS - Project Architecture & Implementation Guide

This document provides a comprehensive overview of how this Learning Management System (LMS) is built. It covers the frontend, backend, database, and the patterns used for creating educational content.

---

## 🚀 1. Technology Stack

*   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router Architecture)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (for type safety and better developer experience)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Utility-first CSS)
*   **Database**: [MongoDB](https://www.mongodb.com/) (NoSQL database for flexible data storage)
*   **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Handles login, session management, and role-based access)
*   **Icons**: [Lucide React](https://lucide.dev/) and [HeroIcons](https://heroicons.com/)
*   **Fonts**: Geist & Geist Mono (Modern typography)

---

## 📂 2. Directory Structure

| Directory | Purpose |
| :--- | :--- |
| `app/` | Core application logic (App Router). Contains routes, layouts, and pages. |
| `app/api/` | **Backend**: Next.js Route Handlers. Contains all server-side API endpoints. |
| `app/pages/` | **Content**: Contains the actual module content (OS, Flat, ES, etc.). |
| `components/` | **UI Library**: Shared reusable React components (Sidebar, Cards, etc.). |
| `lib/` | **Utilities**: Database connection (`db.ts`), Shared schemas, and logic. |
| `public/` | **Static Assets**: Images, icons, and fonts. |
| `types/` | **Type Definitions**: TypeScript interfaces and types. |

---

## 🔐 3. Authentication & Security

*   **Provider**: Managed via `app/providers.tsx` which wraps the app in a `SessionProvider`.
*   **Middleware**: `middleware.ts` in the root directory protects routes. It ensures that only logged-in users can access the dashboard and specific roles can access the admin panel.
*   **Database Integration**: NextAuth is configured to store user data and sessions directly in MongoDB.

---

## 💾 4. Database (MongoDB)

*   **Connection**: Located in `lib/db.ts`. It uses a `clientPromise` pattern to ensure efficient connection pooling in Next.js.
*   **Primary Collections**:
    *   `users`: Stores student and admin credentials and profiles.
    *   `progress`: Tracks which modules a student has completed.
    *   `feedback`: Stores user-submitted feedback.
    *   `leaves`: Manages leave requests (for student management).

---

## 🛠️ 5. Implementation Patterns

### 🧩 A. Educational Modules (The "Modules" Pattern)
Modules (like `Module5_2.tsx`) follow a consistent structure:
1.  **State Management**: Uses `useState` and `useEffect` for interactive animations.
2.  **Animations**: Often involves CSS transitions for logical flow visuals (e.g., `FileSystemLayersAnimation`).
3.  **Quiz Data**: A local array of objects defining questions, options, and explanations.
4.  **Rendering**:
    *   Semantic HTML (`section`, `h3`, `p`, `ul/li`).
    *   Custom Content Components (specific to the lesson).
    *   The `<Quiz />` component at the bottom, passed with the module data.

### 🗺️ B. Content Mapping Logic
The file `lib/moduleNames.ts` acts as the "Source of Truth" for the curriculum.
*   **`MODULE_NAMES`**: A deeply nested object mapping `Subject -> Unit -> Module` to a human-readable title.
*   **`getModuleName()`**: A helper function used throughout the frontend to fetch the correct title for any module ID.

### 📈 C. Progress Tracking Logic
Student progress is managed by the `useProgress` hook (`lib/useProgress.ts`):
*   It fetches completion data from `/api/progress`.
*   It calculates **Completion Percentage** (how many modules are done).
*   It calculates **Mastery Percentage** (scores above 80% on quizzes).
*   This logic drives the progress bars on the student dashboard.

### 📝 D. API Routes (The "Handler" Pattern)
Typical API routes (`app/api/.../route.js`) follow this flow:
1.  Import `clientPromise`.
2.  Export an `async function` (GET, POST, etc.).
3.  Connect to DB, perform operations, and return `NextResponse.json`.

---

## 🏗️ 6. How to Add New Content (Detailed)

### 📂 A. Folder Hierarchy for Modules
Modules are organized strictly by subject and unit.
**Path Template:** `app/pages/[subject]/units/unit[unitId]-modules/Module[unitId]_[moduleId].tsx`

**Example:**
- `app/pages/os/units/unit5-modules/Module5_1.tsx`
- `app/pages/os/units/unit5-modules/Module5_2.tsx`

### 📝 B. Quiz Implementation
Every module should have a quiz at the end. Here is the implementation pattern:

1.  **Import Subject-Specific Quiz:**
    ```tsx
    import Quiz from '../../components/Quiz'; // Points to app/pages/[subject]/components/Quiz.tsx
    ```

2.  **Define Quiz Data (Inside the Module component):**
    ```tsx
    const moduleQuiz = [
      {
        question: "Question text here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 0, // Index of the correct option
        explanation: "Why this is correct..."
      }
      // Add more questions...
    ];
    ```

3.  **Render the Quiz Component:**
    ```tsx
    <Quiz
      title="Module X.Y Quiz: Topic Name"
      questions={moduleQuiz}
      subject="SUBJECT_CODE" // e.g., "OS", "DS", "FLAT"
      unitId={X}
      moduleId={Y}
    />
    ```

### 🆕 C. Steps to Add a New Module
1.  **Create File**: Place it in the correct `unit-modules` folder.
2.  **Add Structure**: Use the standard `lesson-header` and `content-section` CSS classes.
3.  **Implement Quiz**: Use the pattern above.
4.  **Register the Name**: Add the module title to `lib/moduleNames.ts` so the system knows its name.

### 🔌 D. Adding a New API
1.  Create folder: `app/api/[feature-name]/route.js`.
2.  Export `async function GET(req)` or `POST(req)`.
3.  Use `await (await clientPromise).db()` to access MongoDB.

---

## 🤖 7. For Future AI Assistants
When asking an AI to modify this project, providing this context will help it:
- "This is a **Next.js 15+ App Router** project."
- "We use **Tailwind 4** for styling and **MongoDB** with the native driver for data."
- "Module content is stored in **TSX components** under `app/pages/[subject]/`."
- "The **Quiz** component is localized per subject folder."

---

*Last Updated: 2026-02-15*
