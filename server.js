const express = require('express');
const app = express();
// app.use(express.json());
let users= [{
    id:1,
    name: 'Ayesha',
    email: "ayesha@gmail.com",
},
{
    id: 2,
    name: 'Nimra',
    email: 'nimra@gmail.com',
},
{
    id: 3,
    name: 'Nimra Khalid',
    email: 'nimrakhalid@gmail.com',
}
];
const port = 8000; 
app.get('/', (req, res)=>{
    res.json({  users });
});
app.post('/', (req, res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({ users });
});
app.delete('/:id',(req, res)=>{
    const id = req.params.id;

})


app.listen(port, () => console.log(`Server is running on port ${port}`));