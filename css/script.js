





function getResume(test) {
    var url = `${baseUrl}geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (!data.length) {
          window.alert("No city matches.");
          return;
        }