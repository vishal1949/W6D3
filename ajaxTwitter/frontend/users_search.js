class UsersSearch {
  constructor($el) {
    this.$el = $el; 
    this.$ul = $el.children('.users'); 
    this.$input = $('input'); 
  }

  handleInput(){
    APIUtil.searchUsers(this.$input.val(), successCBoy);
  }

  renderResults(){
    
  }
  
} 