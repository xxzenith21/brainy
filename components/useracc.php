<?php
session_start(); // Start the session if not already started

$connection = mysqli_connect("localhost", "root", "", "brainybots");

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

if (isset($_SESSION['id'])) {
    $userId = $_SESSION['id'];

    $sql = "SELECT username FROM accounts WHERE id = $userId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $username = $row['username'];
    } else {
    }
}

$conn->close();
?>