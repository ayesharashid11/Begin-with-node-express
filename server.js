const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
const path = require('path');
// const users = require('./users_data.json')
// let users = [{
//     id: "1",
//     name: 'Ayesha',
//     email: "ayesha@gmail.com",
// },
// {
//     id: "2",
//     name: 'Nimra',
//     email: 'nimra@gmail.com',
// },
// {
//     id: "3",
//     name: 'Nimra Khalid',
//     email: 'nimrakhalid@gmail.com',
// },
// {
//     id: "4",
//     name: 'Khalid',
//     email: 'nimra@gmail.com',
// }
// ];
const port = 8000;
const filePath = path.join(__dirname , 'users_data.json')
const readUsersFromFile = () => {
    const data = fs.readFileSync(filePath, 'utf8'); 
    return JSON.parse(data); 
};
let users = readUsersFromFile();
const writeUsersToFile = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};
app.get('/', (req, res, next)=>{
    if (!users || users.length === 0) {
        return res.status(404).json({ message: 'No users found!' });
    }
    next();
} ,
(req, res) => {
    res.json({ users });
});
app.post('/', (req, res, next) =>{
    const {id, name, email} = req.body;
    if(!id || !name || !email ){
        return res.json('please enter Id, Name and Email')
    }
    next();
},
(req, res) => {
    const newUser = req.body;
    users.push(newUser);
    writeUsersToFile(users);
    res.json({ users });
});
app.delete('/:id', (req, res, next)=> {
    if(!users || users.length === 0)
    { return res.status(404).json('No ID found ')}
next();
},
(req, res) => {
    const id = req.params.id;
    const user = users.filter((item) => item.id !== id);
    users = user;
    writeUsersToFile(users); 
    res.json({ message: 'User deleted successfully!', user });
});
app.patch('/:id',(req, res, next)=>{
    const id = req.params.id;
    const user = users.find((item) => item.id === id);
    if(!user){
        return res.status(404).json({ message: 'User not found!' });
    }
next();
},
 (req, res) => {
    const id = req.params.id;
    const user = users.find((item) => item.id === id);  
    // if (!user) {
    //     return res.json({ message: 'User not found' });
    // }
    const { name, email } = req.body;
    if (name) user.name = name; 
    if (email) user.email = email;
   writeUsersToFile(users); 
    res.json({ user });
})


app.listen(port, () => console.log(`Server is running on port ${port}`));