var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let tmHeader = document.getElementById('tm-header');
    tmHeader.textContent = customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.getElementById('introheader');
    introHeader.textContent = customerName;

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let classesToBeChanged = document.getElementsByClassName('tm-white-rect')
    

    for (i = 0; i < classesToBeChanged.length; ++i) {
        classesToBeChanged[i].classList.add('tm-blue-rect');
        classesToBeChanged[i].classList.remove('tm-white-rect');
    }

    // classesToBeChanged.remove('tm-white-rect')
    // classesToBeChanged.add('tm-blue-rect')

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->


    let hideLinks = document.getElementsByClassName('tm-social-links')

    if (hideLinks.length > 0) {
        // Access the first (and only) element in the collection
        hideLinks[0].style.visibility = "hidden";
    }

    // let hideLink = document.querySelector('.tm-social-links');
    // socialLink.style.visibility = "hidden";

};



 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let introPara1Text = "Alliance was founded in 1931 by Albert Daniels."    
    let introPara1 = document.getElementById('intropara1')
    introPara1.textContent = introPara1Text

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let introPara2Text = "The company is a leader in P.C. Manufacturing"    
    let introPara2 = document.getElementById('intropara2')
    introPara2.textContent = introPara2Text

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let aboutPara1Text = "We deliver the best service this side of creation"    
    let aboutPara1 = document.getElementById('aboutpara1')
    aboutPara1.textContent = aboutPara1Text

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutPara2Text = "Our motto is satisfaction guaranteed"    
    let aboutPara2 = document.getElementById('aboutpara2')
    aboutPara2.textContent = aboutPara2Text

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let addressParaText = "1-800-565-5656"    
    let addressPara = document.getElementById('addresspara')
    addressPara.textContent = addressParaText
}; 


