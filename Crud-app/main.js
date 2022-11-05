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
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your informations posted to Database ", {
            icon: "success",
          });
        } else {
          swal("Your Car's information didnt sended!");
        }
      });
    // console.log(name,email,age)
    Car(name,email,age)
}