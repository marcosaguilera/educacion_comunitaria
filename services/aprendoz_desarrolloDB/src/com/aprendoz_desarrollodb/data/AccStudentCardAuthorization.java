
package com.aprendoz_desarrollodb.data;



/**
 *  aprendoz_desarrolloDB.AccStudentCardAuthorization
 *  02/19/2014 10:16:55
 * 
 */
public class AccStudentCardAuthorization {

    private AccStudentCardAuthorizationId id;
    private AccStudentCard accStudentCard;
    private AccAuthorization accAuthorization;

    public AccStudentCardAuthorizationId getId() {
        return id;
    }

    public void setId(AccStudentCardAuthorizationId id) {
        this.id = id;
    }

    public AccStudentCard getAccStudentCard() {
        return accStudentCard;
    }

    public void setAccStudentCard(AccStudentCard accStudentCard) {
        this.accStudentCard = accStudentCard;
    }

    public AccAuthorization getAccAuthorization() {
        return accAuthorization;
    }

    public void setAccAuthorization(AccAuthorization accAuthorization) {
        this.accAuthorization = accAuthorization;
    }

}
