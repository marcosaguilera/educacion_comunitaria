
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.InscCoordinadoresCurso
 *  08/20/2014 07:29:45
 * 
 */
public class InscCoordinadoresCurso {

    private Integer idInscCoordinadoresCurso;
    private String grupo;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public Integer getIdInscCoordinadoresCurso() {
        return idInscCoordinadoresCurso;
    }

    public void setIdInscCoordinadoresCurso(Integer idInscCoordinadoresCurso) {
        this.idInscCoordinadoresCurso = idInscCoordinadoresCurso;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
