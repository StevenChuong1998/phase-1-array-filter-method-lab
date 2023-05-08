function findMatching(drivers, sought) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    )
}

function fuzzyMatch(driver,testString) {
    return drivers.filter(
        (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
        );
}

function matchName(drivers, soughtname) {
    return drivers.filter((record) => record.name === soughtname);
}
