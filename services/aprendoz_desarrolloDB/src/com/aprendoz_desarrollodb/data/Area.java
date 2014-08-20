
package com.aprendoz_desarrollodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrolloDB.Area
 *  08/20/2014 07:29:45
 * 
 */
public class Area {

    private Integer idArea;
    private String area;
    private String areaName;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_desarrollodb.data.Subarea> subareas = new HashSet<com.aprendoz_desarrollodb.data.Subarea>();

    public Integer getIdArea() {
        return idArea;
    }

    public void setIdArea(Integer idArea) {
        this.idArea = idArea;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_desarrollodb.data.Subarea> getSubareas() {
        return subareas;
    }

    public void setSubareas(Set<com.aprendoz_desarrollodb.data.Subarea> subareas) {
        this.subareas = subareas;
    }

}
