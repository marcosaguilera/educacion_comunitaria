
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.ActualizacionGrupoFamiliarCopy
 *  08/20/2014 07:29:45
 * 
 */
public class ActualizacionGrupoFamiliarCopy {

    private Integer idActualizacionGrupoFamiliar;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;
    private GrupoFamiliar grupoFamiliar;

    public Integer getIdActualizacionGrupoFamiliar() {
        return idActualizacionGrupoFamiliar;
    }

    public void setIdActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

}
