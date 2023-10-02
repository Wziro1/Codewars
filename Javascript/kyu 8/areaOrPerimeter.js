/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */

// check if the length (l) === width (w) if yes it's a square else it's a rectangle
// if it's square return it's area = l * w
// if it's rectangle return it's perimeter = 2 * (l + w)

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2 * (l + w)
};

console.log(areaOrPerimeter(2, 2));
console.log(areaOrPerimeter(4, 5));