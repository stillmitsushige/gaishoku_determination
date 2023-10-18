function displayMessage() {
    var age = document.getElementById("age").value;
    var meal = document.getElementById("meal").value;
    var message = "";

    if (meal == "外食") {
        message = "今日は外食しました";
    } else if (meal == "外食以外" && age == "20代") {
        message = "自炊しました！偉いですね！";
    }

    document.getElementById("message").innerHTML = message;
}