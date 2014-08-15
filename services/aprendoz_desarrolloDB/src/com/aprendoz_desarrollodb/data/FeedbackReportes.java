
package com.aprendoz_desarrollodb.data;

import java.util.Date;


/**
 *  aprendoz_desarrolloDB.FeedbackReportes
 *  08/15/2014 08:00:46
 * 
 */
public class FeedbackReportes {

    private Integer idfeedbackReportes;
    private Date fechaCreacion;
    private Date fechaActualizacion;
    private String usuario;
    private String titulo;
    private String comentario;
    private String tipoFeedback;

    public Integer getIdfeedbackReportes() {
        return idfeedbackReportes;
    }

    public void setIdfeedbackReportes(Integer idfeedbackReportes) {
        this.idfeedbackReportes = idfeedbackReportes;
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

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getTipoFeedback() {
        return tipoFeedback;
    }

    public void setTipoFeedback(String tipoFeedback) {
        this.tipoFeedback = tipoFeedback;
    }

}
