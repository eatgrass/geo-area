const RADIUS = 6378137;

module.exports = (options) => {
    options = options || {};

    const x = options.x || 'longitude';
    const y = options.y || 'latitude';

    const rad = coord => (coord * Math.PI) / 180;

    const ringArea = (points) => {
        let p1;
        let p2;
        let p3;
        let lowerIndex;
        let middleIndex; 
        let upperIndex;
        let area = 0;

        if (points.length > 2) {
            for (let i = 0; i < points.length; i++) {
                if (i === points.length - 2) { 
                    lowerIndex = points.length - 2;
                    middleIndex = points.length - 1;
                    upperIndex = 0;
                } else if (i === points.length - 1) {
                    lowerIndex = points.length - 1;
                    middleIndex = 0;
                    upperIndex = 1;
                } else { 
                    lowerIndex = i;
                    middleIndex = i + 1;
                    upperIndex = i + 2;
                }
                p1 = points[lowerIndex];
                p2 = points[middleIndex];
                p3 = points[upperIndex];
                area += (rad(p3[x]) - rad(p1[x])) * Math.sin(rad(p2[y]));
            }
            area = (area * RADIUS * RADIUS) / 2;
        }

        return area;
    };

    // assume no holes
    return (coords) => {
        let area = 0;
        if (coords && coords.length > 0) {
            area += Math.abs(ringArea(coords));
        }
        return area;
    };
};
