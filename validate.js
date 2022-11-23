function validationof(value){
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    if (email.length == 0){
        document.getElementById('s1').innerHTML = "***please enter your email address";
        return false ;
    }

    if(pwd == 0){
        document.getElementById('s2').innerHTML = "***please enter your password";
        return false;
    }

    if(pwd.length <= 5){
        document.getElementById('s2').innerHTML = "***Password length should be greater than 5";
        return false;
    }

    if(phone.length > 0){
        if(phone.length > 10 || phone.length < 10){
        document.getElementById('s3').innerHTML = "***Phone Number Should Be of 10 digits";
        return false;
    }
    }else{
        document.getElementById('s3').innerHTML = "***Please Enter Your Phone Number";
        return false;
    }

}

















// function validationof(value){

//     var fname = document.getElementById('fname').value;
//     var email = document.getElementById('email').value;
//     var pwd = document.getElementById('password').value;
//     var cpwd = document.getElementById('cpassword').value;
//     var phone = document.getElementById('phone').value;

//     if (fname.length == 0){
//         document.getElementById('s1').innerHTML = "*Please enter your name";
//         return false; 

//     }

//     if (email.length == 0){
//         document.getElementById('s2').innerHTML = "*please enter your email address";
//         return false ;
//     }

//     if(pwd == 0){
//         document.getElementById('s3').innerHTML = "*please enter your password";
//         return false;
//     }

//     if(cpwd == 0){
//         document.getElementById('s4').innerHTML = "*please confirm your password";
//         return false;
//     }

//     if(pwd != cpwd){
//         document.getElementById('s4').innerHTML = "*password and confirm password should be same";
//         return false;
//     }


//     if(phone.length > 0){
//         if(phone.length > 10 || phone.length < 10){
//         document.getElementById('s5').innerHTML = "*Phone Number Should Be of 10 digits";
//         return false;
//     }
//     }else{
//         document.getElementById('s5').innerHTML = "*Please Enter Your Phone Number";
//         return false;
//     }

// }

