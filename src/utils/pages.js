export const getPagesCount = (totalCount, limit) =>{
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pagesArray) =>{
    let result=[];
    for (let i=0;i<pagesArray;i++){
        result.push(i+1); 
    }
    return result;

}
