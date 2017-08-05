<?php
$servername = "localhost";
$username = "root";
$password = "cookies";
$dbname = "moneymachinedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$candle1_colour = $_GET['candle1_colour_id'];
$dot_colour = $_GET['dot_colour_id'];

//$sql = "INSERT INTO tbl_dots (dot_dir) VALUES ('$dot_name') WHERE dot_id='1';

//$sql = "INSERT INTO tbl_dots (dot_id, dot_dir) VALUES (1,'GREEN')";

//$sql = "INSERT INTO tbl_dots (dot_dir) VALUES ('$dot_name') WHERE dot_id='1';

$sql1 = "UPDATE tbl_dots SET dot_dir='$candle1_colour' WHERE dot_id=1";
$sql2 = "UPDATE tbl_dots SET dot_dir='$dot_colour' WHERE dot_id=2";

if ($conn->query($sql1) === TRUE) {
    echo "New sql1 record created successfully.<br>";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}

if ($conn->query($sql2) === TRUE) {
    echo "New sql2 record created successfully.<br>";
} else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
}

$conn->close();
?>