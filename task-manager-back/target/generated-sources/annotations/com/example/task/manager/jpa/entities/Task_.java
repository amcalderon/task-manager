package com.example.task.manager.jpa.entities;

import com.example.task.manager.jpa.entities.User;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2019-01-31T11:12:21")
@StaticMetamodel(Task.class)
public class Task_ { 

    public static volatile SingularAttribute<Task, Date> createdDate;
    public static volatile SingularAttribute<Task, String> name;
    public static volatile SingularAttribute<Task, String> description;
    public static volatile SingularAttribute<Task, Long> id;
    public static volatile SingularAttribute<Task, String> state;
    public static volatile SingularAttribute<Task, User> responsableId;

}