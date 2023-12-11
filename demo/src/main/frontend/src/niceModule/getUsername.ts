export const getUsername = () => {
    const sessionJson : any = sessionStorage.getItem("hyper_user");
    if (!sessionJson) {
        return null;
    }
    return JSON.parse(sessionJson).username;
};