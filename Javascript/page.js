var userName = prompt ('what is your name? ');
alert ('Welcome' + userName);
var favoriteAnimal = prompt ('What is your favoriteAnimal ? ','Cat, Dog, Birds',);
if (favoriteAnimal === 'Cat') {
    document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
    document.write ('<img src ="http://4.bp.blogspot.com/-MzZCzWI_6Xc/UIUQp1qPfzI/AAAAAAAAHpA/OTwHCJSWFAY/s1600/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg">');
}
else if (favoriteAnimal === 'Dog'){
    document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
document.write ('<img src ="https://th.bing.com/th/id/R4c645084ac66cc9c140856b8c5d20916?rik=orn21qtf%2bPLsXg&pid=ImgRaw"');   
}
else if (favoriteAnimal === 'Birds'){
    document.write ('<h3>' + 'Your Faorite Animal is :' +'</h3>');
    document.write ('<img src ="https://th.bing.com/th/id/OIP.OL9igW7Y6rUk-lusgXnOPAHaGZ?pid=ImgDet&rs=1"');
}
else {
  alert  ('Welcome Again '+ userName);

}