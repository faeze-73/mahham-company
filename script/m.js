//side-Menu
function openSlideMenu(){
    document.getElementById('slide-menu').style.width = "250px";
}

function closeSlideMenu(){
    document.getElementById('slide-menu').style.width = "0px";
 
}	



    $(document).ready(function(){

        $('#autoWidth1').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad:function(){
            $('#autoWidth1').removeClass('cS-hidden');
            }
        });

        // To-top

        $(".scroll-top").click(function(){
            $("html").animate({scrollTop: 0},2000)
        })
    


    });


  






 


   

 
