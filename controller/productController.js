const { valid } = require("joi");
const { addProductValidation } = require("../validation/productValidation");

const { Op } = require("sequelize");
const {Product , Sequelize} = require("../models");

const listProduct = async(req, res) => {
    const listAllProduct = await Product.findAll();
    return res.status(200).send({
        "status" : 200,
        "data" : listAllProduct
    });
}

const addProduct = (req , res) => {
    const reqParam = req.body;
    addProductValidation(reqParam , res , async (valid) => {
        try {
            if(valid) {
                const {name ,description, price , quantity} = reqParam
                let findPro = await Product.findOne({
                    where : {
                        name : name
                    }
                })
                if(findPro) {
                    return res.status(400).send({
                        "status" : 400,
                        "message" : 'product already exist...'
                    });
                }

                let productInstance = await Product.create({
                    name : name.trim(),
                    description : description,
                    price : price,
                    quantity : quantity
                })
               await productInstance.save();

               return res.status(201).send({
                    "status" : 200,
                    "message" : 'product created',
                    "data" : productInstance
                });
            }
        } catch (error) {
             return res.status(400).send({
                "status" : 400,
                "message" : error.message
            });
        }
    })
}
module.exports = {listProduct ,addProduct}
