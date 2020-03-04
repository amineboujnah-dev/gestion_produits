package org.sid.catservice.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "P1", types = Produit.class) /* une projection s'applique à la classe Produit */
public interface ProduitProjection {
    public double getPrice();
    public String getDesignation();
}
