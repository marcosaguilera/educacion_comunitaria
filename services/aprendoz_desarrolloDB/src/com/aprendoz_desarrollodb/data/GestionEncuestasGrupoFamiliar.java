
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.GestionEncuestasGrupoFamiliar
 *  08/20/2014 07:29:45
 * 
 */
public class GestionEncuestasGrupoFamiliar {

    private Integer idGestionEncuestaGrupoFamiliar;
    private Byte encuestaTerminada;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private GrupoFamiliar grupoFamiliar;

    public Integer getIdGestionEncuestaGrupoFamiliar() {
        return idGestionEncuestaGrupoFamiliar;
    }

    public void setIdGestionEncuestaGrupoFamiliar(Integer idGestionEncuestaGrupoFamiliar) {
        this.idGestionEncuestaGrupoFamiliar = idGestionEncuestaGrupoFamiliar;
    }

    public Byte getEncuestaTerminada() {
        return encuestaTerminada;
    }

    public void setEncuestaTerminada(Byte encuestaTerminada) {
        this.encuestaTerminada = encuestaTerminada;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
