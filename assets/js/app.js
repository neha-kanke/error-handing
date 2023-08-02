

const cl = console.log

const formlogin = document.getElementById("formlogin");
const emailcontrol = document.getElementById("email");
const password = document.getElementById("password");


let db = [
    {
        email: "clientname@gamil.com",
        password: " ****1"

    },
    {
        email: "nehashubham@gmail.com",
        password: "****1234"

    },
    {
        email: "shubham@gmail.com",
        password: "******123456"

    }
]






const onadd = (eve) => {
    eve.preventDefault();
    setTimeout(()=>{
        let emailvalue = emailcontrol.value;
        let passwordvalue = password.value;
       let emailexist;
       db.forEach(acc=>{
        if(emailvalue===acc.email){
            emailexist=acc
        }
        
       })
       if(emailexist){
        // cheakout passsword
        if(emailexist.password==passwordvalue){
            // alert("successfull neha")
            Swal.fire({
                // icon: 'success',
                title: 'login Successfully',
                imageUrl:"https://cdn.vectorstock.com/i/preview-1x/08/77/double-thumbs-up-emoticon-vector-41910877.jpg",
                imageHeight: 200,
              })
        }else{
            // alert("passwrond wrong")
            Swal.fire({
                // icon: 'error',
                title: 'Oops...',
                text: 'password is wrong!',
                footer: '<a href="">Why do I have this issue?</a>',
                imageUrl: ' https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNTg2LWZyb3duaW5nZmFjZS0wMV8xLWw5ZDNjMXYwLnBuZw.png',
                imageHeight: 200,
              })
        }
        
    }

    else{
            Swal.fire({
            // icon: 'error',
            title: 'Oops...',
            text: 'EMAIL ID IS WRONG!',
            footer: '<a href="">Why do I have this issue?</a>',
            imageUrl: 'https://png.pngtree.com/png-clipart/20230331/original/pngtree-sad-emoji-png-image_9013319.png',
            imageHeight: 200,
          })
        // alert("email id is wrong")
        return
         
    }
    },1000);


}


formlogin.addEventListener("submit", onadd)




