var userName = prompt ('what is your name? ');
alert ('Welcome  ' + userName);


var favoriteAnimal = prompt ('What Animal do you prefer ? ','Cats, Dogs, Birds',);
while (favoriteAnimal !== 'Cats' && favoriteAnimal !== 'Dogs' && favoriteAnimal !== 'Birds' ){
    favoriteAnimal = prompt ('Please enter one of the following options !','Cats , Dogs , Birds ');
}


var animalNum = prompt('How many times would you like to see from your favorite Animal ?');
var image = '';
for(var i = 1 ; i <= animalNum; i++ )
{
    if(favoriteAnimal === 'Cats'){
        image = image + '<img src ="http://4.bp.blogspot.com/-MzZCzWI_6Xc/UIUQp1qPfzI/AAAAAAAAHpA/OTwHCJSWFAY/s1600/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg">';
    }else if(favoriteAnimal === 'Dogs'){
        image = image + '<img src ="https://th.bing.com/th/id/R4c645084ac66cc9c140856b8c5d20916?rik=orn21qtf%2bPLsXg&pid=ImgRaw">';
    }else if (favoriteAnimal === 'Birds'){
        image = image + '<img src ="https://th.bing.com/th/id/OIP.OL9igW7Y6rUk-lusgXnOPAHaGZ?pid=ImgDet&rs=1">';
    }else {
        alert  ('Welcome Again  '+ userName);}
    }
  
    document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
    console.log(image);
    document.write(image); 


/* 
//if (favoriteAnimal === 'Cats') {
//   document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
//  document.write ('<img src ="http://4.bp.blogspot.com/-MzZCzWI_6Xc/UIUQp1qPfzI/AAAAAAAAHpA/OTwHCJSWFAY/s1600/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg">');
//}
//else if (favoriteAnimal === 'Dogs'){
//    document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
//document.write ('<img src ="https://th.bing.com/th/id/R4c645084ac66cc9c140856b8c5d20916?rik=orn21qtf%2bPLsXg&pid=ImgRaw"');   
//}
//else if (favoriteAnimal === 'Birds'){
//   document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
//    document.write ('<img src ="https://th.bing.com/th/id/OIP.OL9igW7Y6rUk-lusgXnOPAHaGZ?pid=ImgDet&rs=1"');
//}
//else {
//  alert  ('Welcome Again  '+ userName);
//
//}
//var yourInput = prompt ('Have you ever taken care of an animal? ');
//if (yourInput === 'yes') {
//alert ('So you are an animal lover' );
//}
//else{
//    alert ('Any way they are still cute ');
//} */
