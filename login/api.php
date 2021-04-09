<?php
$conn = mysqli_connect("localhost", "id16558353_supachok", 'Qwertyui-12345678', "id16558353_user_register");
$ID = $_POST["id"];
$Password = $_POST["pass"];
$sql = "SELECT Email FROM User_info WHERE Email = '" . $ID . "' AND Email = '" . $Password . "'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    header('location: home.php');
} else {
    echo '
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle"><img src="https://img.icons8.com/plasticine/60/000000/hazard-warning-flasher.png"/>แจ้งเตือน</h5>
            </div>
            <div class="modal-body">
                กรุณากรอกรหัสผ่านให้ถูกต้อง
            </div>
            <div class="modal-footer">
                <a href = "../">
                    <button type="button" class="btn btn-primary">ตกลง</button>
                </a>
            </div>
        </div>
    </div>
</div>       
    ';
}
?>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>
    $('document').ready(function() {
        $('#exampleModalCenter').modal('show');
    })
</script>
</body>

</html>