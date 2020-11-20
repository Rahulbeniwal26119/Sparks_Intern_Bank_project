<?php
include_once  '../php/user.php';
require  '../html/navbar.html';
include '../html/allcustomer.html';
$name = $local_store[name];
$email = $local_store[email];
$acc = $local_store[acc];
$balance = $local_store[balance];
echo "<hr>";
echo <<<_END
<div id="container-fluid">
<div class="row">
<div class='col-sm-2 grid-item  py-3 title' id="title-top">Customer Name </div>
<div class='col-sm-2 grid-item  py-3 title' id="title-email">Email </div>
<div class='col-sm-2 grid-item  py-3 title' id="title-acc"> Acc. Number </div>
  <p class='col-sm-2 grid-item  py-3 title' id="title-balance">Balance </p>
  <div class='col-sm-2 grid-item  py-3 title' id="title-Transfer"> Transfer </div>
  <div class='col-sm-2 grid-item  py-3 title' id="title-view" data-toggle="modal" data-target="#myModal"> ViewUser </div>

</div>
</div>
_END;
// echo "<div class='grid-container'>";
echo "<hr>";
for($i=0; $i<sizeof($local_store["name"]);$i++)
{
  echo <<<_END
  <div class="container-fluid detail detail">
  <div class="row">
  <div class='col-sm-2 grid-item py-3 ' id="name">$name[$i] </div>
  <div class='col-sm-2 grid-item  py-3' id="email"> $email[$i] </div>
  <div class='col-sm-2 grid-item  py-3' id="acc">$acc[$i] </div>
    <p class='col-sm-2 grid-item  py-3 customer${i}' id="balance"><span>&#8360</span>. $balance[$i] </p>
    <div class='col-sm-2 grid-item  py-3' id='div-tsn${i}' > <button class="btn-primary" id="btn-transfer${i}" onclick="transfer('$name[$i]' ,'$email[$i]', '$acc[$i]' , '$balance[$i]' , '$i');">Transfer</div>
    <div class='col-sm-2 grid-item  py-3' id='div-view${i}'><button class="btn-primary" id="btn-view${i}" onclick="showModal('$name[$i]' ,'$email[$i]', '$acc[$i]' , '$balance[$i]' , '$i');">ViewDetail</div>
    <script>
    sessionStorage.setItem('acc${i}' , $acc[$i]);
    </script>
  </div>
  </div>
  <div id="modal-space"> </div>
    <hr>
  _END;
}
echo <<<_END

<script defer type="text/javascript" src="../js/modal.js">

</script>
_END;
$amount =  $_COOKIE['amount'];
$acc =  $_COOKIE['acc'];
$curacc = $_COOKIE['curacc'];
$query  = "UPDATE Customers SET current_balance = current_balance + $amount WHERE Acc=$acc;";
$query2 = "UPDATE Customers SET current_balance = current_balance - $amount WHERE Acc=$curacc;";
$result1 = $conn->query($query);
if(!$result1) die($conn->error);
$result2 = $conn->query($query2);
if(!$result2) die($conn->error);
echo <<<_END
<script>
document.cookie = name + '=; Max-Age=0'
document.cookie = 'acc=;Max-Age=0';
document.cookie = 'amount=;Max-Age=0';
document.cookie = 'curacc=;Max-Age=0';
window.location.reload();
</script>
_END;
 ?>
