function minPlanesToReachLastAirport(fuelArray) {
    const N = fuelArray.length;
    if (N === 0 || fuelArray[0] === 0) return -1;

    let planesUsed = 0, maxReach = 0, currentEnd = 0;

    for (let i = 0; i < N; i++) {
        if (i > maxReach) return -1; // If we can't reach this airport, return -1
        maxReach = Math.max(maxReach, i + fuelArray[i]);

        if (i === currentEnd) {
            planesUsed++;
            currentEnd = maxReach;
            if (currentEnd >= N - 1) return planesUsed;
        }
    }

    return planesUsed;
}

// Example usage:
console.log(minPlanesToReachLastAirport([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachLastAirport([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
