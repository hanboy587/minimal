export const getRealname = () => {
    const sessionJson : any = sessionStorage.getItem("hyper_user");
    if (!sessionJson) {
        return null;
    }
    // 로그인한 세션의 사용자 이름
    return JSON.parse(sessionJson).realname;
};