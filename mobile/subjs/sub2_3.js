var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    var newContent = '';
    for (var i = 0; i < responseObject.players.length; i++) {
      newContent += `<div>`
      newContent +=   `<div class="player_intro">`
      newContent +=         `<div>`
      newContent +=             '<img src="'+ responseObject.players[i].img +'" alt="'+ responseObject.players[i].alt +'">';
      newContent +=         `</div>`
      newContent +=    `</div>`
      newContent +=    `<div class="relative">`
      newContent +=     `<div class="name">`
      newContent +=         `<span>${responseObject.players[i].name}</span>`
      newContent +=         `<span>${responseObject.players[i].englishName}</span>`
      newContent +=         `<div class="flag_box">`
      newContent +=             '<img src="'+ responseObject.players[i].flag +'" alt="'+ responseObject.players[i].flagImgAlt +'" class="flag">';
      newContent +=         `</div>`
      newContent +=     `</div>`
      newContent +=    `</div>`
      newContent += `</div>`
    }
    document.getElementById('list').innerHTML = newContent;
  }
}
xhr.open('GET', 'data/playerdata.json', true);        // 요청을 준비한다.
xhr.send(null); 

