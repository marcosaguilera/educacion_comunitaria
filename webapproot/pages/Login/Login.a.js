/*
*  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*     http://www.apache.org/licenses/LICENSE-2.0
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "desktop",
start: function() {
if (window["PhoneGap"]) {
this.restorePhonegapCredentials();
} else {
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
}
this.hashInput.setDataValue(window.location.hash);
if (this.wmTitle) this.wmTitle.setCaption(app.name || app.declaredClass);
this.loadingDialog.setMargin(parseInt(this.loadingDialog.widgetToCover.margin) + parseInt(this.loadingDialog.widgetToCover.border));
},
loginButtonClick: function(inSender) {
this.loginErrorMsg.setCaption("");
dojo.cookie("user", this.usernameInput.getDataValue(), {
expires: 365
});
},
onLoginSuccess: function() {
if (window["PhoneGap"]) {
this.phonegapCredentialStorage.setData({
name: this.usernameInput.getDataValue(),
dataValue: this.passwordInput.getDataValue()
});
}
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Invalid username or password.");
this.usernameInput.focus();
},
restorePhonegapCredentials: function() {
var username = this.phonegapCredentialStorage.getValue("name");
var password = this.phonegapCredentialStorage.getValue("dataValue");
if (username || password) {
this.usernameInput.setDataValue(username);
this.passwordInput.setDataValue(password);
if (username && password) {
this.loginVariable1.update();
}
}
},
_end: 0
});

Login.widgets = {
phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
}]
}]
}],
loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionWidth":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox: ["wm.Layout", {}, {}, {
loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","styles":{"backgroundImage":"resources/images/imagelists/back_login.jpg"},"verticalAlign":"center","width":"100%"}, {}, {
loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"2","desktopHeight":"320px","deviceType":null,"enableTouchHeight":true,"height":"320px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":"","backgroundColor":"#ffffff"},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
panel2: ["wm.Panel", {"height":"94px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
login_logo: ["wm.Picture", {"aspect":"v","height":"100%","source":"resources/images/logos/logo.jpg","width":"100%"}, {}]
}],
label1: ["wm.Label", {"caption":"Educación Comunitaria","height":"54px","padding":"4","styles":{"fontSize":"22px","textAlign":"center","color":"#a30909"},"width":"100%"}, {}],
usernameInput: ["wm.Text", {"caption":"Usuario","captionAlign":"right","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","helpText":undefined,"mobileHeight":"45px","placeHolder":"usuario","width":"100%"}, {}],
passwordInput: ["wm.Text", {"caption":"Clave","captionAlign":"right","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"placeHolder":"*******","width":"100%"}, {}],
panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"15px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
hashInput: ["wm.Text", {"dataValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"educacion_comunitaria\",\"deviceType\":\"desktop\"}}","displayValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"educacion_comunitaria\",\"deviceType\":\"desktop\"}}","height":"30px","showing":false}, {}]
}],
loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
loginButton: ["wm.Button", {"border":"1","borderColor":"#000000","caption":"Acceder","height":"100%","imageIndex":88,"imageList":"app.silkIconList","margin":"4","width":"116px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
}]
}]
}]
}]
};

Login.prototype._cssText = '.Login .Login-loginErrorMsg {\
font-size: 12px; color: red\
}\
.Login .Login-wmTitle {\
font-size: 20px;\
}\
.wmmobile .Login .wmeditor .wmlabel {\
font-size: 16px;\
}\
.wmmobile .Login .wmeditor input {\
font-size: 20px;\
}\
.Login div .rounded {\
-webkit-border-radius: 8px;\
-moz-border-radius: 8px;\
border-radius: 8px;\
}\
#login_loginMainPanel {\
background-size: cover;\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';