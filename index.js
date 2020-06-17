var t1,
    avgArray = [],
    imgsrcset;

function getResult() {
    document.getElementById("Imagenoload").style.display = "none"
    document.getElementById("ImageObject").innerHTML = ""
    document.getElementById("showResult").textContent = "Wait..."
    t1 = performance.now()
    load()
}

function load() {
    $("#ImageObject")[0].data = "/Image.svg"
}

function result() {
    var t2 = performance.now(),
        timeresult = 0;
    avgArray.push(t2 - t1)
    for (i = 0; i < avgArray.length; i++) {
        timeresult += avgArray[i] / avgArray.length
    }

    $("#showResult").text(Math.round(timeresult) / 1000 + " Seconds (" + avgArray.length + " avg)")
    $("#Result").text((Math.round(timeresult) / 1000).toFixed(2))


    // if (imgsrcset == true) {
    //     document.getElementById("Imagenoload").style.display = "block"
    // } else {
    //     imgsrcset == true
    //     document.getElementById("Imagenoload").src = "image.jpg"
    //     document.getElementById("Imagenoload").style.display = "block"

    // }
}

function clearResult() {
    avgArray = []    
    $("#showResult").text("Cleared")
    $("#Result").text("")
}

function Imageonload() {

    result()
}
function tst() {
    var DomTreeCopy = $('#ImageObject').clone(true, true);
    $('#ImageObject').replaceWith(DomTreeCopy);
}

getResult();
