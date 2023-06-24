const Order = require("../models/paymentModel");

exports.add_order = (req, res) => {
  console.log(
    req.body.user_id,
    req.body.ngay_lap,
    req.body.dia_chi,
    req.body.sdt,
    req.body.sl_sp,
    req.body.tong_tien,
    req.body.htgh,
    req.body.httt,
    req.body.ghi_chu,
    req.body.location,
    req.body.ds_sp
  );

  Order.create_order(
    req.body.user_id,
    req.body.ngay_lap,
    req.body.dia_chi,
    req.body.sdt,
    req.body.sl_sp,
    req.body.tong_tien,
    req.body.htgh,
    req.body.httt,
    req.body.ghi_chu,
    req.body.location,
    req.body.ds_sp,
    (result) => {
      res.send(result);
    }
  );
};

exports.get_order_by_user = (req, res) => {
  Order.select_order_by_user(req.body.user_id, (result) => {
    res.send(result);
  });
};

exports.get_detial_order = (req, res) => {
  Order.select_detail_order(req.params.dh_id, (result) => {
    res.send(result);
  });
};

exports.cancel_order = (req, res) => {
  Order.update_order_status(req.params.dh_id, (result) => {
    res.send(result);
  });
};
