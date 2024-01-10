import prisma from "../db";

// export const getUpdatesByProductId = async (req, res) => {
//     const productId = req.params.productId;
//     const updates = await prisma.update.findMany({
//         where: {
//             productId,
//         },
//     });

//     res.json({ data: updates });
// };

// export const getUpdateById = async (req, res) => {
//     const id = req.params.id;
//     const update = await prisma.update.findUnique({
//         where: {
//             id,
//         },
//     });

//     res.json({ data: update });
// };

// export const createUpdate = async (req, res) => {
//     const product = await prisma.product.findUnique({
//         where: {
//             id: req.body.productId,
//         },
//     });

//     if (!product) {
//         // does not belong to user
//         return res.json({ msg: "no" });
//     }

//     const update = await prisma.update.create({
//         data: req.body,
//     });

//     res.json({ data: update });
// };

// export const updateUpdateById = async (req, res) => {
//     const products = await prisma.product.findFirst({
//         where: {
//             belongsToId: req.user.id,
//         },
//         select: {
//             updates: {
//                 where: {
//                     id: req.params.id,
//                 },
//             },
//         },
//     });

//     if (products.updates.length) {
//         return res.json({ msg: "noep" });
//     }

//     const updatedUpdate = await prisma.update.update({
//         where: {
//             id: products.updates[0].id,
//         },
//         data: req.body,
//     });

//     res.json({ data: updatedUpdate });
// };

// export const deleteUpdateById = async (req, res) => {
//     const products = await prisma.product.findFirst({
//         where: {
//             belongsToId: req.user.id,
//         },
//         select: {
//             updates: {
//                 where: {
//                     id: req.params.id,
//                 },
//             },
//         },
//     });

//     if (products.updates.length) {
//         //no products belonging to user/no updates available for products available to user
//         return res.json({ msg: "noep" });
//     }

//     const deleted = await prisma.update.delete({
//         where: {
//             id: products.updates[0].id,
//         },
//     });

//     res.json({ data: deleted });
// };
