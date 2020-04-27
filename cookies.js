//the advantages we can specify the expiration and retrieve data from server
///////////////////////////////////////////////////////////////

// get all cookies  coomie dont have set or get methods  
let allCookies=document.cookie;

// stroe cookies not overrite but add to them (variabe and object )
let info='i love js';
let infoObject={
    info1:'information'
}
let dataWithExpiration='data will lost in 10 second'
document.cookie=`info=${info}`;
document.cookie=`infoObject=${JSON.stringify(infoObject)}`;

// spacifiy expiration using flag (max-age=number of second) ro (expires=date)
document.cookie=`dataWithExpiration=${dataWithExpiration}; max-age=10`; // add ; and flag max-age

// retrive the data 
let dataFormCookies=document.cookie; // get all cookies data as string
let fonvertDataToArray=dataFormCookies.split(';');
let data=fonvertDataToArray.map((el)=>{
    return el.trim();
});
console.log(data[1].split('=')[1]); // get the 


