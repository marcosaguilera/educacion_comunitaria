
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Grado
 *  03/18/2014 08:50:37
 * 
 */
public class Grado {

    private Integer idGrado;
    private String grado;
    private String grade;
    private String gradoSapiens;
    private Nivel nivel;
    private Set<com.aprendoz_desarrollodb.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollodb.data.Asignatura>();
    private Set<com.aprendoz_desarrollodb.data.Costos> costoses = new HashSet<com.aprendoz_desarrollodb.data.Costos>();
    private Set<com.aprendoz_desarrollodb.data.AccAuthorization> accAuthorizations = new HashSet<com.aprendoz_desarrollodb.data.AccAuthorization>();
    private Set<com.aprendoz_desarrollodb.data.Curso> cursos = new HashSet<com.aprendoz_desarrollodb.data.Curso>();

    public Integer getIdGrado() {
        return idGrado;
    }

    public void setIdGrado(Integer idGrado) {
        this.idGrado = idGrado;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getGradoSapiens() {
        return gradoSapiens;
    }

    public void setGradoSapiens(String gradoSapiens) {
        this.gradoSapiens = gradoSapiens;
    }

    public Nivel getNivel() {
        return nivel;
    }

    public void setNivel(Nivel nivel) {
        this.nivel = nivel;
    }

    public Set<com.aprendoz_desarrollodb.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollodb.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollodb.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_desarrollodb.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_desarrollodb.data.AccAuthorization> getAccAuthorizations() {
        return accAuthorizations;
    }

    public void setAccAuthorizations(Set<com.aprendoz_desarrollodb.data.AccAuthorization> accAuthorizations) {
        this.accAuthorizations = accAuthorizations;
    }

    public Set<com.aprendoz_desarrollodb.data.Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Set<com.aprendoz_desarrollodb.data.Curso> cursos) {
        this.cursos = cursos;
    }

}
