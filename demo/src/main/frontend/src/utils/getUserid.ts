export const getUserid = () => {
    const sessionJson : any = sessionStorage.getItem("hyper_user");
    if (!sessionJson) {
        return null;
    }
    // 로그인한 세션의 id 값
    return JSON.parse(sessionJson).id;
};