
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.Recurso
 *  08/20/2014 07:29:45
 * 
 */
public class Recurso {

    private Integer idRecurso;
    private String recurso;
    private String ubicacion;
    private String fileName;
    private Subtopico subtopico;
    private TipoRecurso tipoRecurso;

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

    public TipoRecurso getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(TipoRecurso tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

}
