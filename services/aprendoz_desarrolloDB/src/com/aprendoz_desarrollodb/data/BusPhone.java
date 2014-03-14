
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.BusPhone
 *  02/19/2014 10:16:55
 * 
 */
public class BusPhone {

    private Integer id;
    private String phone;
    private BusDriver busDriver;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public BusDriver getBusDriver() {
        return busDriver;
    }

    public void setBusDriver(BusDriver busDriver) {
        this.busDriver = busDriver;
    }

}
