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

const mergeSort = (arr, column, start, end) => {

    if (start >= end) return;

    let mid = Math.floor((start + (end - start) / 2));

    mergeSort(arr, column, start, mid);
    mergeSort(arr, column, mid + 1, end);
    merge(arr, column, start, mid, end);
}

const merge = (arr, column, start, mid, end) => {
    let i = start, j = mid + 1;
    let temp = [];

    while (i <= mid && j <= end) {
        if (isSecondStringSmaller(arr[i][column], arr[j][column])) {
            temp.push(arr[j++]);
        } else {
            temp.push(arr[i++]);
        }
    }

    while (i <= mid) {
        temp.push(arr[i++]);
    }

    while (j <= end) {
        temp.push(arr[j++]);
    }

    for (let k = start; k <= end; k++) {
        arr[k] = temp[k - start];
    }
}


export { mergeSort, getKey }