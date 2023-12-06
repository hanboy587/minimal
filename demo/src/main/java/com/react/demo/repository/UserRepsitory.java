package com.react.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
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
}
