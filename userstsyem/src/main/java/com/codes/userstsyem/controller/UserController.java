package com.codes.userstsyem.controller;

import com.codes.userstsyem.model.User;
import com.codes.userstsyem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAllUsers();
    }
    @PostMapping("/add")
    public String add(@RequestBody User u){
        userService.saveUser(u);
        return "New User saved";
    }
}
