(function(){
	var list = document.getElementsByTagName("ul");		
	var members = document.getElementsByTagName("li");
	var button = document.getElementById("global");
	var isExp = false;
	
	//Global operation on all members
	button.addEventListener("click", function(){		
		if(!isExp){
			for (var i = 1; i < list.length; i++){		
				list[i].className = "expanded";			
			}
			isExp = true;
		}
		else{
			for (var i = 1; i < list.length; i++){		
				list[i].className = "collapsed";			
			}
			isExp = false;
		}
	});
	
	//Functionality of the single li member
	for(var i = 0; i < members.length; i++){		
		var member = members[i];
		
		member.addEventListener("click", function(event){			
			var elementChildren = this.children;
			
			if(this == event.target && elementChildren.length != 0){
				
				if(elementChildren[0].className == "collapsed") elementChildren[0].className = "expanded";
				else if(elementChildren[0].className == "expanded") elementChildren[0].className = "collapsed";
				
			}
		});
	}
	
})();