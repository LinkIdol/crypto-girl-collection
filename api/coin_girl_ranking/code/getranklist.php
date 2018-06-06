<?php

header("Access-Control-Allow-Origin: *");

$dsn = 'mysql:dbname=bnrank;host=db;port=3306';
$user = 'root';
$password = 'linkidrank233';

try {

	$conn = new PDO($dsn, $user, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$sth = $conn->prepare("SELECT address,collecttime from ranklist ORDER BY collecttime limit 100");
	$sth->execute();
	$result = $sth->fetchAll(PDO::FETCH_ASSOC);
	$json = json_encode($result);
	print_r($json);

} catch (PDOException $e) {
	echo $e->getMessage();
}

?>