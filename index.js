import express from 'express'

const app = express();

// GET THE MANAGER  AND EMPLOYEES
app.get('/managers', (req, res) => {
    res.json({message: 'This is the GET route for Managers:Mr. Smith, Ms. Johnson' })
})
app.get('/employees', (req, res) => {
    res.json({message: 'This is the GET route for Employees: John Doe, Jane Doe'})
})

// POST THE MANAGERS AND EMPLOYEES
app.post('/managers', (req, res) => {
    res.send({message: 'This is the POST route for Managers: Mr. Smith, Ms. Johnson'})
})
app.post('/employees', (req, res) => {
    res.send({message: 'This is the POST route for Employees: John Doe, Jane Doe'})
})
// PATCH THE MANAGERS AND EMPLOYEES
app.patch('/managers', (req, res) => {
    res.send({message: 'This is the PATCH route for Managers: Mr. Smith, Ms. Johnson'})
})
app.patch('/employees', (req, res) => {
    res.send({message: 'This is the PATCH route for Employees: John Doe, Jane Doe'})
})
// DELETE THE MANAGERS AND EMPLOYEES
app.delete('/managers', (req, res) => {
    res.send({message: 'This is the DELETE route for Managers: Mr. Smith, Ms. Johnson'})
})
app.delete('/employees', (req, res) => {
    res.send({message: 'This is the DELETE route for Employees: John Doe, Jane Doe'})
})

app.listen(5050, () => {
    console.log('http://localhost:5050');
})