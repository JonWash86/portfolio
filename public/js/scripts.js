const projectView = {};

projectView.initPage = function(){
  console.log('initializing');
  Project.all.forEach(function(project){
    console.log('foo bar');
    $('#projectZone').append(project.toHtml());
  })
};

function projectPop(){
  for(var u = 0; u < projects.length; u++) {
    var popup = document.getElementById('popup');
    var popupInner = document.createElement('div');
    var exitPopup = document.createElement('a');
    exitPopup.setAttribute('class', 'exit-popup');
    exitPopup.innerText = 'X';
    exitPopup.setAttribute('onclick', 'location.reload()');
  }
};

$('.material-icons').mouseover(function(){
    $('.sidenav ul').slideDown();
});

$('.sidenav ul').mouseleave(function(){
  $('.sidenav ul').slideUp();
});