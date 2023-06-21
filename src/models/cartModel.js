const dbConn = require("../connect/index");

const Cart = (cart) => {
  this.id = cart.id;
  this.items = [];
};

Cart.insert_to_cart = (user_id, ma_sp, sl_sp, status) => {
  dbConn.query(
    `select count(*) as check_sp from gio_hang where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
    (err, check_sp) => {
      if (err) {
        console.log(err);
      } else if (check_sp[0].check_sp == 0) {
        dbConn.query(
          `insert into gio_hang(gh_id, nd_id, sp_ma, gh_soluong) values (null, '${user_id}', '${ma_sp}', '${sl_sp}')`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              status({ type: "New", status: "AddSuccess" });
            }
          }
        );
      } else {
        dbConn.query(
          `update gio_hang set  gh_soluong = gh_soluong + ${sl_sp} where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              status({ type: "Update", status: "AddSuccess" });
            }
          }
        );
      }
    }
  );
};

Cart.select_amount_product = (user_id, result) => {
  dbConn.query(
    "select count(*) as amount from gio_hang where nd_id = ?",
    user_id,
    (err, sqlResult) => {
      if (err) {
        console.log(err);
      } else if (sqlResult[0].amount == 0) {
        result("NoProduct");
      } else {
        result(sqlResult);
      }
    }
  );
};

module.exports = Cart;
