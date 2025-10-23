import React, { useState } from 'react'

export default function App() {
  const [lesson, setLesson] = useState(0);
  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);

  const lessons = [
    {
      title: 'Lesson 1: SELECT and WHERE',
      en: 'Learn how to fetch data using SELECT and filter results with WHERE.',
      ar: 'تعلم كيفية جلب البيانات باستخدام SELECT وتصفية النتائج باستخدام WHERE.',
      task: 'Display employee names with salary > 5000',
      solution: 'SELECT name, salary FROM Employees WHERE salary > 5000;'
    },
    {
      title: 'Lesson 2: ORDER BY and DISTINCT',
      en: 'Learn how to sort and remove duplicates.',
      ar: 'تعلم كيفية الترتيب وإزالة التكرارات.',
      task: 'List unique department names ordered alphabetically',
      solution: 'SELECT DISTINCT dept_name FROM Departments ORDER BY dept_name;'
    },
    {
      title: 'Lesson 3: Aggregate Functions and GROUP BY',
      en: 'Use SUM, COUNT, and GROUP BY to summarize data.',
      ar: 'استخدم SUM وCOUNT وGROUP BY لتلخيص البيانات.',
      task: 'Show total sales per department',
      solution: 'SELECT dept_name, SUM(amount) AS total_sales FROM Sales JOIN Employees e ON Sales.emp_id = e.emp_id JOIN Departments d ON e.dept_id = d.dept_id GROUP BY dept_name;'
    }
  ];

  const checkQuery = () => {
    const normalized = query.trim().toLowerCase();
    const expectedKeyword = lessons[lesson].solution.split(' ')[0].toLowerCase();
    const correct = normalized.includes(expectedKeyword);
    if (correct) {
      setFeedback('✅ Correct! Great job!');
      setPoints(points + 50);
    } else {
      setFeedback('❌ Not quite right. Try again or check your syntax.');
    }
  };

  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: 20, background: '#0f172a', minHeight: '100vh', color: 'white'}}>
      <div style={{maxWidth: 900, margin: '0 auto'}}>
        <h1 style={{fontSize: 28}}>SQL Server Quest — Beginner Level</h1>
        <p style={{color: '#cbd5e1'}}>Learn SQL Server through interactive practice ⚡</p>

        <div style={{background: '#111827', padding: 18, borderRadius: 8, marginTop: 12}}>
          <h2 style={{fontSize: 20}}>{lessons[lesson].title}</h2>
          <p style={{marginTop: 6}}>{lessons[lesson].en}</p>
          <p style={{color: '#94a3b8'}}>{lessons[lesson].ar}</p>
          <p style={{fontStyle: 'italic', marginTop: 10}}>🧩 Task: {lessons[lesson].task}</p>
          <textarea
            placeholder="Write your SQL query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{width: '100%', height: 140, marginTop: 8, padding: 10, borderRadius: 6, border: '1px solid #334155'}}
          />
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 12}}>
            <button onClick={checkQuery} style={{padding: '8px 14px', borderRadius: 6, background: '#22c55e', border: 'none', cursor: 'pointer'}}>Check</button>
            <button onClick={() => { setLesson((lesson + 1) % lessons.length); setQuery(''); setFeedback(''); }} style={{padding: '8px 14px', borderRadius: 6, background: '#3b82f6', border: 'none', cursor: 'pointer'}}>Next Lesson ➡️</button>
          </div>
          {feedback && <p style={{marginTop: 12}}>{feedback}</p>}
        </div>

        <div style={{marginTop: 12, color: '#cbd5e1'}}>
          <p>Your Points: <span style={{fontWeight: '700', color: '#86efac'}}>{points}</span></p>
        </div>

        <div style={{marginTop: 18, color: '#94a3b8'}}>
          <p>Note: This is a front-end prototype. To connect to a live SQL Server training database and enable real query execution, deploy a small server that receives the query and executes it safely against the provided <code>training_db.sql</code> dataset.</p>
        </div>
      </div>
    </div>
  )
}
