Blockly.JavaScript['weather'] = function(block) {
  var dropdown_select = block.getFieldValue('select');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code;
  if (dropdown_select == 1) {
    var code = 'weather_aqi(function(data){\n' +
      statements_do + '\n});';
  } else if (dropdown_select == 2) {
    var code = 'weather_observe(function(data){\n' +
      statements_do + '\n});';
  }
  return code;
};

Blockly.JavaScript['weather_aqi'] = function(block) {
  var location = block.getFieldValue('location');
  var type = block.getFieldValue('type');
  var code = 'weather_aqi_data("' + location + '","' + type + '",data)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['weather_observe'] = function(block) {
  var location = block.getFieldValue('location');
  var type = block.getFieldValue('type');
  var code = 'weather_observe_data("' + location + '","' + type + '",data)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['weather_forecast'] = function(block) {
  var location = block.getFieldValue('location');
  var type = block.getFieldValue('type');
  var code = 'weather_forecast_data("' + location + '","' + type + '",data)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
