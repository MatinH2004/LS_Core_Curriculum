function formatName(_a) {
    var _b = _a.firstName, firstName = _b === void 0 ? 'John' : _b, _c = _a.lastName, lastName = _c === void 0 ? 'Doe' : _c, title = _a.title;
    var formattedName = title ? title + ' ' : '';
    formattedName += "".concat(firstName, " ").concat(lastName);
    return formattedName;
}
var formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
