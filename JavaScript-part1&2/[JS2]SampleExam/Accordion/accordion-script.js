var controls = (function () {

    //Constructors
    function Accordeon(selector) {
        var items = [];
        
        this.addNode = function (title) {
            var newItem = new Item(title);
            items.push(newItem);
            return newItem;
        }

        this.render = function () {
            var list = document.createElement("ul");
            list.id = selector;

            for (var i = 0; i < items.length; i++) {
                var sibling = items[i].render();                
                list.appendChild(sibling);
            }

            document.getElementsByTagName("body")[0].appendChild(list);
        }

        this.serialize = function () {
            var serializedList = [];

            for (var i = 0; i < items.length; i++) {
                var serializedItem = items[i].serialize();
                serializedList.push(serializedItem);
            }

            return serializedList;
        }
    }

    function Item(title) {
        var items = [];

        this.addNode = function (title) {
            var newItem = new Item(title);
            items.push(newItem);
            return newItem;
        }

        this.render = function () {
            var itemToAppend = document.createElement("li");
            itemToAppend.id = title;
            itemToAppend.innerHTML = "<a href='#'>" + title + "</a>";
            
            if (items.length > 0) {
                var sublist = document.createElement("ul");
                for (var i = 0; i < items.length; i++) {
                    var subEl = items[i].render();                    
                    sublist.appendChild(subEl);
                }
                itemToAppend.appendChild(sublist);
            }
                        
            itemToAppend.addEventListener("click", function (ev) { expandAndCollapse(ev, this) }, false);
            return itemToAppend;
        }

        this.serialize = function () {
            var currentItem = {
                title: title,
                currItems: []
            };

            if (items.length > 0) {
                var serializedList = [];

                for (var i = 0; i < items.length; i++) {
                    var serializedSubItem = items[i].serialize();
                    serializedList.push(serializedSubItem);
                }

                currentItem.currItems = serializedList;
            }

            return currentItem;
        }
    }

    //private functions
    function hidePreviousSibling(item) {
        var prev = item.previousElementSibling;

        while (prev) {
            if (prev.children[1]) {
                prev.children[1].style.display = "none";
            }

            prev = prev.previousElementSibling;
        }
    }

    function hideNextSibling(item) {
        var next = item.nextElementSibling;

        while (next) {
            if (next.children[1]) {
                next.children[1].style.display = "none";
            }

            next = next.nextElementSibling;
        }
    }

    function expandAndCollapse(ev, item) {
        ev.stopPropagation();
        ev.preventDefault();

        hidePreviousSibling(item);
        hideNextSibling(item);

        if (item.children.length > 1) {
            if (item.children[1].style.display === "none") {
                item.children[1].style.display = "";
            }
            else {
                item.children[1].style.display = "none";
            }
        }
    }

    function addItems(item, data) {
        var itemToAdd = item.addNode(data.title);
        if (data.currItems) {
            for (var i = 0; i < data.currItems.length; i++) {
                addItems(itemToAdd, data.currItems[i]);
            }
        }
    }

    //Return results
    return {
        generateAccordeon: function (selector) {
            return new Accordeon(selector);
        },
        rebuildAccordeon: function (selector, storageData) {
            var clonedAcc = new Accordeon(selector);

            for (var i = 0; i < storageData.length; i++) {
                addItems(clonedAcc, storageData[i]);
            }

            return clonedAcc;
        }
    }
})();