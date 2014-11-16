function dataBox() {

	this.count = 0; //The number of data boxes being displayed
	var yHeightStart = 90;
	var yHeight = yHeightStart; //The y height to start adding boxes
	
	var containerIDs = []; //An array of all the containers created
	var valueIDs = []; //Stores the ID of the html components
	
	var gap = 90; 
	
	var setValue = function(index, value){
		var element = document.getElementById(valueIDs[index]);
		element.innerHTML = value;
	};
	
	var removeBox = function(index){
		var element = document.getElementById(containerIDs[index]);
		element.parentNode.removeChild(element);
		for (var i = index + 1; i < this.count; i++){
			var element = document.getElementById(containerIDs[i]);
			var pos = yHeightStart + ( (i-1) * gap);
			element.style.cssText = 'width: 160px; opacity: 0.9; cursor: pointer; position: absolute; left: 0px; top: ' + pos + 'px;';
			valueIDs[i-1] = valueIDs[i];
			containerIDs[i-1] = containerIDs[i];
		}
		yHeight -= gap;		
		this.count--;		
	};
	
	var addBox = function (name){
	
		valueIDs[this.count] = 'Text2' + this.count;
		containerIDs[this.count] = 'boxes' + this.count;
	
		var container = document.createElement( 'div' );
		container.id = 'boxes' + this.count;
		container.style.cssText = 'width: 160px; opacity: 0.9; cursor: pointer; position: absolute; left: 0px; top: ' + yHeight + 'px;';
	
		var value = document.createElement( 'div' );
		value.id = 'value';
		value.style.cssText = 'padding: 0px 0px 3px 3px; text-align: left; display: block; background-color: rgb(0, 0, 0);';
		container.appendChild( value );
	
		var Text = document.createElement( 'div' );
		Text.id = 'Text';
		Text.style.cssText = 'color: rgb(0, 255, 100); font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; line-height: 30px;text-align:center;';
		Text.innerHTML = name;
		value.appendChild( Text );
		
		var value2 = document.createElement( 'div' );
		value2.id = 'value2';
		value2.style.cssText = 'position: relative; width: 98%; height: 30px; background-color: rgb(17, 17, 17);';
		Text.appendChild( value2 );		
		
		var Text2 = document.createElement( 'div' );
		Text2.id = 'Text2' + this.count;
		Text2.style.cssText = 'color: rgb(255, 255, 255); font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: bold; line-height: 30px;text-align:center;';
		Text2.innerHTML = 'N/A';
		value2.appendChild( Text2 );
		
		document.body.appendChild( container );
		
		this.count += 1;
		yHeight += gap;
	};
	
	
	return {
		addBox : addBox,
		removeBox : removeBox,
		setValue : setValue,
		count : this.count
		}
	
	
	

};