const dbConn = require("../connect");

const Product = (prod) => {
  this.id = prod.id;
};

Product.select_all = (result) => {
  dbConn.query("select * from san_pham", (err, queryRes) => {
    if (err) {
      console.log(err);
    } else {
      result(queryRes);
    }
  });
};

Product.select_product_by_id = (ma_sp, result) => {
  dbConn.query(
    `select * from san_pham where sp_ma = '${ma_sp}'`,
    (err, queryRes) => {
      if (err) {
        console.log(err);
      } else {
        result(queryRes);
      }
    }
  );
};

Product.select_product_images_by_id = (ma_sp, result) => {
  dbConn.query(
    `select * from hinh_anh where sp_id = '${ma_sp}'`,
    (err, imgRes) => {
      if (err) {
        console.log(err);
      } else {
        result(imgRes);
      }
    }
  );
};

Product.insert_product = (ma, anh_sp, ten, sl, gia, danhmuc, mota, status) => {
  dbConn.query(
    `select count(*) as exist from san_pham where sp_ma = '${ma}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else if (q_result[0].exist > 0) {
        status("ExistProductCode");
        return;
      } else {
        dbConn.query(
          `insert into san_pham (sp_id, sp_ma, sp_image, sp_ten, sp_tonkho, sp_gia, sp_danhmuc, sp_mota, sp_rate, sp_trangthai) values (null, "${ma}", "${anh_sp}", "${ten}", "${sl}", "${gia}", "${danhmuc}", "${mota}", 0, 1)`,
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

Product.update_status_product = (ma_sp, new_status, status) => {
  dbConn.query(
    `update san_pham set sp_trangthai = '${new_status}' where sp_ma = '${ma_sp}'`,
    (err2) => {
      if (err2) {
        console.log(err2);
      } else {
        status("UpdateProductSuccess");
      }
    }
  );
};

Product.delete_product = (ma_sp, status) => {
  dbConn.query(`delete from san_pham where sp_ma = '${ma_sp}'`, (err1) => {
    if (err1) {
      console.log(err1);
    } else {
      dbConn.query(`delete from hinh_anh where sp_id = '${ma_sp}'`, (err2) => {
        if (err2) {
          console.log(err2);
        } else {
          status("DeleteProductSuccess");
        }
      });
    }
  });
};

module.exports = Product;
