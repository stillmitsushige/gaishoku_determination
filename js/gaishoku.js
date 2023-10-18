function displayMessage() {
    var age = document.getElementById("age").value;
    var meal = document.getElementById("meal").value;
    var messageElement = document.getElementById("message");

    messageElement.innerHTML = "";
    messageElement.className = "";

    if (age == "20代") {
        if (meal == "外食") {
            messageElement.innerHTML = "今日は外食しました";
        } else if (meal == "外食以外") {
            messageElement.innerHTML = "自炊しました！偉いですね！";
            messageElement.className = "special-message";
        }
    } else {
        if (meal == "外食") {
            messageElement.innerHTML = "今日は外食しました";
        } else if (meal == "外食以外") {
            messageElement.innerHTML = "自炊した可能性はあるかもしれませんね！";
        }
    }
}