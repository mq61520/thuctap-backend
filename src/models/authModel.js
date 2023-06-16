const dbConn = require("../connect");

const User = (user) => {
  this.id = user.id;
};

User.get_account_by_id = (id, result) => {
  dbConn.query(
    "select * from nguoi_dung where nd_id = ?",
    id,
    (err, account) => {
      if (err) {
        console.log(err);
      } else result(account);
    }
  );
};

User.authentication = (loginname, loginpwd, result) => {
  dbConn.query(
    `select count(*) as exist, nd_id, nd_role, nd_hoten, nd_avatar from nguoi_dung where nd_loginname = '${loginname}' and nd_loginpwd = '${loginpwd}'`,
    (err, count) => {
      if (err) {
        console.log(err);
      } else result(count);
    }
  );
};

module.exports = User;
