const FollowToggle = require('./follow_toggle'); 

$(function() { 
  // find all buttons with follow-toggle class and then iterate through all 
  let $buttons = $('.follow-toggle'); 
  for (let i = 0; i < $buttons.length; i++) { 
    $buttons.each((i, element) => { 
      // call follow toggle in here 
      new FollowToggle($(element)); 
    }); 
  }
});
