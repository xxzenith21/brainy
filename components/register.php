<?php

$connection = mysqli_connect("localhost", "root", "", "brainybots");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm"];

    // Check if the passwords match
    if ($password !== $confirmPassword) {
        echo "password_mismatch";
    } else {
        // Check if the username already exists in the database
        $query = "SELECT * FROM accounts WHERE username = '$username'";
        $result = mysqli_query($connection, $query);

        if (mysqli_num_rows($result) > 0) {
            echo "username_exists";
        } else {
            // If everything is okay, insert the new user into the database
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
            $insertQuery = "INSERT INTO accounts (username, password) VALUES ('$username', '$hashedPassword')";
            if (mysqli_query($connection, $insertQuery)) {
                echo "success";
            } else {
                echo "error";
            }
        }
    }
}
?>