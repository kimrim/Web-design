var myConsole = (function () {
    function formatString() {        
        var result = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            var pattern = "\\{" + (i - 1) + "\\}";
            result = result.replace(new RegExp(pattern, "g"), arguments[i]);
        }
        return result;
    }

    function writeLine(value, parameters) {
        var output = formatString(value, parameters);
        console.log(output);
    }

    function writeError(value, parameters) {
        var output = formatString(value, parameters);
        console.error(output);
    }

    function writeWarning(value, parameters) {
        var output = formatString(value, parameters);
        console.warn(output);
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    }
})();