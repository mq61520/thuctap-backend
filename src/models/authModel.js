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

User.add = (username, loginname, loginpwd, phone, address, status) => {
  dbConn.query(
    "select count(*) as exist from nguoi_dung where nd_loginname = ?",
    loginname,
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result[0].exist > 0) {
        console.log("UsernameAvailable");
        status("UsernameAvailable");
        return;
      } else {
        dbConn.query(
          `insert into nguoi_dung(nd_id, nd_role, nd_hoten, nd_loginname, nd_loginpwd, nd_phonenumber, nd_address) 
            values (null, '2', '${username}', '${loginname}', '${loginpwd}', '${phone}', '${address}')`,
          (err) => {
            if (err) {
              console.log(err);
            } else status("AddSuccess");
          }
        );
      }
    }
  );
};

User.update_phone_and_address = (phone_number, address, user_id, status) => {
  dbConn.query(
    `update nguoi_dung set nd_phonenumber = '${phone_number}' , nd_address = '${address}' where nd_id = '${user_id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateSuccess");
      }
    }
  );
};

module.exports = User;
