// jQuery must be installed
// Check for img attributes with a loop in jQuery
// Wait for document ready state
$(document).ready(function() {
	// get each image element on the page and loop through
	
	$('img').each(function(_i){
		
		// set variables with this individual elements attributes
		var _e = $(this);
		var _alt = _e.attr('alt');
		var _width = _e.attr('width');
		var _height = _e.attr('height');
		
		// actuals
		var live_width = _e.width();
		var live_height = _e.height();

		// alternate alt text		
		var var_alt = "Add your fallback javascript/asp/php variable for alt text here";
		
		// condition to identify missing or improperly formatted attributes
		// check alt tags
		// if NULL or non existent set with your variable
		if ( _alt ) {
			if( _alt == "" || _alt == " ") {
				_e.attr('alt', var_alt);
			} // end if
		} else {
			_e.attr('alt', var_alt);
		} // end if
		
		// check for width OR height tags
		// if NULL or non existent set with your variable
		if ( _width && !_height || !_width && _height ) {
			if( _width == "" || _width == " " && live_width != "0") {
				_e.attr('width', live_width+"px");
			} else if ( _height == "" || _height == " " && live_height != "0") {
				_e.attr('height', live_height+"px");
			} // end if
		} else if ( !_width && !_height && live_width != "0") {
			_e.attr('width', live_width+"px");
		} else if( live_width == "0" || live_height == "0") {
			_e.attr("width", "auto");
			_e.attr("height", "auto")
		}// end if
	
	}); // end each

});