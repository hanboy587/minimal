package com.react.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.*;
//import java.util.ArrayList;

@Repository
public class UserRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    // users table의 userName 컬럼 반환 - 연동 테스트용
    public List<String> getAllUserNames() {
        List<String> usernameList = new ArrayList<>();
        usernameList.addAll(jdbcTemplate.queryForList("select userName from users;", String.class));

        return usernameList;
    }

    // users table의 모든 컬럼 반환 - grid 출력용
    public List<Map<String, Object>> getAllUsers() {
        List<Map<String, Object>> userList = new ArrayList<>();
        userList.addAll(jdbcTemplate.queryForList("select userNo, userName from users"));

        return userList;
    }
}
