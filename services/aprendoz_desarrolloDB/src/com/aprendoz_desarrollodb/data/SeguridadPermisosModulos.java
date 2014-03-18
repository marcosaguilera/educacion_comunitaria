
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.SeguridadPermisosModulos
 *  03/18/2014 08:50:37
 * 
 */
public class SeguridadPermisosModulos {

    private Integer idGlobalPermisosModulos;
    private String nombreModulo;
    private Boolean activo;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public Integer getIdGlobalPermisosModulos() {
        return idGlobalPermisosModulos;
    }

    public void setIdGlobalPermisosModulos(Integer idGlobalPermisosModulos) {
        this.idGlobalPermisosModulos = idGlobalPermisosModulos;
    }

    public String getNombreModulo() {
        return nombreModulo;
    }

    public void setNombreModulo(String nombreModulo) {
        this.nombreModulo = nombreModulo;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
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

}
