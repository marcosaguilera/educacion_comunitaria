
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.PersonaCarne
 *  03/14/2014 11:48:13
 * 
 */
public class PersonaCarne {

    private Integer idPersonaCarne;
    private Persona persona;
    private Date fecha;
    private Integer numerocopias;

    public Integer getIdPersonaCarne() {
        return idPersonaCarne;
    }

    public void setIdPersonaCarne(Integer idPersonaCarne) {
        this.idPersonaCarne = idPersonaCarne;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getNumerocopias() {
        return numerocopias;
    }

    public void setNumerocopias(Integer numerocopias) {
        this.numerocopias = numerocopias;
    }

}
