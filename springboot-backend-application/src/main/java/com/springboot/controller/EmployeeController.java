package com.springboot.controller;

import com.springboot.model.Employee;
import com.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by john.grant on 8/13/22.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    /**
     * Get All Employees.
     *
     * MySQL Command in order to test.
     * INSERT INTO `employees` (`id`, `email_id`,  `first_name`, `last_name`) VALUES (1, 'john@mitchell-grant.com', 'john', 'mitchell-grant');
     * INSERT INTO `employees` (`id`, `email_id`,  `first_name`, `last_name`) VALUES (2, 'jared@mitchell-grant.com', 'jared', 'mitchell-grant');
     *
     * @return List<Employee> List of employees
     */
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
