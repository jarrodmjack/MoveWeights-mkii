import prisma from "../db";

// export const getProducts = async (req, res) => {
//     const user = await prisma.user.findUnique({
//         where: {
//             id: req.user.id,
//         },
//         include: {
//             //equivalent of .populate in mongo
//             products: true,
//         },
//     });

//     res.json({ data: user.products });
// };

// export const getProductById = async (req, res) => {
//     const id = req.params.id;
//     const userId = req.user.id;
//     const product = await prisma.product.findFirst({
//         where: {
//             id: id,
//             belongsToId: userId,
//         },
//     });

//     res.json({ data: product });
// };

// export const createProduct = async (req, res) => {
//     const product = await prisma.product.create({
//         data: {
//             name: req.body.name, //we know name is guaranteed to be here because of the validator middleware :D
//             belongsToId: req.user.id,
//         },
//     });

//     res.json({ data: product });
// };

// export const updateProductById = async (req, res) => {
//     const updatedProduct = await prisma.product.update({
//         where: {
//             id: req.params.id,
//             belongsToId: req.user.id
//         },
//         data: {
//             name: req.body.name,
//         },
//     });

//     res.json({ data: updatedProduct });
// };

// export const deleteProductById = async (req, res) => {
//     const deletedProduct = await prisma.product.delete({
//         where: {
//             id_belongsToId: {
//                 id: req.params.id,
//                 belongsToId: req.user.id
//             }
//         },
//     })

//     res.json({ data: deletedProduct });
// };