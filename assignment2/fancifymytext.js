function alertFunc() {
    alert("Hello, world!");
}

function Bigger() {
    alertFunc();
    document.getElementById("textArea").style.fontSize = "24pt";
}


function fancify() {
    var textArea = document.getElementById("textArea");
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");

    if (fancyShmancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}


function Moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;

    var sentences = text.split('.');
    console.log(sentences);

    for (var i = 0; i < sentences.length -1; i++) {
        sentences[i] +="-Moo";
    }


    text = sentences.join('.').toUpperCase();
    textArea.value = text;
}
