load();
document.getElementById("background").style.display = "none"
var t1,
    avgArray = [],
    imgsrcset;

setTimeout(
    function getResult() {
        document.getElementById("Imagenoload").style.display = "none"
        document.getElementById("ImageObject").innerHTML = ""
        document.getElementById("showResult").textContent = "Wait..."
        t1 = performance.now()
        load()
        result()
    }, 1000);

function load() {
    // document.getElementById("ImageObject").data = "image.svg"
    $("#ImageObject")[0].data = "/Image.svg"
    console.log('$("#ImageObject")[0].data = "/Image.svg"')
}

function result() {
    var t2 = performance.now(),
        timeresult = 0;
    avgArray.push(t2 - t1)
    for (i = 0; i < avgArray.length; i++) {
        timeresult += avgArray[i] / avgArray.length
    }

    document.getElementById("showResult").textContent = Math.round(timeresult) / 1000 + " Seconds (" + avgArray.length + " avg)"
    document.getElementById("Result").textContent = Math.round(timeresult) / 1000


    if (imgsrcset == true) {
        document.getElementById("Imagenoload").style.display = "block"
    } else {
        imgsrcset == true
        document.getElementById("Imagenoload").src = "image.jpg"
        document.getElementById("Imagenoload").style.display = "block"

    }
}

function clearResult() {
    avgArray = []
    document.getElementById("showResult").textContent = "Cleared"
}

function Imageonload() {
    // document.getElementById("ImageObject").data = ""
}