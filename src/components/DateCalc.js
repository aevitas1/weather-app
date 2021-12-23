export default function getCurrentDate(d) {
    let date = new Date().getDate() + d;
    let month = new Date().getMonth();
    let day;
    let currentDate;

    
    switch (currentDate) {
        case 0:
            day = "Sun.";
            break;
        case 1:
            day = "Mon.";
            break;
        case 2:
            day = "Tue.";
            break;
        case 3:
            day = "Wed.";
            break;
        case 4:
            day = "Thu.";
            break;
        case 5:
            day = "Fri.";
            break;
        case 6:
            day = "Sat.";
            break;
        case 7:
            day = "Sun."
            break;
        // case 8:
        //     day = "Mon.";
        //     break;
        // case 9:
        //     day = "Tue.";
        //     break;
        // case 10:
        //     day = "Wed.";
        //     break;
        // case 11:
        //     day = "Thu.";
        //     break;
        default: day = ''
    }
    switch (new Date().getMonth()) {
        case 0: month = 'Jan.';
            break;
        case 1: month = 'Feb.';
            break;
        case 2: month = 'Mar.';
            break;
        case 3: month = 'Apr.';
            break;
        case 4: month = 'May';
            break;
        case 5: month = 'Jun.';
            break;
        case 6: month = 'Jul.';
            break;
        case 7: month = 'Aug.';
            break;
        case 8: month = 'Sept.';
            break;
        case 9: month = 'Okt.';
            break;
        case 10: month = 'Nov.';
            break;
        case 11: month = 'Dec.';
            break;
        default: month = '';
    }
    return (day + ' ' + date + ' ' + month);
}