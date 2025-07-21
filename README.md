# Association Meal Distribution Website

## Project Overview

This web application provides a responsive, user-friendly platform for a charitable association that distributes meals to people in need. It enables:

* **Meal distribution calendar**: View dates, times, and locations of upcoming distributions.
* **Volunteer sign-up**: Easy form for people who want to volunteer.
* **Donation flow**: Direct links or embedded widget to accept donations.
* **Contact**: Simple contact form and association details.

## Tech Stack

* **Frontend**: React + TypeScript + Tailwind CSS + shadcn-ui
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **Authentication**: JSON Web Tokens (JWT) for admin routes
* **Hosting**:

  * Frontend: Vercel
  * Backend: Render or Railway

## Features

1. **Public Pages**

   * `/` – Homepage with CTA buttons and latest announcements.
   * `/calendar` – Calendar or list view of distribution events.
   * `/volunteer` – Volunteer information and sign-up form.
   * `/donate` – Donation instructions or embedded widget.
   * `/contact` – Contact form and association details.

2. **Admin Panel** (secured)

   * Manage events (create, read, update, delete).
   * Edit homepage content and announcements.
   * View volunteer sign-ups.
   * Basic authentication with email/password.

## Installation & Setup

1. Clone this repository:

   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_FOLDER>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create `.env` file at project root:

   ```env
   MONGO_URI=<your-mongo-connection-string>
   JWT_SECRET=<strong-secret>
   ```
4. Run development servers:

   ```bash
   # Backend
   npm run dev:server

   # Frontend
   npm run dev:client
   ```

## Deployment

* **Frontend**: Push to main branch – Vercel deploys automatically.
* **Backend**: Push to main – Render/Railway picks up changes and redeploys.

## Project Structure

```
/ (root)
├─ client/        # React app
│  ├─ src/
│  ├─ public/
│  └─ package.json
├─ server/        # Express API
│  ├─ src/
│  └─ package.json
└─ README.md      # This file
```

## Contribution

1. Fork the repo and create a feature branch.
2. Commit your changes with clear messages.
3. Open a pull request for review.

## License

This project is licensed under the MIT License.
