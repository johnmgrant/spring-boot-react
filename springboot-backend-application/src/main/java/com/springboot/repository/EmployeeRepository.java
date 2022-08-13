package com.springboot.repository;

import com.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by john.grant on 8/13/22.
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
