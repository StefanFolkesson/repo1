
/*document.getElementById("hovringsobjekt").onmouseover = function(){
    document.getElementById("huvud").style.backgroundColor="#0000FF";
};

document.getElementById("knappen").onmousedown = function(){
    document.getElementById("huvud").style.backgroundColor="#0000FF";

};
*/
$("#hovringsobjekt").hover(
    function(){
        $(this).slideUp();
    $("#huvud").addClass("bla");
},
function(){
    $(this).slideDown();
    $("#huvud").removeClass("bla");
});

$("#knappen").mousedown(function(){
    $("#huvud").addClass("bla");
});

$("#knappen").hide();

