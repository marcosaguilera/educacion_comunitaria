
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoDia
 *  03/18/2014 08:50:37
 * 
 */
public class TipoDia {

    private Integer idTipoDia;
    private String tipoDia;
    private String descripcion;
    private Set<com.aprendoz_desarrollodb.data.Cronograma> cronogramas = new HashSet<com.aprendoz_desarrollodb.data.Cronograma>();

    public Integer getIdTipoDia() {
        return idTipoDia;
    }

    public void setIdTipoDia(Integer idTipoDia) {
        this.idTipoDia = idTipoDia;
    }

    public String getTipoDia() {
        return tipoDia;
    }

    public void setTipoDia(String tipoDia) {
        this.tipoDia = tipoDia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollodb.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_desarrollodb.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

}
