var content = document.getElementById("content");
var page1 = document.getElementById("p1");
var page2 = document.getElementById("p2");
var page3 = document.getElementById("p3");
var page4 = document.getElementById("p4");
var progress = document.getElementsByClassName('progressTest');
console.log(progress);

captionText= document.getElementById("caption")

function showPage1()
{
    content.setAttribute("class", "");
    page1.classList.add('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    page4.classList.remove('active');
}
function showPage2()
{
    content.setAttribute("class", "showPage2");
    page1.classList.remove('active');
    page2.classList.add('active');
    page3.classList.remove('active');
    page4.classList.remove('active');
}
function showPage3()
{
    content.setAttribute("class", "showPage3");
    page1.classList.remove('active');
    page2.classList.remove('active');
    page3.classList.add('active');
    page4.classList.remove('active');
}
function showPage4()
{
    content.setAttribute("class", "showPage4");
    page1.classList.remove('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    page4.classList.add('active');
}



  //jquery
  $(document).ready(function(){

    //? Modal

    //quand on clique sur une image
    $("img").on('click', function(){
        //affichage de la modal en modifiant le css de la modal
        $("#myModal").css("display", "block");

        //ajout de la source de l'image dans le contenu de la modal en fonction de la source de l'image cliquée
        $("#img01").attr("src", $(this).attr("src"));
        captionText.innerHTML = this.alt;
        //affiche bouton fermeture
        $(".close").css("display", "block");
    });

    //si on clique sur le bouton, on ferme la modal en modifiant le css
    $(".close").on("click", function(){
        $("#myModal").css("display", "none");
    });	
    
    //?M Progress bar

    $('#p2').on('click', function(){
            $('.progressTest').addClass('progressTestAfter');
    })

    //? Navbar

});