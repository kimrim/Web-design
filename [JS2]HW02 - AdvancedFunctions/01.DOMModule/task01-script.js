var domModule = (function(){
	var bufferList = [];
	var MAX_BUFFER = 3;
	
	function getElement(elementSelector){
		return document.querySelector(elementSelector);
	}
	
	function appendChild(child, idOfParent){
		var parentEl = document.querySelector(idOfParent);
		parentEl.appendChild(child);
	}
	
	function removeChild(parentSelector, childSelector){		
		var childrenToRemove = document.querySelectorAll(parentSelector + " " + childSelector);
		
		for(var i = 0; i < childrenToRemove.length; i++){
			var childElement = childrenToRemove[i];
			childElement.parentNode.removeChild(childrenToRemove[i]);
		}
	}
	
	function addHandler(targetSelector, eventToListen, eventFunction){		
		var targetEl = document.querySelector(targetSelector);
		targetEl.addEventListener(eventToListen, eventFunction, false);
	}
	
	function appendToBuffer(parentSelector, elementType, text){
		var element = document.createElement(elementType);
		if(text != null && text != "") element.innerHTML = text;
		if(bufferList.length == MAX_BUFFER){
			for(var i = 0; i < MAX_BUFFER; i++){
				appendChild(bufferList[i], parentSelector);
			}
			bufferList = new Array();			
		}		
			
			bufferList.push(element);		
	}
	
	return {
		getElement: getElement,
		appendChild: appendChild,
		removeChild: removeChild,
		addHandler: addHandler,
		appendToBuffer: appendToBuffer		
	};
})();