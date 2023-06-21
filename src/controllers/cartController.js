const Cart = require("../models/cartModel");

exports.add_to_cart = (req, res) => {
  console.log(req.body.user_id, req.body.ma_sp, req.body.sl_sp);

  //   Cart.insert_to_cart(
  //     req.body.user_id,
  //     req.body.ma_sp,
  //     req.body.sl_sp,
  //     (result) => {
  //       res.send(result);
  //     }
  //   );
};

exports.get_amount_cart = (req, res) => {
  Cart.select_amount_product(req.params.user_id, (result) => {
    res.send(result);
  });
};
