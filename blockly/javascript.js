Blockly.JavaScript['weather'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'weather(function(data){\n' +
    statements_do + '\n});';
  return code;
};

Blockly.JavaScript['weather_aqi'] = function(block) {
  var location = block.getFieldValue('location');
  var type = block.getFieldValue('type');
  var code = 'weather_aqi("' + location + '","' + type + '",data)';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
