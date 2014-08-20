
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.SeguridadPersonasAccesos
 *  08/20/2014 07:29:45
 * 
 */
public class SeguridadPersonasAccesos {

    private Integer idSeguridadPersonasAccesos;
    private Byte accesoTemp;
    private Date createdDate;
    private Date updatedDate;
    private String asignadoPor;
    private Persona persona;

    public Integer getIdSeguridadPersonasAccesos() {
        return idSeguridadPersonasAccesos;
    }

    public void setIdSeguridadPersonasAccesos(Integer idSeguridadPersonasAccesos) {
        this.idSeguridadPersonasAccesos = idSeguridadPersonasAccesos;
    }

    public Byte getAccesoTemp() {
        return accesoTemp;
    }

    public void setAccesoTemp(Byte accesoTemp) {
        this.accesoTemp = accesoTemp;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getAsignadoPor() {
        return asignadoPor;
    }

    public void setAsignadoPor(String asignadoPor) {
        this.asignadoPor = asignadoPor;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
