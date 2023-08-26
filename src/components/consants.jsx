const getKey = (column) => {
    if (column === "Planet Name") column = "planet_name";
    else if (column === "Host Name") column = "hostname";
    else if (column === "Discovery Method") column = "disc_method";
    else if (column === "Discovery Year") column = "disc_year";
    else if (column === "Discovery Facility") column = "disc_facility";

    return column;
}


const isSecondStringSmaller = (s1, s2) => {
    if (s1 === undefined || s2 === undefined) return false;

    let i = 0, j = 0;

    while (i < s1.length && j < s2.length) {
        while (i < s1.length && s1[i] === ' ') {
            i++;
        }
        if (i === s1.length) return false;

        while (j < s2.length && s2[j] === ' ') {
            j++;
        }
        if (j === s2.length) return true;

        if (s1[i].toLowerCase() > s2[j].toLowerCase()) return true;
        else if (s1[i].toLowerCase() < s2[j].toLowerCase()) return false;
        i++;
        j++;
    }

    if (i == s1.length) return false;

    return true;
}


const sortInAscFunction = (arr, column) => {

    column = getKey(column);

    for (let i = 0; i < arr.length; i++) {
        let minVal = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (isSecondStringSmaller(arr[minVal][column], arr[j][column])) {
                minVal = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minVal];
        arr[minVal] = temp;
    }

    return arr;
}


const sortInDescFunction = (arr, column) => {

    column = getKey(column);

    for (let i = 0; i < arr.length; i++) {
        let maxVal = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (!isSecondStringSmaller(arr[maxVal][column], arr[j][column])) {
                maxVal = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[maxVal];
        arr[maxVal] = temp;
    }

    return arr;
}


export { sortInAscFunction, sortInDescFunction }