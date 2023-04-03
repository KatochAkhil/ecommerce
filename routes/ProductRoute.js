const express = require("express");
const { Op, where } = require("sequelize");
const ProductModal = require("../db/models/ProductModal");
const router = express.Router();

// Add A Product
router.post("/add", async (req, res) => {
  const createProduct = await ProductModal.create(req.body);
  return res
    .status(201)
    .json({ msg: "Product Added Successfully", data: createProduct });
});

// Get Single product

router.get("/:id", async (req, res) => {
  const getSingleProduct = await ProductModal.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!req.params.id) {
    return res.status(400).json("Please provide a valid id");
  } else {
    return res.status(200).json(getSingleProduct);
  }
});

// Get All Products

router.get("/all", async (req, res) => {
  console.log("first");
  const getSingleProduct = await ProductModal.findAndCountAll();
  return res.status(200).json({ msg: "Successfull", data: getSingleProduct });
});

// Get Products Related to category

// Search Products

// filter Products

module.exports = router;
