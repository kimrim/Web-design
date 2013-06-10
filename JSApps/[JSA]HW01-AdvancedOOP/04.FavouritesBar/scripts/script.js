var URL = Class.create({
    init: function (title, url) {
        this.title = title;
        this.url = url;
    }
});

var Folder = Class.create({
    init: function (title, urls) {
        this.title = title;
        this.urlSet = urls;
    }
});

var FavouritesBar = Class.create({
    init: function (urls, folders) {
        this.urlSet = urls;
        this.folderSet = folders;
        this.container = document.getElementById("wrapper");
    },
    render: function () {
        this.favBar = document.createElement("ul");
        this.favBar.id = "favourites";
        
        this.renderFolders();
        this.renderUrls();
        
        this.container.appendChild(this.favBar);
    },
    renderFolders: function () {
        if (!this.folderSet) {
            return;
        }

        for (var i = 0; i < this.folderSet.length; i++) {
            var currFolder = this.folderSet[i];
            var sub = document.createElement("ul");
            var subTitle = document.createElement("span");
            sub.id = currFolder.title;
            subTitle.innerHTML = currFolder.title;
            sub.appendChild(subTitle);

            for (var j = 0; j < currFolder.urlSet.length; j++) {
                var urlFromList = currFolder.urlSet[j];
                var item = document.createElement("li");
                var urlContent = document.createElement("a");
                urlContent.innerHTML = urlFromList.title;
                urlContent.href = urlFromList.url;
                urlContent.target = "_blank";
                item.appendChild(urlContent);

                sub.appendChild(item);
            }

            subTitle.addEventListener("click", function (ev) {
                ev.stopPropagation();
                if (ev.target == this) {
                    for (var k = 1; k < this.parentNode.children.length; k++) {
                        if (this.parentNode.children[k].style.display == "none") {                            
                            this.parentNode.children[k].style.display = "";
                        }
                        else {
                            this.parentNode.children[k].style.display = "none";
                        }
                       
                    }
                }
            }, false);
            this.favBar.appendChild(sub);
        }
    },
    renderUrls: function () {
        if (!this.urlSet) {
            return;
        }

        for (var i = 0; i < this.urlSet.length; i++) {
            var urlFromList = this.urlSet[i];
            var item = document.createElement("li");
            var urlContent = document.createElement("a");
            urlContent.innerHTML = urlFromList.title;
            urlContent.href = urlFromList.url;
            urlContent.target = "_blank";
            item.appendChild(urlContent);

            this.favBar.appendChild(item);
        }
    }
});