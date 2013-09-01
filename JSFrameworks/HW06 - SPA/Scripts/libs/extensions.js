(function()
{
    if (!Array.prototype.clean) {
        Array.prototype.clean = function (deleteValue) {
            for (var i = 0; i < this.length; i++) {
                if (this[i].trim() == deleteValue) {
                    this.splice(i, 1);
                    i--;
                }
                else {
                    this[i] = this[i].trim();
                }
            }
            return this;
        };
    }

    if (!String.prototype.htmlEscape) {
        String.prototype.htmlEscape = function () {
            var escapedString = this.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
            return escapedString;
        }
    }
}())