var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  var aqi_list = document.getElementById("aqi-list");
 
  for(var i = 0, l = aqiData.length; i < l; i++) {

    if(aqiData[i][1] > 60) {

      var _li = document.createElement("li");
      var _data_content = '城市:' + aqiData[i][0] + ',空气质量' + aqiData[i][1];
      var _li_content = document.createTextNode(_data_content);

      _li.appendChild(_li_content);
      
      aqi_list.appendChild(_li);  
      
    }

  }

})();
