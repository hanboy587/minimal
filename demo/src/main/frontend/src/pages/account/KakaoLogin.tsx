import React, { Component } from "react";
import axios from 'axios';
import { useEffect } from "react";

const CLIENT_ID = '8c0201b0e953c023b2d3ccdf0df0b1fd';
const URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}`;

const KakaoLogin = () => {
	useEffect(() => {
		const kakaoScript = document.createElement("script");
		kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
		document.head.appendChild(kakaoScript);
			console.log('kakao');

		// Kakao sdk 스크립트 로드 완료시
		kakaoScript.onload = () => {
		  window.Kakao.init(CLIENT_ID);
		  window.Kakao.Auth.createLoginButton({
			container: "#kakao-login-btn",
			success: (auth: string) => {
			  console.log("Kakao 로그인 완료", auth);
			  // Kakao 로그인 성공시, 사용자정보 API 호출
			  window.Kakao.API.request({
				url: "/v2/user/me",
				success: (res: string) => {
				  console.log("Kakao 사용자 정보", res);
			   },
			   fail: (err: string) => {
				  console.log(err);
				},
			  });
			},
			fail: (err: string) => {
			console.log('kakao');
			  console.log(err);
			},
		  });
		};
	}, []);
  return  (
    <button type="button" id="kakao-login-btn"></button>
  );
}

export default KakaoLogin; 
