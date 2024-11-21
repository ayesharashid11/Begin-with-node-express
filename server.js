const express = require('express');
const app = express();
app.use(express.json());
let users = [{
    id: "1",
    name: 'Ayesha',
    email: "ayesha@gmail.com",
},
{
    id: "2",
    name: 'Nimra',
    email: 'nimra@gmail.com',
},
{
    id: "3",
    name: 'Nimra Khalid',
    email: 'nimrakhalid@gmail.com',
},
{
    id: "4",
    name: 'Khalid',
    email: 'nimra@gmail.com',
}
];
const port = 9000;
app.get('/', (req, res) => {
    res.json({ users });
});
app.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({ users });
});
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.filter((item) => item.id !== id);
    res.json({ message: 'User deleted successfully!', user });
});
app.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    if (!user) {
        return res.json({ message: 'User not found' });
    }
    const { name, email } = req.body;
    user.name = name;
   user.email = email;
    res.json({ user });
})


app.listen(port, () => console.log(`Server is running on port ${port}`));