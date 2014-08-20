
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.Logeventosaprendoz
 *  08/20/2014 07:29:45
 * 
 */
public class Logeventosaprendoz {

    private Integer idLogEventos;
    private Date hora;
    private Date fecha;
    private String accion;
    private String tabla;
    private Persona persona;

    public Integer getIdLogEventos() {
        return idLogEventos;
    }

    public void setIdLogEventos(Integer idLogEventos) {
        this.idLogEventos = idLogEventos;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getAccion() {
        return accion;
    }

    public void setAccion(String accion) {
        this.accion = accion;
    }

    public String getTabla() {
        return tabla;
    }

    public void setTabla(String tabla) {
        this.tabla = tabla;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
