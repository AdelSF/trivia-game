export function calculatedEnd(end, total) {
    if (end + 10 > total) {
        return 10 - (total - end)
    } else {
        return end + 10
    }
}

export function calculatedStart(start, total) {
    if (start === (total - 1)) {
        return 0
    } else {
        return start + 1
    }
}