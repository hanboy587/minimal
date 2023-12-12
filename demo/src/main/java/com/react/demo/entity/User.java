package com.react.demo.entity;
import lombok.*;
import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "`member`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "idx")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(name = "name", length = 50, unique = true)
    private String name;

    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "activated")
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "idx", referencedColumnName = "idx")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;
}