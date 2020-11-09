<?php
include_once  'user.php';
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
<div class='col-sm-3 grid-item  py-3 title' id="title-top">Customer Name </div>
<div class='col-sm-3 grid-item  py-3 title' id="title-email">Email </div>
<div class='col-sm-3 grid-item  py-3 title' id="title-acc"> Acc. Number </div>
  <p class='col-sm-3 grid-item  py-3 title' id="title-balance">Balance </p>
</div>
</div>
_END;
// echo "<div class='grid-container'>";
echo "<hr>";
for($i=0; $i<sizeof($local_store["name"]);$i++)
{
  echo <<<_END
  <div class="container-fluid detail">
  <div class="row">
  <div class='col-sm-3 grid-item py-3' id="name">$name[$i] </div>
  <div class='col-sm-3 grid-item  py-3' id="email"> $email[$i] </div>
  <div class='col-sm-3 grid-item  py-3' id="acc">$acc[$i] </div>
    <p class='col-sm-3 grid-item  py-3' id="balance"><span>&#8360</span>. $balance[$i] </p>
  </div>
  </div>
    <hr>
  _END;
}
// echo "</div>";
 ?>
