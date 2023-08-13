function render(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var data = arr[i];
    var theTr = `<tr>
    <td>${data.ma}</td>
    <td>${data.ten}</td>
    <td>${data.email}</td>
    <td>${data.tinhDTB()}</td>
    <td><button class="btn btn-info"onclick ="suaThongTin('${
      data.ma
    }')">Sửa</button>
    <button class="btn btn-warning" onclick = "deleteSV('${
      data.ma
    }')">Xoá</button>
    </td>
    </tr>`;
    content += theTr;
  }
  domID("tbodySinhVien").innerHTML = content;
}
function timViTri(id, arr) {
  return arr.findIndex(function (item) {
    return item.ma == id;
  });
}
function showThongTin(item) {
  domID("txtMaSV").value = item.ma;
  domID("txtTenSV").value = item.ten;
  domID("txtEmail").value = item.email;
  domID("txtPass").value = item.matkhau;
  domID("txtDiemToan").value = item.toan;
  domID("txtDiemLy").value = item.ly;
  domID("txtDiemHoa").value = item.hoa;
}
function layThongTin() {
  var _ma = domID("txtMaSV").value;
  var _ten = domID("txtTenSV").value;
  var _email = domID("txtEmail").value;
  var _matkhau = domID("txtPass").value;
  var _toan = domID("txtDiemToan").value * 1;
  var _ly = domID("txtDiemLy").value * 1;
  var _hoa = domID("txtDiemHoa").value * 1;
  var sv = new SinhVien(_ma, _ten, _email, _matkhau, _toan, _ly, _hoa);
  return sv;
}
