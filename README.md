# 🏨 The Wild Oasis

A modern internal hotel management system built for hotel employees to manage cabins, bookings, guests, and daily operations from a single dashboard.  
This project focuses on **real-world workflows**, **clean UI**, and **business-driven analytics**.

Live demo: https://deft-cranachan-8b4283.netlify.app/cabins

## ✨ Key Features

### 🔐 Authentication & Profiles
- Secure employee login
- New users can only be created **inside the application**
- Profile management:
  - Avatar upload
  - Name update
  - Password change

---

### 🏠 Cabins
- Table view of all cabins with:
  - Photo
  - Name
  - Capacity
  - Price
  - Discount
- Create, edit, and delete cabins
- Image upload support

---

### 📅 Bookings
- Full bookings table including:
  - Arrival & departure dates
  - Booking status
  - Paid amount
  - Cabin & guest details
- Booking statuses:
  - `unconfirmed`
  - `checked-in`
  - `checked-out`
- Sort and filter bookings by status

Additional booking data:
- Number of guests
- Number of nights
- Guest notes
- Breakfast option & price

---

### 🔄 Check-in / Check-out
- Check in guests on arrival
- Accept and confirm payment inside the app
- Add breakfast for the entire stay during check-in
- Check out or delete bookings

---

### 👤 Guests
- Guest profiles include:
  - Full name
  - Email
  - National ID
  - Nationality
  - Country flag for quick identification

---

### 📊 Dashboard & Analytics
The dashboard provides a business overview for the last **7, 30, or 90 days**:

- Guests checking in and out **today**
- Quick check-in / check-out actions
- Key metrics:
  - Bookings
  - Sales
  - Check-ins
  - Occupancy rate
- Charts:
  - Daily hotel sales (total vs extras)
  - Stay duration distribution

---

### ⚙️ Settings
- Minimum nights per booking
- Maximum nights per booking
- Maximum guests per booking

---

### 🌙 UI / UX
- Dark mode support
- Clean, dashboard-oriented design

---

## 🧱 Tech Stack

- **Frontend:** React
- **State Management:** Context API
- **Styling:** Styled Components
- **Authentication:** Custom authentication flow
- **Backend / Data:** Supabase

---

## 🎯 Project Goals

- Simulate a real hotel back-office system
- Practice complex CRUD flows
- Build realistic check-in / check-out logic
- Create meaningful business dashboards
- Apply scalable React architecture

---

## 🧪 User Role

- **Hotel Employee**
  - Full access to cabins, bookings, dashboard, and settings