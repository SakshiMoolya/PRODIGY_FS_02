package com.codewithsakshi.fullstack_backend.repository;

import com.codewithsakshi.fullstack_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
