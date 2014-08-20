
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoRecurso
 *  08/20/2014 07:29:44
 * 
 */
public class TipoRecurso {

    private Integer idTipoRecurso;
    private String tipoRecurso;
    private Set<com.aprendoz_desarrollodb.data.Recurso> recursos = new HashSet<com.aprendoz_desarrollodb.data.Recurso>();

    public Integer getIdTipoRecurso() {
        return idTipoRecurso;
    }

    public void setIdTipoRecurso(Integer idTipoRecurso) {
        this.idTipoRecurso = idTipoRecurso;
    }

    public String getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(String tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public Set<com.aprendoz_desarrollodb.data.Recurso> getRecursos() {
        return recursos;
    }

    public void setRecursos(Set<com.aprendoz_desarrollodb.data.Recurso> recursos) {
        this.recursos = recursos;
    }

}
