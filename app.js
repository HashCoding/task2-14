var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  var sorted_data = aqiData.filter(function(data) {
    return data[1] > 60;
  }).sort(function(n1, n2) {
    return n1 < n2;
  });

  var aqi_list = document.getElementById("aqi-list");
 

  var _li_fragments = document.createDocumentFragment();

  for(var i = 0, l = sorted_data.length; i < l; i++) {

      var _li = document.createElement("li");
      var _data_content = '城市:' + sorted_data[i][0] + ',空气质量' + sorted_data[i][1];
      var _li_content = document.createTextNode(_data_content);

      _li.appendChild(_li_content);
      
      _li_fragments.appendChild(_li);  
  }

  aqi_list.appendChild(_li_fragments);

})();
