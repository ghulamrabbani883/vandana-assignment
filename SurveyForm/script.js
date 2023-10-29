const url = "./country.json";

async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

window.addEventListener("load", async () => {
  const data = await fetchData();

  //Take the reference
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const gender = document.getElementById("gender");
  const profession = document.getElementById("profession");
  const country = document.getElementById("country");
  const birthdate = document.getElementById("birthdate");
  const phone = document.getElementById("phone");

  const submit = document.getElementById("form");
  const reset = document.getElementById("reset");
  const popupContainer = document.querySelector(".popup-container");
  const popup = document.querySelector("popup");


  //Adding countries to dropdown
  const lists = data?.map((country)=>{
    return `<option value='${country.name}' key='${country.code}'>${country.name}</option>`
  })
  const countryOption = `<option value='' key='0'>Choose your country</option>`
  lists.unshift(countryOption)
  country.innerHTML = lists


  //Submitting form data
  let cross;
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    popupContainer.innerHTML = `<div class="popup">
   <div class="popup-top">
       <h2>Your form data</h2>
       <p class="cross">×</p>
   </div>
   <div class="popup-bottom">
       <p class="form-data"><b>First-name:-</b> ${firstname.value} </p>
       <p class="form-data"><b>Last-name:-</b> ${lastname.value}</p>
       <p class="form-data"><b>Email:-</b> ${email.value}</p>
       <p class="form-data"><b>Phone:-</b> ${phone.value}</p>
       <p class="form-data"><b>Profession:-</b> ${profession.value}</p>
       <p class="form-data"><b>Birth-of-date:-</b> ${birthdate.value}</p>
       <p class="form-data"><b>Gender:-</b> ${gender.value}</p>
       <p class="form-data"><b>Country:-</b> ${country.value}</p>
   </div>
</div>`;
    popupContainer.classList.add("display");
    cross = document.querySelector(".cross");
    cross.addEventListener("click", () => {
      popupContainer.classList.remove("display");
      clearAll();
    });
  });

  reset.addEventListener("reset", (e) => {
    e.preventDefault();
    clearAll();
  });

  function clearAll() {
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    gender.value = "";
    profession.value = "";
    birthdate.value = null;
    country.value = "";
    phone.value = "";
  }
});
