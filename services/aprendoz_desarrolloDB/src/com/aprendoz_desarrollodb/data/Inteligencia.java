
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Inteligencia
 *  02/04/2014 12:37:42
 * 
 */
public class Inteligencia {

    private Integer idInteligencia;
    private String inteligencia;
    private Set<com.aprendoz_desarrollodb.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_desarrollodb.data.Aprendizaje>();

    public Integer getIdInteligencia() {
        return idInteligencia;
    }

    public void setIdInteligencia(Integer idInteligencia) {
        this.idInteligencia = idInteligencia;
    }

    public String getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(String inteligencia) {
        this.inteligencia = inteligencia;
    }

    public Set<com.aprendoz_desarrollodb.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_desarrollodb.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
