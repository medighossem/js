function checkSeason(month) {
    const lowercaseMonth = month.toLowerCase();
    if (lowercaseMonth === 'december' || lowercaseMonth === 'january' || lowercaseMonth === 'february') {
        return 'Winter';
    } else if (lowercaseMonth === 'march' || lowercaseMonth === 'april' || lowercaseMonth === 'may') {
        return 'Spring';
    } else if (lowercaseMonth === 'june' || lowercaseMonth === 'july' || lowercaseMonth === 'august') {
        return 'Summer';
    } else if (lowercaseMonth === 'september' || lowercaseMonth === 'october' || lowercaseMonth === 'november') {
        return 'Autumn';
    } else {
        return 'Invalid month'; 
    }
}