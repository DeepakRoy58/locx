<div align="center">

# LOCX (OTP Generation System)

A simple Node.js + Express application to understand how OTP verification works.  
This project generates and validates one-time passwords for email-based authentication.

</div>

## What This Project Does

This is a basic OTP (One Time Password) system that:

- Generates a random 6-digit OTP  
- Stores the OTP with an expiration time  
- Verifies if the provided OTP is correct and not expired  
- Deletes the OTP after successful verification or expiration  


<div align="center">

<img width="8965" height="6307" alt="image_2026-06-02_15-57-39" src="https://github.com/user-attachments/assets/63809028-830b-459b-94d5-e6d8fdaabf93" />

</div>

<br/>

<div align="center">

</div>


## Installation

### 1. Install Node.js  
Make sure Node.js is installed on your system.

### 2. Install dependencies

```bash
npm install express
```

### 3. Run the server

```bash
node app.js
```

Server will start at:

```
http://localhost:3000
```


## API Endpoints

### Send OTP

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/db5eadcb-8ecc-4a4f-85f7-a49cce95c9cc" />

**Endpoint:**
```
POST /send-otp
```

**Request Body:**
```json
{
  "email": "deepakroy58@gmail.com"
}
```

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b607256e-88d1-4c2c-b3e2-8f96ea394080" />


**Response:**
```json
{
  "success": true,
  "message": "OTP GENERATED"
}
```

### Verify OTP

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/55d943dc-abb5-4337-832f-2457c7753aba" />


**Endpoint:**
```
POST /verify-otp
```

**Request Body:**
```json
{
  "email": "deepakroy58@gmail.com",
  "otp": "654321"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "OTP VERIFIED SUCCESSFULLY"
}
```

**Error Responses:**
```
OTP NOT FOUND
OTP EXPIRED
WRONG OTP
```


## How It Works

### OTP Generation
- Generates a random 6-digit number using Node.js crypto
- Stores OTP temporarily with expiry time (5 minutes)

### OTP Verification
- Checks if OTP exists
- Checks if OTP is expired
- Compares OTP values
- Deletes OTP after use

## OTP Expiration

OTP is valid for 5 minutes only. After expiry, it becomes invalid automatically.

## Learning Outcomes

This project helps you understand:

- Learnt how OTP systems works internally
- Express.js routing & Temp Data Storage
- Basic Authneication Logic

## Notes

- This project uses in-memory storage (not database)  
- Suitable for learning only  
- Not production-ready  

For production systems:

- Use database (PostgreSQL / MongoDB)  
- Use Redis for OTP storage  
- Add rate limiting  
- Send real emails instead of console logs  
