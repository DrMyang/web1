var Links = {
  setColor: function(color, links){
    var i = 0;
    while (i < links.length) {
      links[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function togleEvent(self) {
  var target = document.querySelector('body');
  var link_all = document.querySelectorAll('a');

  if(self.value === 'night')
  {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day'
    Links.setColor('powderblue', link_all);
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night'
    Links.setColor('blue', link_all);
  }
}
