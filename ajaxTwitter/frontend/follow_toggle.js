const APIUtil = require('./api_util');
class FollowToggle{
  constructor($el){
    // debugger
    this.userId = $el.data('user-id'); 
    this.followState = $el.data('initial-follow-state'); 
    this.$el = $el; 
    
    // set this as an event handler 
    this.render(); 
    // this.$el.css('border', '1px solid red');
    this.$el.on('click', this.handleClick.bind(this)); 
  }

  render() {
    // debugger 
    if (this.followState === 'unfollowed') { 
      this.$el.html("Follow!"); 
      // text should be 'follow' 
    } else if(this.followState === 'followed') { 
      this.$el.html("Unfollow!"); 
    } 
    this.$el.prop('disabled', false);
  } 

  handleClick(e) { 
    // this prevents the button from submitting the request itself and refreshing the page 
    e.preventDefault(); 
    this.$el.prop('disabled', true);
    // this is checking the state and depending on it's success, will toggle it's state appropriately 
    if( this.followState === 'unfollowed'){ 
      // this is re-routing the request to check the state and use the right server action 
      APIUtil.followUser(this.userId).then(() => { 
        // changing the data of the element's inner HTML 
        this.followState = 'followed'; 
        this.render();
      }); 
    } else if(this.followState === 'followed'){
      APIUtil.unfollowUser(this.userId).then(() => { 
        this.followState = 'unfollowed'; 
        this.render(); 
      }); 
    } 
  } 
} 

module.exports = FollowToggle; 