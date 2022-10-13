const handleSubmit = (event, results) => {
    event.preventDefault();
    let newResults = structuredClone(results);
    for(let result in newResults){
        if(event.target[result].checked){
            newResults[result].votes = newResults[result].votes + 1;
            break;
        }
    }
    return newResults;
};

export default handleSubmit;