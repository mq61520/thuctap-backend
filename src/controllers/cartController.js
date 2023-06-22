const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

exports.add_to_cart = (req, res) => {
  console.log(req.body.user_id, req.body.ma_sp, req.body.sl_sp);

  Cart.insert_to_cart(
    req.body.user_id,
    req.body.ma_sp,
    req.body.sl_sp,
    (result) => {
      res.send(result);
    }
  );
};

exports.update_amount = (req, res) => {
  Cart.update_amount_in_cart(req.body.gh_id, req.body.type, (result) => {
    res.send(result);
  });
};

exports.get_amount_cart = (req, res) => {
  Cart.select_amount_product(req.params.user_id, (result) => {
    res.send(result);
  });
};

exports.get_list_product = (req, res) => {
  Cart.select_product(req.params.user_id, async (result) => {
    res.send(result);
  });
};

exports.remove_from_cart = (req, res) => {
  Cart.delete(req.params.gh_id, (result) => {
    res.send(result);
  });
};
