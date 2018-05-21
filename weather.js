+(function(window, document) {

  'use strict';

  function weather_aqi(callback) {
    var replyMsg = '';
    $.post('https://script.google.com/macros/s/AKfycbxfzHxi1ok-NxVGBN5vAU-VuyGpYV0VQt8TSGeMe8w0Ompvw6o/exec', {
        type: 'weather'
      },
      function(data) {
        callback([data, 'aqi']);
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
        callback([data, 'observe']);
      });
  }


  function weather_observe_data(name, type, e) {
    let arr = e[0];
    let num = type * 1;
    if (e[1] == 'observe') {
      if (num == 0) {
        let result = arr[name];
        return name + '現在的溫度 ' + result[0] + ' 度，相對濕度 ' + result[1] + '%，風力 ' + result[2] + ' 級，天氣概況：' + result[3];
      } else {
        return result[num - 1];
      }
    } else {
      return '資料格式錯誤';
    }
  }

  function weather_forecast(callback) {
    $.post('https://script.google.com/macros/s/AKfycbygv1-_U7y5ieMYKASXI0l4hLsMKekasUpzl4gKiL0BwNyE1vU/exec', {
        type: 'weather'
      },
      function(data) {
        callback([data, 'forecast']);
      });
  }


  function weather_forecast_data(name, type, e) {
    if (e[1] == 'forecast') {
      let num = type * 1;
      let result = e[0][name][num];
      return '氣溫 ' + result[0] + ' 度，降雨機率 ' + result[1] + '，' + result[2];
    } else {
      return '資料格式錯誤';
    }
  }

  window.weather_forecast_data = weather_forecast_data;
  window.weather_forecast = weather_forecast;
  window.weather_observe_data = weather_observe_data;
  window.weather_observe = weather_observe;
  window.weather_aqi_data = weather_aqi_data;
  window.weather_aqi = weather_aqi;

}(window, window.document));
