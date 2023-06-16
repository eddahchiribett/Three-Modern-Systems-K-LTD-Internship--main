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
    // Add more students here
  ];

  // Return the list of students as JSON response
  res.json(students);
});

// Start the server
const port = 3000; // You can change this port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

