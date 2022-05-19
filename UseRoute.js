import { Express } from "express";
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../kontroler/kontroler";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

export default router;