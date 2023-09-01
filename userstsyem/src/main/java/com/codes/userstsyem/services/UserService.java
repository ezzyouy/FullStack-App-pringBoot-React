package com.codes.userstsyem.services;

import com.codes.userstsyem.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User u);
    public List<User> getAllUsers();
}
