<?php
require_once  'database_detail.php';
// require_once '../css/navbar.css';
// echo $un;
// echo $hn;
// echo $pw;
// echo $db;
$conn = new mysqli($hn , $un , $pw , $db);
if($conn->connect_error) die($conn->connect_error);
$query = "SELECT * from Customers";
$result = $conn->query($query);
if(!$result) die($conn->error);
$rows = $result->num_rows;
$local_store =   array("acc" => array() , "email" => array() , "name"=>array() , "balance"=>array());
for($j=0; $j < $rows; ++$j)
{
  $result->data_seek($j);
  $local_store[acc][$j]  = $result->fetch_assoc()['Acc'];
  $result->data_seek($j);
  $local_store[email][$j] = $result->fetch_assoc()['email'];
  $result->data_seek($j);
  $local_store[name][$j] = $result->fetch_assoc()['name'];
  $result->data_seek($j);
  $local_store[balance][$j] = $result->fetch_assoc()['current_balance'];
}
 ?>
