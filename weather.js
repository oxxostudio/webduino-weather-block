+(function(window, document) {

  'use strict';

  function weather_aqi(callback) {
    var replyMsg = '';
    $.post('https://script.google.com/macros/s/AKfycbxfzHxi1ok-NxVGBN5vAU-VuyGpYV0VQt8TSGeMe8w0Ompvw6o/exec', {
        type: 'weather'
      },
      function(data) {
        callback([data,'aqi']);
      });
  }

  function weather_aqi_data(name, type, e) {
    let arr = e[0];
    if (e[1] == 'aqi') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].SiteName == name) {
          if (type == 'all') {
            let replyMsg = arr[i].SiteName + '的' + arr[i].note + ' ( PM2.5：' + arr[i].PM25 + '，PM10：' + arr[i].PM10 + '，臭氧：' + arr[i].O3 + '，一氧化碳：' + arr[i].CO + '，二氧化氮：' + arr[i].NO2 + '，二氧化硫：' + arr[i].SO2 + ' )';
            return replyMsg;
          } else {
            return e[i][type];
          }
        }
      }
    } else {
      return '資料格式錯誤';
    }
  }

  function weather_observe(callback) {
    $.post('https://script.google.com/macros/s/AKfycbyvTOcbo0mM1ecyWxTUsv4sBzfdEupD04q0LeZ7IGGgGMiHgRHx/exec', {
        type: 'weather'
      },
      function(data) {
        callback([data,'observe']);
      });
  }


  function weather_observe_data(name, type, e) {
    let arr = e[0];
    if (e[1] == 'observe') {
      if (type == 0) {
        return name + '現在的溫度 ' + arr[name][0] + ' 度，相對濕度 ' + arr[name][1] + '%，風力 ' + arr[name][2] + ' 級，天氣概況：' + arr[name][3];
      } else {
        return arr[name][type - 1];
      }
    } else {
      return '資料格式錯誤';
    }
  }

  window.weather_observe_data = weather_observe_data;
  window.weather_observe = weather_observe;
  window.weather_aqi_data = weather_aqi_data;
  window.weather_aqi = weather_aqi;

}(window, window.document));
