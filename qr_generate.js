let app1


;(function(_app1) {
  function initialize() {
    
    
    let elems = document.querySelectorAll(
      "input[type=number], input[type=text], textarea"
    )
    for (let el of elems) {
      if (el.id.indexOf("version-") != 0) el.oninput = redrawQrCode
    }
    elems = document.querySelectorAll("input[type=radio], input[type=checkbox]")
    for (let el of elems) el.onchange = redrawQrCode
    redrawQrCode()

    const forceMinVersion = document.getElementById("force-min-version");
    const forceMaskPattern = document.getElementById("force-mask-pattern");
    
    const customRange = document.getElementById("customRange3");
    const customMask = document.getElementById("customRange4");
    
    // Добавляем обработчик события input для слайдеров
    function updateInputValue(event) {
      const slider = event.target;
      if (slider === customRange) {
        forceMinVersion.value = slider.value;
      } else if (slider === customMask) {
        forceMaskPattern.value = slider.value;
      }
      //redrawQrCode(); // Вызов функции перерисовки QR-кода
    }
    
    customRange.addEventListener('input', updateInputValue);
    customMask.addEventListener('input', updateInputValue);

    const generateButton = document.querySelector('button[type="submit"]');
    generateButton.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение кнопки
      redrawQrCode(); // Вызываем функцию перерисовки QR-кода
    });
  }





  function redrawQrCode() {
    const bitmapOutput = 1
    
    const canvas = getElem("qrcode-canvas")
    
    canvas.style.display = "none"


    function getInputErrorCorrectionLevel() {
      if (getInput("errcorlvl-medium").checked)
        return qrcodegen.QrCode.Ecc.MEDIUM
      else if (getInput("errcorlvl-quartile").checked)
        return qrcodegen.QrCode.Ecc.QUARTILE
      else if (getInput("errcorlvl-high").checked)
        return qrcodegen.QrCode.Ecc.HIGH
      else return qrcodegen.QrCode.Ecc.LOW
    }

    const ecl = getInputErrorCorrectionLevel()
    const text = getElem("input-text").value
    const segs = qrcodegen.QrSegment.makeSegments(text)
    const minVer = parseInt(getInput("force-min-version").value, 10)
    const maxVer = 40
    const mask = parseInt(getInput("force-mask-pattern").value, 10)
    const boostEcc = 0;
    const qr = qrcodegen.QrCode.encodeSegments(
      segs,
      ecl,
      minVer,
      maxVer,
      mask,
      boostEcc
    )

    const border = 2
    const lightColor = getInput("light-color-input").value
    const darkColor = getInput("dark-color-input").value

    if (bitmapOutput) {
      
      let scale = 8
      if (minVer>=0 && minVer<=5) { scale = 7;}
      if (minVer>5 && minVer<=10) { scale = 6;}
      else if (minVer>10 && minVer<=20) { scale = 5;}
      else if (minVer>20 && minVer<=30) { scale = 4;}
      else if (minVer>30 && minVer<=40) { scale = 2;}

      drawCanvas(qr, scale, border, lightColor, darkColor, canvas)
      canvas.style.removeProperty("display")
    } 

    function describeSegments(segs) {
      if (segs.length == 0) return "none"
      else if (segs.length == 1) {
        const mode = segs[0].mode
        const Mode = qrcodegen.QrSegment.Mode
        if (mode == Mode.NUMERIC) return "numeric"
        if (mode == Mode.ALPHANUMERIC) return "alphanumeric"
        if (mode == Mode.BYTE) return "byte"
        if (mode == Mode.KANJI) return "kanji"
        return "unknown"
      } else return "multiple"
    }

    function countUnicodeChars(str) {
      let result = 0
      for (let i = 0; i < str.length; i++, result++) {
        const c = str.charCodeAt(i)
        if (c < 0xd800 || c >= 0xe000) continue
        else if (0xd800 <= c && c < 0xdc00 && i + 1 < str.length) {
          i++
          const d = str.charCodeAt(i)
          if (0xdc00 <= d && d < 0xe000) continue
        }
        
      }
      return result
    }

    /*getElem("statistics-output").textContent =
      `QR Code version = ${qr.version}, ` +
      `mask pattern = ${qr.mask}, ` +
      `character count = ${countUnicodeChars(text)},\n` +
      `encoding mode = ${describeSegments(segs)}, ` +
      `error correction = level ${"LMQH".charAt(
        qr.errorCorrectionLevel.ordinal
      )}, ` +
      `data bits = ${qrcodegen.QrSegment.getTotalBits(segs, qr.version)}.`*/
  }

  function drawCanvas(qr, scale, border, lightColor, darkColor, canvas) {
    if (scale <= 0 || border < 0) throw new RangeError("Value out of range")
    const width = (qr.size + border * 2) * scale
    canvas.width = width
    canvas.height = width
    let ctx = canvas.getContext("2d")
    for (let y = -border; y < qr.size + border; y++) {
      for (let x = -border; x < qr.size + border; x++) {
        ctx.fillStyle = qr.getModule(x, y) ? darkColor : lightColor
        ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale)
      }
    }
  }


  function handleVersionMinMax(which) {
    const minElem = getInput("force-min-version")
    const maxElem = 40
    let minVal = parseInt(minElem.value, 10)
    let maxVal = parseInt(maxElem.value, 10)
    minVal = Math.max(
      Math.min(minVal, qrcodegen.QrCode.MAX_VERSION),
      qrcodegen.QrCode.MIN_VERSION
    )
    maxVal = Math.max(
      Math.min(maxVal, qrcodegen.QrCode.MAX_VERSION),
      qrcodegen.QrCode.MIN_VERSION
    )
    if (which == "min" && minVal > maxVal) maxVal = minVal
    else if (which == "max" && maxVal < minVal) minVal = maxVal
    minElem.value = minVal.toString()
    maxElem.value = maxVal.toString()
    redrawQrCode()
  }

  _app1.handleVersionMinMax = handleVersionMinMax

  function getElem(id) {
    const result = document.getElementById(id)
    if (result instanceof HTMLElement) return result
    
  }

  function getInput(id) {
    const result = getElem(id)
    if (result instanceof HTMLInputElement) return result
    
  }

  initialize()
})(app1 || (app1 = {}))
