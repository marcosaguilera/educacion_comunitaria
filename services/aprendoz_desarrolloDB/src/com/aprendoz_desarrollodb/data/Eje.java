
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.Eje
 *  03/18/2014 08:50:37
 * 
 */
public class Eje {

    private Integer idEje;
    private String ejeTematico;
    private String axis;
    private Boolean activo;
    private Subarea subarea;

    public Integer getIdEje() {
        return idEje;
    }

    public void setIdEje(Integer idEje) {
        this.idEje = idEje;
    }

    public String getEjeTematico() {
        return ejeTematico;
    }

    public void setEjeTematico(String ejeTematico) {
        this.ejeTematico = ejeTematico;
    }

    public String getAxis() {
        return axis;
    }

    public void setAxis(String axis) {
        this.axis = axis;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public Subarea getSubarea() {
        return subarea;
    }

    public void setSubarea(Subarea subarea) {
        this.subarea = subarea;
    }

}
