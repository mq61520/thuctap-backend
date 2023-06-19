const Product = require("../models/productModel");

exports.add_product = (req, res) => {
  console.log(req.body);

  //   var nameImage = ;

  Product.insert_product(
    req.body.ma_sp,
    req.body.anh_sp,
    req.body.ten,
    req.body.sl,
    req.body.gia,
    req.body.mota,
    (status) => {
      res.send(status);
    }
  );
};

exports.add_product_images = (req, res) => {
  console.log(req.files[0].originalname);

  Product.insert_image(req.files[0].originalname, req.body.ma_sp, (result) => {
    res.send(result);
  });
};
