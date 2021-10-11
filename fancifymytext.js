function bigger() {
    textarea.style.fontSize = "24px";
}

function fancyShmancy() {
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"
    alert("Getting fancy :)");
}

function boringBetty() {
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("Getting boring :(");
}

function moo() {
    textarea.style.textTransform="uppercase"    
    let str = textarea.value.split(".");
    textarea.value = str.join("-moo");
}