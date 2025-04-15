function goToCourse(courseName) {
    switch(courseName) {
        case 'java':
            window.location.href = 'java.html';
            break;
        case 'javascript':
            window.location.href = 'javascript.html';
            break;
        case 'c':
            window.location.href = 'c.html';
            break;
        case 'python':
            window.location.href = 'python.html';
            break;
        default:
            break;
    }
}
