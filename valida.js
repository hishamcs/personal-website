var flag = 0;
function nameVal() {
    var nama = document.getElementById('namee').value;
    if (nama.length == 0) {
        document.getElementById("name-err").innerHTML = "!!name can't blank!!";
    } else if (/^[a-zA-Z]+(\s{0,1}[a-zA-Z])*$/.test(nama) == false) {
        document.getElementById("name-err").innerHTML = "Enter correct name";
    } else {
        document.getElementById("name-err").innerHTML = "";
        flag = flag + 1;
    }


}
function emailVal() {

    var emailid = document.getElementById("emaill").value;
    if (emailid.length == 0) {
        document.getElementById("email-err").innerHTML = "!!Email cant blank!!";
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid) == false) {
        document.getElementById("email-err").innerHTML = "Enter the correct email id";
    } else {
        document.getElementById("email-err").innerHTML = "";
        flag = flag + 1;
    }
}

function subjectVal() {

    var subjectss = document.getElementById("subjects").value;
    if (subjectss.length == 0) {
        //alert("s");
        document.getElementById("subject-err").innerHTML = "!!subject can't blank!!";
    } else {
        document.getElementById("subject-err").innerHTML = "";
        flag = flag + 1;
    }
}
function messageVal() {
    var msg = document.getElementById("textmsg").value;
    if (msg.length == 0) {
        document.getElementById("message-err").innerHTML = "!!message can't blank!!";
    } else {
        document.getElementById("message-err").innerHTML = "";
        flag = flag + 1;
    }
}

function submitFun() {
    flag = 0;
    nameVal();
    emailVal();
    subjectVal();
    messageVal();

    if (flag == 4) {
        $("#submit-form").submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxApOFg24LuqYT1bavxmz_qT6hIk6SUWNxYh38_9JAU1fN6qAWJJPBDWQXwHruG50O5/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                beforeSend: function () {
                    document.getElementById("msg-loading").style.display = "block";

                },
                success: function (response) {
                    // alert("Form submitted successfully")
                    document.getElementById("msg-loading").style.display = "none";
                    document.getElementById("msg-send").style.display = "block";
                    setTimeout(function () { window.location.reload() }, 3000);
                    //window.location.reload()
                    //window.location.href="https://google.com"
                },
                error: function (err) {
                    //alert("Something Error");
                    document.getElementById("msg-error").style.display = "block";

                }
            })
        })
    } else {
        // alert(flag);
        $("#submit-form").submit(function (e) {
            e.preventDefault();

        })
    }

}