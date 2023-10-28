//Create class Point with methods

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return (Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2));
    }
}

//Create distance calculating function

function calculateDistance(pointA, pointB) {
    return Point.distance(pointA, pointB);
}

//Create params and call function

const point1 = new Point(0, 0);
const point2 = new Point(3, 4);
const distance = calculateDistance(point1, point2);
console.log("The distance between point1 and point2 is: " + distance);