package com.codes.userstsyem.services;

import com.codes.userstsyem.model.User;
import com.codes.userstsyem.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepo userRepo;

    @Override
    public User saveUser(User u) {
        return userRepo.save(u);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
