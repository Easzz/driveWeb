
var apiUrl="http://129.204.3.98:8020";
var fileServerUrl="http://129.204.3.98:8888";




// var apiUrl="http://localhost:8020";
// var fileServerUrl="http://localhost:8888";


setApiUrl();
setFileServerUrl();

function getApiUrl() {
  return   localStorage.getItem("apiUrl");

}
function getFileServerUrl() {
    return   localStorage.getItem("fileServerUrl");
}

function setApiUrl() {
    localStorage.setItem("apiUrl",apiUrl);
}
function setFileServerUrl() {
    localStorage.setItem("fileServerUrl",fileServerUrl);
}
