// function to get the user data
function getUserData() {
  // creating a var to display results
  var userPhone = document.getElementById('results')

  // store values for user first and last name, email and phone number
  var userFirst = document.getElementById('userfname').value
  var userLast = document.getElementById('userlname').value
  var userEmail = document.getElementById('userEmail').value
  var userPhone = document.getElementById('userPhone').value

  // storing elements by class for the radios and select setting up the loop for later
  var userGenderEls = document.getElementsByClassName('userGender')
  var userColorEls = document.getElementsByClassName('userColor')
  var userBirthEls = document.getElementsByClassName('userBirth')

  // create variables to store the user gender, color and birth later
  var userGender, userColor, userBirth

  // First Name
  if(userFirst == "") {
    // going to add a class of failure results if there is no username value
    results.className = "failure"
    // Text will update the content pf the result
    results.textContent = "You forgot to Enter your First Name"

    //  run a stop function if ther is no answer
    return;
  };

  // Last Name
  if(userLast == "") {
    // add a class of failures to results if no user last name value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your last name"

    // stop function if no answer
    return;
  };

  // Gender
  // for loop through all elements with the class= "userGender"
  for(var i = 0; i < userGenderEls.length; i++) {
    // if statement if the radio was selected by the user, do this
    if(userGenderEls[i].checked) {
      // set value answer 3 to the value in the radio items
    };
  };
  // stop the function if no data is there for gender
  if (userGender == undefined) {
    // add a classs of failure to results if no user gender value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select a gender"

    // stop the function if no answer
    return;
  };
  // Email
  if(userEmail == "") {
    // add a class of failure results if no user email value
    results.className = "failure"
    // update the text content of results
    results.texContent = "You forgot to add your email"

    // stop function if no answer
    return;
  };
  // Phone Numbesr
  if(userPhone == "") {
    // add a class of failure if no user phone value
    results.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to add your Phone Number"

    // stop function if no answer
    return;
  };

  // Favorite color
  // looping through all elements with class='userColor'
  for(var i = 0; i < userColorEls.legnth; i++) {
    // check which was the selected color by the user do this
    if(userColorEls[i].selected) {
      // set value of answer 2 to the value in the selected item
      userColor = userColorEls[i].value
    };
  };
  // stop function if no data for question 2
  if(userColor == "") {
    // add a class of failures to results if no user color value
    result.className = "failure"
    // update the text content of results
    results.textContent = "You forgot to select your favorite color"

    // stop function if no answer
    return;
  }

  // Birth Place
  // looping through all elements with class="userBirth"
  for(var i = 0; i < userBirthEls.legnth; i++) {
    // if the radio was selected by user, do this
    if(userBirthEls[i].checked) {
      // set value of answer 3 to the value in the radio itme
      userBirth = userBirthEls[i].value;
    };
  };
  // stop function if no data is there for gender
  if(userBirth == undefined) {
    // add a class of failure to results if no user birth value
    results.className = "failure";
    // update the text content
    results.textContent = "You forgot to select a place of birth"

    // stop function if no answer
    return;
  }

  // on success
  // if everything passes add a class of success to results
  results.className = "success";
  // update the text content of results
  results.textContent = "Thank! Updating Now";

  // object for user profile data
  var userProfile = {
    name: userFirst + " " + userLast,
    gender : userGender,
    email: userEmail,
    phone: userPhone,
    color: userColor,
    birth: userBirth
  };

  // confirm existance of all user data
  console.log(userProfile);

  // run displayProfile after 1 second passing in new profile data to be displyed
  setTimeout(function() {
    displayProfile(userProfile);
  }, 1000);
};

  // display profile information
  function displayProfile(userProfile) {
    // make sure the user data is being passed through
    console.log(userProfile);

    // select some the HTML elements by id
    var userName = document.getElementById('newUserName')
    var userGender = document.getElementById('newUserGender')
    var userEmail = document.getElementById('newUserEmail')
    var userPhone = document.getElementById('newUserPhone')
    var userColor = document.getElementById('newUserColor')
    var userBirth = document.getElementById('newUserBirth')

    // change the text of these variables using the userProfile object bc i slow
    userName.innerText = "Welcome" + userProfile.name
    userGender.innerText = "Gender:" + userProfile.gender
    userEmail.innerText = "Email:" + userProfile.email
    userPhone.innerText = "Phone:" + userProfile.phone
    userColor.innerText = "Favorite Color: " + userProfile.color
    userBirth.innerText = "Birth Continent: " + userProfile.birth

    // hide new profile form
    document.getElementById('newProfile').style.display = "none"
    // display updated profile data
    document.getElementById('updatedProfile').style.display = "block"
  }

// add click function to element with id="sendDataButton"
document.getElementById('sendDataButton').addEventListener('click', getUserData, false);
