const Product = require("../models/productModel");

exports.get_all_product = (req, res) => {
  Product.select_all((result) => {
    res.send(result);
  });
};

exports.get_product_by_id = (req, res) => {
  // console.log(req.params.id);

  Product.select_product_by_id(req.params.id, (result) => {
    res.send(result);
  });
};

exports.get_product_images_by_id = (req, res) => {
  Product.select_product_images_by_id(req.params.id, (result) => {
    res.send(result);
  });
};

exports.add_product = (req, res) => {
  console.log(req.body);

  Product.insert_product(
    req.body.ma_sp,
    req.body.anh_sp,
    req.body.ten,
    req.body.sl,
    req.body.gia,
    req.body.danhmuc,
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

exports.update_status = (req, res) => {
  Product.update_status_product(req.body.ma_sp, req.body.status, (result) => {
    res.send(result);
  });
};

exports.update_promotion = (req, res) => {
  console.log(req.body.value, req.body.batdau, req.body.ketthuc);

  Product.update_promotion_product(
    req.body.ma_sp,
    req.body.value,
    req.body.batdau,
    req.body.ketthuc,
    (result) => {
      res.send(result);
    }
  );
};

exports.remove_product = (req, res) => {
  Product.delete_product(req.params.ma_sp, (result) => {
    res.send(result);
  });
};
