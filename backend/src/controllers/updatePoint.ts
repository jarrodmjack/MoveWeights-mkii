import prisma from "../db";

// export const getUpdatePoints = async (req, res) => {
    
//     const updatePoints = await prisma.product.findMany({
//         where: {
//             belongsToId: req.user.id
//         },
//         select: {
//             updates: {
//                 select: {
//                     updatePoints: true
//                 }
//             }
//         }
//     })

//     console.log(updatePoints)
  
//     res.json({data: "test"})
// };

// export const getUpdatePointById = async (req, res) => {
//     const updatePoint = await prisma.updatePoint.findUnique({
//         where: {
//             id: req.params.id,
//         },
//     });

//     res.json({ data: updatePoint });
// };

// export const createUpdatePoint = async (req, res) => {
//     const updatePoint = await prisma.updatePoint.create({
//         data: req.body,
//     });

//     res.json({ data: updatePoint });
// };

// export const updateUpdatePointById = async (req, res) => {};

// export const deleteUpdatePointById = async (req, res) => {};
