+(function(window, document) {

  'use strict';

  function weather(callback) {
    var replyMsg = '';
    $.post('https://script.google.com/macros/s/AKfycbxfzHxi1ok-NxVGBN5vAU-VuyGpYV0VQt8TSGeMe8w0Ompvw6o/exec', {
        type: 'weather'
      },
      function(data) {
        callback(data);
      });
  }

  function weather_aqi(name, type, e) {
    for (let i = 0; i < e.length; i++) {
      if (e[i].SiteName == name) {
        if (type == 'all') {
          let replyMsg = e[i].SiteName + '的' + e[i].note + ' ( PM2.5：' + e[i].PM25 + '，PM10：' + e[i].PM10 + '，臭氧：' + e[i].O3 + '，一氧化碳：' + e[i].CO + '，二氧化氮：' + e[i].NO2 + '，二氧化硫：' + e[i].SO2 + ' )';
          return replyMsg;
        } else {
          return e[i][type];
        }
      }
    }
  }

  window.weather_aqi = weather_aqi;
  window.weather = weather;

}(window, window.document));
