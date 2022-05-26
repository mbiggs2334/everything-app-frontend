const handleFormChange = (func, evt) => {
    const {name, value} = evt.target;
    func(data => ({
        ...data,
        [name]: value
    }));
};

export default handleFormChange;