# Laravel + React User Management App

## Goal
1. Create an application that saves full name, role, and email address using **Laravel** and **React JS**.
2. Roles: **Author, Editor, Subscriber, Administrator**.

## Description
This project is a **User Management System** built with **Laravel 8** (backend) and **React 17 with TypeScript** (frontend).  
It allows creating users with multiple roles and filtering users by role.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Requirements
- PHP >= 8.0  
- Composer  
- Node.js >= 16  
- npm  
- XAMPP (Apache & MySQL)  
- Git  

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
Step by Step

Backend (Laravel)
```powershell
cd backend
composer install
cp .env.example .env
php artisan key:generate
```
  1. Start XAMPP → enable Apache and MySQL.
  2. Run Laravel server:
```powershell
php artisan serve
```
By default runs at: http://localhost:8000

Frontend (React + Vite)
```bash
cd frontend
npm install
```
Create a .env file inside /frontend:
Paste this inside the .env file:
```bash
REACT_APP_API_URL=http://localhost:8000/api
```
Run the frontend:
```bash
npm run dev
```
By default its supposed to run at: http://localhost:3000

Database

Option A: Import SQL
1. Open phpMyAdmin.
2. Create a database named rolemanagement.
3. Import role_management_with_data.sql (sample data) or role_management_structure.sql (schema only).

Option B: Laravel Migrations
1. Open phpMyAdmin.
2. Create a database named rolemanagement.
3. Run in powershell
```bash
php artisan migrate:fresh --seed
```
You can adjust the number of seeded users in database/seeders/UserSeeder.php

Running the Application
Backend → http://localhost:8000
Frontend → http://localhost:3000

## API Endpoints
| Method | Endpoint              | Description                   |
|--------|-----------------------|-------------------------------|
| GET    | `/api/fetchUsers`     | Fetch all users with roles    |
| GET    | `/api/users/{role}`   | Fetch users depending on role |
| POST   | `/api/users`          | Create a new user             |
