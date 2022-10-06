var student_name_array = [];

function submit()
{
    var display_student_array = [];
    for(j = 1; j<=4; j++)
    {
        var student_name = document.getElementById("name_of_the_student_" + j).value;
        console.log(student_name);
        student_name_array.push(student_name);
    }

    console.log(student_name);

    var length = student_name_array.length;
    console.log(length);
    
    for(k = 0; k<length; k++)
    {
        display_student_array.push("<h4>NAME-" + student_name_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);

    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var no_commas = display_student_array.join(" ");
    console.log(no_commas);
    document.getElementById("display_name_without_commas").innerHTML = no_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_buttton").style.display = "inline-block";

}

function sorting(){
    
    student_name_array.sort();
    console.log(student_name_array);

    var display_student_array_sort = [];
    var length = student_name_array.length;
    console.log(length);

    for(k = 0; k < length; k++){
        display_student_array_sort.push("<h4>NAME-" + student_name_array[k] + "</h4>");
        console.log(display_student_array_sort);
    }

    var no_commas = display_student_array_sort.join(" ");
    console.log(no_commas);
    document.getElementById("display_name_without_commas") = no_commas;
}