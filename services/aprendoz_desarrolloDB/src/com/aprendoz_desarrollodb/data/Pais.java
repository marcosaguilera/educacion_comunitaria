
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Pais
 *  08/20/2014 07:29:45
 * 
 */
public class Pais {

    private Integer idPais;
    private String pais;
    private Set<com.aprendoz_desarrollodb.data.EstadoDepartamento> estadoDepartamentos = new HashSet<com.aprendoz_desarrollodb.data.EstadoDepartamento>();
    private Set<com.aprendoz_desarrollodb.data.Persona> personas = new HashSet<com.aprendoz_desarrollodb.data.Persona>();
    private Set<com.aprendoz_desarrollodb.data.PersonaCopy> personaCopies = new HashSet<com.aprendoz_desarrollodb.data.PersonaCopy>();

    public Integer getIdPais() {
        return idPais;
    }

    public void setIdPais(Integer idPais) {
        this.idPais = idPais;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<com.aprendoz_desarrollodb.data.EstadoDepartamento> getEstadoDepartamentos() {
        return estadoDepartamentos;
    }

    public void setEstadoDepartamentos(Set<com.aprendoz_desarrollodb.data.EstadoDepartamento> estadoDepartamentos) {
        this.estadoDepartamentos = estadoDepartamentos;
    }

    public Set<com.aprendoz_desarrollodb.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollodb.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_desarrollodb.data.PersonaCopy> getPersonaCopies() {
        return personaCopies;
    }

    public void setPersonaCopies(Set<com.aprendoz_desarrollodb.data.PersonaCopy> personaCopies) {
        this.personaCopies = personaCopies;
    }

}
