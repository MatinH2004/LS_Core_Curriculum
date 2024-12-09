function displayUserInfo(userInfo) {
    return "Name: ".concat(userInfo.name, "\n") +
        "Email: ".concat(userInfo.email || 'N/A', "\n") +
        "Age: ".concat(userInfo.age || 'Unknown');
}
