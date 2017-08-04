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

$dotid = 1;

$sql = "SELECT dot_id, dot_dir FROM tbl_dots WHERE dot_id=$dotid";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "" . $row["dot_dir"]. "";
    }
} else {
    echo "0 results";
}
$conn->close();
?>