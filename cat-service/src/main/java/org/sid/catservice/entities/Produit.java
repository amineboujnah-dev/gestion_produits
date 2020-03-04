package org.sid.catservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
@Entity //pour que ca soit une entité JPA.
@Data /*Getters et setters*/ @NoArgsConstructor @AllArgsConstructor /*Constuctor*/
public class Produit implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) //GeneratedValue : id est généré auto.
    // IDENTITY : avoir un auto increment.
    private Long id;
    private String designation;
    private double price;
    private int quantite;

}
