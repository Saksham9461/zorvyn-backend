# Finance Backend API

## Overview

This is a backend project for a finance dashboard system.


---

## 🔗 Live API

https://zorvyn-backend-f3dr.onrender.com

---

## Features

* User authentication (JWT)
* Role-based access control
* CRUD operations for financial records
* Filtering and pagination
* Dashboard APIs:

  * Total income / expense
  * Net balance
  * Category-wise data
  * Monthly trends

---

## Roles

By default, when a user registers, they are assigned the role **Viewer**.

There are 3 roles in the system:

* **Viewer** → can only view data
* **Analyst** → can view records + analytics
* **Admin** → full access (create, update, delete)

---

## Test Credentials

You can use these accounts to test different roles:

### Admin

* Email: `admin@test.com`
* Password: `123456`

### Analyst

* Email: `analyser@test.com`
* Password: `123456`

### Viewer

* Email: `viewer@test.com`
* Password: `123456`

---

## API Endpoints

### Auth

* POST `/api/users/register`
* POST `/api/users/login`

---

### Records

* GET `/api/records`
* POST `/api/records` (Admin only)
* PATCH `/api/records/:id` (Admin)
* DELETE `/api/records/:id` (Admin)

---

### Dashboard

* GET `/api/dashboard/summary`
* GET `/api/dashboard/categories`
* GET `/api/dashboard/trends`

---

## Setup (Local)

1. Install dependencies

```
npm install
```

2. Create `.env`

```
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```

3. Run server

```
npm run dev
```

---


## Author

Saksham Ojha
