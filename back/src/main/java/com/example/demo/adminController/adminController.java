package com.example.demo.adminController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.adminModel.adminModel;
import com.example.demo.adminRepository.adminRepository;

@RestController
@RequestMapping("/api/v1/")
public class adminController {

	@Autowired
	private adminRepository repo;

	// Get all admins
	@GetMapping("/admin")
	public List<adminModel> getAllAdmins() {
		return repo.findAll();
	}

	// Register a new admin
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/admin/register")
	public ResponseEntity<String> registerAdmin(@RequestBody adminModel newAdmin) {
		// Check if admin with the same name already exists
		Optional<adminModel> existingAdmin = repo.findByAdminName(newAdmin.getAdminName());
		if (existingAdmin.isPresent()) {
			return ResponseEntity.badRequest().body("Admin with this name already exists.");
		}
		// Save new admin
		repo.save(newAdmin);
		return ResponseEntity.ok("True");
	}

	// Admin login
	@PostMapping("/admin/login")
	public ResponseEntity<String> loginAdmin(@RequestBody adminModel admin) {
		// Find the admin by name
		Optional<adminModel> foundAdmin = repo.findByAdminName(admin.getAdminName());
		if (foundAdmin.isPresent()) {
			// Check if the password matches
			if (foundAdmin.get().getAdminPassword().equals(admin.getAdminPassword())) {
				return ResponseEntity.ok("Login successful.");
			} else {
				return ResponseEntity.status(401).body("Invalid password.");
			}
		} else {
			return ResponseEntity.status(404).body("Admin not found.");
		}
	}
}
