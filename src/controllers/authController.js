const User = require("../models/authModel");

exports.get_acc_by_id = (req, res) => {
  User.get_account_by_id(req.params.id, (result) => {
    res.send(result);
  });
};

exports.authentication = (req, res) => {
  User.authentication(req.body.loginname, req.body.loginpwd, (result) => {
    res.send(result);
  });
};

exports.register = (req, res) => {
  console.log(req.body);

  User.add(
    req.body.username,
    req.body.loginname,
    req.body.loginpwd,
    req.body.phone,
    req.body.address,
    (result) => {
      res.send(result);
    }
  );
};

exports.change_phone_and_address = (req, res) => {
  console.log(req.body.phone, req.body.address, req.body.user_id);

  User.update_phone_and_address(
    req.body.phone,
    req.body.address,
    req.body.user_id,
    (result) => {
      res.send(result);
    }
  );
};
