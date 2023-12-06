package com.react.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@Controller
public class NewController {
    @GetMapping("start")
    public List<String> start() {
        return Arrays.asList("이제 시작", "ㅇ으윽");
    }


}
