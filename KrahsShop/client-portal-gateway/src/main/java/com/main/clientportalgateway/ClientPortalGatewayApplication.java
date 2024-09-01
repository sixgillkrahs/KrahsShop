package com.main.clientportalgateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ClientPortalGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientPortalGatewayApplication.class, args);
    }

}
