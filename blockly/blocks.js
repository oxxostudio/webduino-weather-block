Blockly.Blocks['weather'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("取得氣象資料")
      .appendField(new Blockly.FieldDropdown([
        ["空氣品質", "1"],
        ["即時觀測", "2"],
        ["氣象預報", "3"],
        ["水庫水情", "4"],
        ["地震資訊", "5"],
        ["雷達回波", "6"]
      ]), "select");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
  }
};


Blockly.Blocks['weather_aqi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("空氣品質，地點")
      .appendField(new Blockly.FieldDropdown([
        ["北部 - 富貴角", "富貴角"],
        ["北部 - 陽明", "陽明"],
        ["北部 - 萬里", "萬里"],
        ["北部 - 淡水", "淡水"],
        ["北部 - 基隆", "基隆"],
        ["北部 - 士林", "士林"],
        ["北部 - 林口", "林口"],
        ["北部 - 三重", "三重"],
        ["北部 - 菜寮", "菜寮"],
        ["北部 - 汐止", "汐止"],
        ["北部 - 大同", "大同"],
        ["北部 - 中山", "中山"],
        ["北部 - 大園", "大園"],
        ["北部 - 松山", "松山"],
        ["北部 - 萬華", "萬華"],
        ["北部 - 新莊", "新莊"],
        ["北部 - 觀音", "觀音"],
        ["北部 - 古亭", "古亭"],
        ["北部 - 永和", "永和"],
        ["北部 - 板橋", "板橋"],
        ["北部 - 桃園", "桃園"],
        ["北部 - 土城", "土城"],
        ["北部 - 新店", "新店"],
        ["北部 - 平鎮", "平鎮"],
        ["北部 - 中壢", "中壢"],
        ["北部 - 龍潭", "龍潭"],
        ["竹苗 - 湖口", "湖口"],
        ["竹苗 - 新竹", "新竹"],
        ["竹苗 - 竹東", "竹東"],
        ["竹苗 - 頭份", "頭份"],
        ["竹苗 - 苗栗", "苗栗"],
        ["竹苗 - 三義", "三義"],
        ["中部 - 豐原", "豐原"],
        ["中部 - 沙鹿", "沙鹿"],
        ["中部 - 西屯", "西屯"],
        ["中部 - 忠明", "忠明"],
        ["中部 - 線西", "線西"],
        ["中部 - 大里", "大里"],
        ["中部 - 彰化", "彰化"],
        ["中部 - 埔里", "埔里"],
        ["中部 - 二林", "二林"],
        ["中部 - 南投", "南投"],
        ["中部 - 竹山", "竹山"],
        ["雲嘉南 - 崙背", "崙背"],
        ["雲嘉南 - 麥寮", "麥寮"],
        ["雲嘉南 - 臺西", "臺西"],
        ["雲嘉南 - 斗六", "斗六"],
        ["雲嘉南 - 新港", "新港"],
        ["雲嘉南 - 朴子", "朴子"],
        ["雲嘉南 - 嘉義", "嘉義"],
        ["雲嘉南 - 新營", "新營"],
        ["雲嘉南 - 善化", "善化"],
        ["雲嘉南 - 安南", "安南"],
        ["雲嘉南 - 臺南", "臺南"],
        ["高屏 - 美濃", "美濃"],
        ["高屏 - 橋頭", "橋頭"],
        ["高屏 - 楠梓", "楠梓"],
        ["高屏 - 仁武", "仁武"],
        ["高屏 - 左營", "左營"],
        ["高屏 - 屏東", "屏東"],
        ["高屏 - 前金", "前金"],
        ["高屏 - 鳳山", "鳳山"],
        ["高屏 - 復興", "復興"],
        ["高屏 - 前鎮", "前鎮"],
        ["高屏 - 小港", "小港"],
        ["高屏 - 大寮", "大寮"],
        ["高屏 - 潮州", "潮州"],
        ["高屏 - 林園", "林園"],
        ["高屏 - 恆春", "恆春"],
        ["宜蘭 - 宜蘭", "宜蘭"],
        ["宜蘭 - 冬山", "冬山"],
        ["花東 - 花蓮", "花蓮"],
        ["花東 - 關山", "關山"],
        ["花東 - 臺東", "臺東"],
        ["離島 - 馬祖", "馬祖"],
        ["離島 - 金門", "金門"],
        ["離島 - 馬公", "馬公"]
      ]), "location")
      .appendField("類型")
      .appendField(new Blockly.FieldDropdown([
        ["空氣品質綜合指標", "all"],
        ["空氣品質描述", "note"],
        ["PM2.5", "PM25"],
        ["PM10", "PM10"],
        ["臭氧", "O3"],
        ["二氧化氮", "NO2"],
        ["二氧化硫", "SO2"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("https://taqm.epa.gov.tw/taqm/tw/default.aspx");
    this.setHelpUrl("https://oxxo.studio");
  }
};




Blockly.Blocks['weather_observe'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("即時觀測，地點")
      .appendField(new Blockly.FieldDropdown([
        ["北部 - 基隆", "基隆"],
        ["北部 - 臺北", "臺北"],
        ["北部 - 陽明山", "陽明山"],
        ["北部 - 臺灣大學", "臺灣大學"],
        ["北部 - 板橋", "板橋"],
        ["北部 - 淡水", "淡水"],
        ["北部 - 新店", "新店"],
        ["北部 - 三重", "三重"],
        ["北部 - 新莊", "新莊"],
        ["北部 - 蘆洲", "蘆洲"],
        ["北部 - 土城", "土城"],
        ["北部 - 鶯歌", "鶯歌"],
        ["北部 - 中和", "中和"],
        ["北部 - 永和", "永和"],
        ["北部 - 汐止", "汐止"],
        ["北部 - 林口", "林口"],
        ["北部 - 中央大學", "中央大學"],
        ["北部 - 桃園", "桃園"],
        ["北部 - 平鎮", "平鎮"],
        ["北部 - 中壢", "中壢"],
        ["竹苗 - 新竹", "新竹"],
        ["竹苗 - 竹東", "竹東"],
        ["竹苗 - 竹南", "竹南"],
        ["竹苗 - 苗栗", "苗栗"],
        ["中部 - 臺中", "臺中"],
        ["中部 - 大甲", "大甲"],
        ["中部 - 豐原", "豐原"],
        ["中部 - 后里", "后里"],
        ["中部 - 烏日", "烏日"],
        ["中部 - 鹿港", "鹿港"],
        ["中部 - 高鐵彰化", "高鐵彰化"],
        ["中部 - 員林", "員林"],
        ["中部 - 北斗", "北斗"],
        ["中部 - 玉山", "玉山"],
        ["中部 - 日月潭", "日月潭"],
        ["中部 - 南投", "南投"],
        ["中部 - 草屯", "草屯"],
        ["雲嘉南 - 高鐵雲林", "高鐵雲林"],
        ["雲嘉南 - 斗六", "斗六"],
        ["雲嘉南 - 斗南", "斗南"],
        ["雲嘉南 - 古坑", "古坑"],
        ["雲嘉南 - 嘉義", "嘉義"],
        ["雲嘉南 - 阿里山", "阿里山"],
        ["雲嘉南 - 朴子", "朴子"],
        ["雲嘉南 - 民雄", "民雄"],
        ["雲嘉南 - 新港", "新港"],
        ["雲嘉南 - 臺南", "臺南"],
        ["雲嘉南 - 永康", "永康"],
        ["雲嘉南 - 麻豆", "麻豆"],
        ["雲嘉南 - 臺南", "臺南"],
        ["高屏 - 高雄", "高雄"],
        ["高屏 - 鳳山", "鳳山"],
        ["高屏 - 旗津", "旗津"],
        ["高屏 - 岡山", "岡山"],
        ["高屏 - 橋頭", "橋頭"],
        ["高屏 - 左營", "左營"],
        ["高屏 - 美濃", "美濃"],
        ["高屏 - 甲仙", "甲仙"],
        ["高屏 - 楠梓", "楠梓"],
        ["高屏 - 六龜", "六龜"],
        ["高屏 - 恆春", "恆春"],
        ["高屏 - 屏東", "屏東"],
        ["高屏 - 三地門", "三地門"],
        ["高屏 - 潮州", "潮州"],
        ["高屏 - 墾丁", "墾丁"],
        ["高屏 - 佳樂水", "佳樂水"],
        ["東部 - 蘇澳", "蘇澳"],
        ["東部 - 宜蘭", "宜蘭"],
        ["東部 - 花蓮", "花蓮"],
        ["東部 - 太魯閣", "太魯閣"],
        ["東部 - 合歡山", "合歡山"],
        ["東部 - 臺東", "臺東"],
        ["東部 - 太麻里", "太麻里"],
        ["東部 - 知本", "知本"],
        ["離島 - 澎湖", "澎湖"],
        ["離島 - 金門", "金門"],
        ["離島 - 馬祖", "馬祖"]
      ]), "location")
      .appendField("類型")
      .appendField(new Blockly.FieldDropdown([
        ["即時天氣描述", "0"],
        ["溫度", "1"],
        ["相對濕度", "2"],
        ["風力", "3"],
        ["天氣", "4"],
        ["當日累積雨量", "5"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(190);
    this.setTooltip("https://www.cwb.gov.tw/V7/observe/");
    this.setHelpUrl("https://oxxo.studio");
  }
};


Blockly.Blocks['weather_forecast'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("氣象預報，地點")
      .appendField(new Blockly.FieldDropdown([
        ["北部 - 基隆市", "基隆市"],
        ["北部 - 臺北市", "臺北市"],
        ["北部 - 新北市", "新北市"],
        ["北部 - 桃園市", "桃園市"],
        ["北部 - 新竹市", "新竹市"],
        ["北部 - 新竹縣", "新竹縣"],
        ["北部 - 苗栗縣", "苗栗縣"],
        ["中部 - 臺中市", "臺中市"],
        ["中部 - 彰化縣", "彰化縣"],
        ["中部 - 南投縣", "南投縣"],
        ["中部 - 雲林縣", "雲林縣"],
        ["中部 - 嘉義市", "嘉義市"],
        ["中部 - 嘉義縣", "嘉義縣"],
        ["東部 - 宜蘭縣", "宜蘭縣"],
        ["東部 - 花蓮縣", "花蓮縣"],
        ["東部 - 臺東縣", "臺東縣"],
        ["南部 - 臺南市", "臺南市"],
        ["南部 - 高雄市", "高雄市"],
        ["南部 - 屏東縣", "屏東縣"],
        ["外島 - 連江縣", "連江縣"],
        ["外島 - 金門縣", "金門縣"],
        ["外島 - 澎湖縣", "澎湖縣"]
      ]), "location")
      .appendField("類型")
      .appendField(new Blockly.FieldDropdown([
        ["未來6小時", "0"],
        ["未來18小時", "1"],
        ["未來36小時", "2"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(170);
    this.setTooltip("https://www.cwb.gov.tw/V7/forecast/index3.htm");
    this.setHelpUrl("https://oxxo.studio");
  }
};


Blockly.Blocks['weather_reservoir'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("水庫水情，地點")
      .appendField(new Blockly.FieldDropdown([
        ["石門水庫", "石門水庫"],
        ["翡翠水庫", "翡翠水庫"],
        ["寶山第二水庫", "寶山第二水庫"],
        ["永和山水庫", "永和山水庫"],
        ["明德水庫", "明德水庫"],
        ["鯉魚潭水庫", "鯉魚潭水庫"],
        ["德基水庫", "德基水庫"],
        ["石岡壩", "石岡壩"],
        ["霧社水庫", "霧社水庫"],
        ["日月潭水庫", "日月潭水庫"],
        ["仁義潭水庫", "仁義潭水庫"],
        ["白河水庫", "白河水庫"],
        ["烏山頭水庫", "烏山頭水庫"],
        ["曾文水庫", "曾文水庫"],
        ["南化水庫", "南化水庫"],
        ["阿公店水庫", "阿公店水庫"],
        ["牡丹水庫", "牡丹水庫"]
      ]), "location")
      .appendField("類型")
      .appendField(new Blockly.FieldDropdown([
        ["水情彙整資料", "all"],
        ["蓄水百分比 ( % )", "CapacityRate"],
        ["有效蓄水量 ( 萬立方公尺 )", "Capacity"],
        ["集水區降雨量 ( mm )", "Basin_Rain"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("http://fhy.wra.gov.tw/fhy/Monitor/Reservoir");
    this.setHelpUrl("https://oxxo.studio");
  }
};


Blockly.Blocks['weather_quake'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("地震資訊，最近")
      .appendField(new Blockly.FieldDropdown([
        ["1", "0"],
        ["2", "1"],
        ["3", "2"]
      ]), "num")
      .appendField("次發生的地震");
    this.setOutput(true, null);
    this.setColour(130);
    this.setTooltip("https://www.cwb.gov.tw/V7/earthquake/quake_index.htm");
    this.setHelpUrl("https://oxxo.studio");
  }
};

Blockly.Blocks['weather_radar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("雷達回波圖");
    this.setOutput(true, null);
    this.setColour(110);
    this.setTooltip("https://www.cwb.gov.tw/V7/observe/radar/");
    this.setHelpUrl("https://oxxo.studio");
  }
};