import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
]

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`${user.firstName} has been added.`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send('Get ID Route');
})

export default router;