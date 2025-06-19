const { PrismaClient } = require('@prisma/client')

async function getUserScores(req, res) {
    try {
        const users = await Prisma.user.findMany({
            where: {
                score: {
                    not: null
                }
            }
        })


        return res.status(200).json({ users })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

async function createUser(req, res) {
    try {
        const username = req.body.username;
        if (!username?.trim()) {
            return res.status(400).json({
                error: "Missing fields"
            })
        }

        const user = await Prisma.user.create({
            data: {
                username: username
            }
        })

        return res.status(201).json({ user })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

async function submitUserScore(req, res) {
    // Finds user using userId
    // Sets time game finished
    // subtracts time finished from time started and adds as score to the user
    try {
        const userId = Number(req.params.id);

        if (!userId) {
            return res.status(400).json({
                error: "Missing id"
            })
        }

        const user = await Prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        const gameStarted = user.gameStarted.getTime();
        const gameEnded = Date.now()
        const scoreInSeconds = Math.floor((gameEnded - gameStarted) / 1000)

        const updatedUser = await Prisma.user.update({
            where: {
                id: userId
            },
            data: {
                score: scoreInSeconds
            }
        })

        return res.status(200).json({ updatedUser })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports = {
    getUserScores,
    createUser,
    submitUserScore
}