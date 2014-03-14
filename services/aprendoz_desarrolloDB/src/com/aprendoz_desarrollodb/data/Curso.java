
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Curso
 *  03/14/2014 11:48:13
 * 
 */
public class Curso {

    private Integer idCurso;
    private Grado grado;
    private String curso;
    private Set<com.aprendoz_desarrollodb.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollodb.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollodb.data.Horario> horarios = new HashSet<com.aprendoz_desarrollodb.data.Horario>();
    private Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_desarrollodb.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_desarrollodb.data.Coordinadores>();
    private Set<com.aprendoz_desarrollodb.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollodb.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollodb.data.Sesion> sesions = new HashSet<com.aprendoz_desarrollodb.data.Sesion>();
    private Set<com.aprendoz_desarrollodb.data.Matricula> matriculas = new HashSet<com.aprendoz_desarrollodb.data.Matricula>();
    private Set<com.aprendoz_desarrollodb.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_desarrollodb.data.Coordinacion>();
    private Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso>();

    public Integer getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Integer idCurso) {
        this.idCurso = idCurso;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Set<com.aprendoz_desarrollodb.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollodb.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollodb.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_desarrollodb.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_desarrollodb.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_desarrollodb.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollodb.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollodb.data.Sesion> getSesions() {
        return sesions;
    }

    public void setSesions(Set<com.aprendoz_desarrollodb.data.Sesion> sesions) {
        this.sesions = sesions;
    }

    public Set<com.aprendoz_desarrollodb.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_desarrollodb.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_desarrollodb.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_desarrollodb.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

    public Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

}
