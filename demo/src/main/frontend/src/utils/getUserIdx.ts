export const getUserIdx = () => {
    const sessionJson : any = sessionStorage.getItem("hyper_user");
    if (!sessionJson) {
        return null;
    }
    // return 해당 유저의 help idx 값
    return JSON.parse(sessionJson).id;
};