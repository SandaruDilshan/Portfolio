var work_list_links= document.getElementsByClassName("work-list-links");
var work_projects= document.getElementsByClassName("work");

function OpenWork(tabidname){
    for(worklink of work_list_links){
        worklink.classList.remove("work-active-link");
    }
    
    for(works of work_projects){
        works.classList.remove("work-active-tab");
    }
    event.currentTarget.classList.add("work-active-link");
    document.getElementById(tabidname).classList.add("work-active-tab")
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(y of tablinks){
        y.classList.remove("active-link");
    }

    for(t of tabcontents){
        t.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

/**********************************/ 
var sidemenu= document.getElementById("sidemenu");

function openmenue(){
    sidemenu.style.right = " 0";
}

function closemenue(){
    sidemenu.style.right = " -200px";
}

