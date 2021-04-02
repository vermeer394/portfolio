function showTime() {

    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    var timeZone = today.getTimezoneOffset();
    if (timeZone == -420) {
      timeZone = "WIB";
    } else {
      if (timeZone == -480) {
        timeZone = "WITA";
      } else {
        if (timeZone == -540) {
          timeZone = "WIT";
        } else {
          timeZone = "local time";
        }
      }
    }

    curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
 document.getElementById('jam').innerHTML=curr_hour + ":" + curr_minute + ":" + curr_second + " " +timeZone;
    }

//fungsi menambahkan nilai 0 apabila 1 digit angka
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//fungsi untuk merefresh otomatis waktu setiap 0,5 detik
setInterval(showTime, 500);
