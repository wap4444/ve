/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
var rr=0;
                // Enable to debug issues.
//window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
        
function didReceiveRemoteNotificationCallBack(jsonData) {
    rr=1;    
var ref = cordova.InAppBrowser.open(jsonData.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}

function didOpenRemoteNotificationCallBack(jsonData) {
    rr=1;  
    
   // Для Andori
var newdata = JSON.parse ( jsonData.notification.payload.additionalData );
var ref = cordova.InAppBrowser.open(newdata.ssylka , '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');

  //  Для Iphone
    //  var ref = cordova.InAppBrowser.open(jsonData.notification.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
  
 }

        window.plugins.OneSignal.startInit( "568335df-c61a-4574-aa43-9c22960009d1", "801342309537")
                       .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
                       .handleNotificationOpened(didOpenRemoteNotificationCallBack) 
                       .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
                                .iOSSettings(iosSettings)
                                .endInit();
        
    
window.plugins.OneSignal.getIds(function(ids) {
ipush = ids.userId;
         if(rr=='1'){}
       else{
var ref = cordova.InAppBrowser.open('http://vezuedu.kz/v2/index.php?ipush='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
          }
          });
        
        
    }
};





app.initialize();
