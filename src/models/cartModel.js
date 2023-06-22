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

Cart.update_amount_in_cart = (gh_id, type, status) => {
  var sql = "";
  if (type == "increase") {
    sql = `update gio_hang set gh_soluong = gh_soluong + 1 where gh_id = '${gh_id}'`;
  } else if (type == "minus") {
    sql = `update gio_hang set gh_soluong = gh_soluong - 1 where gh_id = '${gh_id}'`;
  }

  dbConn.query(sql, (err) => {
    if (err) {
      console.log(err);
    } else {
      status("UpdateAmountSuccess");
    }
  });
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

Cart.select_product = (user_id, result) => {
  dbConn.query(
    "select * from gio_hang where nd_id = ?",
    user_id,
    (err, list) => {
      if (err) {
        console.log(err);
      } else {
        result(list);
      }
    }
  );
};

Cart.delete = (gh_id, status) => {
  dbConn.query(`delete from gio_hang where gh_id = '${gh_id}'`, (err) => {
    if (err) {
      console.log(err);
    } else {
      status("DeleteSuccess");
    }
  });
};

module.exports = Cart;
