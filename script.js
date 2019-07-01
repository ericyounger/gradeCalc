

// holds the objects with grades, credits and closeBtn
var composedItems =[];

// New line button
const newLine = document.querySelector('#newLine');
const gradeBtn = document.querySelector('#gradeCompute');


// global Eventlisteners
newLine.addEventListener('click', addLine);
gradeBtn.addEventListener('click', calculateGrades);

//adds some lines on loadup
addLine();
addLine();
addLine();
addLine();
addLine();
addLine();
addLine();


function calculateGrades() {
    
    var sumPoints = 0;
    var totalCredits = 0;

    for (let i = 0; i < composedItems.length; i++) {
        if (composedItems[i].grade != '' || composedItems[i].credit != '') {
            let pointLetter = composedItems[i].grade;
            let pointNr = 0;
            totalCredits += composedItems[i].credit;

            switch (pointLetter.toLowerCase()) {
                case 'a':
                    pointNr = 5;
                    break;

                case 'b':
                    pointNr = 4;
                    break;

                case 'c':
                    pointNr = 3;
                    break;

                case 'd':
                    pointNr = 2;
                    break;

                case 'e':
                    pointNr = 1;
                    break;

                case 'f':
                    pointNr = 0;
                    break;

                default:
                    break;
            }

            sumPoints += pointNr * composedItems[i].credit;
        }
    }
    let sum = sumPoints / totalCredits;
    gradeBtn.innerHTML = sum.toFixed(2);
}

function addLine() {
    const form = document.querySelector('#formSelector');

    const div = document.createElement('div');
    div.setAttribute('class', 'line');

    const gradeUI = document.createElement('input');
    gradeUI.setAttribute('type', 'text');
    gradeUI.setAttribute('placeholder', 'Grade');
    gradeUI.setAttribute('maxlength', '1');

    const gradeUI2 = document.createElement('input');
    gradeUI2.setAttribute('type', 'number');
    gradeUI2.setAttribute('placeholder', 'Credits');
    gradeUI2.setAttribute('max', '40');
    gradeUI2.setAttribute('min', '0');

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'closeBtn');
    closeBtn.innerHTML = 'X';
    closeBtn.setAttribute('tabindex', '-1'); //Ignores selection with tab button

    gradeUI.addEventListener('input', ()=>{
        item.grade = gradeUI.value;
    });

    gradeUI2.addEventListener('input', ()=>{
        item.credit = parseInt(gradeUI2.value);
    });

    let item = {
        grade : gradeUI.value,
        credit :gradeUI2.value,
        closeButton : closeBtn
    }

    composedItems.push(item);

    div.appendChild(gradeUI);
    div.appendChild(gradeUI2);
    div.appendChild(closeBtn);

    form.appendChild(div);

    closeBtn.addEventListener('click', ()=>{
        div.classList.toggle('line-animate');
        window.setTimeout(() => {
        form.removeChild(div);
        }, 200);
       
        composedItems.splice(composedItems.indexOf(item), 1);
    })
}




 
