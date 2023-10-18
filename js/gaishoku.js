function displayMessage() {
    var age = document.getElementById("age").value;
    var meal = document.getElementById("meal").value;
    var message = "";

    if (age == "20代") {
        if (meal == "外食") {
            message = "今日は外食しました";
        } else if (meal == "外食以外") {
            message = "自炊しました！偉いですね！";
        }
    } else {
        if (meal == "外食") {
            message = "今日は外食しました";
        } else if (meal == "外食以外") {
            message = "自炊した可能性はあるかもしれませんね！";
        }
    }

    document.getElementById("message").innerHTML = message;
}