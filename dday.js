var v = new Date().getFullYear(),
      z = new Date("Apr 23, " + v + " 00:00:00").getTime(),
      x = setInterval(function() {
    var f = new Date().getTime(),
          g = z - f,
          y = g / 864e5,
          a = Math.floor(g / 864e5),
         b = Math.floor(g % 864e5 / 36e5),
          c = Math.floor(g % 36e5 / 6e4),
          d = Math.floor(g % 6e4 / 1e3),
          zz = v + 1,
          aa = new Date("Dec 19, 2020 " + zz + " 00:00:00").getTime(),
          bb = aa - f,
          cc = bb / 864e5,
          dd = Math.floor(bb / 864e5),
          ee = Math.floor(bb % 864e5 / 36e5),
          ff = Math.floor(bb % 36e5 / 6e4),
          gg = Math.floor(bb % 6e4 / 1e3);
    if (y <= -1) {
      document.getElementById("dday").innerText = `${dd}일`
    }
    else {
      if (0 >= g) {
        clearInterval(x), document.getElementById("birthday").innerHTML = "Happy Birthday!!", document.getElementById("birthday").classList.add("dday")
      }
      else {
        document.getElementById("dday").innerText = `${a}일 ${b}시간 ${c}분 ${d}초`
      }
    }
 }, 500)
