# Software Requirements Specification: Photo Marketplace

## 1. Introduction

### 1.1 Purpose
This document specifies the software requirements for Flash Pics as the Photo Marketplace, a platform for selling and purchasing digital photographs.

### 1.2 Scope
The Photo Marketplace will be a web-based application enabling photographers to upload and sell their work, and customers to browse, purchase, and download high-quality photos.

### 1.3 Definitions
- Customer: End-users who browse and purchase photos
- Admin: Admin who manage the marketplace
- Photo: Digital image available for purchase
- Category: Classification of photos
- Keyword: Descriptive tag associated with photos

## 2. System Overview
The Photo Marketplace consists of a user-facing frontend, an admin backend, and a database managing users, photos, purchases, and related entities.

## 3. Functional Requirements

### 3.1 User Management
#### 3.1.1 Registration and Authentication
- Users can register with username, email, and password
- System will enforce password confirmation during registration
- Users can log in and out securely

#### 3.1.2 Profile Management
- Users can view and edit their profile information

### 3.2 Photo Management
#### 3.2.1 Upload and Editing
- Admin can upload photos
- Photos require a title, price,keyword, and category
- Admin can edit photo details and update pricing
- System automatically tracks creation and update timestamps

#### 3.2.2 Categorization and Tagging
- Each photo must be assigned to a category
- Admin can add multiple keywords to photos for improved searchability

### 3.3 Searching
- Customers can browse photos by category
- System supports keyword-based search for photos
- Users can view detailed information about each photo

### 3.4 Purchase System
#### 3.4.1 Shopping Cart
- Customers can add photos to their shopping cart

#### 3.4.2 Checkout Process
- Customers can initiate the purchase process from their cart
- System calculates the total purchase amount
- Customers can complete the transaction

#### 3.4.3 Purchase Management
- Admins can update payment status (e.g., from pending to confirmed)

### 3.5 Admin Functions
- Manage categories (add, edit, delete)
- Oversee and confirm purchases payment


## 4. Non-Functional Requirements

### 5.1 Security
- Implement secure password hashing and storage
- Use HTTPS for all transactions

### 5.2 Scalability
- Design database and application architecture to handle growing user base and photo catalog

### 5.3 Usability
- Intuitive interface for photo upload, browsing, and purchasing
- Mobile-responsive design for access across devices

###6. System Architecture
6.1 Frontend
The frontend will be developed using React and Tailwind CSS for a responsive and modern UI.
6.2 Backend
The backend will use Node.js and Express to manage APIs and database interactions.
6.3 Database
The system will store data in a relational database (MySQL)


## 7. Acceptance Criteria
AC1: Users must be able to register, log in, and manage their profiles.
AC2: Admin must be able to create, edit, and delete photo
AC3: The user must be able to search by title keyword and category .
AC4: The use must purchase specified photo before download.

