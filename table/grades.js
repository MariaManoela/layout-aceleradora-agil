function complete_table(e){
    e.preventDefault();
    
    var name_js = document.getElementById("name").value;
    var name_table_js = document.getElementById("name-table");
    name_table_js.innerHTML=name_js;

    calculate();
    percent();

    console.log(name_table_js);

    return false;
}

function calculate(){
    var grade_1_js = document.getElementById("first-grade").value;
    grade_1_js = Number(grade_1_js);

    var grade_2_js = document.getElementById("sec-grade").value;
    grade_2_js = Number(grade_2_js);

    var grade1_table_js = document.getElementById("first-grade-table");
    var grade2_table_js = document.getElementById("sec-grade-table");

    grade1_table_js.innerHTML = grade_1_js;
    grade2_table_js.innerHTML = grade_2_js;

    var finalGrade = finalGrade = (grade_1_js + grade_2_js)/2;

    var final_grade = document.getElementById("final-grade-table");
    final_grade.innerHTML = finalGrade;
}

function percent(){
    var attendance_js = document.getElementById("attendance").value;
    var attendance_table = document.getElementById("attendance-table");
    var attendance_aux = attendance_js + "%";
    attendance_table.innerHTML = attendance_aux;
}

function pass(final_grade){
    var pass = true;
    
    if (final_grade >= 7.0){
        pass = true;
    }else{
        pass = false;
    }
}
