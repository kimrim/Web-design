/// <reference path="jquery-2.0.3.js" />
/// <reference path="class.js" />
define(["libs/class"], function (Class) {
	var controls = controls || {};
	var ComboView = Class.create({
		init: function (itemsSource) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a ListView must be an array!";
			}
			this.itemsSource = itemsSource;
		},
		render: function (template, templateObject) {
			var list = document.createElement("ul");
			list.setAttribute("id", templateObject + "-list");

			for (var i = 0; i < this.itemsSource.length; i++) {
			    var listItem = document.createElement("li");
			    var item = this.itemsSource[i];
			    listItem.setAttribute("class", templateObject);
			    listItem.setAttribute("id", item.id);

			    listItem.innerHTML = template(item);
			    list.appendChild(listItem);
			}

			return list.outerHTML;
		}
	});
	controls.comboView = function (itemsSource) {
		return new ComboView(itemsSource);
	}

	return controls;
});