
document.getElementById('submit').addEventListener('click', Calculate);

function Calculate() {
    // Find values of input boxes.
    var ICL = document.getElementById("ICL").value;
    var DCL = document.getElementById("DCL").value;
    ICL = parseInt(ICL);
    // Calculate Level of card.
    for (var xp = 0;ICL <= DCL-1; ICL++) {
        xp += ICL;
    } 
    xp *= 100;
    // Return/output final answer.
    document.getElementById('return').innerHTML = xp + "xp is required for level " + DCL;
}