/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
// eslint-disable-next-line no-console
/*jslint devel: true */
/*global
$,document
*/ 


/*$("#circle").click(function () {
    $(this).append("hello");
    $(this).css("position", "relative");
    $(this).parent("body").css("height", "90%");
    $(this).parent("body").parent("html").css("height", "100%");
    $(this).animate({
        
        backgroundColor: "#dc143c",
        width: "500px",
        height: "500px",
        borderRadius: "0%",
        top: "20%",
        left: "20%"
        
    }, 6000, function () {
        $(this).css("background-color", "cyan");
    });
});*/
/*
var regex = /k/g;
var hi = "hi ki koro";
var res = hi.match(regex);
alert(res);
*/
function isPasswordCorrectFormat(password){
    var upperCase= new RegExp('[A-Z]');
    var lowerCase= new RegExp('[a-z]');
    if(password.match(upperCase) && password.match(lowerCase)) {
        return true;

    }
    else {
        return false;
    }
}
function isEmail($email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test( $email );
}
function showtext(element, errorText) {
    var wdth = element.css('height', 'auto').width();
    element.parents(".input").children(".before").html("<p>" + errorText + "</p>");
    element.parents(".input").children(".before").animate({
           width: wdth,
           fontSize: '100%'
        },500);
}
var element, errorText;
$("#submit").click(function () {
    if (!isEmail($("#mail").val())) {
        element=$("#mail");
        errorText="Enter an valid Email";
        showtext(element, errorText);
    } else {
        element=$("#mail");
        element.parents(".input").children(".before").css({
            'width':'0%',
            'font-size':'0%'
        });
    }
    if (!$.isNumeric($("#phone").val())) {
        element=$("#phone");
        errorText="Phone has to be numeric";
        showtext(element, errorText);
    } else {
        element=$("#phone");
        element.parents(".input").children(".before").css({
            'width':'0%',
            'font-size':'0%'
        });
    }
    if (!isPasswordCorrectFormat($("#pass").val())){
        element=$("#pass");
        errorText="Password must have upper and lower case";
        showtext(element, errorText);
    } else {
        element=$("#pass");
        element.parents(".input").children(".before").css({
            'width':'0%',
            'font-size':'0%'
        });
    }
});
document.querySelector( "form" )
        .addEventListener( "invalid", function( event ) {
            event.preventDefault();
        }, true );


























