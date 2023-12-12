package com.react.demo.controller;

import com.react.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor //service 사용 가능
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    // 생성자 주입
//    private final UserService userService;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/hello")
    public String test() {
        return "시작해보자";
    }
    @GetMapping("/getusernames")
    public List<String> getAllUserNames() {
        return userRepository.getAllUserNames();
    }

    @GetMapping("/getUserList")
    public List<Map<String, Object>> getUserList() {
        return userRepository.getAllUsers();
    }


}
