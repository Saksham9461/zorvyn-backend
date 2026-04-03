# Finance Dashboard Backend

## Overview

This project is a backend system for a finance dashboard.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

---

## Features

### User & Role Management

* Users can register and login
* Each user has a role:

  * Viewer → can only view data
  * Analyst → can view records and analytics
  * Admin → full access (create, update, delete)

---

### Financial Records

Users can:

* Add income/expense records
* Update records
* Delete records
* View records

Each record contains:

* Amount
* Type (income / expense)
* Category
* Date
* Notes

---

### Filtering & Pagination

* Filter records by:

  * type
  * category
  * date range
* Pagination supported:

  ```
  /api/records?page=1&limit=10
  ```

---

### Dashboard APIs

The backend provides data for dashboard:

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Monthly trends

These are implemented using MongoDB aggregation.

---

### Authentication & Access Control

* JWT based authentication
* Protected routes
* Role-based access using middleware

---

## Project Structure

```
src/
  config/
  models/
  controllers/
  routes/
  middleware/
  app.js
  server.js
```

---

## Setup

1. Install dependencies

```
npm install
```

2. Create `.env` file

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

3. Run project

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Auth

* POST /api/users/register
* POST /api/users/login

### Records

* GET /api/records
* POST /api/records (admin)
* PATCH /api/records/:id (admin)
* DELETE /api/records/:id (admin)

### Dashboard

* GET /api/dashboard/summary
* GET /api/dashboard/categories
* GET /api/dashboard/trends

---

## Author

Saksham Ojha
