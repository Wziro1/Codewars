function findNeedle(haystack) {
    return haystack.includes("needle") ? "found the needle at position " + haystack.indexOf("needle") : "did not find the needle";
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));