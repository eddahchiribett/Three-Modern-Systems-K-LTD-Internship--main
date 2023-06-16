const express = require('express');
const cors = require('cors');

const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Define the API endpoint for retrieving the list of students
app.get('/api/students', (req, res) => {
  // Simulate fetching the list of students from a database or external service
 const students = [
  { id: 1, name: 'John Doe', major: 'Computer Science' },
  { id: 2, name: 'Jane Smith', major: 'Information Technology' },
  { id: 3, name: 'Michael Johnson', major: 'Software Engineering' },
  { id: 4, name: 'Emily Davis', major: 'Data Science' },
  { id: 5, name: 'William Brown', major: 'Computer Engineering' },
  { id: 6, name: 'Olivia Wilson', major: 'Cybersecurity' },
  { id: 7, name: 'James Taylor', major: 'Network Administration' },
  { id: 8, name: 'Sophia Anderson', major: 'Artificial Intelligence' },
  { id: 9, name: 'Benjamin Martinez', major: 'Information Systems' },
  { id: 10, name: 'Ava Garcia', major: 'Web Development' },
  { id: 11, name: 'Ethan Thomas', major: 'Database Management' },
  { id: 12, name: 'Mia Lee', major: 'Computer Graphics' }
];

  // Return the list of students as JSON response
  res.json(students);
});

// Start the server
const port = 3000; // You can change this port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

