export const makeTime = (item:any) => {
    if(item != null){

        const date = new Date(item);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        const timeWork = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        
        // return ex)01:10
        // return ex)21:10
        return timeWork;
    }
}