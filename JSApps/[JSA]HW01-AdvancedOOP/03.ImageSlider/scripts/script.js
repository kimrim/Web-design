var Image = {
    init: function (name, thumbnail, largeImg) {
        this.name = name;
        this.thumbnail = thumbnail;
        this.largeImg = largeImg;
    }
};

var Button = {
    init: function (id) {
        this.id = id;
    }
};

var Slider = {
    init: function (container, images) {
        this.container = document.querySelector(container);
        this.imgSet = images;
        this.imgContainer = document.createElement("div");
        this.imgContainer.id = "image-container";
        this.imgContainer.style.width = 192 + "px";
        this.nav = document.createElement("div");
        this.nav.id = "nav";
        this.prevBtnInit("previous");
        this.nextBtnInit("next");
    },
    prevBtnInit: function (id) {
        this.prevButton = Object.create(Button);
        this.prevButton.init(id);
    },
    nextBtnInit: function (id) {
        this.nextButton = Object.create(Button);
        this.nextButton.init(id);
    },
    render: function () {
        var btnPrev = document.createElement("button");
        btnPrev.id = this.prevButton.id;
        btnPrev.style.backgroundImage = "url(images/left.jpg)"
        this.nav.appendChild(btnPrev);
        btnPrev.addEventListener("click", this.getPrevious, false);

        this.renderImages();

        var btnNext = document.createElement("button");
        btnNext.id = this.nextButton.id;
        btnNext.style.backgroundImage = "url(images/right.jpg)"
        this.nav.appendChild(btnNext);
        btnNext.addEventListener("click", this.getNext, false);
    },
    getPrevious: function () {
        var slide = document.getElementById("img-slide");
        var position = parseInt(slide.style.left, 10);
        if (position < 0) {
            position += 192;
            slide.style.left = position + "px";
        }
    },
    getNext: function () {
        var slide = document.getElementById("img-slide");
        var position = parseInt(slide.style.left, 10);
        var currentPos = -(parseInt(slide.style.width, 10) - 192);
        if (position > currentPos) {
            position -= 192;
            slide.style.left = position + "px";
        }
    },
    renderImages: function () {
        //create intitial image preview
        var imagePreview = document.createElement("div");
        imagePreview.id = "img-preview";

        var imageLarge = document.createElement("img");
        imageLarge.src = this.imgSet[0].largeImg;
        imagePreview.appendChild(imageLarge);

        //append it to the DOM element holder
        this.container.appendChild(imagePreview);
        var imageSlide = document.createElement("div");
        imageSlide.style.left = 0;
        imageSlide.id = "img-slide";
        var width = 0;

        //append the image set to the slider
        for (var i = 0; i < this.imgSet.length; i++) {
            var currentImg = document.createElement("img");
            currentImg.name = this.imgSet[i].name;
            currentImg.src = this.imgSet[i].thumbnail;
            currentImg.large = this.imgSet[i].largeImg;

            currentImg.addEventListener("click", function () {
                imagePreview.removeChild(imageLarge);                
                imageLarge.src = this.large;                
                imagePreview.appendChild(imageLarge);
            }, false);

            width += 192;
            imageSlide.style.width = width + "px";
            imageSlide.appendChild(currentImg);
        }

        this.imgContainer.appendChild(imageSlide);
        this.nav.appendChild(this.imgContainer);
        this.container.appendChild(this.nav);
    }
}