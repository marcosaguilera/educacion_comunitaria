
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.TipoSemana
 *  03/14/2014 11:48:13
 * 
 */
public class TipoSemana {

    private Integer idTipoSemana;
    private String tipoSemana;
    private String descripcion;
    private Set<com.aprendoz_desarrollodb.data.Horario> horarios = new HashSet<com.aprendoz_desarrollodb.data.Horario>();
    private Set<com.aprendoz_desarrollodb.data.Semana> semanas = new HashSet<com.aprendoz_desarrollodb.data.Semana>();

    public Integer getIdTipoSemana() {
        return idTipoSemana;
    }

    public void setIdTipoSemana(Integer idTipoSemana) {
        this.idTipoSemana = idTipoSemana;
    }

    public String getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(String tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollodb.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_desarrollodb.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_desarrollodb.data.Semana> getSemanas() {
        return semanas;
    }

    public void setSemanas(Set<com.aprendoz_desarrollodb.data.Semana> semanas) {
        this.semanas = semanas;
    }

}
