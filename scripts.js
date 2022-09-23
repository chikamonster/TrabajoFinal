
function Assign_turn() {
    globalThis = namee = (document.querySelector("#name").value);
    globalThis = surname = (document.querySelector("#surname").value);
    globalThis = dni  = (document.querySelector("#dni").value);
    globalThis = date =(document.querySelector("#date").value);
  alert(`Muchas gracias por solicitar tu turno con nosotros ${namee} ${surname}.
  Tu fecha corresponde al dia ${date}`)
  return date, dni; 
}
function consultar(){
    globalThis = dni2 = (document.querySelector("#dni2").value);
    if(dni2 === dni){
    alert(` Hola ${namee} ${surname}, ya tienes un turno para el dia ${date}`)}
    else if(dni2 != dni){
        alert("No se ha encontrado un turno")
    }
}
