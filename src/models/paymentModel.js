const dbConn = require("../connect/index");

const Order = (order) => {
  this.id = order.id;
};

Order.create_order = (
  user_id,
  ngay_lap,
  dia_chi,
  sdt,
  slsp,
  tong_tien,
  htgh,
  httt,
  ghi_chu,
  location,
  ds_sp,
  status
) => {
  var dh_ma = "DH-" + Date.now();
  var query_str = `insert into don_hang values(null, '${dh_ma}', '${user_id}', '${ngay_lap}', '${dia_chi}', '${sdt}', ${slsp}, ${tong_tien}, '${htgh}', '${httt}', '${ghi_chu}', 'Chờ xác nhận');`;
  //   console.log("model" + ds_sp[0].info.sp_ma);

  dbConn.query(query_str, (error) => {
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i < ds_sp.length; i++) {
        var ma_sp = ds_sp[i].ma_sp;
        var ten_sp = ds_sp[i].ten_sp;
        var image_sp = ds_sp[i].anh_sp;
        // console.log("model" + ds_sp[i].info.sp_ma);

        dbConn.query(
          `insert into chi_tiet_don_hang values(null,'${dh_ma}', '${ma_sp}', '${ten_sp}', '${image_sp}','${ds_sp[i].sl_sp}','${ds_sp[i].gia_sp}');`,
          (insert_err) => {
            if (insert_err) {
              console.log(insert_err);
            } else {
              return;
            }
          }
        );

        if (location === "BuyNow") {
          dbConn.query(
            `update san_pham set sp_tonkho = sp_tonkho - '${ds_sp[i].sl_sp}' where sp_ma = '${ma_sp}'`,
            (err) => {
              if (err) {
                console.log(err);
              } else {
                return;
              }
            }
          );
        } else if (location === "FromCart") {
          dbConn.query(
            `delete from gio_hang where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
            (delete_err) => {
              if (delete_err) {
                console.log(delete_err);
              } else {
                return;
              }
            }
          );

          dbConn.query(
            `update san_pham set sp_tonkho = sp_tonkho - '${ds_sp[i].sl_sp}' where sp_ma = '${ma_sp}'`,
            (err) => {
              if (err) {
                console.log(err);
              } else {
                return;
              }
            }
          );
        }
      }
      status("InsertSuccess");
    }
  });
};

Order.select_all_order = (result) => {
  dbConn.query(`select * from don_hang`, (err, q_result) => {
    if (err) {
      console.log(err);
    } else {
      result(q_result);
    }
  });
};

Order.select_order_by_user = (user_id, result) => {
  dbConn.query(
    `select * from don_hang where nd_id = '${user_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Order.select_detail_order = (order_id, result) => {
  dbConn.query(
    `select * from chi_tiet_don_hang where dh_ma = '${order_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Order.confirm_order = (ma_dh, status) => {
  dbConn.query(
    `update don_hang set dh_trangthai = 'Chờ lấy hàng' where dh_ma ='${ma_dh}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("ConfirmSuccess");
      }
    }
  );
};

Order.update_status_order = (ma_dh, trang_thai, status) => {
  dbConn.query(
    `update don_hang set dh_trangthai = '${trang_thai}' where dh_ma ='${ma_dh}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateStatusSuccess");
      }
    }
  );
};

Order.cancel_order = (order_id, status) => {
  dbConn.query(
    `update don_hang set dh_trangthai = 'Đã hủy' where dh_ma ='${order_id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateStatusSuccess");
      }
    }
  );
};

module.exports = Order;
