// V_Kn

var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
    document.getElementById('result_cod').style.height = this.scrollHeight + "px";
  }
});

textarea.addEventListener('keyup', function () {
  if (document.getElementById('string').value == '') {
    this.style.height = "10px";
    document.getElementById('result_cod').style.height = "10px";
    document.getElementById('result_cod').value = '';
    document.getElementById('key').value = '';
  }
});

function fchois(a, b, key) {
  let strin = document.getElementById('string').value;

  if (key == 0 | '') {
    return strin;
  } else {
    if (a == 'coding') {
      if (b == 'shift') {
        return shift_coding(strin, key);
      } else {
        return slide_coding(strin, key);
      }
    } else {
      if (b == 'shift') {
        return shift_decoding(strin, key);
      } else {
        return slide_decoding(strin, key);
      }
    }
  }
}

function shift_coding(line, base) {
  let j = 0;
  let flag = 0;
  let result_arr = [];
  if (base > -1) {
    while (flag < line.length) {
      if (j < (line.length)) {
        result_arr[flag] = line[j];
        j = +j + +base;
        flag += 1;
      } else {
        j = (j % base) + 1;
      }

    }
    let result = '';
    for (let i = 0; i < result_arr.length; i++) {
      result += result_arr[i];
    }
    return result;

  }
}

function slide_coding(line, base) {
  let templine = '';

  if (base > 0) {


    for (let j = 0; j < line.length; j++) {
      templine += String.fromCharCode(line.charCodeAt(j) + +base);
    }
  } else {
    if (base < 0) {
      for (let i = 0; i < line.length; i++) {
        templine += String.fromCharCode(line.charCodeAt(i) - -base);
      }
    } else {
      if (base == 0) {
        return line;
      }
    }
  }
  return templine;
}


function shift_decoding(line, base) {
  let j = 0;
  let flag = 0;
  let result_arr = [];
  if (base > -1) {
    while (flag < line.length) {
      if (j < (line.length)) {
        result_arr[j] = line[flag];
        j += +base;
        flag += 1;
      } else {
        j = (j % base) + 1;
      }

    }
    let result = '';
    for (var i = 0; i < result_arr.length; i++) {
      result += result_arr[i];
    }
    return result;

  }
}

function slide_decoding(line, base) {
  return slide_coding(line, -base);
}

button_res.onclick = function show() {
  var chois1 = document.getElementById('select1').value;
  var chois2 = document.getElementById('select2').value;
  let key = document.getElementById('key').value;
  document.getElementById("result_cod").value = fchois(chois1, chois2, key);
};
