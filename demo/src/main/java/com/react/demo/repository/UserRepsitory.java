package com.react.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.*;
//import java.util.ArrayList;

@Repository
public class UserRepsitory {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<String> getAllUserNames() {
        List<String> usernameList = new ArrayList<>();
        usernameList.addAll(jdbcTemplate.queryForList("select userName from users;", String.class));

        return usernameList;
    }

//    public Map<String, Object> getAllUsers() {
//        List<Map<String, Object>> resultList = jdbcTemplate.queryForList("select userNo, userName from users;");
//
//        Map<String, Object> userList = new HashMap<>();
//
//        for (Map<String, Object> result : resultList) {
//            String userNo = result.get("userNo").toString();
//            String userName = result.get("userName").toString();
//            userList.put(userNo, userName);
//        }
//
//        return userList;
//    }

    public List<Map<String, Object>> getAllUsers() {
        List<Map<String, Object>> userList = new ArrayList<>();
        userList.addAll(jdbcTemplate.queryForList("select userNo, userName from users"));

        return userList;
    }
}
