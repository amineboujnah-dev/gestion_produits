package org.sid.catservice.dao;

import org.sid.catservice.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin("*") /* autoriser l'accès au front-end */

@RepositoryRestResource /* Créer le Web Service*/
public interface ProduitRepository extends JpaRepository<Produit,Long> /*JpaRepository est une interface
basée sur Spring Data, elle gère <Produit et id>*/
{
    @RestResource(path = "/byDesignation") /*accéder à cette méthode*/
    public List<Produit> findByDesignationContains(@Param("mc") String des); /*Recherche par mot-clé:afficher une liste*/
    @RestResource(path = "/byDesignationPage") /*accéder à cette méthode*/
    public Page<Produit> findByDesignationContains(@Param("mc") String des, Pageable pageable); /*afficher par page*/
}
