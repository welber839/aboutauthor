var listItem = document.querySelectorAll('.listItem');
var para = document.querySelectorAll('.para');



function test(e){
    var height = 50+114.107;
    if (e.target.getAttribute('value') !=0){
        for (var i = 0; i < e.target.getAttribute('value'); i++){
            height = height + para[i].clientHeight + 21.44;
        }
    }

    window.document.body.scrollTop = height;
    window.document.documentElement.scrollTop = height;
}


for(var j=0;j<listItem.length;j++){
    listItem[j].addEventListener('click',test);
}
