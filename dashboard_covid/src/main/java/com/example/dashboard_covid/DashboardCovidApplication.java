package com.example.dashboard_covid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class DashboardCovidApplication {
	private static final Logger log = LoggerFactory.getLogger(DashboardCovidApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(DashboardCovidApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}
	
	@Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
			Status status = restTemplate.getForObject("https://covid19-api.org/api/status", Status.class);
			log.info(status.toString());
		};
	}
}
