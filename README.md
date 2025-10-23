# SQL Server Quest — Interactive Learning Platform for SQL Server
# SQL Server Quest — منصة تفاعلية لتعلم SQL Server

---

## English Version 🇬🇧

### Overview

**SQL Server Quest** is an interactive learning platform designed to teach SQL step by step using **Microsoft SQL Server** in a practical and engaging way.

### Features

- Interactive video lessons.  
- Built-in SQL editor to practice queries directly.  
- Automatic exercise correction with detailed feedback.  
- Progress tracking and level system to motivate learning.  
- Multiple learning stages from beginner to advanced.

### Technologies Used

| Component | Technology |
|------------|-------------|
| Frontend | React + Vite |
| Backend | Node.js or Flask |
| Database | Microsoft SQL Server |
| Hosting | Vercel |
| Styling | Tailwind CSS + Shadcn/UI |

### Learning Levels

| Level | Description |
|--------|--------------|
| Beginner | Learn SQL basics: SELECT, WHERE, GROUP BY |
| Intermediate | Learn JOINs, functions, and CRUD operations |
| Advanced | Stored procedures, CTEs, and analytical functions |
| Professional | Performance tuning, indexing, transactions, and security |

### Example Exercise

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
http://localhost:5173
# SQL Server Quest — منصة تفاعلية لتعلم SQL Server

## نظرة عامة

**SQL Server Quest** هي منصة تعليمية تفاعلية تهدف إلى تعليم لغة **SQL** خطوة بخطوة باستخدام **Microsoft SQL Server** بطريقة عملية ومنظمة.

## المميزات

- دروس فيديو تفاعلية  
- محرر SQL مدمج لتطبيق الاستعلامات مباشرة  
- تصحيح تلقائي للتمارين مع عرض الملاحظات  
- نظام نقاط ومستويات لقياس التقدم والتحفيز  
- محتوى منظم من المستوى المبتدئ حتى المتقدم  

## التقنيات المستخدمة

| العنصر | التقنية |
|--------|----------|
| واجهة المستخدم | React + Vite |
| الخادم الخلفي | Node.js أو Flask |
| قاعدة البيانات | Microsoft SQL Server |
| الاستضافة | Vercel |
| التصميم | Tailwind CSS + Shadcn/UI |

## المستويات التعليمية

| المستوى | الوصف |
|----------|--------|
| المبتدئ | تعلم أوامر SQL الأساسية مثل SELECT وWHERE وGROUP BY |
| المتوسط | تعلم أوامر JOIN والدوال وعمليات CRUD |
| المتقدم | تعلم الإجراءات المخزنة وCTE والدوال التحليلية |
| المحترف | تحسين الأداء، الفهارس، المعاملات، والأمان |

## مثال على تمرين

**المطلوب:**  
اعرض أسماء الموظفين الذين تزيد رواتبهم عن 5000 مرتبة تنازليًا حسب الراتب.

```sql
SELECT name, salary
FROM Employees
WHERE salary > 5000
ORDER BY salary DESC;
git clone https://github.com/<اسم-المستخدم>/SQLServer_Quest.git
cd SQLServer_Quest
npm install
npm run dev
http://localhost:5173
## الترخيص

> 🧾 المشروع مفتوح المصدر تحت رخصة **MIT License**.

<details>
<summary>عرض نص الترخيص الكامل (انقر هنا)</summary>
</details>

---

## حول المشروع وصاحبه

> تم تطوير هذا المشروع بواسطة **Riry** بهدف تبسيط تعلم **SQL Server** بطريقة عملية وتفاعلية تساعد المتعلمين على التطبيق المباشر خطوة بخطوة.  
>  
> 🎯 يهدف المشروع إلى خلق بيئة تعليمية ممتعة تشجع على الاستمرار، وتحفيز المتعلم على التقدم من المستوى المبتدئ إلى المحترف بثقة وكفاءة.
