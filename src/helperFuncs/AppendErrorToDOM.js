const appendErrorToDOM = (message, element) => {
    element.append(`<p>${message}</p>`);
};

export default appendErrorToDOM;