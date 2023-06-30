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

exports.get_all_order = (req, res) => {
  Order.select_all_order((result) => {
    res.send(result);
  });
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

exports.confirm_order = (req, res) => {
  Order.confirm_order(req.params.ma_dh, (status) => {
    res.send(status);
  });
};

exports.update_status_order = (req, res) => {
  Order.update_status_order(req.body.ma_dh, req.body.status, (status) => {
    res.send(status);
  });
};

exports.cancel_order = (req, res) => {
  console.log(req.body.dh_id, req.body.list_prod);

  Order.cancel_order(req.body.dh_id, req.body.list_prod, (result) => {
    res.send(result);
  });
};
