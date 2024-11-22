const nepaliDateData = {
    2024: { 1: 17, 2: 19 }, 
};

function convertToNepali(englishDate) {
    const year = englishDate.getFullYear();
    const month = englishDate.getMonth() + 1;
    const day = englishDate.getDate();

    const nepaliYear = year + 56;

    const nepaliDayOffset = nepaliDateData[year]?.[month] || 0;
    const nepaliDay = day + nepaliDayOffset;

    let nepaliMonth = month;
    let adjustedDay = nepaliDay;

    if (adjustedDay > 30) {
        adjustedDay -= 30;
        nepaliMonth++;
    }

    if (nepaliMonth > 12) {
        nepaliMonth -= 12;
    }

    return `${nepaliYear}-${nepaliMonth}-${adjustedDay}`;
}

module.exports = { convertToNepali };
