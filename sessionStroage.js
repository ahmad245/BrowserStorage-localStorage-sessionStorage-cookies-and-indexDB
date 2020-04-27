
// using sessionStorage if we open the onther tap in browser or close the tap   the data will lost 

// save variable in browser sessionStorage 
let userId="123";
// store
sessionStorage.setItem('userId',userId);
// get variable from localStrorage
let id=sessionStorage.getItem('userId');

///////////////////////////////////////////////////////////////
// store object or array in localStrorage
let user={
    name:'ahmad',
    age:33
}
// store object or array must to convert to json
sessionStorage.setItem('user',JSON.stringify(user));
// get object  from sessionStorage
let userInfo=JSON.parse(sessionStorage.getItem('user'));

