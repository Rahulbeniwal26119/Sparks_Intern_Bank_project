var current_account;
var accountNumber = [];
var accountCounter = 0;
function showModal(name , email , acc , balance , index)
{
  current_account = acc;
id = "btn-view" + index;
divId = 'div-view'+index;
// console.log(id , divId);
// console.log(name);
card = null;
var card = '<div class="container">' +
// '<button type="button" class="btn btn-secondry btn-lg" data-toggle="modal" data-target="#myModal" style="color : blue;">'
//             + '</button>' +
  '      <div class="modal fade" id="myModal" role="dialog">' +
'            <div class="modal-dialog">' +

'                <div class="modal-content modal-main">'+
'                    <div class="modal-header">'+
'                        <button type="button" class="close" data-dismiss="modal">&times;</button>'+
'                        <img src="../images/default_user.jpeg" height="100px" alt="">' +
`                       <h4 class="modal-title">${name}</h4>` +
'                    </div>'+
'                    <div class="modal-body">'+
`                        <p>${acc}</p>`+
`                     <p>${email}</p>`+
`                        <p> Rs ${balance}</p>`+
'                    </div>'+
'                    <div class="modal-footer">'+
'                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'
// console.log(acc);
document.getElementById("modal-space").innerHTML = card;
// console.log(name)
$('#myModal').modal("show");
}

function transfer(name , email , acc , balance , index)
{
    current_account = acc;
id = "btn-view" + index;
divId = 'div-view'+index;
console.log(id , divId);
console.log(name);
card = null;
var card = '<div class="container">' +
// '<button type="button" class="btn btn-secondry btn-lg" data-toggle="modal" data-target="#myModal" style="color : blue;">'
//             + '</button>' +
  '      <div class="modal fade" id="myModal" role="dialog">' +
'            <div class="modal-dialog">' +

'                <div class="modal-content modal-main">'+
'                    <div class="modal-header">'+
'                        <button type="button" class="close" data-dismiss="modal">&times;</button>'+
'                        <img src="../images/default_user.jpeg" height="100px" alt="">' +

`                       <h4 class="modal-title">${name}</h4>` +
`                        <p>Account Number : ${acc}</p>`+
`                        <p>Avialiable Balance :  Rs ${balance}</p>`+
'                    </div>'+
'                    <div class="modal-body">'+
'<form action="" class="form-inline" method="POST">' +
'    <div class="form-group">' +
'        <label for="amount">Enter Amount:</label>' +
'        <input type="text" class="form-control" id="amount">' +
'         <p id="amountwarning" style="color:red;"></p>'+
'    </div>' +
'    <div class="form-group">' +
'        <label for="accno">Enter Acc No.:</label>' +
'        <input type="text" class="form-control" id="accno">' +
'         <p id="accwarning" style="color:red;"></p>'+
'    </div>' +
'</form>' +
'<button class="btn btn-primary" id="transfer">Transfer</button>' +
'                    </div>'+
'                    <div class="modal-footer">'+
'                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'
document.getElementById("modal-space").innerHTML = card;
$('#myModal').modal("show");
$("#transfer").click(function(){
  var accNo = $("#accno").val();
  var amount = $("#amount").val();
  function checkAccNo(accNo)
  {
    for(var j=0; j<sessionStorage.length; j++)
    {
      if(sessionStorage[`acc${j}`] == accNo)
      {
        console.log(sessionStorage[`acc${j}`] , "found");
        return 1;
      }
    }
    return 0;
  }
  // var isAcc = checkAccNo(accNo);
  var valid_amount = true;
  var valid_acc =  true;
  if(parseInt(amount) > (parseInt(balance)) )
  {
    document.getElementById("amountwarning").innerHTML = "Exceed : Not Enough Amount";
    valid_amount = false;
  }
  else
  {
      document.getElementById("amountwarning").innerHTML = "";
      valid_amount = true;

  }
  var Acc = checkAccNo(accNo)
  if(Acc == 0)
  {
    document.getElementById("accwarning").innerHTML = "No Account Found";
    valid_acc= false;
  }
  else
  {
    document.getElementById("accwarning").innerHTML = "";
    valid_acc = true;
  }
  // console.log(Acc , "is the returned values");
  var db_ok = valid_acc && valid_amount;
  if(db_ok)
  {
    document.cookie = `amount=${amount}`;
    document.cookie = `acc=${accNo}`;
    document.cookie = `curacc=${current_account}`;

  }
  else
  {
    sessionStorage.removeItem("db_ok");
  }
  if(valid_acc && valid_amount)
  {
    window.location.reload();
      window.location.reload();
  }
})
}
