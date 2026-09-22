package com.example.advanced_mappings.controller;

import com.example.advanced_mappings.model.Student;
import com.example.advanced_mappings.model.Club;
import com.example.advanced_mappings.repository.StudentRepository;
import com.example.advanced_mappings.repository.ClubRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository studentRepository;
    private final ClubRepository clubRepository;

    public StudentController(StudentRepository studentRepository, ClubRepository clubRepository) {
        this.studentRepository = studentRepository;
        this.clubRepository = clubRepository;
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        if (student.getCourses() != null) {
            student.getCourses().forEach(course -> course.setStudent(student));
        }
        return studentRepository.save(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping("/clubs")
    public Club createClub(@RequestBody Club club) {
        return clubRepository.save(club);
    }
}