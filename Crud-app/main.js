cars=[];
_id=1;
function Car(_name,_date,_color)
{
    cars.push(
        {
            u_id:_id,
            C_n:_name,
            C_color:_color,
            C_date:_date,
        }
    );
    _id++;
    console.log(cars)
}
function Car_data(e)
{
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#date").value;
    let age=document.querySelector("#color").value;
    swal({
        title: "Are you sure?",
        text: "Your Car's information will be posted to DataBase!",
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
    
    // console.log(name,email,age)
    Car(name,email,age);
    WriteThead()
    ShowData();
    ClearInput();
}
let tbody=document.querySelector("tbody");
let thead=document.querySelector("thead");
function ShowData()
{

  let tr=`
        <tr class="text-light">
            <th scope="row">${cars[cars.length-1].u_id}</th>
            <td>${cars[cars.length-1].C_n}</td>
            <td>${cars[cars.length-1].C_color}</td>
            <td>${cars[cars.length-1].C_date}</td>
            <td>
              <button class="btn btn-danger onclick="Delete(this,${cars[cars.length-1].u_id},event)">Sil</button>
              <button class="btn btn-success">Update</button>
            </td>
        </tr>
        `
  tbody.innerHTML+=tr;
}
function ClearInput(){
  let name=document.querySelector("#name");
  let email=document.querySelector("#date");
  let age=document.querySelector("#color");

  name.value="";
  age.value="";
  email.value="";

}

function Delete(element,id,e)
{
e.preventDefault();
swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      console.log("delisteyir")
      for(let i in cars)
      {
        if(cars[i].u_id==id)
        {
          cars.splice(cars[i].u_id-1,1);
        }
        tbody.removeChild(element.parentElement.parentElement);
      }

      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}
function WriteThead(){
  let th=`
  <tr class="text-light">
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Date of creation</th>
            <th scope="col">Color</th>
            <th scope="col">Operations</th>
          </tr>
    `
    thead.innerHTML=th;
}