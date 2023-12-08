export const getUsername = () => {
    const sessionJson : any = sessionStorage.getItem("hyper_user");
    if (!sessionJson) {
        return null;
    }
    // return 해당 유저의 help 이름
    return JSON.parse(sessionJson).username;
};