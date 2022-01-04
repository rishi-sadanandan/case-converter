document.getElementById("upper-case").addEventListener("click", function() {
    // convert text in textarea to upper case
    let txt = document.querySelector("textarea").value;
    document.querySelector("textarea").value = txt.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    // convert text in textarea to lower case
    let txt = document.querySelector("textarea").value;
    document.querySelector("textarea").value = txt.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    // convert text in textarea to proper case
    let txt = document.querySelector("textarea").value;
    txt = txt.toLowerCase();
    let myArray = txt.split(" ");
    let index = myArray.length - 1;
    while(index >= 0) {
        let element = myArray[index];
        myArray[index] = element.charAt(0).toUpperCase() + element.substring(1);
        index = index - 1;
    }
    document.querySelector("textarea").value = myArray.join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function() {
    // convert text in textarea to sentence case
    let txt = document.querySelector("textarea").value;
    txt = txt.toLowerCase();
    let myArray = txt.split(". ");
    let index = myArray.length - 1;
    while(index >= 0) {
        let element = myArray[index];
        myArray[index] = element.charAt(0).toUpperCase() + element.substring(1);
        index = index - 1;
    }
    document.querySelector("textarea").value = myArray.join(". ");
});

document.getElementById("save-text-file").addEventListener("click", function() {
    download("text", document.querySelector("textarea").value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
