
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.ActualizacionDatosPersona
 *  08/20/2014 07:29:45
 * 
 */
public class ActualizacionDatosPersona {

    private Integer idActualizacionDatosPersona;
    private Date fechaCreacion;
    private Date fecha;
    private Byte actualizado;
    private Persona persona;

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
