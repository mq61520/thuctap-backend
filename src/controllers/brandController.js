const Brand = require("../models/brandModel");

exports.get_all_brand = (req, res) => {
  Brand.get_brand((result) => {
    res.send(result);
  });
};

exports.get_all_brand_by_id = (req, res) => {
  //   console.log(req.params.id);

  Brand.get_brand_by_id(req.params.id, (result) => {
    res.send(result);
  });
};
