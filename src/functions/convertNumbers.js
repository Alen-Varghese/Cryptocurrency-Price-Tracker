export const convertNumbers = (number) => {
    const numberwithCommas = number.toLocaleString();
    var arr = numberwithCommas.split(",");
    if (arr.length === 5) {
        // Trillions
        return arr[0] + "." + arr[1].slice(0, 2) + "T";
    } else if (arr.length === 4) {
        // Billions
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if (arr.length === 3) {
        // Millions
        return arr[0] + "." + arr[1].slice(0, 2) + "M";
    } else if (arr.length === 2) {
        // Thousands
        return arr[0] + "." + arr[1].slice(0, 2) + "K";
    } else {
        // Hundreds
        return number.toLocaleString();
    }
};