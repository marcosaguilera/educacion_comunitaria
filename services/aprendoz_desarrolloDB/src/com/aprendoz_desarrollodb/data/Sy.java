
package com.aprendoz_desarrollodb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Sy
 *  08/15/2014 08:00:46
 * 
 */
public class Sy {

    private Integer idSy;
    private String schoolYear;
    private Date fechaDesde;
    private Date fechaHasta;
    private Set<com.aprendoz_desarrollodb.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_desarrollodb.data.InscAlumCosto>();
    private Set<com.aprendoz_desarrollodb.data.Promocion> promocions = new HashSet<com.aprendoz_desarrollodb.data.Promocion>();
    private Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso>();
    private Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_desarrollodb.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollodb.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollodb.data.BimestreSy> bimestreSies = new HashSet<com.aprendoz_desarrollodb.data.BimestreSy>();
    private Set<com.aprendoz_desarrollodb.data.Cronograma> cronogramas = new HashSet<com.aprendoz_desarrollodb.data.Cronograma>();
    private Set<com.aprendoz_desarrollodb.data.Semana> semanas = new HashSet<com.aprendoz_desarrollodb.data.Semana>();
    private Set<com.aprendoz_desarrollodb.data.InscComentariosAlumnos> inscComentariosAlumnoses = new HashSet<com.aprendoz_desarrollodb.data.InscComentariosAlumnos>();
    private Set<com.aprendoz_desarrollodb.data.Horario> horarios = new HashSet<com.aprendoz_desarrollodb.data.Horario>();
    private Set<com.aprendoz_desarrollodb.data.AsignaturaCopy> asignaturaCopies = new HashSet<com.aprendoz_desarrollodb.data.AsignaturaCopy>();
    private Set<com.aprendoz_desarrollodb.data.Periodo> periodos = new HashSet<com.aprendoz_desarrollodb.data.Periodo>();
    private Set<com.aprendoz_desarrollodb.data.CostosAnualesCopy> costosAnualesCopies = new HashSet<com.aprendoz_desarrollodb.data.CostosAnualesCopy>();
    private Set<com.aprendoz_desarrollodb.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollodb.data.Asignatura>();
    private Set<com.aprendoz_desarrollodb.data.Educom> educoms = new HashSet<com.aprendoz_desarrollodb.data.Educom>();
    private Set<com.aprendoz_desarrollodb.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_desarrollodb.data.Coordinadores>();
    private Set<com.aprendoz_desarrollodb.data.Costos> costoses = new HashSet<com.aprendoz_desarrollodb.data.Costos>();
    private Set<com.aprendoz_desarrollodb.data.Matricula> matriculas = new HashSet<com.aprendoz_desarrollodb.data.Matricula>();
    private Set<com.aprendoz_desarrollodb.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_desarrollodb.data.SesionNivel>();
    private Set<com.aprendoz_desarrollodb.data.SecretariaEquivalenciaNotas> secretariaEquivalenciaNotases = new HashSet<com.aprendoz_desarrollodb.data.SecretariaEquivalenciaNotas>();
    private Set<com.aprendoz_desarrollodb.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_desarrollodb.data.Coordinacion>();
    private Set<com.aprendoz_desarrollodb.data.CostosAnuales> costosAnualeses = new HashSet<com.aprendoz_desarrollodb.data.CostosAnuales>();
    private Set<com.aprendoz_desarrollodb.data.PromocionCopy> promocionCopies = new HashSet<com.aprendoz_desarrollodb.data.PromocionCopy>();

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Date getFechaDesde() {
        return fechaDesde;
    }

    public void setFechaDesde(Date fechaDesde) {
        this.fechaDesde = fechaDesde;
    }

    public Date getFechaHasta() {
        return fechaHasta;
    }

    public void setFechaHasta(Date fechaHasta) {
        this.fechaHasta = fechaHasta;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_desarrollodb.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_desarrollodb.data.Promocion> getPromocions() {
        return promocions;
    }

    public void setPromocions(Set<com.aprendoz_desarrollodb.data.Promocion> promocions) {
        this.promocions = promocions;
    }

    public Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_desarrollodb.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

    public Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_desarrollodb.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_desarrollodb.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollodb.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollodb.data.BimestreSy> getBimestreSies() {
        return bimestreSies;
    }

    public void setBimestreSies(Set<com.aprendoz_desarrollodb.data.BimestreSy> bimestreSies) {
        this.bimestreSies = bimestreSies;
    }

    public Set<com.aprendoz_desarrollodb.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_desarrollodb.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

    public Set<com.aprendoz_desarrollodb.data.Semana> getSemanas() {
        return semanas;
    }

    public void setSemanas(Set<com.aprendoz_desarrollodb.data.Semana> semanas) {
        this.semanas = semanas;
    }

    public Set<com.aprendoz_desarrollodb.data.InscComentariosAlumnos> getInscComentariosAlumnoses() {
        return inscComentariosAlumnoses;
    }

    public void setInscComentariosAlumnoses(Set<com.aprendoz_desarrollodb.data.InscComentariosAlumnos> inscComentariosAlumnoses) {
        this.inscComentariosAlumnoses = inscComentariosAlumnoses;
    }

    public Set<com.aprendoz_desarrollodb.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_desarrollodb.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_desarrollodb.data.AsignaturaCopy> getAsignaturaCopies() {
        return asignaturaCopies;
    }

    public void setAsignaturaCopies(Set<com.aprendoz_desarrollodb.data.AsignaturaCopy> asignaturaCopies) {
        this.asignaturaCopies = asignaturaCopies;
    }

    public Set<com.aprendoz_desarrollodb.data.Periodo> getPeriodos() {
        return periodos;
    }

    public void setPeriodos(Set<com.aprendoz_desarrollodb.data.Periodo> periodos) {
        this.periodos = periodos;
    }

    public Set<com.aprendoz_desarrollodb.data.CostosAnualesCopy> getCostosAnualesCopies() {
        return costosAnualesCopies;
    }

    public void setCostosAnualesCopies(Set<com.aprendoz_desarrollodb.data.CostosAnualesCopy> costosAnualesCopies) {
        this.costosAnualesCopies = costosAnualesCopies;
    }

    public Set<com.aprendoz_desarrollodb.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollodb.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollodb.data.Educom> getEducoms() {
        return educoms;
    }

    public void setEducoms(Set<com.aprendoz_desarrollodb.data.Educom> educoms) {
        this.educoms = educoms;
    }

    public Set<com.aprendoz_desarrollodb.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_desarrollodb.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_desarrollodb.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_desarrollodb.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_desarrollodb.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_desarrollodb.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_desarrollodb.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_desarrollodb.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_desarrollodb.data.SecretariaEquivalenciaNotas> getSecretariaEquivalenciaNotases() {
        return secretariaEquivalenciaNotases;
    }

    public void setSecretariaEquivalenciaNotases(Set<com.aprendoz_desarrollodb.data.SecretariaEquivalenciaNotas> secretariaEquivalenciaNotases) {
        this.secretariaEquivalenciaNotases = secretariaEquivalenciaNotases;
    }

    public Set<com.aprendoz_desarrollodb.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_desarrollodb.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

    public Set<com.aprendoz_desarrollodb.data.CostosAnuales> getCostosAnualeses() {
        return costosAnualeses;
    }

    public void setCostosAnualeses(Set<com.aprendoz_desarrollodb.data.CostosAnuales> costosAnualeses) {
        this.costosAnualeses = costosAnualeses;
    }

    public Set<com.aprendoz_desarrollodb.data.PromocionCopy> getPromocionCopies() {
        return promocionCopies;
    }

    public void setPromocionCopies(Set<com.aprendoz_desarrollodb.data.PromocionCopy> promocionCopies) {
        this.promocionCopies = promocionCopies;
    }

}
