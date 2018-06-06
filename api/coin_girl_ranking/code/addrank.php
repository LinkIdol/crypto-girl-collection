<?php

header("Access-Control-Allow-Origin: *");

$dsn = 'mysql:dbname=bnrank;host=db;port=3306';
$user = 'root';
$password = 'linkidrank233';

$addr = $_POST['address'];

try {

  if (!empty($addr)) {
    $conn = new PDO($dsn, $user, $password);
    $datetime = date('Y-m-d H:i:s');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // $sql = "REPLACE INTO ranklist (address, collecttime) VALUES (:addr, '$datetime')";
    // $conn->bindParam(':addr', $_POST['address'], PDO::PARAM_STR);
    // $conn->exec($sql);
    $stmt = $conn->prepare("insert ignore into ranklist (address, collecttime) VALUES (:addr, '$datetime')");  
    $stmt->bindParam(':addr', $_POST['address'], PDO::PARAM_STR);
    $stmt->execute();
  }

} catch (PDOException $e) {
  echo $e->getMessage();
}

?>