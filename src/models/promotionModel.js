const dbConn = require("../connect/index");

const Promotion = (promotion) => {
  this.id = promotion.id;
};

Promotion.get_all_promotions = (result) => {
  dbConn.query(
    "select km_id, km_giatri, km_ngaybatdau as ngaybatdau, km_ngayketthuc as ngayketthuc from khuyen_mai",
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Promotion.get_promotion_by_id = (km_id, result) => {
  dbConn.query(
    `select km_id, km_giatri, km_ngaybatdau as ngaybatdau, km_ngayketthuc as ngayketthuc from khuyen_mai where km_id = '${km_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Promotion.insert_promotion = (value, date_start, date_end, status) => {
  dbConn.query(
    `insert into khuyen_mai values (null, null, '${value}', '${date_start}', '${date_end}')`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("InsertPromotionSuccess");
      }
    }
  );
};

module.exports = Promotion;
