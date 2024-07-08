const asyncHandler = require("express-async-handler");
const { products: productModel } = require("../models");
const {
  getAllProductsErrorMessage,
  createProductErrorMessage,
  getProductByIdErrorMessage,
  updateProductByIdErrorMessage,
  deleteProductByIdErrorMessage,
} = require("../helpers/responseMessages/error");
const {
  getAllProductsSuccesMessage,
  createProductSuccessMessage,
  getProductByIdSuccessMessage,
  updateProductByIdSuccessMessage,
  deleteProductByIdSuccessMessage,
} = require("../helpers/responseMessages/success");
const {
  createProductResponseData,
  getAllProductsResponseData,
  getProductByIdResponseData,
  updateProductByIdResponseData,
} = require("../dtos/productDto");

const createProductService = asyncHandler(async (req, res) => {
  let createProductServiceResponse = {};
  const {
    name,
    status,
    description,
    quantity,
    handlingTime,
    restockDate,
    yourPrice,
    salePrice,
    saleStartDate,
    offeringConditionType,
    itemWeight,
    itemWeightUnits,
    fulfillmentChannel,
    image,
  } = req.body;
  try {
    const product = await productModel.create({
      name,
      status,
      description,
      quantity,
      handlingTime,
      restockDate,
      yourPrice,
      salePrice,
      saleStartDate,
      offeringConditionType,
      itemWeight,
      itemWeightUnits,
      fulfillmentChannel,
      image,
    });

    return (createProductServiceResponse = {
      success: true,
      message: createProductSuccessMessage.Created,
      status: 200,
      data: createProductResponseData(product),
    });
  } catch (error) {
    return (createProductServiceResponse = {
      success: false,
      message: createProductErrorMessage.NotCreated,
      status: 500,
    });
  }
});

const getAllProductsService = asyncHandler(async (req, res) => {
  let getAllProductsServiceResponse = {};
  try {
    const { status, fulfillmentChannel, name } = req?.query;
    queryConditions = {};
    if (status && status !== "All") {
      queryConditions.status = status;
    }
    if (fulfillmentChannel && fulfillmentChannel !== "All") {
      queryConditions.fulfillmentChannel = fulfillmentChannel;
    }
    const products = await productModel.findAll({
      where: queryConditions,
      raw: true,
    });
    if (name) {
      queryConditions.name = name;
    }

    return (getAllProductsServiceResponse = {
      success: true,
      message: getAllProductsSuccesMessage.AllProducts,
      status: 200,
      data: getAllProductsResponseData(products),
    });
  } catch (error) {
    return (getAllProductsServiceResponse = {
      success: false,
      message: getAllProductsErrorMessage.NotFound,
      status: 404,
    });
  }
});

const getProductByIdService = asyncHandler(async (req, res) => {
  let getProductByIdServiceResponse = {};
  try {
    const product = await productModel.findByPk(req.params.id, { raw: true });
    if (product) {
      return (getProductByIdServiceResponse = {
        success: true,
        message: getProductByIdSuccessMessage.GetProduct,
        status: 200,
        data: getProductByIdResponseData(product),
      });
    }
  } catch (error) {
    return (getProductByIdServiceResponse = {
      success: false,
      message: getProductByIdErrorMessage.NotFound,
      status: 404,
    });
  }
});

const updateProductByIdService = asyncHandler(async (req, res) => {
  let updateProductByIdServiceResponse = {};

  try {
    const productId = req.params.id;
    const productData = req.body;
    const [updatedRowsCount, updatedProduct] = await productModel.update(
      productData,
      {
        where: { id: productId },
        returning: true,
        raw: true,
      }
    );
    if (updatedRowsCount === 0) {
      return (updateProductByIdServiceResponse = {
        success: false,
        message: updateProductByIdErrorMessage.NotFound,
        status: 404,
      });
    }
    return (updateProductByIdServiceResponse = {
      success: true,
      message: updateProductByIdSuccessMessage.UpdateProduct,
      status: 200,
      data: updateProductByIdResponseData(updatedProduct[0]),
    });
  } catch (error) {
    return (updateProductByIdServiceResponse = {
      success: false,
      message: updateProductByIdErrorMessage.ServerError,
      status: 500,
    });
  }
});

const deleteProductByIdService = asyncHandler(async (req, res) => {
  let deleteProductByIdServiceResponse = {};

  try {
    const product = await productModel.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      return (deleteProductByIdServiceResponse = {
        success: true,
        message: deleteProductByIdSuccessMessage.DeleteProduct,
        status: 204,
      });
    } else {
      return (deleteProductByIdServiceResponse = {
        success: false,
        message: deleteProductByIdErrorMessage.NotFound,
        status: 404,
      });
    }
  } catch (error) {
    return (deleteProductByIdServiceResponse = {
      success: false,
      message: deleteProductByIdErrorMessage.ServerError,
      status: 500,
    });
  }
});

module.exports = {
  getAllProductsService,
  createProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
};
