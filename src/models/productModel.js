const dbConn = require("../connect");

const Product = (prod) => {
  this.id = prod.id;
};

Product.insert_product = (ma, anh_sp, ten, sl, gia, mota, status) => {
  dbConn.query(
    `select count(*) as exist from san_pham where sp_ma = '${ma}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else if (q_result.data > 0) {
        status("ExistProductCode");
      } else {
        dbConn.query(
          `insert into san_pham (sp_id, sp_ma, sp_image, sp_ten, sp_tonkho, sp_gia, sp_mota, sp_rate, sp_trangthai) values (null, "${ma}", "${anh_sp}", "${ten}", "${sl}", "${gia}", "${mota}", 0, 1)`,
          (err) => {
            if (err) {
              console.log(err);
              status("AddProductFail");
            } else {
              status("AddProductSuccess");
            }
          }
        );
      }
    }
  );
};

Product.insert_image = (image, ma_sp, status) => {
  dbConn.query(
    `insert into hinh_anh(ha_id, ha_ten, sp_id) values (null, "${image}", "${ma_sp}")`,
    (err) => {
      if (err) {
        console.log(err);
        status("AddImgFail");
      } else {
        status("AddImgSuccess");
      }
    }
  );
};

module.exports = Product;
