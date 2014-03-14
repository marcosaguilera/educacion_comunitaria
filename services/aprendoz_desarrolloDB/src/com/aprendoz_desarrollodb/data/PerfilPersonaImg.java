
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.PerfilPersonaImg
 *  03/14/2014 11:48:13
 * 
 */
public class PerfilPersonaImg {

    private Integer idPersonaImg;
    private Persona persona;
    private String imgName;
    private Date fechaCreacion;
    private Date fechaActualizacion;

    public Integer getIdPersonaImg() {
        return idPersonaImg;
    }

    public void setIdPersonaImg(Integer idPersonaImg) {
        this.idPersonaImg = idPersonaImg;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getImgName() {
        return imgName;
    }

    public void setImgName(String imgName) {
        this.imgName = imgName;
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
