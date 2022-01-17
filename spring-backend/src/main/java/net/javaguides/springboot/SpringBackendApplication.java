package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {

		// Employee employee = new Employee();
		// employee.setFirstName("John");
		// employee.setLastName("Smith");
		// employee.setEmailId("john_smith@gmail.com");
		// employeeRepository.save(employee);
		//
		// Employee employee1 = new Employee();
		// employee1.setFirstName("Sarah");
		// employee1.setLastName("Connor");
		// employee1.setEmailId("skonnor@gmail.com");
		// employeeRepository.save(employee1);
		//
	}
}
