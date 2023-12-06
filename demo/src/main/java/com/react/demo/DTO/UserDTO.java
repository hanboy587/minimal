package com.react.demo.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
    private int userNo;
    private String userName;

//    public static UserDTO toUserDTO(UserEntity userEntity) {
//        UserDTO userDTO = new UserDTO();
//        userDTO.setUserNo(userEntity.getUserNo);
//        userDTO.setUserName(userEntity.getUserName);
//
//        return userDTO;
//    }
}
