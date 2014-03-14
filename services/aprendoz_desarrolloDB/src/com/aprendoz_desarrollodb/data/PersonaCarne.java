
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.PersonaCarne
 *  02/19/2014 10:16:54
 * 
 */
public class PersonaCarne {

    private Integer idPersonaCarne;
    private Date fecha;
    private Integer numerocopias;
    private Persona persona;

    public Integer getIdPersonaCarne() {
        return idPersonaCarne;
    }

    public void setIdPersonaCarne(Integer idPersonaCarne) {
        this.idPersonaCarne = idPersonaCarne;
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

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
