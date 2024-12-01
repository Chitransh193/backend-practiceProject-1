let checkField = () => {
  let inputval = document.getElementById('title-text').value;
  if ( inputval.length >= 1 ) {
    let error = document.querySelector(".error-empty").style.display = "none";
    let inputval = document.getElementById('title-text').style.borderColor = "hsl(169, 82%, 27%)";
  }
}
let validateForm = () => {
let inputval = document.getElementById('title-text').value;
  if ( inputval.length <= 0 ) {
    let error = document.querySelector(".error-empty").style.display = "block";
    let inputval = document.getElementById('title-text').style.borderColor = "hsl(0, 66%, 54%)";
    return false;
  } else {
    let error = document.querySelector(".error-empty").style.display = "none";
    return true;
  }
}