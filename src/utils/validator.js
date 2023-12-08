const signInValidator = (email, pwd) => {
    const emailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    const pwdValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);

    if (!emailValid) return "Email not valid";
    if (!pwdValid) return "Password not valid";
    return null;
}

const signUpValidator = (name, email, pwd) => {
    const nameValid = /^[A-Za-z ]+$/.test(name)
    const emailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    const pwdValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);

    if (!nameValid) return "Enter valid name(should contain only alphabets)"
    if (!emailValid) return "Email not valid";
    if (!pwdValid) return "Password not valid";
    return null;
}

export { signInValidator, signUpValidator }