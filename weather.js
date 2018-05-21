+(function(window, document) {

  'use strict';

  function weather_aqi(callback) {
    var replyMsg = '';
    $.post('https://script.google.com/macros/s/AKfycbxfzHxi1ok-NxVGBN5vAU-VuyGpYV0VQt8TSGeMe8w0Ompvw6o/exec', {
        type: 'weather'
      },
      function(data) {
        callback(data);
      });
  }

  function weather_aqi_data(name, type, e) {
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

  function weather_observe(callback) {
    var replyMsg = '';
    $.post('https://script.google.com/macros/s/AKfycbyvTOcbo0mM1ecyWxTUsv4sBzfdEupD04q0LeZ7IGGgGMiHgRHx/exec', {
        type: 'weather'
      },
      function(data) {
        callback(data);
      });
  }


  function weather_observe_data(name, type, e) {
    if(type == 0){
      return name +'現在的溫度 '+e[name][0]+' 度，相對濕度 '+e[name][1]+'%，風力 '+e[name][2]+' 級，天氣概況：'+e[name][3];
    }else{
      return e[name][type-1];
    }
  }

  window.weather_observe_data = weather_observe_data;
  window.weather_observe = weather_observe;
  window.weather_aqi_data = weather_aqi_data;
  window.weather_aqi = weather_aqi;

}(window, window.document));
