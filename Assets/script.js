function button1(){
    let noCourses=document.getElementById('userInput1').value;
    localStorage.setItem('userInput1', noCourses);
    if(noCourses<1||noCourses>15)
        alert("When entering the Course count, the accepted range is between 1 and 15, inclusive!");
    else{
        window.location.href = 'results.html';
        
    }
}
function generateForm(x) {
    var formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '';
    for (var i = 1; i <= x; i++) {
        var inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute("placeholder", "Credits of Course " + i);

        var selectField = document.createElement("select");
        selectField.innerHTML = `
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option>
        `;

        var br1 = document.createElement("br"); 
        var br2 = document.createElement("br"); 

        formContainer.appendChild(inputField);
        formContainer.appendChild(selectField);
        formContainer.appendChild(br1);
        formContainer.appendChild(br2);
    }
    
}
function button3(){
    window.location.href='index.html';
}
function button2() {
    var courseData = [];
    var inputFields = document.querySelectorAll('#formContainer input[type="text"]');
    var selectFields = document.querySelectorAll('#formContainer select');

    var unchangedField = false;

    inputFields.forEach(function(inputField, index) {
        var credits = inputField.value;
        var grade = selectFields[index].value;

        courseData.push({ credits: credits, grade: grade });

        if (credits === '' || grade === '') {
            unchangedField = true;
        }
    });

    if (unchangedField) {
        alert("Please fill in all course details!");
    } else {
        localStorage.setItem('courseData', JSON.stringify(courseData));
        window.location.href = 'summary.html';
    }
}

function calculator() {
    var noCourses=localStorage.getItem('userInput1');
    var storedData = localStorage.getItem('courseData');
    var courseData = JSON.parse(storedData);
    var sum=0;
    var sum2=0;
    for(i=0;i<noCourses;++i){
        var course=courseData[i];
        var noCredits=parseInt(course.credits);
        var courseGrade=findGrade(course.grade);
        var courseDet=noCredits*courseGrade;
        sum+=courseDet;
        sum2+=noCredits;
    }
    var gpa=(sum.toFixed(1)/sum2);
    var accurateGpa=gpa.toFixed(3);

    document.getElementById('gpa').innerHTML=accurateGpa;
}

function findGrade(grade) {
    switch (grade) {
        case 'A+':
            return 4;
        case 'A':
            return 4;
        case 'A-':
            return 3.7;
        case 'B+':
            return 3.3;
        case 'B':
            return 3;
        case 'B-':
            return 2.7;
        case 'C+':
            return 2.3;
        case 'C':
            return 2;
        case 'C-':
            return 1.7;
        case 'D+':
            return 1.3;
        case 'D':
            return 1;
        case 'D-':
            return 0.7;
        case 'F':
            return 0;
        default:
            return -1; 
    }
}






