$(document).ready(function(){
    let element = document.getElementById("ut1");
    var isChecked = $('#option1').prop('checked');
    if(isChecked) {
        element.style.display = "none";
    }
});

function switchView() {
    if($('#option1').prop('checked')) {
        document.getElementById("ut1").style.display = "none";
        document.getElementById("nat").style.display = "block";
    }
    if($('#option2').prop('checked')) {
        document.getElementById("ut1").style.display = "block";
        document.getElementById("nat").style.display = "none";
    }

}