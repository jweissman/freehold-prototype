export function mode(...arr: any[]) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 0;
        }
        map[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for (var prop in map) {
        if (map[prop] > greatestFreq) {
            greatestFreq = map[prop];
            mode = prop;
        }
    }
    return mode;
}