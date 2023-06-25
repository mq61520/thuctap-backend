const dbConn = require("../connect/index");

const Brand = (brand) => {
  this.id = brand.id;
};

Brand.get_brand = (result) => {
  dbConn.query("select * from danh_muc", (err, brands) => {
    if (err) {
      console.log(err);
    } else result(brands);
  });
};

Brand.get_brand_by_id = (id, result) => {
  dbConn.query("select * from danh_muc where dm_id = ?", id, (err, brands) => {
    if (err) {
      console.log(err);
    } else result(brands);
  });
};

module.exports = Brand;
