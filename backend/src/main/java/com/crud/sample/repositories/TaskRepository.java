package com.crud.sample.repositories;

import com.crud.sample.model.Task;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
@Tag(name = "REST API endpoints for Task Entity")
public interface TaskRepository extends JpaRepository<Task, Long> {
}
