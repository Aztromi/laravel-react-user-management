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
Step by Step

Laravel
  1. open powershell and go to your project
  2. cd to the laravel-react-user-management
  3. cd to Backend
  4. composer install
  5. Type on powershell cp .env.example .env
  6. Open xampp and start apache and MySql
  7. Type on powershell "php artisan serve"
  8. Check if the host runs at http://localhost:8000

Database
  Option A
    1. Download the rolemanagement.sql at the base folder
    3. Go to phpmyadmin or through this link http://localhost/phpmyadmin/index.php?route=/server/databases
    4. Add a new database and name it rolemanagement or any name
    5. Select import and select the role_management_with_data.sql
    6. If you want to only import the structure select the role_management_structure.sql
  Option B
    1. If you want to populate the database with random names roles and unique emails run "php artisan migrate:fresh --seed" on the powershell
    2. You can customize on how many users are inserted by going to database->seeders->UserSeeders and replace the count to how many do you want

React
  1. Open Git Bash terminal and go to
  2. Create a .env file at the frontend folder
  3. Copy and paste this to the .env file "REACT_APP_API_URL=http://localhost:8000/api"
  4. open your git bash then write go to the project cd xampp/htdocs/laravel-react-user-management/FrontEnd
  5. type in your gitbash "npm install" to install all dependencies included in the file
  6. next is npm run dev
  7. it will start the react app at http://localhost:3000
