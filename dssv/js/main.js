function domID(id) {
  return document.getElementById(id);
}
var dssv = [];
var data = localStorage.getItem("list");
if (data != null) {
  var list = JSON.parse(data);
  dssv = list.map(function (item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matkhau,
      item.toan,
      item.ly,
      item.hoa
    );
  });
  render(dssv);
}
function themSv() {
  var sv = layThongTin();
  dssv.push(sv);
  render(dssv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("list", jsonData);
}
function deleteSV(id) {
  var index = timViTri(id, dssv);
  dssv.splice(index, 1);
  render(dssv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("list", jsonData);
}
function suaThongTin(id) {
  var index = timViTri(id, dssv);
  var data = dssv[index];
  showThongTin(data);
  domID("txtMaSV").disabled = true;
}
function updateSV() {
  var data = layThongTin();
  var index = timViTri(data.ma, dssv);
  dssv[index] = data;
  render(dssv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("list", jsonData);
}
function resetDS() {
  localStorage.clear();
  location.reload();
}
