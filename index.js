function handleSubmit() {
    email = document.querySelector("input").value
    feedback = document.querySelector("textarea").value

    if (email === "") {
        window.alert("Preencha o campo email")
    } else if (feedback === "") {
        window.alert("Preencha o campo feedback")
    } else {
        window.alert("Feedback enviado com sucesso!")
    }
}