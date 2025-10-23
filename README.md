# SQL Server Quest — Interactive Learning Platform for SQL Server
---

## Overview

**SQL Server Quest** is an interactive learning platform designed to teach SQL step by step using **Microsoft SQL Server** in a practical and engaging way.

---

## Features

- Interactive video lessons  
- Built-in SQL editor to practice queries directly  
- Automatic exercise correction with detailed feedback  
- Progress tracking and level system to motivate learning  
- Multiple learning stages from beginner to advanced  

---

## Technologies Used

| Component | Technology |
|------------|-------------|
| Frontend | React + Vite |
| Backend | Node.js or Flask |
| Database | Microsoft SQL Server |
| Hosting | Vercel |
| Styling | Tailwind CSS + Shadcn/UI |

---

## Learning Levels

| Level | Description |
|--------|--------------|
| Beginner | Learn SQL basics: SELECT, WHERE, GROUP BY |
| Intermediate | Learn JOINs, functions, and CRUD operations |
| Advanced | Stored procedures, CTEs, and analytical functions |
| Professional | Performance tuning, indexing, transactions, and security |

---

## Example Exercise

**Task:**  
Display the names of employees with salaries greater than 5000, ordered by salary in descending order.

```sql
SELECT name, salary
FROM Employees
WHERE salary > 5000
ORDER BY salary DESC;
git clone https://github.com/<your-username>/SQLServer_Quest.git
cd SQLServer_Quest
npm install
npm run dev
# Then open http://localhost:5173
MIT License

Copyright (c) 2025 Riry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## About Project & Author

This project was developed by Riry to simplify learning SQL Server in a practical and interactive way that helps learners apply concepts step by step.  
The project aims to create an engaging learning environment that encourages persistence and motivates learners to progress from beginner to professional with confidence and competence.
