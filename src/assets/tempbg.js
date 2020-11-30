export const tempBg = (temp) => {
    let bg
    if (temp <= -15) bg = '#a3a9ff'
    else if (temp > -15 && temp <= -12) bg = '#57b9ff'
    else if (temp > -12 && temp <= -9) bg = '#a3ccff'
    else if (temp > -9 && temp <= -6) bg = '#a3e0ff'
    else if (temp > -6 && temp <= -3) bg = '#a3fff7'
    else if (temp > -3 && temp <= 0) bg = '#a3ffdd'
    else if (temp > 0 && temp <= 3) bg = '#a3ffc8'
    else if (temp > 3 && temp <= 6) bg = '#a3ffb8'
    else if (temp > 6 && temp <= 9) bg = '#a3ffa9'
    else if (temp > 9 && temp <= 12) bg = '#afffa3'
    else if (temp > 12 && temp <= 15) bg = '#bdffa3'
    else if (temp > 15 && temp <= 18) bg = '#c9ffa3'
    else if (temp > 18 && temp <= 21) bg = '#ddffa3'
    else if (temp > 21 && temp <= 24) bg = '#f3ffa3'
    else if (temp > 24 && temp <= 27) bg = '#ffe3a3'
    else if (temp > 27 && temp <= 30) bg = '#ffd6a3'
    else if (temp > 30 && temp <= 33) bg = '#ffcba3'
    else if (temp > 33 && temp <= 36) bg = '#ffcba3'
    else if (temp > 36) bg = '#ffaea3'
    return bg
}