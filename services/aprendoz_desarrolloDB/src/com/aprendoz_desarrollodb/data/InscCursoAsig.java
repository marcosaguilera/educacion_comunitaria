
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.InscCursoAsig
 *  03/14/2014 11:48:13
 * 
 */
public class InscCursoAsig {

    private Long idInscCursoAsig;
    private Curso curso;
    private Asignatura asignatura;
    private Persona persona;
    private Periodo periodo;

    public Long getIdInscCursoAsig() {
        return idInscCursoAsig;
    }

    public void setIdInscCursoAsig(Long idInscCursoAsig) {
        this.idInscCursoAsig = idInscCursoAsig;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

}
