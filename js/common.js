﻿
var apiUrl="http://localhost:8020";
//var fileServerUrl="http://129.204.3.98:8888";

// var apiUrl="http://10.100.7.195:8020";
var fileServerUrl="http://10.100.7.195:8888";

var notTestFileServerUrl="http://10.100.7.195:8889";

//var apiUrl="http://10.100.7.251:8020";
//var fileServerUrl="http://10.100.7.251:8888";

//login?
judgeLogin();
function judgeLogin() {
    var loginType=localStorage.getItem("loginType");
    if (loginType==null){
        window.location.href="login.html";
    }

}

judgeUrlPermission();
function judgeUrlPermission() {
    url = window.location.pathname; /* 获取文件路径（文件地址） */
    var loginType=localStorage.getItem("loginType");
    if (loginType=='user') {
        if (url.indexOf("uploadFile.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }
        if (url.indexOf("projectList.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }
        if (url.indexOf("addProject.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }
        if (url.indexOf("addTerrace.html") != -1) {
            alert("无权访问");
            window.location.href = "login.html";
        }
    }
}



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
