import jwtDecode from 'jwt-decode';

export const authLevel = (res: any) => {
    let idLevel: { [key: string]: any[] } = {};
    const jwt: any = res.config.headers.Authorization;
    idLevel = jwtDecode(jwt);

    // 로그인한 계정의 jwt 토큰 값을 해석하여 부여 된 보안 레벨 판별 값
    // 0~4
    return idLevel.ApprovalAuthorityLevel;
}