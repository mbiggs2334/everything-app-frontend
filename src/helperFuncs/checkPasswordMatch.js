const checkPasswordMatch = (password1, password2) => {
    if(password1 !== password2) return false;
    return true;
};

export default checkPasswordMatch;