// HOME
// 1 - 加一分
// 2 - 加兩分
// 3 - 加三分
// 4 - 減一分
// w - 加一犯規
// q - 減一犯規

// GUEST
// 7 - 加一分
// 8 - 加兩分
// 9 - 加三分
// 0 - 減一分
// p(加號) - 加一犯規
// o(減號) - 減一犯規

$(document).keypress(function(event) {
  var ascii = event.keyCode;

  if ( ascii == 49 ) {
    // a - A
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 1 );
  } else if ( ascii == 50 ) {
    // s - S
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 2 );
  } else if ( ascii == 51 ) {
    // d - D
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 3 );
  } else if ( ascii == 52 ) {
    // f - F
    var score = parseInt($('#scoreOne').text());
    if ( score > 0 ) {
      $('#scoreOne').text( score - 1 );
    }
  } else if ( ascii == 55 ) {
    // j - J
    // a - A
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 1 );
  } else if ( ascii == 56 ) {
    // k - K
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 2 );
  } else if ( ascii == 57 ) {
    // l - L
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 3 );
  } else if ( ascii == 48 ) {
    // h - H
    var score = parseInt($('#scoreTwo').text());
    if ( score > 0 ) {
      $('#scoreTwo').text( score - 1 );
    }
  } else if ( ascii == 119 ) {
    // 1
    var foul = parseInt($('#foulOne').text());
    $('#foulOne').text( foul + 1 );
  } else if ( ascii == 113 ) {
    // 2
    var foul = parseInt($('#foulOne').text());
    if ( foul > 0 ) {
      $('#foulOne').text( foul - 1 );
    }
  } else if ( ascii == 112 ) {
    // +
    var foul = parseInt($('#foulTwo').text());
    $('#foulTwo').text( foul + 1 );
  } else if ( ascii == 111 ) {
    // -
    var foul = parseInt($('#foulTwo').text());
    if ( foul > 0 ) {
      $('#foulTwo').text( foul - 1 );
    }
  }
});

// 計時器
// > - 開始
// < - 暫停
// + - 加一分鐘
// _ - 減一分鍾
// @ - 加一分鐘
// ! - 減一分鐘

var timer = $('.timer');
var leadingZero = function (n) {
    if (n < 10 && n >= 0) return '0' + n;
    else return n;
}

var counter;
var shotclock;

$(document).keypress(function(event) {
  var ascii = event.keyCode;

    if ( ascii == 43 ) {
      // +
      var m = parseInt($('.min').text());
      $('.min').text( m + 1)
    } else if ( ascii == 95 ) {
      // _
      var m = parseInt($('.min').text());
      if ( m > 0) {
      $('.min').text( m - 1)
      }
    } else if ( ascii == 64 ) {
      // @
      var s = parseInt($('.sec').text());
      if ( s < 60) {
      $('.sec').text( s + 1)
      }
    } else if ( ascii == 33 ) {
      // !
      var s = parseInt($('.sec').text());
      if ( s > 0 )
      $('.sec').text( s - 1)
    } if ( ascii == 62 ) {
      // >
        counter = setInterval(function () {
          var minutes = parseInt($('.min').text());
          var seconds = parseInt($('.sec').text());
            var m = $('.min', timer),
                s = $('.sec', timer);
            if (seconds === 0 && minutes === 0) {
                clearInterval(counter);
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            m.text(minutes);
            s.text(leadingZero(seconds));
        }, 1000);
    } if (ascii == 60 ) {
      // <
        clearInterval(counter);
    } 
});