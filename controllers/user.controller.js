const prisma = require('../configs/database');

exports.getAll = async (req, res) => {
    try {
        const users = await prisma.user.findMany({});
        return res.json(users);
    } catch (error) {
        throw error;
    }
}

exports.getOne = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await prisma.user.findUnique({
            where: { id: Number(userId) }
        })

        return res.json(user);
    } catch (error) {
        throw error;
    }
}