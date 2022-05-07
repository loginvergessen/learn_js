function checkSpeed(speed) {
    if (typeof speed !== 'number') {
        return Nan;
    }

    const speedLimit = 70;
    const step = 5;
    const maxPoints = 12;

    if (speed >= speedLimit + step) {
        const points = Math.floor((speed - speedLimit) / step);
        return (points > maxPoints) ? 'suspended' : points;
    }
    return 'Ok';
}