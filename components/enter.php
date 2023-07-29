<?php
$connection = mysqli_connect("localhost", "root", "", "brainybots");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Query to check user credentials
    $query = "SELECT * FROM accounts WHERE username = '$username'";
    $result = mysqli_query($connection, $query);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        $hashedPassword = $row['password'];

        // Verify the password
        if (password_verify($password, $hashedPassword)) {
            session_start();
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}
?>