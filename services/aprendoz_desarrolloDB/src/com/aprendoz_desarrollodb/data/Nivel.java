
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Nivel
 *  02/19/2014 10:16:55
 * 
 */
public class Nivel {

    private Integer idNivel;
    private String nivel;
    private String levelName;
    private Set<com.aprendoz_desarrollodb.data.Grado> grados = new HashSet<com.aprendoz_desarrollodb.data.Grado>();
    private Set<com.aprendoz_desarrollodb.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_desarrollodb.data.SesionNivel>();
    private Set<com.aprendoz_desarrollodb.data.InscDirectorNivel> inscDirectorNivels = new HashSet<com.aprendoz_desarrollodb.data.InscDirectorNivel>();

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public Set<com.aprendoz_desarrollodb.data.Grado> getGrados() {
        return grados;
    }

    public void setGrados(Set<com.aprendoz_desarrollodb.data.Grado> grados) {
        this.grados = grados;
    }

    public Set<com.aprendoz_desarrollodb.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_desarrollodb.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_desarrollodb.data.InscDirectorNivel> getInscDirectorNivels() {
        return inscDirectorNivels;
    }

    public void setInscDirectorNivels(Set<com.aprendoz_desarrollodb.data.InscDirectorNivel> inscDirectorNivels) {
        this.inscDirectorNivels = inscDirectorNivels;
    }

}
