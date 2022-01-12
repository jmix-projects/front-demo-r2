package io.jmix.frontdemo.entity.datatypes;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.UUID;

@Table(name = "DEEPLY_NESTED_TEST_ENTITY")
@JmixEntity
@Entity(name = "DeeplyNestedTestEntity")
public class DeeplyNestedTestEntity {
    @JmixGeneratedValue
    @Id
    @Column(name = "ID", nullable = false)
    private UUID id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @Size(message = "{msg://io.jmix.frontdemo.entity.datatypes/DeeplyNestedTestEntity.name.validation.Size}", min = 3, max = 10)
    @InstanceName
    @Column(name = "NAME")
    protected String name;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ASSOCIATION_O2_OATTR_ID")
    protected AssociationO2OTestEntity associationO2Oattr;

    public AssociationO2OTestEntity getAssociationO2Oattr() {
        return associationO2Oattr;
    }

    public void setAssociationO2Oattr(AssociationO2OTestEntity associationO2Oattr) {
        this.associationO2Oattr = associationO2Oattr;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
