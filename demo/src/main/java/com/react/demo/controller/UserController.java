package com.react.demo.controller;

import com.react.demo.repository.UserRepsitory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor //service 사용 가능
public class UserController {
    // 생성자 주입
//    private final UserService userService;
    @Autowired
    UserRepsitory userRepsitory;

    @GetMapping("/api/hello")
    public String test() {
        return "시작해보자";
    }
    @GetMapping("/api/getusernames")
    public List<String> getAllUserNames() {
        return userRepsitory.getAllUserNames();
    }

    @GetMapping("/api/getUserList")
    public List<Map<String, Object>> getUserList() {
        return userRepsitory.getAllUsers();
    }

}
