
function showModal(name , email , acc , balance , index)
{
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
console.log(acc);
document.getElementById("modal-space").innerHTML = card;
console.log(name)
$('#myModal').modal("show");
sessionStorage.removeItem('clicked');
}
