/// <reference path="jquery-2.0.3.js" />
/// <reference path="class.js" />
var controls = controls || {};
(function (c) {
	var TableView = Class.create({
		init: function (itemsSource, rows, cols) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a TreeView must be an array!";
			}
			if ((!rows && !cols) || (rows == 0 && cols == 0)) {
			    throw "The table dimensions cannot be 0!";
			}
			this.itemsSource = itemsSource;
			this.rows = rows;
			this.cols = cols;
		},
		render: function (template) {
		    var table = document.createElement("table");

		    for (var i = 0; i < this.itemsSource.length; i++) {
		        if (i % this.cols == 0) {
		            table.appendChild(document.createElement("tr"));
		        }

				var listItem = document.createElement("td");
				var item = this.itemsSource[i];
				listItem.innerHTML = template(item);
				table.lastChild.appendChild(listItem);
			}

			return table.outerHTML;
		}
	});    

	c.getTableView = function (itemsSource, rows, cols) {
	    return new TableView(itemsSource, rows, cols);
	}
}(controls || {}));