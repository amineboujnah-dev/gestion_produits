package org.sid.catservice;

import org.sid.catservice.dao.ProduitRepository;
import org.sid.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class CatServiceApplication implements CommandLineRunner /*implementer une interface CommandLineRunner, démarrer
l'app => SpringApplication.run => la méthode run. */ {
    @Autowired /*permet d'injecter les dépendances*/

    private ProduitRepository produitRepository;

    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(CatServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Produit.class); /*afficher id à chaque fois */
        produitRepository.save(new Produit(null,"ordinateur Lx 40",6700,3));
        produitRepository.save(new Produit(null,"Imprimante HP",1700,33));
        produitRepository.save(new Produit(null,"Smart Phone Samsung S9",800,13));

        produitRepository.findAll().forEach(p-> {
            System.out.println(p.toString());
        });

    }
}
