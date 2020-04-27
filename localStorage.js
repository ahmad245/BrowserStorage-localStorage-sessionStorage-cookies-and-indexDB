// using localStorage if we open the onther tap in browser or close the tap  the data will not be lost 

// save variable in browser localStorage 
let userId="123";
// store
localStorage.setItem('userId',userId);
// get variable from localStrorage
let id=localStorage.getItem('userId');

///////////////////////////////////////////////////////////////
// store object or array in localStrorage
let user={
    name:'ahmad',
    age:33
}
// store object or array must to convert to json
localStorage.setItem('user',JSON.stringify(user));
// get object  from localStorage
let userInfo=JSON.parse(localStorage.getItem('user'));

