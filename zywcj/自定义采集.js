######远程订阅写入本地1
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var 记录 = "";
if (getVar("rurl") != 'null' && getVar("rurl").indexOf(",http") > 1) {
  记录 = getVar("rurl").match(/.+?,http.+/g);
  if (_.read(filename)) {
    var 旧记录 = _.read(filename).match(/.+?,http.+/g);
    var 新记录 = 记录.concat(旧记录.filter(item=>item!=记录[0]));
  } else {
    var 新记录 = 记录;
  }
  _.write(新记录.join("\n"), filename);
  _.read(filename);
} else {
  "请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅2
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
if (_.read(filename)) {
  var code = _.read(filename).match(/.+?,.+/g);
} else {
  var data = "内置,https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/zywcj/资源网采集.txt";
  _.write(data, filename);
  var code = _.read(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
if(getVar("QJS")&&getVar("QJS")!="null"){
  eval(getVar("QJS"));
}else{
  eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename='资源采集远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######QJS6
ZXZhbChmdW5jdGlvbihlLGYsYSxkLGMsZyl7Yz1mdW5jdGlvbihiKXtyZXR1cm4oYjxmPyIiOmMocGFyc2VJbnQoYi9mKSkpKygzNTwoYiU9Zik/U3RyaW5nLmZyb21DaGFyQ29kZShiKzI5KTpiLnRvU3RyaW5nKDM2KSl9O2lmKCEiIi5yZXBsYWNlKC9eLyxTdHJpbmcpKXtmb3IoO2EtLTspZ1tjKGEpXT1kW2FdfHxjKGEpO2Q9W2Z1bmN0aW9uKGIpe3JldHVybiBnW2JdfV07Yz1mdW5jdGlvbigpe3JldHVybiJcXHcrIn07YT0xfWZvcig7YS0tOylkW2FdJiYoZT1lLnJlcGxhY2UobmV3IFJlZ0V4cCgiXFxiIitjKGEpKyJcXGIiLCJnIiksZFthXSkpO3JldHVybiBlfSgiKDUoKXszIDY9e307MyBtPTEuMDszIHE9Ui4xdi4xdy4xeC4xeTszIHI9Ui4xdi4xdy4xeC4xeSgpLmMuMjc7MyBzPTF6LjI4LjI5LjJhKCk7MyB0PVMuMmI7MyB1PVMuMUE7MyB2PXQuVC4yYzszIHc9MUIoKSt2KycyZCcrditFKCkuVS5WKDAsNCkrJyQkJCcrRSgpLjE4K3Y7SD0oMUMpPT4xRCAxQz09PScyZSc7NSAxOShhKXsyZiAxYT0xRCBhOzcgYSE9SSYmKDFhPT0nMmcnfHwxYT09JzUnKX0zIHk9Uy4yaC4yaTszIHo9OCB5LjJqLjJrKCk7NSBXKGEpezFFPXsxRjo1KCl7NyBhKCl9LH07MyBiPTggeS4ybCgxRSk7ei5YKGIpOzcgYn01IFkoYSxiKXtKIEs9MDtKIDFiPVtdO0woSzxhLkQpezFiLjFjKGEuMm0oSyxLK2IpKTtLKz1ifTcgMWIuMm4oKG8pPT5vLkQ+MCl9NSBYKGwsbil7Yz1bXTtaPVkobCxsLkQvbik7MyBuPTA7TChuPFouRCl7NSBsKHgpezcgNSBvKCl7MyBhPVtdOzFkKEogaT0wO2k8Wlt4XS5EO2krKyl7YS4xYyhaW3hdW2ldKCkpfTcgYX19Yy4xYyhXKGwobikpKTtuKyt9NyBjfTUgMTAoZil7MyBhPWYuMm8oKTs5KCFhLjFHKCkpYS4xMCgpfTUgRihhLGIpezMgYz04IHQuVCh3KydcdTY1NzBcdTYzNmUnK3YrYik7MTAoYyk7MyBkPTggdC4ycChjLDFlKTtkLkYoYSk7ZC5NKCl9NSBOKGEpezMgYj04IHQuVCh3KydcdTY1NzBcdTYzNmUnK3YrYSk7MyBjPTA7OSghYi4xRygpfHwoYz1iLkQoKSk9PTApNycnOzMgZD11LjFILjFJLjFKKHUuMUsuMUwsYyk7MyBlPTggdC4ycShiKTtlLk4oZCk7ZS5NKCk7NyA4IHUuMnIoZCl9MyBBPVIuMnMuMnQ7MyBCPUEuMnUuMnY7NSAxMShvKXtKezFmLEcsTywxZywxMiwxaH09bzszIGE9QS4ydy4yeCgxZik7YS4yeSgxMyk7YS4yeigyQSk7MWg9PT0xZT9hLjFNKDFoKTphLjFNKDEzKTs5KDE5KEcpKTFkKHggMU4gRylhLkcoeCxHW3hdKTs5KDE5KE8pKXs5KDFnPT09MTMpYS4yQihPKTsxTyAxZChwIDFOIE8pYS4yQyhwLE9bcF0pfTMgYjs5KDFnPT09MTN8fDEyPT0nMkQnKWI9YS4xMihCLjJFKS4xUCgpOzFPIGI9YS4xMihCLjJGKS4xUCgpOzcgYn01IDFRKGEsYil7YS4yRyhiKTs3IGEuMkgoKX01IDFSKGEsYil7NyBiKyc9JythLjJJKGIpfTUgMVMoYSl7MyBiPScnOzMgYz1hLjJKKCkuMVQoKS4xVSgpO0woYy4xVigpKXszIGQ9Yy4xVygpO2IrPWQuMVgoKSsnPScrZC4xWSgpKyc7J303IGJ9NSAxWihhLGIpezcgYS5HKGIpfTUgMjAoYSl7MyBiPScnOzMgYz1hLjJLKCkuMVQoKS4xVSgpO0woYy4xVigpKXszIGQ9Yy4xVygpO2IrPWQuMVgoKSsnPScrZC4xWSgpKyc7J303IGJ9NSAxaShhKXszIGI9YS4xaignLycpOzkoYS5EKCk9PWIrMSl7YT1hLlYoMCxiKTs3IDFpKGEpfTcgYS5WKDAsYS4xaignLicpKX01IDFrKG8pezJMe0p7MWwsMjF9PW87MyBhPTExKG8pOzMgYj0xaShhLjFmKCkuMjIoKSk7MyBjPXMuMk0oYS4yTigpLjJPKCc7JylbMF0pOzMgZD1iLlYoYi4xaignLycpKzEpKycuJytjO1A9SCgxbCk/MWwrditkOncrJ1x1NGUwYlx1OGY3ZCcrditkOzMgZj1hLjJQKCk7MyBnPTggdS4xSC4xSS4xSih1LjFLLjFMLDJRKTszIGg9MDszIGk9OCB0LjJSKCk7TCgoaD1mLk4oZykpIT0tMSl7aS5GKGcsMCxoKX0zIGo9OCB0LlQoUCk7MTAoaik7MyBrPTggdC4yUyhqKTtrLkYoaS4yVCgpKTs5KDIxPT09MWUpNyBQO1EoJ1x1NGUwYlx1OGY3ZFx1NjIxMFx1NTI5Zlx1ZmYwY1x1OGRlZlx1NWY4NDonK1ApOzcgUH0yVShlKXsxNChlKTtRKCdcdTRlMGJcdThmN2RcdTU5MzFcdThkMjUsXHU4YmY3XHU2MjUzXHU1ZjAwXHU4YzAzXHU4YmQ1XHU1M2YwXHU2N2U1XHU3NzBiXHU1MTc3XHU0ZjUzXHU1ZjAyXHU1ZTM4XHU0ZmUxXHU2MDZmJyl9MlZ7OShpIT1JKWkuTSgpOzkoayE9SSlrLk0oKTs5KGYhPUkpZi5NKCl9fTMgQz1yLjJXKEUoKS5VLHIuMlgpOzUgMW0oYSxiKXszIGM9Qy4xbigpO2MuMlkoYSxiKTtjLjFvKCl9NSAxcChhLGIpezcgQy4yWihhLGIpfTUgMXEoYSl7MyBjPUMuMW4oKTtjLjMwKGEpO2MuMW8oKX01IDIzKCl7MyBjPUMuMW4oKTtjLjMxKCk7Yy4xbygpfTUgJCgpezMgYT0xNS5EOzMyKGEpezI0IDE6NyAxNigxNVswXSk7MjQgMjo3IDMzKDE1WzBdLDE1WzFdKTszNDo3IDM1KCl9fTUgMTQoZSl7SChlKT9cdTYyYTVcdTk1MTkoZSk6XHU2MmE1XHU5NTE5KGUuMjIoKSl9NSBRKGEpe3EuaC5iKGEpfTUgMXIoKXs4IFIuMXouMzYuMzcoKS4zOCg0KX01IDFCKCl7NyByLjM5KEkpLjNhKCl9NSAxNyhhKXtTLjFBLjNiLjE3KGEpfTUgRSgpe289e307by5VPTFzKDE2KCcxdCcpLCcuMXUoVSkudCgpJyk7by4yNT0xcygxNignMXQnKSwnLjF1KDI1KS50KCknKTtvLjE4PTFzKDE2KCcxdCcpLCcuMXUoMTgpLnQoKScpOzcgb302LjNjPW07Ni5OPU47Ni5GPUY7Ni4xNz0xNzs2Llc9Vzs2Llg9WDs2Llk9WTs2LjFyPTFyOzYuSD1IOzYuMTE9MTE7Ni4zZD0xUTs2LjNlPTFSOzYuM2Y9MVM7Ni4zZz0xWjs2LjNoPTIwOzYuMWs9MWs7Ni5FPUU7Ni5RPVE7Ni4xND0xNDs2LjFtPTFtOzYuMXA9MXA7Ni4xcT0xcTs2LjNpPTIzOzYuJD0kOzI2LjY9Nn0uMUYoMjYpKTsiLAo2MiwyMDUsIiAgIHZhciAgZnVuY3Rpb24gXyByZXR1cm4gbmV3IGlmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIGluZm8gd3JpdGUgaGVhZGVyIGlzU3RyaW5nIG51bGwgbGV0IGluZGV4IHdoaWxlIGNsb3NlIHJlYWQgcGFyYW1zIHNhdmVwYXRoIHRvYXN0IFBhY2thZ2VzIGphdmEgRmlsZSBzaWduIHN1YnN0cmluZyB0aHJlYWQgc3VibWl0IGNodW5rIGxpc3QgbWtkaXJzIGh0dHAgbWV0aG9kIHRydWUgZXJyb3IgYXJndW1lbnRzIGdldFZhciBzbGVlcCBuYW1lIGlzT2JqZWN0IHR5cGUgcmVzIHB1c2ggZm9yIGZhbHNlIHVybCBqc29uIHJlIHRyaW1VIGxhc3RJbmRleE9mIGRvd25sb2FkIHNldHBhdGggcHV0U3AgZWRpdCBjb21taXQgZ2V0U3AgY2xlYXJTcCBiYWNrIGUyUmV4IFFNSU5GTyBnZXQgY24gbWJyb3dzZXIgY29uZmlnIEFwcCBhbmRyb2lkIGxhbmcgcGF0aCB2YWwgdHlwZW9mIG9iaiBjYWxsIGV4aXN0cyByZWZsZWN0IEFycmF5IG5ld0luc3RhbmNlIEJ5dGUgVFlQRSBmb2xsb3dSZWRpcmVjdHMgaW4gZWxzZSBleGVjdXRlIGh0dHBCb2R5IGh0dHBDb29raWUgaHR0cENvb2tpZXMgZW50cnlTZXQgaXRlcmF0b3IgaGFzTmV4dCBuZXh0IGdldEtleSBnZXRWYWx1ZSBodHRwSGVhZGVyIGh0dHBIZWFkZXJzIHRpcHMgdG9TdHJpbmcgcmVtb3ZlU3AgY2FzZSB2ZXJzaW9uIHRoaXMgYXBwbGljYXRpb25Db250ZXh0IHdlYmtpdCBNaW1lVHlwZU1hcCBnZXRTaW5nbGV0b24gaW8gc2VwYXJhdG9yIHFtIHN0cmluZyBjb25zdCBvYmplY3QgdXRpbCBjb25jdXJyZW50IEV4ZWN1dG9ycyBuZXdDYWNoZWRUaHJlYWRQb29sIEZ1dHVyZVRhc2sgc2xpY2UgZmlsdGVyIGdldFBhcmVudEZpbGUgRmlsZVdyaXRlciBGaWxlSW5wdXRTdHJlYW0gU3RyaW5nIG9yZyBqc291cCBDb25uZWN0aW9uIE1ldGhvZCBKc291cCBjb25uZWN0IGlnbm9yZUNvbnRlbnRUeXBlIG1heEJvZHlTaXplIDEwNDg1NzYwMDAgcmVxdWVzdEJvZHkgZGF0YSBwb3N0IFBPU1QgR0VUIGNoYXJzZXQgYm9keSBjb29raWUgY29va2llcyBoZWFkZXJzIHRyeSBnZXRFeHRlbnNpb25Gcm9tTWltZVR5cGUgY29udGVudFR5cGUgc3BsaXQgYm9keVN0cmVhbSA0MDk2IEJ5dGVBcnJheU91dHB1dFN0cmVhbSBGaWxlT3V0cHV0U3RyZWFtIHRvQnl0ZUFycmF5IGNhdGNoIGZpbmFsbHkgZ2V0U2hhcmVkUHJlZmVyZW5jZXMgTU9ERV9QUklWQVRFIHB1dFN0cmluZyBnZXRTdHJpbmcgcmVtb3ZlIGNsZWFyIHN3aXRjaCBwdXRWYXIgZGVmYXVsdCBnZXRDb2RlIGFwcCBJbnN0cnVtZW50YXRpb24gc2VuZEtleURvd25VcFN5bmMgZ2V0RXh0ZXJuYWxGaWxlc0RpciBnZXRQYXRoIFRocmVhZCBWRVJTSU9OIGJkIGNrIGNrcyBoZCBoZHMgZGVsU3AiLnNwbGl0KCIgIiksCjAse30pKTs=
