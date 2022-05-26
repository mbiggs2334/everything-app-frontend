class SortNotes {
    static sortRecent(age){
        if(age === "Oldest"){
            return (a,b) => (a.lastModified < b.lastModified) ? -1 : ((a.lastModified < b.lastModified) ? 1 : 0);
        };
        if(age === "Newest"){
            return (a,b) => (a.lastModified > b.lastModified) ? -1 : ((a.lastModified > b.lastModified) ? 1 : 0);
        };
    }

    static sortCreated(age){
        if(age === "Oldest"){
            return (a,b) => (a.dateCreated < b.dateCreated) ? -1 : ((a.dateCreated < b.dateCreated) ? 1 : 0);
        };
        if(age === "Newest") {
            return (a,b) =>(a.dateCreated > b.dateCreated) ? -1 : ((a.dateCreated > b.dateCreated) ? 1 : 0);
        };
    }

    static sort(func, age, sortType){
        if(sortType === "Recent"){
            func(data => [...data.sort(this.sortRecent(age))]);
        };
        if(sortType === "Date Created"){
            func(data => [...data.sort(this.sortCreated(age))]);
        };
    }
};

export default SortNotes;