const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function checkIfTargetFound(req, res) {
    try {
        const targetName = req.params.id;
        const x = Number(req.body.x);
        const y = Number(req.body.y)

        const target = await prisma.target.findUnique({
            where: {
                name: targetName
            }
        })

        if (!target) {
            return res.status(404).json({
                error: "Target not found"
            })
        }

        if (x <= target.xMax && x >= target.xMin) {
            if (y <= target.yMax && y >= target.yMin) {
                return res.status(200).json({
                    match: true
                })
            }
        }

        return res.status(200).json({
            match: false
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Internal server error"
        })
    }


}

// async function populateDb(req, res) {
//     try {
//         const test = await prisma.target.createMany({
//             data: [
//                 {
//                     name: "Book",
//                     xMin: 0.0,
//                     xMax: 0.33,
//                     yMin: 0.0,
//                     yMax: 0.23,
//                 },
//                 {
//                     name: "Credit card",
//                     xMin: 0.33,
//                     xMax: 0.67,
//                     yMin: 0.0,
//                     yMax: 0.23,
//                 },
//                 {
//                     name: "Key",
//                     xMin: 0.67,
//                     xMax: 1.0,
//                     yMin: 0.0,
//                     yMax: 0.23,
//                 },
//                 {
//                     name: "Sunglasses",
//                     xMin: 0.0,
//                     xMax: 0.33,
//                     yMin: 0.23,
//                     yMax: 0.5,
//                 },
//                 {
//                     name: "Mirror",
//                     xMin: 0.33,
//                     xMax: 0.67,
//                     yMin: 0.23,
//                     yMax: 0.5,
//                 },
//                 {
//                     name: "Cross",
//                     xMin: 0.67,
//                     xMax: 1.0,
//                     yMin: 0.23,
//                     yMax: 0.5,
//                 },
//                 {
//                     name: "Crystal ball",
//                     xMin: 0.0,
//                     xMax: 0.33,
//                     yMin: 0.5,
//                     yMax: 0.75,
//                 },
//                 {
//                     name: "Gear",
//                     xMin: 0.33,
//                     xMax: 0.67,
//                     yMin: 0.5,
//                     yMax: 0.75,
//                 },
//                 {
//                     name: "Microscope",
//                     xMin: 0.67,
//                     xMax: 1.0,
//                     yMin: 0.5,
//                     yMax: 0.75,
//                 },
//                 {
//                     name: "Toolbox",
//                     xMin: 0.0,
//                     xMax: 0.33,
//                     yMin: 0.75,
//                     yMax: 1.0,
//                 },
//                 {
//                     name: "Shield",
//                     xMin: 0.33,
//                     xMax: 0.67,
//                     yMin: 0.75,
//                     yMax: 1.0,
//                 },
//                 {
//                     name: "Capybara",
//                     xMin: 0.67,
//                     xMax: 1.0,
//                     yMin: 0.75,
//                     yMax: 1.0,
//                 },
//             ],
//             skipDuplicates: true
//         });
//         console.log(test)
//         return res.status(200).json(test)

//     } catch (error) {
//         return res.status(500).json({
//             error
//         })
//     }
// }

// coordinates are X = 0 33 67 100
// y = 23 50 75

// async function testDb(req, res) {
//     const targets = await prisma.target.findMany()
//     console.log(targets)
//     res.status(200).json(targets)
// }

module.exports = {
    checkIfTargetFound,
}