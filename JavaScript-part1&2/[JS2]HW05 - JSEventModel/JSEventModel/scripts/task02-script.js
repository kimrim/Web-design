(function () {
    var taskList = document.getElementById("todo-list");

    //add item event
    document.getElementById("addItem").addEventListener("click", function () {
        var inputItem = document.getElementById("input").value;
        if (inputItem == null || inputItem == "") {
            return;
        }

        var newItem = document.createElement("li");
        newItem.innerHTML = inputItem;
        taskList.appendChild(newItem);
    }, false);

    //remove item event
    document.getElementById("removeItem").addEventListener("click", function () {
        var inputItem = document.getElementById("input").value;
        if (inputItem == null || inputItem == "") {
            return;
        }

        for (var i = 0; i < taskList.children.length; i++) {
            if (taskList.children[i].innerHTML == inputItem) {
                taskList.removeChild(taskList.children[i]);
            }
        }
    }, false);

    //show-hide items event
    document.getElementById("show-hide").addEventListener("click", function () {
        
        for (var i = 0; i < taskList.children.length; i++) {
            if (taskList.children[i].style.display == "none") {
                taskList.children[i].style.display = "list-item";
            }
            else {
                taskList.children[i].style.display = "none";
            }
        }
    }, false);
})();