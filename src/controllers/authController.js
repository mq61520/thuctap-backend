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
