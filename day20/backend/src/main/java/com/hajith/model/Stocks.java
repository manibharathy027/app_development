package com.hajith.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "stocks_")
public class Stocks {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long pid;
	 	
	 	 @Column(length = 250, nullable = false)
	     private String productName;

	     @Column(nullable = false)
	     private float productPrice;
	     
	     @Column(nullable = false)
	     private float productStatus;
	     
	     @Column(nullable = true)
	     private String productImage;
	     
	     @Column(length = 50000, nullable = true)
	     private String productDesc;
}
