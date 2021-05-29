
let headerBackground = document.getElementById('header-container');
headerBackground.style.backgroundColor = '#2fc18c';

emergencyTasks = document.querySelectorAll('.emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#F7C7DB';

h3EmergencyTaskUrgent = document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'red';
h3EmergencyTaskNotUrgent = document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'red';

h3NonUrgencyButImportant = document.querySelectorAll('.no-emergency-tasks h3')[0];
h3NonUrgencyButImportant.style.backgroundColor = '#2E282A';

h3NonUrgencyNotImportant = document.querySelectorAll('.no-emergency-tasks h3')[1];
h3NonUrgencyNotImportant.style.backgroundColor = '#2E282A';

notEmergencyTaks = document.querySelectorAll('.no-emergency-tasks')[0];
notEmergencyTaks.style.backgroundColor = '#FFC914';


let footerBackground = document.getElementById('footer-container');
footerBackground.style.backgroundColor = 'green';