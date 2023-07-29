
  <?php
session_start();

$connection = mysqli_connect("localhost", "root", "", "brainybots");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

function updateUserDetails($conn, $username, $name, $email, $gender) {
    $sql = "UPDATE accounts SET name = '$name', email = '$email', gender = '$gender' WHERE username = '$username'";
    return $conn->query($sql);
}

$username = "";
$name = "";

if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];

    $sql = "SELECT username, name FROM accounts WHERE id = $userId";
    $result = $connection->query($sql);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $username = $row['username'];
        $name = $row['name'];
    } else {

    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["gender"])) {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];

    if (updateUserDetails($connection, $username, $name, $email, $gender)) {

        $response = array(
            "username" => $username,
            "name" => $name,
            "email" => $email,
            "gender" => $gender
        );
        echo json_encode($response);
        exit();
    } else {

        $response = array(
            "error" => "Error updating user details."
        );
        echo json_encode($response);
        exit();
    }
}
?>
  
  